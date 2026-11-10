// Generate the site's original, voice-free ambient loop without external assets.
import { mkdir, writeFile } from "node:fs/promises";

const sampleRate = 16000;
const duration = 64;
const sampleCount = sampleRate * duration;
const samples = new Float32Array(sampleCount);
const tau = Math.PI * 2;
const chords = [
  [130.81, 164.81, 196.0, 246.94, 293.66], // Cmaj9
  [87.31, 110.0, 130.81, 164.81, 196.0], // Fmaj9
  [98.0, 123.47, 146.83, 185.0, 220.0], // Gmaj9
  [130.81, 164.81, 196.0, 246.94, 293.66], // Cmaj9
];
const noteLevels = [0.29, 0.21, 0.19, 0.15, 0.12];
const loopFrequency = (frequency) => Math.round(frequency * duration) / duration;
const smoothstep = (start, end, time) => {
  const x = Math.max(0, Math.min(1, (time - start) / (end - start)));
  return x * x * (3 - 2 * x);
};
const fastLevelAt = (time) => smoothstep(17.5, 21.5, time) * (1 - smoothstep(45, 49.5, time));
const accompanimentAt = (time) => smoothstep(20, 23, time) * (1 - smoothstep(43, 47, time));

function chordWeight(time, index) {
  const center = 8 + index * 16;
  const distance = Math.abs(((time - center + duration * 1.5) % duration) - duration / 2);
  if (distance <= 6) return 1;
  if (distance >= 10) return 0;
  return (1 + Math.cos(Math.PI * (distance - 6) / 4)) / 2;
}

for (let i = 0; i < sampleCount; i++) {
  const time = i / sampleRate;
  const slowBreath = 0.94 + 0.06 * Math.sin(tau * time * 3 / duration);
  let value = 0;
  for (let chord = 0; chord < chords.length; chord++) {
    const weight = chordWeight(time, chord);
    if (weight < 0.0001) continue;
    let pad = 0;
    for (let note = 0; note < chords[chord].length; note++) {
      const frequency = loopFrequency(chords[chord][note]);
      const phase = tau * frequency * time;
      const drift = tau * time * (note + 2) / duration;
      const tone = Math.sin(phase + 0.07 * Math.sin(drift))
        + 0.17 * Math.sin(2 * phase + 0.4)
        + 0.045 * Math.sin(3 * phase + 1.1);
      pad += noteLevels[note] * tone;
    }
    value += weight * pad;
  }
  samples[i] = value * slowBreath * (0.37 - 0.075 * fastLevelAt(time));
}

// A rounded, lightly detuned piano tone with a fast hammer attack.
function addPiano(start, frequency, level, decay) {
  const startSample = Math.round(start * sampleRate);
  const noteSamples = Math.round(Math.min(3.3, decay * 4.8) * sampleRate);
  for (let offset = 0; offset < noteSamples; offset++) {
    const time = offset / sampleRate;
    const attack = 1 - Math.exp(-time / 0.006);
    const fundamental = Math.sin(tau * frequency * time)
      + 0.15 * Math.sin(tau * frequency * 1.0018 * time);
    const second = 0.38 * Math.exp(-time / (decay * 0.75)) * Math.sin(tau * frequency * 2.002 * time + 0.15);
    const third = 0.18 * Math.exp(-time / (decay * 0.48)) * Math.sin(tau * frequency * 3.006 * time + 0.35);
    const fourth = 0.075 * Math.exp(-time / (decay * 0.34)) * Math.sin(tau * frequency * 4.012 * time + 0.7);
    const envelope = attack * Math.exp(-time / decay);
    samples[(startSample + offset) % sampleCount] += level * envelope * (fundamental + second + third + fourth);
  }
}

// Keep the calm phrases clear of the fast passage, including the piano tails.
const slowMelody = [4, 2, 3, 1, 4];
const slowStarts = [0.8, 4, 7.2, 10.4, 13.6, 51.6, 54.8, 58, 61.2];
for (let event = 0; event < slowStarts.length; event++) {
  const start = slowStarts[event];
  const chord = Math.floor(start / 16);
  const phraseNote = event < 5 ? event : event - 5;
  addPiano(start, chords[chord][slowMelody[phraseNote]] * 2, 0.105, 1.25);
}

// A cheerful 160 BPM piano phrase: the left hand keeps time while the right
// hand fills in eighth notes as the pace builds. The accompaniment enters
// later and leaves earlier than the melody, avoiding a pile-up at the joins.
const beatDuration = 60 / 160;
const fastMelody = [2, 4, 3, 4, 2, -1, 1, 3, 4, 3, 2, 1, 2, 4, 3, -1];
for (let step = 0; ; step++) {
  const start = 18 + step * beatDuration / 2;
  if (start >= 49.5) break;
  const activity = fastLevelAt(start);
  const subdivisions = smoothstep(18, 22, start) * (1 - smoothstep(45, 49, start));
  if (step % 2 === 1 && subdivisions < (step % 4 === 1 ? 0.35 : 0.7)) continue;
  const note = fastMelody[step % fastMelody.length];
  if (activity < 0.005 || note < 0) continue;
  const chord = Math.min(3, Math.floor(start / 16));
  const accent = step % 4 === 0 ? 1.24 : 1;
  addPiano(start, chords[chord][note] * 2, 0.105 * accent * activity, 0.29);
}

for (let beat = 0; ; beat++) {
  const start = 18 + beat * beatDuration;
  if (start >= 49.5) break;
  const activity = accompanimentAt(start);
  if (activity < 0.005) continue;
  const chord = Math.min(3, Math.floor(start / 16));
  if (beat % 2 === 0) {
    const bass = beat % 4 === 0 ? chords[chord][0] / 2 : chords[chord][2] / 2;
    addPiano(start, bass, 0.16 * activity, 0.55);
  } else {
    for (const note of [1, 2, 3]) {
      addPiano(start, chords[chord][note] * 2, 0.058 * activity, 0.3);
    }
  }
}

const pcmBytes = sampleCount * 2;
const wav = Buffer.alloc(44 + pcmBytes);
wav.write("RIFF", 0);
wav.writeUInt32LE(36 + pcmBytes, 4);
wav.write("WAVEfmt ", 8);
wav.writeUInt32LE(16, 16);
wav.writeUInt16LE(1, 20); // PCM
wav.writeUInt16LE(1, 22); // mono
wav.writeUInt32LE(sampleRate, 24);
wav.writeUInt32LE(sampleRate * 2, 28);
wav.writeUInt16LE(2, 32);
wav.writeUInt16LE(16, 34);
wav.write("data", 36);
wav.writeUInt32LE(pcmBytes, 40);
for (let i = 0; i < sampleCount; i++) {
  wav.writeInt16LE(Math.round(Math.max(-1, Math.min(1, samples[i])) * 32767), 44 + i * 2);
}

await mkdir(new URL("../public/audio/", import.meta.url), { recursive: true });
await writeFile(new URL("../public/audio/ambient-loop.wav", import.meta.url), wav);
