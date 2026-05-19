# AIGC Research Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page Astro homepage for the AIGC Research / AI4C team with a cinematic dark theme, zh↔en language toggle, particle hero background, scroll-reveal motion, and GitHub Pages deployment.

**Architecture:** Astro static site (SSG) with one route (`/`). All text is rendered twice (zh + en) inside the same HTML and toggled via `html[data-lang]` + CSS. Hero has a vanilla Canvas2D particle field (no Three.js). IntersectionObserver drives scroll-reveal. Content lives in two structurally-identical TS files (`content.zh.ts`, `content.en.ts`).

**Tech Stack:**
- Astro 4.x (static output)
- Vanilla TypeScript + CSS (no React/Vue/Tailwind)
- Canvas2D for particle field
- IntersectionObserver for scroll-reveal
- GitHub Actions + Pages for deploy
- Google Fonts: Noto Sans SC, Inter, Space Grotesk

**Reference spec:** `docs/superpowers/specs/2026-05-19-homepage-design.md`

---

## File Structure (target end state)

```
aigcresearch.github.io/
├── astro.config.mjs                       # Astro config, site/base
├── package.json
├── tsconfig.json
├── .gitignore
├── README.md
├── public/
│   ├── favicon.svg
│   └── background.png                     # already exists at repo root, move here
├── src/
│   ├── data/
│   │   ├── types.ts                       # shared Content schema
│   │   ├── content.zh.ts                  # Chinese copy
│   │   └── content.en.ts                  # English copy
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── LangToggle.astro
│   │   ├── Hero.astro
│   │   ├── ParticleField.astro
│   │   ├── Philosophy.astro
│   │   ├── Directions.astro
│   │   ├── Publications.astro
│   │   ├── PubCard.astro
│   │   ├── Team.astro
│   │   ├── MemberCard.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   └── BiText.astro                   # tiny helper: <span data-lang="zh"> / <span data-lang="en">
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       ├── tokens.css                     # CSS variables
│       ├── global.css                     # reset + base type
│       └── motion.css                     # reveal + reduced-motion
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## Pre-flight: Repo State

Current `git status` shows every file from the prior implementation marked as `D` (deleted in worktree, still in HEAD). We will:

1. Commit the wholesale deletion as a clean reset.
2. Move stray loose files (`background.png`, reference PNGs, `query`, `video_ac-3.pdf`, `.DS_Store`) out of git's view via `.gitignore` or relocation.
3. Build the new project from scratch.

---

## Task 1: Clean reset commit

**Files:**
- Delete (from index): every file currently marked `D` in `git status`

- [ ] **Step 1: Verify deletions are intentional**

Run:
```bash
git status --short | grep '^ D' | wc -l
```
Expected: `23` (all of the old Astro scaffold).

- [ ] **Step 2: Stage all deletions**

Run:
```bash
git add -u
git status --short | head -30
```
Expected: all 23 lines now `D` (staged, not ` D`).

- [ ] **Step 3: Commit the reset**

Run:
```bash
git commit -m "chore: reset homepage scaffold for redesign

Removing prior Astro components and config in preparation for the
cinematic single-page rebuild specified in
docs/superpowers/specs/2026-05-19-homepage-design.md."
```

- [ ] **Step 4: Verify tree is clean of tracked files**

Run:
```bash
git ls-tree -r HEAD --name-only
```
Expected output (only specs/docs left tracked):
```
docs/homepage-content-plan.zh-CN.md   # may be untracked, see step 5
docs/superpowers/specs/2026-05-19-homepage-design.md
```

Actually only the spec is tracked; the content plan is untracked. Confirm with:
```bash
git ls-tree -r HEAD --name-only | grep -v '^docs/'
```
Expected: empty output.

---

## Task 2: Track the content plan & ignore loose assets

**Files:**
- Create: `.gitignore`
- Track: `docs/homepage-content-plan.zh-CN.md`

- [ ] **Step 1: Create `.gitignore`**

Write `.gitignore`:
```gitignore
# OS
.DS_Store

# Build
dist/
.astro/
node_modules/

# Local
*.log

# Loose reference assets dropped into repo root
/1779181721762_download.png
/1779185054034_download.png
/181206142.png
/download.png
/query
/video_ac-3.pdf
```

Note: `/background.png` is intentionally NOT ignored — we will move it into `public/` in Task 3.

- [ ] **Step 2: Stage gitignore and the content plan**

Run:
```bash
git add .gitignore docs/homepage-content-plan.zh-CN.md
git status --short
```
Expected:
```
A  .gitignore
A  docs/homepage-content-plan.zh-CN.md
?? background.png
?? .DS_Store      (now hidden, won't show — ?? for unignored only)
```
`.DS_Store` should disappear from `??` because of the new gitignore. Loose PNGs / `query` / `video_ac-3.pdf` should also disappear.

- [ ] **Step 3: Commit**

Run:
```bash
git commit -m "chore: track content plan, ignore loose reference assets

- track docs/homepage-content-plan.zh-CN.md (input for homepage copy)
- ignore .DS_Store, build outputs, and dropped reference PNGs/PDFs"
```

---

## Task 3: Initialize Astro project skeleton

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `public/favicon.svg`, `public/background.png`, `src/pages/index.astro` (placeholder)

- [ ] **Step 1: Move `background.png` into `public/`**

Run:
```bash
mkdir -p public
mv background.png public/background.png
```

- [ ] **Step 2: Create `package.json`**

Write `package.json`:
```json
{
  "name": "aigcresearch.github.io",
  "type": "module",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "astro": "^4.16.18"
  },
  "devDependencies": {
    "typescript": "^5.6.3"
  }
}
```

- [ ] **Step 3: Install dependencies**

Run:
```bash
npm install
```
Expected: `package-lock.json` created, `node_modules/` populated, no errors. `astro` binary available at `node_modules/.bin/astro`.

- [ ] **Step 4: Create `astro.config.mjs`**

Write `astro.config.mjs`:
```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aigcresearch.github.io',
  base: '/',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
});
```

- [ ] **Step 5: Create `tsconfig.json`**

Write `tsconfig.json`:
```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

- [ ] **Step 6: Create minimal `public/favicon.svg`**

Write `public/favicon.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#7FD7FF"/>
      <stop offset="100%" stop-color="#9B7BFF"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="#06090F"/>
  <text x="50%" y="55%" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-weight="700" font-size="26" fill="url(#g)" dominant-baseline="middle">AI4C</text>
</svg>
```

- [ ] **Step 7: Create placeholder `src/pages/index.astro`**

Write `src/pages/index.astro`:
```astro
---
---
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>AIGC Research</title>
  </head>
  <body>
    <h1>AIGC Research — under construction</h1>
  </body>
</html>
```

- [ ] **Step 8: Boot dev server to verify scaffold**

Run:
```bash
npm run dev
```
Expected: server listens on `http://localhost:4321`. Open it (or `curl -s http://localhost:4321/ | head`) and confirm the `<h1>` text appears. Kill the server.

- [ ] **Step 9: Build to verify static output**

Run:
```bash
npm run build
```
Expected: `dist/index.html` exists and contains the `<h1>`.

- [ ] **Step 10: Commit**

Run:
```bash
git add package.json package-lock.json astro.config.mjs tsconfig.json public/favicon.svg public/background.png src/pages/index.astro
git commit -m "feat: scaffold Astro static site with placeholder index"
```

---

## Task 4: Design tokens & base styles

**Files:**
- Create: `src/styles/tokens.css`, `src/styles/global.css`, `src/styles/motion.css`

- [ ] **Step 1: Create `src/styles/tokens.css`**

Write `src/styles/tokens.css`:
```css
:root {
  --bg-deep: #06090F;
  --bg-nebula-1: #0B1A2E;
  --bg-nebula-2: #142A4A;

  --surface: rgba(18, 32, 56, 0.55);
  --surface-strong: rgba(18, 32, 56, 0.78);
  --surface-border: rgba(120, 180, 255, 0.12);
  --surface-border-strong: rgba(120, 180, 255, 0.35);

  --accent-cyan: #7FD7FF;
  --accent-blue: #5C8DFF;
  --accent-violet: #9B7BFF;
  --accent-aurora: linear-gradient(135deg, #5C8DFF 0%, #9B7BFF 100%);
  --gold-faint: #F2C58A;

  --text-primary: #E8EEF7;
  --text-muted: rgba(232, 238, 247, 0.62);
  --text-dim:   rgba(232, 238, 247, 0.38);

  --radius-card: 16px;
  --radius-pill: 999px;

  --shadow-card: 0 12px 40px rgba(80, 140, 255, 0.08);
  --shadow-card-hover: 0 18px 60px rgba(80, 140, 255, 0.18);

  --container: min(1240px, 92vw);

  --pad-section-desktop: 120px;
  --pad-section-mobile: 64px;

  --font-zh: "Noto Sans SC", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
  --font-en: "Inter", "Sora", system-ui, -apple-system, sans-serif;
  --font-mono: "Space Grotesk", "JetBrains Mono", ui-monospace, monospace;

  --ease-out: cubic-bezier(0.22, 0.61, 0.36, 1);
}
```

- [ ] **Step 2: Create `src/styles/global.css`**

Write `src/styles/global.css`:
```css
@import "./tokens.css";

*, *::before, *::after { box-sizing: border-box; }

html, body {
  margin: 0;
  padding: 0;
  background: var(--bg-deep);
  color: var(--text-primary);
  font-family: var(--font-zh);
  font-size: 16px;
  line-height: 1.75;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

html[lang="en"] body { font-family: var(--font-en); line-height: 1.55; }

img, svg, canvas { display: block; max-width: 100%; }

a { color: inherit; text-decoration: none; transition: color 160ms var(--ease-out); }
a:hover { color: var(--accent-cyan); }

button { font: inherit; cursor: pointer; background: none; border: 0; color: inherit; }

h1, h2, h3, h4 { margin: 0; font-weight: 600; letter-spacing: -0.01em; }
h1 { font-size: clamp(36px, 5.2vw, 56px); line-height: 1.18; }
h2 { font-size: clamp(28px, 3.4vw, 36px); line-height: 1.25; }
h3 { font-size: 22px; line-height: 1.35; }

p { margin: 0; }

:focus-visible {
  outline: 2px solid var(--accent-cyan);
  outline-offset: 3px;
  border-radius: 6px;
}

/* Language toggle: hide the inactive language */
html[data-lang="zh"] [data-lang="en"] { display: none; }
html[data-lang="en"] [data-lang="zh"] { display: none; }

/* Layout primitives */
.container { width: var(--container); margin-inline: auto; }

section.section {
  padding-block: var(--pad-section-desktop);
  position: relative;
}
@media (max-width: 768px) {
  section.section { padding-block: var(--pad-section-mobile); }
}

.eyebrow {
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent-cyan);
}

.section-title {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}
.section-title::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-aurora);
  box-shadow: 0 0 12px rgba(155, 123, 255, 0.6);
}

.section-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(120, 180, 255, 0.2), transparent);
  border: 0;
  margin: 0;
}
```

- [ ] **Step 3: Create `src/styles/motion.css`**

Write `src/styles/motion.css`:
```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 600ms var(--ease-out), transform 600ms var(--ease-out);
  will-change: opacity, transform;
}
.reveal.in-view {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
  .reveal { opacity: 1; transform: none; }
}
```

- [ ] **Step 4: Commit**

Run:
```bash
git add src/styles/tokens.css src/styles/global.css src/styles/motion.css
git commit -m "feat: design tokens, base reset, and reveal motion stylesheet"
```

---

## Task 5: Content schema & data files

**Files:**
- Create: `src/data/types.ts`, `src/data/content.zh.ts`, `src/data/content.en.ts`

- [ ] **Step 1: Create `src/data/types.ts`**

Write `src/data/types.ts`:
```ts
export type Link = { label: string; href: string; disabled?: boolean };

export type Pillar = { icon: string; title: string; body: string };

export type Direction = {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  body: string;
  tags: string[];
};

export type Publication = {
  id: string;
  title: string;
  tagline: string;
  body: string;
  links: Link[];
  featured?: boolean;
};

export type SocialLink = { icon: string; label: string; href: string; disabled?: boolean };

export type Member = {
  name: string;
  monogram: string;
  role: string;
  affiliation: string;
  bio: string;
  avatar?: string;
  links: { homepage?: string; scholar?: string; github?: string; email?: string };
};

export type Content = {
  meta: { title: string; description: string };
  nav: {
    brand: string;
    brandSub: string;
    links: { id: string; label: string }[];
  };
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    intro: string;
    ctas: Link[];
  };
  philosophy: {
    eyebrow: string;
    title: string;
    intro: string;
    pillars: Pillar[];
  };
  directions: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Direction[];
  };
  publications: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Publication[];
  };
  team: {
    eyebrow: string;
    title: string;
    intro: string;
    members: Member[];
    advisorsLabel: string;
    advisors: Member[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    email: string;
    emailCtaLabel: string;
    wechatTitle: string;
    wechatNote: string;
    socials: SocialLink[];
  };
  footer: { copyright: string; tagline: string };
  langToggle: { zh: string; en: string };
};
```

- [ ] **Step 2: Create `src/data/content.zh.ts`**

Write `src/data/content.zh.ts`:
```ts
import type { Content } from "./types";

export const zh: Content = {
  meta: {
    title: "AIGC Research · AI4C 创意人工智能研究组",
    description:
      "我们致力于推动 AIGC 技术赋能艺术创作与内容生产，围绕通用创意智能与智能创意工作流开展持续研究。",
  },
  nav: {
    brand: "AIGC Research",
    brandSub: "AI4C",
    links: [
      { id: "philosophy", label: "理念" },
      { id: "directions", label: "方向" },
      { id: "publications", label: "成果" },
      { id: "team", label: "团队" },
      { id: "contact", label: "联系" },
    ],
  },
  hero: {
    eyebrow: "AI for Creativity Research Team",
    headline: "创意人工智能研究计划",
    subhead: "从 工作流 走向 创意流",
    intro:
      "我们致力于推动 AIGC 技术赋能艺术创作与内容生产，围绕“通用创意智能”与“智能创意工作流”开展持续研究，探索机器如何理解创作、参与创作，并服务未来影视级内容生产。",
    ctas: [
      { label: "了解研究方向", href: "#directions" },
      { label: "查看代表成果", href: "#publications" },
    ],
  },
  philosophy: {
    eyebrow: "Philosophy",
    title: "研究核心理念",
    intro:
      "秉持“以 AIGC 技术赋能艺术创作与内容生产，开启独立创作时代”的核心理念，本计划以影视级动画作为研究切入点。电影是视听艺术的综合载体，天然融合音乐、画面、色彩、叙事、动效与情感等多重创作要素，为人工智能理解“创作”提供了极具代表性的多模态样本。",
    pillars: [
      {
        icon: "film",
        title: "电影级标准",
        body:
          "我们关注的不只是生成质量本身，而是镜头语言、视听协同、叙事节奏、角色一致性与情感传达等真正决定作品完成度的关键维度。",
      },
      {
        icon: "compass",
        title: "设计思维",
        body:
          "让 AI 具备顶层创作设计能力，从被动的素材生成器进化为具备设计思维、能够参与创作决策的创意智能体。",
      },
      {
        icon: "workflow",
        title: "工作流落地",
        body:
          "真正进入 2D / 3D 动画的工业化生产流水线，让生成式系统从繁琐工作流走向更纯粹的创意流。",
      },
    ],
  },
  directions: {
    eyebrow: "Research Directions",
    title: "研究方向",
    intro:
      "我们的研究围绕两条主线协同推进：通用创意智能关注机器创造力的边界，智能创意工作流关注人类创造力的释放方式，二者并行构成从创意理解到创意生产的完整研究闭环。",
    items: [
      {
        id: "gci",
        title: "通用创意智能",
        subtitle: "General Creative Intelligence",
        tagline: "从“素材生成器”走向“具有设计思维的创意智能体”。",
        body:
          "我们关注 AI 如何获得在创作中进行顶层设计的能力。导演构思叙事作品时，本质上是在脑海中同时组织声音、画面、动作、节奏与故事逻辑，进行跨模态的整体想象。本方向重点研究多模态感知、跨模态语义对齐、设计元素建模、美学认知与创作推理，使模型能够理解声音、画面、叙事与情绪之间的复杂关系。",
        tags: [
          "多模态感知",
          "跨模态对齐",
          "创作推理",
          "美学认知",
          "设计思维智能体",
        ],
      },
      {
        id: "icw",
        title: "智能创意工作流",
        subtitle: "Intelligent Creative Workflow",
        tagline: "让工具适应创作，而不是让艺术家适应工具。",
        body:
          "我们关注如何将创意智能体真正引入内容生产流程，减少 2D / 3D 动画制作中视觉预览、冷启动建模、补间帧、多镜头衔接等耗时环节的重复劳动。覆盖从 1D 音频、2D 图像、3D 几何资产到 4D 视频的全数据形态，打破单一图文驱动范式，构建更贴近影视动画创作直觉的多模态交互机制。",
        tags: [
          "智能体落地",
          "2D/3D/4D 内容",
          "多模态交互",
          "影视动画工作流",
          "Workflow → Creative Flow",
        ],
      },
    ],
  },
  publications: {
    eyebrow: "Publications & Projects",
    title: "代表成果",
    intro:
      "每项成果都试图回答一个具体的问题，而不仅仅是一次实验。下面是我们目前最具代表性的方向锚点。",
    items: [
      {
        id: "vistorybench",
        title: "ViStoryBench",
        tagline: "面向视觉故事讲述的综合性基准测试。",
        body:
          "针对定制化视觉故事讲述这一电影生成的核心任务，构建系统性评测框架，衡量模型在角色一致性、风格稳定性、剧情对齐、构图质量与故事可视化方面的真实能力。",
        links: [
          { label: "Tech Report", href: "#", disabled: true },
          { label: "Code", href: "#", disabled: true },
          { label: "Dataset", href: "#", disabled: true },
          { label: "Project Page", href: "#", disabled: true },
        ],
      },
      {
        id: "styleme3d",
        title: "StyleMe3D",
        tagline: "3D 高斯下的解耦先验风格化。",
        body:
          "在 3D 高斯表示下探索可控、可交互、可扩展的风格化生成，通过多编码器与解耦先验实现稳定的风格控制，体现团队对 3D 作为创作媒介的长期判断。",
        links: [
          { label: "Tech Report", href: "#", disabled: true },
          { label: "Project Page", href: "#", disabled: true },
          { label: "Code", href: "#", disabled: true },
        ],
      },
      {
        id: "shotstudio",
        title: "ShotStudio",
        tagline: "面向完整影视创作流程的 AIGC 框架。",
        body:
          "将创意理解、镜头组织、素材生成与创作流程协同串联起来，是面向未来电影生成与影视创作系统的重要框架原型，也是不断演化的创意工作流实验场。",
        links: [
          { label: "Code", href: "#", disabled: true },
          { label: "Demo", href: "#", disabled: true },
          { label: "Docs", href: "#", disabled: true },
        ],
      },
      {
        id: "act2cut",
        title: "Act2Cut",
        tagline: "多镜头视频叙事的动作连续性建模。",
        body:
          "聚焦电影语言中“动作匹配剪辑”这一长期被忽视的关键问题，让生成式视频系统具备跨镜头动作连续性理解，强调叙事动作与电影语法之间的协同。",
        links: [
          { label: "Paper", href: "#", disabled: true },
          { label: "Project Page", href: "#", disabled: true },
          { label: "Code", href: "#", disabled: true },
        ],
      },
      {
        id: "awesome-paperdaily",
        title: "Awesome-PaperDaily",
        tagline: "持续追踪 AIGC 前沿进展的开源知识整理项目。",
        body:
          "体现团队在知识组织、趋势追踪与社区共享方面的持续投入，不仅服务于内部研究，也希望与更广泛社区共同推动 AIGC 发展。",
        links: [{ label: "Code", href: "#", disabled: true }],
        featured: true,
      },
    ],
  },
  team: {
    eyebrow: "Team",
    title: "团队成员",
    intro:
      "AIGC Research 由一支关注创意人工智能、生成式模型与跨学科基础研究的小型团队组成，并与工业界、学术界导师保持持续合作，共同推进从基础问题到创作系统落地的全链路研究。",
    members: [
      {
        name: "庄才林",
        monogram: "Z",
        role: "团队成员",
        affiliation: "上海科技大学硕士",
        bio: "研究方向为 AIGC，关注创意人工智能与影视级内容生成。",
        links: {},
      },
      {
        name: "胡耀淇",
        monogram: "H",
        role: "团队成员",
        affiliation: "—",
        bio: "简介待补充。",
        links: {},
      },
      {
        name: "董政",
        monogram: "D",
        role: "团队成员",
        affiliation: "—",
        bio: "简介待补充。",
        links: {},
      },
    ],
    advisorsLabel: "合作导师",
    advisors: [
      {
        name: "程巍",
        monogram: "C",
        role: "工业界导师",
        affiliation: "阶跃星辰 · 研究科学家",
        bio: "研究方向为生成式人工智能。",
        links: {},
      },
      {
        name: "夏清零",
        monogram: "X",
        role: "学术界导师",
        affiliation: "重庆理工大学",
        bio: "研究方向为生物医学工程。",
        links: {},
      },
    ],
  },
  contact: {
    eyebrow: "Get in Touch",
    title: "合作与联系",
    body:
      "如果您对我们的研究方向、项目合作、学术交流、开源共建或创意生产系统落地感兴趣，欢迎与我们取得联系。让我们共同塑造一个全新的创意世界。",
    email: "aigcresearch@example.com",
    emailCtaLabel: "邮件联系",
    wechatTitle: "微信公众号",
    wechatNote: "扫码关注 AIGC Research",
    socials: [
      { icon: "github", label: "GitHub", href: "#", disabled: true },
      { icon: "huggingface", label: "Hugging Face", href: "#", disabled: true },
      { icon: "scholar", label: "Scholar", href: "#", disabled: true },
      { icon: "bilibili", label: "Bilibili", href: "#", disabled: true },
      { icon: "x", label: "X", href: "#", disabled: true },
    ],
  },
  footer: {
    copyright: "© 2026 AIGC Research · AI4C Team",
    tagline: "Shaping a novel creative world.",
  },
  langToggle: { zh: "中", en: "EN" },
};
```

- [ ] **Step 3: Create `src/data/content.en.ts`**

Write `src/data/content.en.ts`:
```ts
import type { Content } from "./types";

export const en: Content = {
  meta: {
    title: "AIGC Research · AI4C — AI for Creativity",
    description:
      "We are the AI4C Team, dedicated to advancing artistic content creation. Our work focuses on AI with Design Thinking and AI in Creative Workflows.",
  },
  nav: {
    brand: "AIGC Research",
    brandSub: "AI4C",
    links: [
      { id: "philosophy", label: "Philosophy" },
      { id: "directions", label: "Directions" },
      { id: "publications", label: "Publications" },
      { id: "team", label: "Team" },
      { id: "contact", label: "Contact" },
    ],
  },
  hero: {
    eyebrow: "AI for Creativity Research Team",
    headline: "Creative AI Research",
    subhead: "From Workflow to Creative Flow",
    intro:
      "We are the AI4C Team (AI for Creativity), dedicated to advancing artistic content creation. Our work focuses on two pathways — AI with Design Thinking and AI in Creative Workflows — toward democratizing animation filmmaking and television production.",
    ctas: [
      { label: "Research Directions", href: "#directions" },
      { label: "Featured Work", href: "#publications" },
    ],
  },
  philosophy: {
    eyebrow: "Philosophy",
    title: "Core Research Vision",
    intro:
      "We anchor our research in film-grade animation because cinema is a unified vessel of audio-visual art — music, image, color, narrative, motion, emotion — which makes it the richest multimodal sample for an AI that tries to understand creation rather than merely imitate it.",
    pillars: [
      {
        icon: "film",
        title: "Cinematic Standard",
        body:
          "Beyond raw generation quality, we care about cinematography, audio-visual coherence, narrative pacing, character consistency, and emotional delivery.",
      },
      {
        icon: "compass",
        title: "Design Thinking",
        body:
          "We want AI to evolve from a passive generator into a creative agent capable of top-level design decisions across modalities.",
      },
      {
        icon: "workflow",
        title: "Workflow Landing",
        body:
          "Generative systems must enter the real 2D / 3D animation pipeline — turning a tangled workflow into a clean creative flow.",
      },
    ],
  },
  directions: {
    eyebrow: "Research Directions",
    title: "Two Research Pathways",
    intro:
      "Our research advances along two pathways. General Creative Intelligence explores the frontier of machine creativity; Intelligent Creative Workflow focuses on releasing human creativity. Together they form a closed loop from creative understanding to creative production.",
    items: [
      {
        id: "gci",
        title: "General Creative Intelligence",
        subtitle: "通用创意智能",
        tagline: "From asset generator to design-thinking creative agent.",
        body:
          "A film director, when conceiving a narrative, orchestrates sound, image, action, pacing, and story logic simultaneously — a cross-modal act of imagination. This pathway studies how AI can acquire that top-level design capability through multimodal perception, cross-modal alignment, aesthetic cognition, and creative reasoning.",
        tags: [
          "Multimodal Perception",
          "Cross-modal Alignment",
          "Creative Reasoning",
          "Aesthetic Cognition",
          "Design-Thinking Agent",
        ],
      },
      {
        id: "icw",
        title: "Intelligent Creative Workflow",
        subtitle: "智能创意工作流",
        tagline: "Let the tools adapt to creators — not the other way around.",
        body:
          "We bring creative agents into real production, reducing mechanical steps in 2D / 3D animation: previsualization, cold-start 3D modeling, inbetweening, shot transitions, asset recomposition. We cover the full data spectrum — 1D audio, 2D images, 3D geometry, 4D video — and break the single text-to-image paradigm with multimodal interaction grounded in artist intuition.",
        tags: [
          "Agent Deployment",
          "2D/3D/4D Content",
          "Multimodal Interaction",
          "Film & Animation Workflow",
          "Workflow → Creative Flow",
        ],
      },
    ],
  },
  publications: {
    eyebrow: "Publications & Projects",
    title: "Featured Work",
    intro:
      "Each piece of work answers a specific question rather than running an isolated experiment. The following are the anchor points of our current research line.",
    items: [
      {
        id: "vistorybench",
        title: "ViStoryBench",
        tagline: "A comprehensive benchmark suite for story visualization.",
        body:
          "Targeting customized visual storytelling — the core task of cinematic generation — ViStoryBench defines a systematic evaluation framework for character consistency, style stability, plot alignment, compositional quality, and visualization.",
        links: [
          { label: "Tech Report", href: "#", disabled: true },
          { label: "Code", href: "#", disabled: true },
          { label: "Dataset", href: "#", disabled: true },
          { label: "Project Page", href: "#", disabled: true },
        ],
      },
      {
        id: "styleme3d",
        title: "StyleMe3D",
        tagline: "Stylization with disentangled priors on 3D Gaussians.",
        body:
          "Multi-encoder, disentangled-prior stylization for 3D Gaussian representations — exploring controllable, interactive, scalable 3D creation as a long-term creative medium.",
        links: [
          { label: "Tech Report", href: "#", disabled: true },
          { label: "Project Page", href: "#", disabled: true },
          { label: "Code", href: "#", disabled: true },
        ],
      },
      {
        id: "shotstudio",
        title: "ShotStudio",
        tagline: "An AIGC framework for end-to-end film creation.",
        body:
          "An evolving framework that integrates creative understanding, shot organization, asset generation, and production coordination — a pioneering scaffold for future cinematic generation systems.",
        links: [
          { label: "Code", href: "#", disabled: true },
          { label: "Demo", href: "#", disabled: true },
          { label: "Docs", href: "#", disabled: true },
        ],
      },
      {
        id: "act2cut",
        title: "Act2Cut",
        tagline: "Continuous multi-shot video narrative — match on action.",
        body:
          "Tackling the long-overlooked “match on action” problem in cinematic language, Act2Cut enables generative video systems to understand action continuity across shots — narrative motion, not just surface frame similarity.",
        links: [
          { label: "Paper", href: "#", disabled: true },
          { label: "Project Page", href: "#", disabled: true },
          { label: "Code", href: "#", disabled: true },
        ],
      },
      {
        id: "awesome-paperdaily",
        title: "Awesome-PaperDaily",
        tagline: "Following the advance of AIGC, day by day.",
        body:
          "An open knowledge curation project that tracks AIGC frontiers — reflecting our continued investment in knowledge organization, trend tracking, and community contribution.",
        links: [{ label: "Code", href: "#", disabled: true }],
        featured: true,
      },
    ],
  },
  team: {
    eyebrow: "Team",
    title: "Team Members",
    intro:
      "AIGC Research is a small team focused on creative AI, generative models, and cross-disciplinary fundamentals. We collaborate with both industry and academic advisors across the full chain — from foundational questions to deployed creative systems.",
    members: [
      {
        name: "Cailin Zhuang",
        monogram: "Z",
        role: "Team Member",
        affiliation: "M.Sc., ShanghaiTech University",
        bio: "Working on AIGC, creative intelligence, and cinematic content generation.",
        links: {},
      },
      {
        name: "Yaoqi Hu",
        monogram: "H",
        role: "Team Member",
        affiliation: "—",
        bio: "Bio coming soon.",
        links: {},
      },
      {
        name: "Zheng Dong",
        monogram: "D",
        role: "Team Member",
        affiliation: "—",
        bio: "Bio coming soon.",
        links: {},
      },
    ],
    advisorsLabel: "Advisors",
    advisors: [
      {
        name: "Wei Cheng",
        monogram: "C",
        role: "Industry Advisor",
        affiliation: "StepFun · Research Scientist",
        bio: "Researches generative AI.",
        links: {},
      },
      {
        name: "Qingling Xia",
        monogram: "X",
        role: "Academic Advisor",
        affiliation: "Chongqing University of Technology",
        bio: "Researches biomedical engineering.",
        links: {},
      },
    ],
  },
  contact: {
    eyebrow: "Get in Touch",
    title: "Collaborate with Us",
    body:
      "If our research directions, open-source efforts, academic exchanges, or creative production systems resonate with you, we warmly invite you to connect. Let’s shape a novel creative world together.",
    email: "aigcresearch@example.com",
    emailCtaLabel: "Email Us",
    wechatTitle: "WeChat",
    wechatNote: "Scan to follow AIGC Research",
    socials: [
      { icon: "github", label: "GitHub", href: "#", disabled: true },
      { icon: "huggingface", label: "Hugging Face", href: "#", disabled: true },
      { icon: "scholar", label: "Scholar", href: "#", disabled: true },
      { icon: "bilibili", label: "Bilibili", href: "#", disabled: true },
      { icon: "x", label: "X", href: "#", disabled: true },
    ],
  },
  footer: {
    copyright: "© 2026 AIGC Research · AI4C Team",
    tagline: "Shaping a novel creative world.",
  },
  langToggle: { zh: "中", en: "EN" },
};
```

- [ ] **Step 4: Type-check**

Run:
```bash
npx astro check
```
Expected: no type errors. (If `astro check` is not installed, run `npx tsc --noEmit` instead — Astro 4 ships with built-in check.)

- [ ] **Step 5: Commit**

Run:
```bash
git add src/data/types.ts src/data/content.zh.ts src/data/content.en.ts
git commit -m "feat: content schema and zh/en copy from homepage plan"
```

---

## Task 6: BaseLayout + BiText helper

**Files:**
- Create: `src/layouts/BaseLayout.astro`, `src/components/BiText.astro`

- [ ] **Step 1: Create `src/components/BiText.astro`**

Write `src/components/BiText.astro`:
```astro
---
interface Props {
  zh: string;
  en: string;
  tag?: keyof HTMLElementTagNameMap;
  class?: string;
}
const { zh, en, tag = "span", class: className } = Astro.props;
const Tag = tag as any;
---
<Tag class={className}>
  <span data-lang="zh">{zh}</span><span data-lang="en">{en}</span>
</Tag>
```

This component renders both languages inline, relying on the global `html[data-lang]` CSS rule to hide the inactive one.

- [ ] **Step 2: Create `src/layouts/BaseLayout.astro`**

Write `src/layouts/BaseLayout.astro`:
```astro
---
import "../styles/global.css";
import "../styles/motion.css";
import { zh } from "../data/content.zh";
import { en } from "../data/content.en";

const titleZh = zh.meta.title;
const titleEn = en.meta.title;
const descZh = zh.meta.description;
const descEn = en.meta.description;
---
<!doctype html>
<html lang="zh-CN" data-lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#06090F" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;600;700&family=Space+Grotesk:wght@500;600&display=swap"
    />

    <title>{titleZh}</title>
    <meta name="description" content={descZh} />

    <!-- Inline early script: read saved lang, set html[data-lang] before paint -->
    <script is:inline>
      (function () {
        try {
          var saved = localStorage.getItem("aigcr.lang");
          if (saved === "en" || saved === "zh") {
            document.documentElement.dataset.lang = saved;
            document.documentElement.lang = saved === "en" ? "en" : "zh-CN";
          }
        } catch (e) {}
      })();
    </script>
  </head>
  <body>
    <slot />

    <!-- Sync <title> + <meta description> + lang attr when toggle changes -->
    <script is:inline define:vars={{ titleZh, titleEn, descZh, descEn }}>
      (function () {
        function sync() {
          var l = document.documentElement.dataset.lang || "zh";
          document.title = l === "en" ? titleEn : titleZh;
          var d = document.querySelector('meta[name="description"]');
          if (d) d.setAttribute("content", l === "en" ? descEn : descZh);
          document.documentElement.lang = l === "en" ? "en" : "zh-CN";
        }
        sync();
        window.addEventListener("aigcr:langchange", sync);
      })();
    </script>

    <!-- Scroll-reveal observer -->
    <script is:inline>
      (function () {
        var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) {
          document.querySelectorAll(".reveal").forEach(function (el) {
            el.classList.add("in-view");
          });
          return;
        }
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              e.target.classList.add("in-view");
              io.unobserve(e.target);
            }
          });
        }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });
        document.querySelectorAll(".reveal").forEach(function (el) {
          io.observe(el);
        });
      })();
    </script>
  </body>
</html>
```

- [ ] **Step 3: Commit**

Run:
```bash
git add src/layouts/BaseLayout.astro src/components/BiText.astro
git commit -m "feat: BaseLayout with font preconnect, lang sync, reveal observer"
```

---

## Task 7: Nav + Language toggle

**Files:**
- Create: `src/components/LangToggle.astro`, `src/components/Nav.astro`

- [ ] **Step 1: Create `src/components/LangToggle.astro`**

Write `src/components/LangToggle.astro`:
```astro
---
import { zh } from "../data/content.zh";
const labels = zh.langToggle;
---
<button class="lang-toggle" type="button" aria-label="Toggle language">
  <span class="lang-opt" data-target="zh">{labels.zh}</span>
  <span class="lang-sep">/</span>
  <span class="lang-opt" data-target="en">{labels.en}</span>
</button>

<style>
  .lang-toggle {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border: 1px solid var(--surface-border);
    border-radius: var(--radius-pill);
    background: var(--surface);
    backdrop-filter: blur(10px);
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 13px;
    letter-spacing: 0.08em;
    transition: border-color 160ms var(--ease-out), color 160ms var(--ease-out);
  }
  .lang-toggle:hover { border-color: var(--surface-border-strong); color: var(--text-primary); }
  .lang-sep { color: var(--text-dim); }
  .lang-opt { transition: color 160ms var(--ease-out); }
  html[data-lang="zh"] .lang-opt[data-target="zh"],
  html[data-lang="en"] .lang-opt[data-target="en"] {
    color: var(--accent-cyan);
  }
</style>

<script is:inline>
  (function () {
    var btn = document.currentScript.previousElementSibling;
    while (btn && !btn.classList.contains("lang-toggle")) {
      btn = btn.previousElementSibling;
    }
    if (!btn) return;
    btn.addEventListener("click", function () {
      var cur = document.documentElement.dataset.lang || "zh";
      var next = cur === "zh" ? "en" : "zh";
      document.documentElement.dataset.lang = next;
      try { localStorage.setItem("aigcr.lang", next); } catch (e) {}
      window.dispatchEvent(new CustomEvent("aigcr:langchange", { detail: { lang: next } }));
    });
  })();
</script>
```

Note: `document.currentScript.previousElementSibling` is fragile if Astro injects whitespace. Replace by `document.querySelector('.lang-toggle')` for safety:

Replace the `<script>` block with:
```astro
<script is:inline>
  document.querySelectorAll(".lang-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var cur = document.documentElement.dataset.lang || "zh";
      var next = cur === "zh" ? "en" : "zh";
      document.documentElement.dataset.lang = next;
      try { localStorage.setItem("aigcr.lang", next); } catch (e) {}
      window.dispatchEvent(new CustomEvent("aigcr:langchange", { detail: { lang: next } }));
    });
  });
</script>
```

- [ ] **Step 2: Create `src/components/Nav.astro`**

Write `src/components/Nav.astro`:
```astro
---
import { zh } from "../data/content.zh";
import { en } from "../data/content.en";
import LangToggle from "./LangToggle.astro";

const linksZh = zh.nav.links;
const linksEn = en.nav.links;
const brand = zh.nav.brand;
const brandSub = zh.nav.brandSub;
---
<header class="nav" id="nav">
  <div class="nav-inner container">
    <a class="brand" href="#top" aria-label="AIGC Research">
      <span class="brand-mark">AI4C</span>
      <span class="brand-name">
        <span class="brand-name-main">{brand}</span>
        <span class="brand-name-sub">{brandSub}</span>
      </span>
    </a>
    <nav class="nav-links" aria-label="Sections">
      {linksZh.map((l, i) => (
        <a href={`#${l.id}`}>
          <span data-lang="zh">{l.label}</span><span data-lang="en">{linksEn[i].label}</span>
        </a>
      ))}
    </nav>
    <div class="nav-tools">
      <LangToggle />
      <button class="nav-burger" type="button" aria-label="Menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>

<style>
  .nav {
    position: fixed;
    inset: 0 0 auto 0;
    z-index: 50;
    transition: backdrop-filter 200ms var(--ease-out), background-color 200ms var(--ease-out), border-color 200ms var(--ease-out);
    border-bottom: 1px solid transparent;
  }
  .nav.scrolled {
    background: rgba(6, 9, 15, 0.7);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-bottom-color: var(--surface-border);
  }
  .nav-inner {
    display: flex;
    align-items: center;
    gap: 24px;
    padding-block: 18px;
  }
  .brand { display: inline-flex; align-items: center; gap: 12px; }
  .brand-mark {
    font-family: var(--font-mono);
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 0.18em;
    padding: 4px 10px;
    border-radius: 6px;
    background: var(--accent-aurora);
    color: #0B1A2E;
  }
  .brand-name { display: inline-flex; flex-direction: column; line-height: 1.1; }
  .brand-name-main { font-weight: 600; font-size: 15px; color: var(--text-primary); }
  .brand-name-sub { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.18em; color: var(--text-muted); }

  .nav-links {
    display: flex;
    gap: 28px;
    margin-inline: auto;
    font-size: 14px;
    color: var(--text-muted);
  }
  .nav-links a { transition: color 160ms var(--ease-out); }
  .nav-links a:hover { color: var(--accent-cyan); }

  .nav-tools { display: inline-flex; align-items: center; gap: 12px; }
  .nav-burger { display: none; flex-direction: column; gap: 4px; padding: 8px; }
  .nav-burger span { display: block; width: 22px; height: 2px; background: var(--text-primary); }

  @media (max-width: 860px) {
    .nav-links { display: none; }
    .nav-burger { display: inline-flex; }
    .nav.menu-open .nav-links {
      display: flex;
      position: absolute;
      inset: 100% 0 auto 0;
      flex-direction: column;
      gap: 0;
      padding: 16px var(--container);
      background: rgba(6, 9, 15, 0.96);
      backdrop-filter: blur(14px);
      border-bottom: 1px solid var(--surface-border);
    }
    .nav.menu-open .nav-links a { padding-block: 12px; }
  }
</style>

<script is:inline>
  (function () {
    var nav = document.getElementById("nav");
    if (!nav) return;
    function onScroll() {
      if (window.scrollY > 40) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    var burger = nav.querySelector(".nav-burger");
    if (burger) {
      burger.addEventListener("click", function () {
        var open = nav.classList.toggle("menu-open");
        burger.setAttribute("aria-expanded", open ? "true" : "false");
      });
      nav.querySelectorAll(".nav-links a").forEach(function (a) {
        a.addEventListener("click", function () {
          nav.classList.remove("menu-open");
          burger.setAttribute("aria-expanded", "false");
        });
      });
    }
  })();
</script>
```

- [ ] **Step 3: Wire Nav into placeholder index to smoke-test**

Replace `src/pages/index.astro` with:
```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import Nav from "../components/Nav.astro";
---
<BaseLayout>
  <Nav />
  <main id="top" style="padding-top:120px;padding-bottom:240px;text-align:center;">
    <p style="color:var(--text-muted)">Nav scaffolded. More sections incoming.</p>
  </main>
</BaseLayout>
```

- [ ] **Step 4: Smoke test**

Run:
```bash
npm run dev
```
Open `http://localhost:4321/`. Verify:
- Nav appears fixed at top with brand + 5 links + EN/中 toggle.
- Scrolling > 40px adds the frosted background.
- Clicking the language toggle flips link labels (理念 ↔ Philosophy etc.).
- Page title flips between `AIGC Research · AI4C 创意人工智能研究组` and `AIGC Research · AI4C — AI for Creativity`.
- Refresh after toggling → language persists.
- Resize < 860px → links collapse into hamburger; clicking burger opens menu.

Kill the server.

- [ ] **Step 5: Commit**

Run:
```bash
git add src/components/LangToggle.astro src/components/Nav.astro src/pages/index.astro
git commit -m "feat: fixed nav with frost-on-scroll, mobile menu, and lang toggle"
```

---

## Task 8: Particle field + Hero

**Files:**
- Create: `src/components/ParticleField.astro`, `src/components/Hero.astro`

- [ ] **Step 1: Create `src/components/ParticleField.astro`**

Write `src/components/ParticleField.astro`:
```astro
---
---
<canvas class="particles" aria-hidden="true"></canvas>

<style>
  .particles {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
  }
</style>

<script is:inline>
  (function () {
    var canvases = document.querySelectorAll("canvas.particles");
    canvases.forEach(function (canvas) {
      var ctx = canvas.getContext("2d");
      if (!ctx) return;

      var DPR = Math.min(window.devicePixelRatio || 1, 2);
      var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      var mobile = window.matchMedia("(max-width: 768px)").matches;
      if (mobile) return; // skip on mobile per spec

      var stars = [];
      var w = 0, h = 0;
      var mx = 0, my = 0;
      var raf = 0;

      function resize() {
        var rect = canvas.getBoundingClientRect();
        w = rect.width;
        h = rect.height;
        canvas.width = Math.floor(w * DPR);
        canvas.height = Math.floor(h * DPR);
        ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
        seed();
      }

      function seed() {
        var count = 800;
        stars = [];
        for (var i = 0; i < count; i++) {
          stars.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 1.2 + 0.2,
            a: Math.random() * 0.6 + 0.2,
            vx: (Math.random() - 0.5) * 0.06,
            vy: (Math.random() - 0.5) * 0.04,
            twinkle: Math.random() < 0.05,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }

      function draw(t) {
        ctx.clearRect(0, 0, w, h);
        ctx.save();
        ctx.translate(mx * 0.005, my * 0.005);
        for (var i = 0; i < stars.length; i++) {
          var s = stars[i];
          var alpha = s.twinkle ? s.a * (0.6 + 0.4 * Math.sin(t * 0.002 + s.phase)) : s.a;
          ctx.beginPath();
          ctx.fillStyle = "rgba(200, 220, 255, " + alpha.toFixed(3) + ")";
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fill();
          if (s.twinkle) {
            ctx.beginPath();
            ctx.fillStyle = "rgba(127, 215, 255, " + (alpha * 0.4).toFixed(3) + ")";
            ctx.arc(s.x, s.y, s.r * 2.2, 0, Math.PI * 2);
            ctx.fill();
          }
          s.x += s.vx;
          s.y += s.vy;
          if (s.x < 0) s.x = w; else if (s.x > w) s.x = 0;
          if (s.y < 0) s.y = h; else if (s.y > h) s.y = 0;
        }
        ctx.restore();
      }

      function loop(t) {
        draw(t);
        raf = requestAnimationFrame(loop);
      }

      function onMove(e) {
        var rect = canvas.getBoundingClientRect();
        mx = e.clientX - rect.left - w / 2;
        my = e.clientY - rect.top - h / 2;
      }

      function start() {
        if (raf) return;
        raf = requestAnimationFrame(loop);
      }
      function stop() {
        if (!raf) return;
        cancelAnimationFrame(raf);
        raf = 0;
      }

      resize();
      window.addEventListener("resize", resize);
      window.addEventListener("mousemove", onMove);
      document.addEventListener("visibilitychange", function () {
        if (document.hidden) stop(); else if (!reduce) start();
      });

      if (reduce) {
        draw(0);
      } else {
        start();
      }
    });
  })();
</script>
```

- [ ] **Step 2: Create `src/components/Hero.astro`**

Write `src/components/Hero.astro`:
```astro
---
import { zh } from "../data/content.zh";
import { en } from "../data/content.en";
import ParticleField from "./ParticleField.astro";

const z = zh.hero;
const e = en.hero;
---
<section class="hero" id="top">
  <div class="hero-bg" aria-hidden="true">
    <ParticleField />
    <div class="hero-gradient"></div>
  </div>

  <div class="hero-inner container">
    <p class="hero-eyebrow reveal">
      <span data-lang="zh">{z.eyebrow}</span><span data-lang="en">{e.eyebrow}</span>
    </p>
    <h1 class="hero-headline reveal">
      <span data-lang="zh">{z.headline}</span><span data-lang="en">{e.headline}</span>
    </h1>
    <p class="hero-subhead reveal">
      <span data-lang="zh">{z.subhead}</span><span data-lang="en">{e.subhead}</span>
    </p>
    <p class="hero-intro reveal">
      <span data-lang="zh">{z.intro}</span><span data-lang="en">{e.intro}</span>
    </p>
    <div class="hero-ctas reveal">
      {z.ctas.map((c, i) => (
        <a class={i === 0 ? "btn btn-primary" : "btn btn-ghost"} href={c.href}>
          <span data-lang="zh">{c.label}</span><span data-lang="en">{e.ctas[i].label}</span>
        </a>
      ))}
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100svh;
    display: flex;
    align-items: center;
    overflow: hidden;
    isolation: isolate;
  }
  .hero-bg {
    position: absolute;
    inset: 0;
    z-index: -1;
    background: radial-gradient(120% 80% at 50% 10%, var(--bg-nebula-2) 0%, var(--bg-nebula-1) 45%, var(--bg-deep) 85%);
  }
  .hero-gradient {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(40% 30% at 20% 30%, rgba(92, 141, 255, 0.25), transparent 60%),
      radial-gradient(45% 35% at 80% 70%, rgba(155, 123, 255, 0.22), transparent 60%);
    mix-blend-mode: screen;
  }
  .hero-inner {
    position: relative;
    max-width: 900px;
    padding-block: 120px 80px;
  }
  .hero-eyebrow {
    font-family: var(--font-mono);
    font-size: 13px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--accent-cyan);
    margin-bottom: 24px;
  }
  .hero-headline {
    font-size: clamp(40px, 6.4vw, 68px);
    line-height: 1.1;
    background: linear-gradient(180deg, #FFFFFF 0%, #B6CBFF 100%);
    -webkit-background-clip: text;
            background-clip: text;
    color: transparent;
  }
  .hero-subhead {
    margin-top: 12px;
    font-size: clamp(18px, 2vw, 22px);
    color: var(--accent-cyan);
    font-family: var(--font-mono);
    letter-spacing: 0.04em;
  }
  .hero-intro {
    margin-top: 28px;
    max-width: 680px;
    color: var(--text-muted);
    font-size: 16px;
  }
  .hero-ctas { margin-top: 40px; display: flex; gap: 14px; flex-wrap: wrap; }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 22px;
    border-radius: var(--radius-pill);
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.02em;
    border: 1px solid var(--surface-border-strong);
    color: var(--text-primary);
    transition: transform 180ms var(--ease-out), border-color 180ms var(--ease-out), background 180ms var(--ease-out), color 180ms var(--ease-out);
  }
  .btn:hover { transform: scale(1.02); border-color: var(--accent-cyan); color: var(--accent-cyan); }
  .btn-primary {
    background: var(--accent-aurora);
    color: #0B1A2E;
    border-color: transparent;
  }
  .btn-primary:hover { color: #0B1A2E; filter: brightness(1.08); border-color: transparent; }
  .btn-ghost { background: var(--surface); backdrop-filter: blur(8px); }
</style>
```

- [ ] **Step 3: Update `index.astro`**

Replace `src/pages/index.astro` with:
```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import Nav from "../components/Nav.astro";
import Hero from "../components/Hero.astro";
---
<BaseLayout>
  <Nav />
  <main>
    <Hero />
  </main>
</BaseLayout>
```

- [ ] **Step 4: Smoke test**

Run:
```bash
npm run dev
```
Open `http://localhost:4321/`. Verify:
- Hero fills the viewport with a deep gradient + drifting starfield.
- Headline reads `创意人工智能研究计划` (or English equivalent after toggle).
- Subhead reads `从 工作流 走向 创意流`.
- Two CTAs visible; primary has aurora gradient.
- Reveal animations play once on first paint.
- Toggle to EN → all hero text swaps.
- Resize to < 768px → particles disappear (mobile skip), hero still readable on a gradient.
- DevTools: emulate `prefers-reduced-motion: reduce` → reveals are instant, particles still render one static frame.

Kill the server.

- [ ] **Step 5: Commit**

Run:
```bash
git add src/components/ParticleField.astro src/components/Hero.astro src/pages/index.astro
git commit -m "feat: hero section with Canvas particle field and bilingual copy"
```

---

## Task 9: Philosophy section

**Files:**
- Create: `src/components/Philosophy.astro`

- [ ] **Step 1: Create `src/components/Philosophy.astro`**

Write `src/components/Philosophy.astro`:
```astro
---
import { zh } from "../data/content.zh";
import { en } from "../data/content.en";

const z = zh.philosophy;
const e = en.philosophy;
const iconMap: Record<string, string> = {
  film: "🎬",
  compass: "🧭",
  workflow: "⌬",
};
---
<section class="section philosophy" id="philosophy" aria-labelledby="philosophy-title">
  <hr class="section-divider" />
  <div class="container">
    <p class="eyebrow reveal"><span data-lang="zh">{z.eyebrow}</span><span data-lang="en">{e.eyebrow}</span></p>
    <h2 class="section-title reveal" id="philosophy-title">
      <span data-lang="zh">{z.title}</span><span data-lang="en">{e.title}</span>
    </h2>
    <p class="lede reveal">
      <span data-lang="zh">{z.intro}</span><span data-lang="en">{e.intro}</span>
    </p>

    <ul class="pillars">
      {z.pillars.map((p, i) => (
        <li class="pillar reveal">
          <span class="pillar-icon" aria-hidden="true">{iconMap[p.icon] ?? "✦"}</span>
          <h3 class="pillar-title">
            <span data-lang="zh">{p.title}</span><span data-lang="en">{e.pillars[i].title}</span>
          </h3>
          <p class="pillar-body">
            <span data-lang="zh">{p.body}</span><span data-lang="en">{e.pillars[i].body}</span>
          </p>
        </li>
      ))}
    </ul>
  </div>
</section>

<style>
  .lede {
    max-width: 820px;
    color: var(--text-muted);
    font-size: 17px;
    margin-bottom: 56px;
  }
  .pillars {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  .pillar {
    position: relative;
    padding: 28px 24px;
    background: var(--surface);
    border: 1px solid var(--surface-border);
    border-radius: var(--radius-card);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow-card);
    transition: transform 240ms var(--ease-out), border-color 240ms var(--ease-out), box-shadow 240ms var(--ease-out);
  }
  .pillar::before, .pillar::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border-color: var(--accent-cyan);
    opacity: 0.6;
  }
  .pillar::before { top: 10px; left: 10px; border-top: 1px solid; border-left: 1px solid; }
  .pillar::after { bottom: 10px; right: 10px; border-bottom: 1px solid; border-right: 1px solid; }
  .pillar:hover {
    transform: translateY(-6px);
    border-color: var(--surface-border-strong);
    box-shadow: var(--shadow-card-hover);
  }
  .pillar-icon {
    display: inline-flex;
    width: 44px;
    height: 44px;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    border-radius: 12px;
    background: rgba(127, 215, 255, 0.08);
    border: 1px solid var(--surface-border);
    margin-bottom: 16px;
  }
  .pillar-title { margin-bottom: 8px; }
  .pillar-body { color: var(--text-muted); font-size: 15px; }

  @media (max-width: 860px) {
    .pillars { grid-template-columns: 1fr; }
  }
</style>
```

- [ ] **Step 2: Mount in `index.astro`**

Replace `src/pages/index.astro` with:
```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import Nav from "../components/Nav.astro";
import Hero from "../components/Hero.astro";
import Philosophy from "../components/Philosophy.astro";
---
<BaseLayout>
  <Nav />
  <main>
    <Hero />
    <Philosophy />
  </main>
</BaseLayout>
```

- [ ] **Step 3: Smoke test**

Run `npm run dev`. Verify the Philosophy section renders below Hero with 3 pillar cards in a row on desktop, single column on mobile. Confirm hover lift and bilingual swap. Kill the server.

- [ ] **Step 4: Commit**

Run:
```bash
git add src/components/Philosophy.astro src/pages/index.astro
git commit -m "feat: philosophy section with 3 pillar glass cards"
```

---

## Task 10: Directions section

**Files:**
- Create: `src/components/Directions.astro`

- [ ] **Step 1: Create `src/components/Directions.astro`**

Write `src/components/Directions.astro`:
```astro
---
import { zh } from "../data/content.zh";
import { en } from "../data/content.en";
const z = zh.directions;
const e = en.directions;
---
<section class="section directions" id="directions" aria-labelledby="directions-title">
  <hr class="section-divider" />
  <div class="container">
    <p class="eyebrow reveal"><span data-lang="zh">{z.eyebrow}</span><span data-lang="en">{e.eyebrow}</span></p>
    <h2 class="section-title reveal" id="directions-title">
      <span data-lang="zh">{z.title}</span><span data-lang="en">{e.title}</span>
    </h2>
    <p class="lede reveal">
      <span data-lang="zh">{z.intro}</span><span data-lang="en">{e.intro}</span>
    </p>

    <div class="dir-grid">
      {z.items.map((d, i) => (
        <article class="dir-card reveal">
          <header class="dir-head">
            <span class="dir-index">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 class="dir-title">
                <span data-lang="zh">{d.title}</span><span data-lang="en">{e.items[i].title}</span>
              </h3>
              <p class="dir-subtitle">
                <span data-lang="zh">{d.subtitle}</span><span data-lang="en">{e.items[i].subtitle}</span>
              </p>
            </div>
          </header>
          <p class="dir-tagline">
            <span data-lang="zh">{d.tagline}</span><span data-lang="en">{e.items[i].tagline}</span>
          </p>
          <p class="dir-body">
            <span data-lang="zh">{d.body}</span><span data-lang="en">{e.items[i].body}</span>
          </p>
          <ul class="dir-tags">
            {d.tags.map((t, ti) => (
              <li class="tag">
                <span data-lang="zh">{t}</span><span data-lang="en">{e.items[i].tags[ti]}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </div>
</section>

<style>
  .lede { max-width: 820px; color: var(--text-muted); font-size: 17px; margin-bottom: 56px; }
  .dir-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
  .dir-card {
    position: relative;
    padding: 32px;
    background: var(--surface);
    border: 1px solid var(--surface-border);
    border-radius: var(--radius-card);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow-card);
    transition: transform 240ms var(--ease-out), border-color 240ms var(--ease-out), box-shadow 240ms var(--ease-out);
    overflow: hidden;
  }
  .dir-card::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: var(--radius-card);
    padding: 1px;
    background: linear-gradient(135deg, transparent 40%, rgba(127, 215, 255, 0.4) 60%, transparent 80%);
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
            mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
    pointer-events: none;
    opacity: 0;
    transition: opacity 240ms var(--ease-out);
  }
  .dir-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-card-hover); }
  .dir-card:hover::before { opacity: 1; }

  .dir-head { display: flex; gap: 18px; align-items: flex-start; margin-bottom: 16px; }
  .dir-index {
    font-family: var(--font-mono);
    font-size: 13px;
    letter-spacing: 0.18em;
    padding: 4px 10px;
    border-radius: 6px;
    background: rgba(127, 215, 255, 0.08);
    color: var(--accent-cyan);
  }
  .dir-title { font-size: 24px; }
  .dir-subtitle { font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.18em; color: var(--text-muted); margin-top: 4px; }

  .dir-tagline { font-size: 16px; color: var(--accent-cyan); margin-bottom: 16px; }
  .dir-body { color: var(--text-muted); font-size: 15px; }

  .dir-tags { list-style: none; padding: 0; margin: 22px 0 0; display: flex; flex-wrap: wrap; gap: 8px; }
  .tag {
    font-family: var(--font-mono);
    font-size: 12px;
    letter-spacing: 0.06em;
    padding: 5px 10px;
    border-radius: var(--radius-pill);
    background: rgba(155, 123, 255, 0.08);
    border: 1px solid rgba(155, 123, 255, 0.18);
    color: #C9B9FF;
  }

  @media (max-width: 860px) {
    .dir-grid { grid-template-columns: 1fr; }
  }
</style>
```

- [ ] **Step 2: Mount in `index.astro`**

Edit `src/pages/index.astro` to add `import Directions from "../components/Directions.astro";` and place `<Directions />` after `<Philosophy />`.

- [ ] **Step 3: Smoke test**

Run `npm run dev`, scroll to Directions. Verify two cards side-by-side on desktop with hover gradient ring, stacked on mobile. Tags display in violet pill chips and swap on language toggle.

- [ ] **Step 4: Commit**

Run:
```bash
git add src/components/Directions.astro src/pages/index.astro
git commit -m "feat: directions section with two-column tagged cards"
```

---

## Task 11: Publications section

**Files:**
- Create: `src/components/PubCard.astro`, `src/components/Publications.astro`

- [ ] **Step 1: Create `src/components/PubCard.astro`**

Write `src/components/PubCard.astro`:
```astro
---
import type { Publication } from "../data/types";
interface Props { itemZh: Publication; itemEn: Publication; }
const { itemZh, itemEn } = Astro.props;
---
<article class={`pub-card reveal${itemZh.featured ? " pub-card--featured" : ""}`}>
  <div class="pub-thumb" aria-hidden="true">
    <span class="pub-thumb-id">{itemZh.id}</span>
  </div>
  <div class="pub-body">
    <h3 class="pub-title">{itemZh.title}</h3>
    <p class="pub-tagline">
      <span data-lang="zh">{itemZh.tagline}</span><span data-lang="en">{itemEn.tagline}</span>
    </p>
    <p class="pub-desc">
      <span data-lang="zh">{itemZh.body}</span><span data-lang="en">{itemEn.body}</span>
    </p>
    <div class="pub-links">
      {itemZh.links.map((l, i) => {
        const enLink = itemEn.links[i];
        const disabled = l.disabled;
        const href = disabled ? undefined : l.href;
        return (
          <a
            class={`pub-link${disabled ? " is-disabled" : ""}`}
            href={href}
            aria-disabled={disabled ? "true" : undefined}
            title={disabled ? "Link coming soon" : undefined}
          >
            <span data-lang="zh">{l.label}</span><span data-lang="en">{enLink.label}</span>
          </a>
        );
      })}
    </div>
  </div>
</article>

<style>
  .pub-card {
    position: relative;
    display: flex;
    flex-direction: column;
    background: var(--surface);
    border: 1px solid var(--surface-border);
    border-radius: var(--radius-card);
    overflow: hidden;
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow-card);
    transition: transform 240ms var(--ease-out), border-color 240ms var(--ease-out), box-shadow 240ms var(--ease-out);
  }
  .pub-card:hover {
    transform: translateY(-6px);
    border-color: var(--surface-border-strong);
    box-shadow: var(--shadow-card-hover);
  }

  .pub-thumb {
    position: relative;
    aspect-ratio: 16 / 9;
    background:
      linear-gradient(135deg, rgba(92, 141, 255, 0.18), rgba(155, 123, 255, 0.18)),
      url("/background.png") center / cover;
    overflow: hidden;
  }
  .pub-thumb::after {
    content: "";
    position: absolute; inset: 0;
    background: linear-gradient(180deg, transparent 30%, rgba(6, 9, 15, 0.85) 100%);
  }
  .pub-thumb-id {
    position: absolute;
    bottom: 12px;
    left: 14px;
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--accent-cyan);
    z-index: 1;
  }

  .pub-body { padding: 20px; display: flex; flex-direction: column; gap: 10px; }
  .pub-title { font-size: 18px; }
  .pub-tagline { color: var(--accent-cyan); font-size: 13px; font-family: var(--font-mono); letter-spacing: 0.02em; }
  .pub-desc { color: var(--text-muted); font-size: 14px; flex-grow: 1; }

  .pub-links { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 12px; }
  .pub-link {
    font-family: var(--font-mono);
    font-size: 12px;
    letter-spacing: 0.06em;
    padding: 5px 10px;
    border-radius: var(--radius-pill);
    border: 1px solid var(--surface-border);
    color: var(--text-muted);
    transition: border-color 160ms var(--ease-out), color 160ms var(--ease-out);
  }
  .pub-link:hover { border-color: var(--accent-cyan); color: var(--accent-cyan); }
  .pub-link.is-disabled { opacity: 0.5; cursor: not-allowed; pointer-events: none; }

  /* Featured strip card: full-width banner style */
  .pub-card--featured { grid-column: 1 / -1; flex-direction: row; }
  .pub-card--featured .pub-thumb { width: 280px; aspect-ratio: auto; flex-shrink: 0; }
  @media (max-width: 768px) {
    .pub-card--featured { flex-direction: column; }
    .pub-card--featured .pub-thumb { width: 100%; aspect-ratio: 16 / 9; }
  }
</style>
```

- [ ] **Step 2: Create `src/components/Publications.astro`**

Write `src/components/Publications.astro`:
```astro
---
import { zh } from "../data/content.zh";
import { en } from "../data/content.en";
import PubCard from "./PubCard.astro";

const z = zh.publications;
const e = en.publications;
---
<section class="section publications" id="publications" aria-labelledby="publications-title">
  <hr class="section-divider" />
  <div class="container">
    <p class="eyebrow reveal"><span data-lang="zh">{z.eyebrow}</span><span data-lang="en">{e.eyebrow}</span></p>
    <h2 class="section-title reveal" id="publications-title">
      <span data-lang="zh">{z.title}</span><span data-lang="en">{e.title}</span>
    </h2>
    <p class="lede reveal">
      <span data-lang="zh">{z.intro}</span><span data-lang="en">{e.intro}</span>
    </p>
    <div class="pub-grid">
      {z.items.map((it, i) => (
        <PubCard itemZh={it} itemEn={e.items[i]} />
      ))}
    </div>
  </div>
</section>

<style>
  .lede { max-width: 820px; color: var(--text-muted); font-size: 17px; margin-bottom: 56px; }
  .pub-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 22px;
  }
  @media (max-width: 1180px) { .pub-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 640px)  { .pub-grid { grid-template-columns: 1fr; } }
</style>
```

- [ ] **Step 3: Mount and smoke-test**

Add `import Publications from "../components/Publications.astro";` to `index.astro` and place `<Publications />` after `<Directions />`. Run `npm run dev` and verify:
- 4 project cards (ViStoryBench, StyleMe3D, ShotStudio, Act2Cut) display in a 4-column grid.
- Awesome-PaperDaily renders as a wide horizontal strip card spanning all columns.
- All Tech Report / Code etc. links show as disabled with reduced opacity.

- [ ] **Step 4: Commit**

Run:
```bash
git add src/components/PubCard.astro src/components/Publications.astro src/pages/index.astro
git commit -m "feat: publications section with 4-col grid + featured strip card"
```

---

## Task 12: Team section

**Files:**
- Create: `src/components/MemberCard.astro`, `src/components/Team.astro`

- [ ] **Step 1: Create `src/components/MemberCard.astro`**

Write `src/components/MemberCard.astro`:
```astro
---
import type { Member } from "../data/types";
interface Props { memberZh: Member; memberEn: Member; }
const { memberZh, memberEn } = Astro.props;
---
<article class="member reveal">
  <div class="member-avatar" aria-hidden="true">
    {memberZh.avatar
      ? <img src={memberZh.avatar} alt="" />
      : <span class="member-monogram">{memberZh.monogram}</span>
    }
  </div>
  <h3 class="member-name">
    <span data-lang="zh">{memberZh.name}</span><span data-lang="en">{memberEn.name}</span>
  </h3>
  <p class="member-role">
    <span data-lang="zh">{memberZh.role}</span><span data-lang="en">{memberEn.role}</span>
  </p>
  <p class="member-aff">
    <span data-lang="zh">{memberZh.affiliation}</span><span data-lang="en">{memberEn.affiliation}</span>
  </p>
  <p class="member-bio">
    <span data-lang="zh">{memberZh.bio}</span><span data-lang="en">{memberEn.bio}</span>
  </p>
</article>

<style>
  .member {
    text-align: center;
    padding: 32px 24px;
    background: var(--surface);
    border: 1px solid var(--surface-border);
    border-radius: var(--radius-card);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow-card);
    transition: transform 240ms var(--ease-out), border-color 240ms var(--ease-out), box-shadow 240ms var(--ease-out);
  }
  .member:hover {
    transform: translateY(-6px);
    border-color: var(--surface-border-strong);
    box-shadow: var(--shadow-card-hover);
  }
  .member-avatar {
    width: 96px;
    height: 96px;
    margin: 0 auto 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--accent-aurora);
    border: 2px solid rgba(127, 215, 255, 0.4);
    box-shadow: 0 0 24px rgba(127, 215, 255, 0.15);
    overflow: hidden;
  }
  .member-avatar img { width: 100%; height: 100%; object-fit: cover; }
  .member-monogram { font-family: var(--font-mono); font-size: 28px; font-weight: 700; color: #0B1A2E; }
  .member-name { margin-bottom: 4px; font-size: 18px; }
  .member-role { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent-cyan); margin-bottom: 8px; }
  .member-aff { font-size: 13px; color: var(--text-muted); margin-bottom: 12px; }
  .member-bio { font-size: 14px; color: var(--text-muted); }
</style>
```

- [ ] **Step 2: Create `src/components/Team.astro`**

Write `src/components/Team.astro`:
```astro
---
import { zh } from "../data/content.zh";
import { en } from "../data/content.en";
import MemberCard from "./MemberCard.astro";
const z = zh.team;
const e = en.team;
---
<section class="section team" id="team" aria-labelledby="team-title">
  <hr class="section-divider" />
  <div class="container">
    <p class="eyebrow reveal"><span data-lang="zh">{z.eyebrow}</span><span data-lang="en">{e.eyebrow}</span></p>
    <h2 class="section-title reveal" id="team-title">
      <span data-lang="zh">{z.title}</span><span data-lang="en">{e.title}</span>
    </h2>
    <p class="lede reveal">
      <span data-lang="zh">{z.intro}</span><span data-lang="en">{e.intro}</span>
    </p>

    <div class="member-grid">
      {z.members.map((m, i) => (
        <MemberCard memberZh={m} memberEn={e.members[i]} />
      ))}
    </div>

    <p class="advisors-label reveal">
      <span data-lang="zh">{z.advisorsLabel}</span><span data-lang="en">{e.advisorsLabel}</span>
    </p>
    <div class="member-grid member-grid--advisors">
      {z.advisors.map((m, i) => (
        <MemberCard memberZh={m} memberEn={e.advisors[i]} />
      ))}
    </div>
  </div>
</section>

<style>
  .lede { max-width: 820px; color: var(--text-muted); font-size: 17px; margin-bottom: 56px; }
  .member-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  .advisors-label {
    margin: 64px 0 24px;
    font-family: var(--font-mono);
    font-size: 13px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--accent-cyan);
    position: relative;
    padding-left: 18px;
  }
  .advisors-label::before {
    content: "";
    position: absolute;
    left: 0; top: 50%;
    width: 10px; height: 1px;
    background: var(--accent-cyan);
  }
  .member-grid--advisors { grid-template-columns: repeat(2, minmax(0, 1fr)); max-width: 720px; }
  @media (max-width: 860px) {
    .member-grid, .member-grid--advisors { grid-template-columns: 1fr; }
  }
</style>
```

- [ ] **Step 3: Mount and smoke-test**

Add `import Team from "../components/Team.astro";` to `index.astro`, place `<Team />` after `<Publications />`. Run `npm run dev`. Verify:
- 3 member cards in a row, 2 advisor cards below in a narrower row.
- Monogram circles render aurora gradient with bold first letter.
- Names swap between zh/en correctly.
- Hover lift applies on all 5 cards.

- [ ] **Step 4: Commit**

Run:
```bash
git add src/components/MemberCard.astro src/components/Team.astro src/pages/index.astro
git commit -m "feat: team section with member + advisor cards and monogram fallback"
```

---

## Task 13: Contact section

**Files:**
- Create: `src/components/Contact.astro`

- [ ] **Step 1: Create `src/components/Contact.astro`**

Write `src/components/Contact.astro`:
```astro
---
import { zh } from "../data/content.zh";
import { en } from "../data/content.en";
const z = zh.contact;
const e = en.contact;

const iconPath: Record<string, string> = {
  github:      "M12 .5a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.07 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.5 3.17-1.18 3.17-1.18.62 1.6.23 2.78.11 3.07.73.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z",
  huggingface: "M9.5 2.5l2.5 1 2.5-1 1.5 2 2.5.5.5 2.5 1.5 2-1 2.5 1 2.5-2 1.5-1 2-2.5.5-1.5 2-2.5-1-2.5 1-1.5-2-2.5-.5-.5-2.5-1.5-2 1-2.5-1-2.5 2-1.5 1-2 2.5-.5 1.5-2z",
  scholar:     "M12 2L1 8l11 6 9-4.91V17h2V8L12 2zm-7 9.2v4.7c0 1.66 3.13 3 7 3s7-1.34 7-3v-4.7l-7 3.83-7-3.83z",
  bilibili:    "M5 4h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm4 6v6l5-3-5-3z",
  x:           "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z",
};
---
<section class="section contact" id="contact" aria-labelledby="contact-title">
  <hr class="section-divider" />
  <div class="container">
    <p class="eyebrow reveal"><span data-lang="zh">{z.eyebrow}</span><span data-lang="en">{e.eyebrow}</span></p>
    <h2 class="section-title reveal" id="contact-title">
      <span data-lang="zh">{z.title}</span><span data-lang="en">{e.title}</span>
    </h2>
    <p class="lede reveal">
      <span data-lang="zh">{z.body}</span><span data-lang="en">{e.body}</span>
    </p>

    <div class="contact-grid">
      <div class="contact-block contact-email reveal">
        <p class="contact-block-label">Email</p>
        <a class="btn btn-primary" href={`mailto:${z.email}`}>
          <span data-lang="zh">{z.emailCtaLabel}</span><span data-lang="en">{e.emailCtaLabel}</span>
          <span class="contact-email-addr">{z.email}</span>
        </a>
      </div>

      <div class="contact-block contact-wechat reveal">
        <p class="contact-block-label">
          <span data-lang="zh">{z.wechatTitle}</span><span data-lang="en">{e.wechatTitle}</span>
        </p>
        <div class="qr-placeholder" aria-hidden="true">
          <span>QR</span>
        </div>
        <p class="contact-wechat-note">
          <span data-lang="zh">{z.wechatNote}</span><span data-lang="en">{e.wechatNote}</span>
        </p>
      </div>

      <div class="contact-block contact-socials reveal">
        <p class="contact-block-label">Channels</p>
        <ul class="socials">
          {z.socials.map((s, i) => {
            const disabled = s.disabled;
            const path = iconPath[s.icon] ?? "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z";
            return (
              <li>
                <a
                  class={`social${disabled ? " is-disabled" : ""}`}
                  href={disabled ? undefined : s.href}
                  aria-label={s.label}
                  aria-disabled={disabled ? "true" : undefined}
                  title={disabled ? "Link coming soon" : s.label}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path d={path} fill="currentColor"></path>
                  </svg>
                  <span class="social-label">{s.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </div>
</section>

<style>
  .lede { max-width: 820px; color: var(--text-muted); font-size: 17px; margin-bottom: 56px; }
  .contact-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr 1.2fr;
    gap: 24px;
  }
  .contact-block {
    padding: 28px;
    background: var(--surface);
    border: 1px solid var(--surface-border);
    border-radius: var(--radius-card);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow-card);
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .contact-block-label {
    font-family: var(--font-mono);
    font-size: 12px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--text-muted);
  }
  .contact-email .btn-primary { display: inline-flex; flex-direction: column; align-items: flex-start; padding: 16px 22px; }
  .contact-email-addr { font-family: var(--font-mono); font-size: 12px; opacity: 0.7; }

  .qr-placeholder {
    width: 160px;
    height: 160px;
    border: 1px dashed var(--surface-border-strong);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-dim);
    font-family: var(--font-mono);
    letter-spacing: 0.18em;
    background: rgba(127, 215, 255, 0.04);
  }
  .contact-wechat-note { font-size: 13px; color: var(--text-muted); }

  .socials { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .social {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 14px;
    border-radius: 10px;
    border: 1px solid var(--surface-border);
    color: var(--text-muted);
    font-size: 13px;
    transition: border-color 160ms var(--ease-out), color 160ms var(--ease-out), background 160ms var(--ease-out);
  }
  .social:hover { border-color: var(--accent-cyan); color: var(--accent-cyan); background: rgba(127, 215, 255, 0.04); }
  .social.is-disabled { opacity: 0.5; cursor: not-allowed; pointer-events: none; }
  .social-label { font-family: var(--font-mono); letter-spacing: 0.08em; }

  @media (max-width: 980px) {
    .contact-grid { grid-template-columns: 1fr; }
  }
</style>
```

- [ ] **Step 2: Mount and smoke-test**

Add `import Contact from "../components/Contact.astro";` to `index.astro` and place `<Contact />` after `<Team />`. Run `npm run dev` and verify the 3-column contact grid with email button, WeChat QR placeholder, and 5 social tiles.

- [ ] **Step 3: Commit**

Run:
```bash
git add src/components/Contact.astro src/pages/index.astro
git commit -m "feat: contact section with email CTA, WeChat QR placeholder, social grid"
```

---

## Task 14: Footer + final index wire-up

**Files:**
- Create: `src/components/Footer.astro`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Create `src/components/Footer.astro`**

Write `src/components/Footer.astro`:
```astro
---
import { zh } from "../data/content.zh";
import { en } from "../data/content.en";
const z = zh.footer;
const e = en.footer;
---
<footer class="footer">
  <hr class="section-divider" />
  <div class="container footer-inner">
    <p class="footer-copy">{z.copyright}</p>
    <p class="footer-tag">
      <span data-lang="zh">{z.tagline}</span><span data-lang="en">{e.tagline}</span>
    </p>
  </div>
</footer>

<style>
  .footer { padding-block: 36px 56px; }
  .footer-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
  .footer-copy, .footer-tag { font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.12em; color: var(--text-dim); }
</style>
```

- [ ] **Step 2: Finalize `src/pages/index.astro`**

Replace `src/pages/index.astro` with:
```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import Nav from "../components/Nav.astro";
import Hero from "../components/Hero.astro";
import Philosophy from "../components/Philosophy.astro";
import Directions from "../components/Directions.astro";
import Publications from "../components/Publications.astro";
import Team from "../components/Team.astro";
import Contact from "../components/Contact.astro";
import Footer from "../components/Footer.astro";
---
<BaseLayout>
  <Nav />
  <main>
    <Hero />
    <Philosophy />
    <Directions />
    <Publications />
    <Team />
    <Contact />
  </main>
  <Footer />
</BaseLayout>
```

- [ ] **Step 3: Full-page smoke test**

Run:
```bash
npm run dev
```
Walk through the page end-to-end:
- All 7 sections render in order: Hero → Philosophy → Directions → Publications → Team → Contact → Footer.
- Nav anchor links scroll smoothly to each section.
- zh↔en toggle changes every visible text element.
- Page works after refresh; language persists.
- Resize to 375px wide: nav collapses to hamburger, every grid drops to a single column, hero stays readable.
- `prefers-reduced-motion: reduce` (DevTools rendering tab): no scroll-reveal motion, no particles animating.

- [ ] **Step 4: Production build check**

Run:
```bash
npm run build
```
Expected: success, no warnings about unresolved imports. `dist/index.html` should exist and contain both Chinese and English text spans.

Verify:
```bash
grep -c 'data-lang="zh"' dist/index.html
grep -c 'data-lang="en"' dist/index.html
```
Both should return a positive number (>20).

- [ ] **Step 5: Commit**

Run:
```bash
git add src/components/Footer.astro src/pages/index.astro
git commit -m "feat: footer and final index wire-up — full homepage assembled"
```

---

## Task 15: GitHub Pages deployment workflow

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Create `.github/workflows/deploy.yml`**

Write `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build site
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Commit**

Run:
```bash
git add .github/workflows/deploy.yml
git commit -m "ci: GitHub Pages deploy workflow for Astro build"
```

- [ ] **Step 3: README**

Write `README.md`:
```markdown
# AIGC Research · Homepage

Single-page Astro site for the AIGC Research / AI4C team.
Live: https://aigcresearch.github.io

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # serve dist/
```

## Stack

- Astro 4 (static)
- Vanilla TypeScript + CSS, no UI framework
- Canvas2D particle field (Hero)
- IntersectionObserver scroll reveal
- GitHub Actions → GitHub Pages

## Content

All copy lives in `src/data/content.zh.ts` and `src/data/content.en.ts`. Both files share the schema in `src/data/types.ts`.
```

Run:
```bash
git add README.md
git commit -m "docs: README with dev/build instructions and stack overview"
```

- [ ] **Step 4: Final state check**

Run:
```bash
git log --oneline | head -20
git status --short
```
Expected: clean working tree, ~15 new commits since the spec was added. `npm run build` still passes.

---

## Self-Review

- **Spec coverage** ✅
  - §3 Information architecture → Tasks 6–14 (one task per section)
  - §4.1 Color tokens → Task 4
  - §4.2 Fonts → Task 6 (BaseLayout fonts preconnect)
  - §4.3 Card language (glass + cut-corner + hover lift) → Tasks 9–13
  - §4.4 Motion (particles, reveal, frosted nav, lang fade, reduced-motion) → Tasks 4, 6, 7, 8
  - §4.5 Grid & rhythm → Tasks 4, 9–13
  - §5 File structure → Tasks 3, 5, 6
  - §6 Data schema → Task 5
  - §7 Lang toggle implementation → Tasks 6, 7
  - §8 Particle field → Task 8
  - §9 Deployment → Task 15
  - §10 A11y (focus rings, aria-hidden canvas, reduced-motion) → Tasks 4, 6, 8
  - §11 Mobile (hamburger, single-column, no particles) → Tasks 7, 8, 9–13
  - §12 Placeholder strategy (monogram, disabled links, QR placeholder) → Tasks 11, 12, 13
  - §13/§14 Content drafts → Task 5
  - §16 Acceptance criteria → covered by smoke tests in Tasks 7, 8, 14 and build check in Task 14
- **Placeholder scan** ✅ — every code step contains complete code; no TODOs.
- **Type consistency** ✅ — `Content`, `Member`, `Publication`, `Link`, `SocialLink` types referenced across tasks all match the definitions in Task 5; component props names (`memberZh`/`memberEn`, `itemZh`/`itemEn`) consistent between PubCard / MemberCard and their consumers.
