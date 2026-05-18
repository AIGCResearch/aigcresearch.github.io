document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initNav();
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 700, once: true, offset: 80 });
  }
});

function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

function initParticles() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const scene    = new THREE.Scene();
  const camera   = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(innerWidth, innerHeight);

  camera.position.z = 3;

  // Build particle geometry
  const COUNT = 1800;
  const positions = new Float32Array(COUNT * 3);
  const colors    = new Float32Array(COUNT * 3);

  const c1 = new THREE.Color('#00b4d8');
  const c2 = new THREE.Color('#0077b6');
  const c3 = new THREE.Color('#90e0ef');

  for (let i = 0; i < COUNT; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6;

    const mix = Math.random();
    const col = mix < 0.4 ? c1 : mix < 0.7 ? c2 : c3;
    colors[i * 3]     = col.r;
    colors[i * 3 + 1] = col.g;
    colors[i * 3 + 2] = col.b;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color',    new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.022,
    vertexColors: true,
    transparent: true,
    opacity: 0.75,
    sizeAttenuation: true,
  });

  const points = new THREE.Points(geo, mat);
  scene.add(points);

  // Mouse parallax
  let mouseX = 0, mouseY = 0;
  window.addEventListener('mousemove', e => {
    mouseX = (e.clientX / innerWidth  - 0.5) * 0.4;
    mouseY = (e.clientY / innerHeight - 0.5) * 0.4;
  });

  // Resize
  window.addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });

  // Animate
  let t = 0;
  (function animate() {
    requestAnimationFrame(animate);
    t += 0.0004;
    points.rotation.y = t + mouseX * 0.3;
    points.rotation.x = mouseY * 0.2;
    renderer.render(scene, camera);
  })();
}
