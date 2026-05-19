# AIGC Research 团队主页 · 设计文档

- 日期：2026-05-19
- 作者：AIGC Research / AI4C Team
- 视觉锚点：`1779185054034_download.png`
- 内容锚点：`docs/homepage-content-plan.zh-CN.md`
- 状态：Brainstorming 已通过，待 spec 审阅

> 备注：此文件覆盖了同名旧版本（旧版基于纯 HTML + Three.js + AOS）。本次确认的方案为 Astro + 自实现粒子 + IntersectionObserver。

---

## 1. 目标

为 AIGC Research（AI4C — AI for Creativity）团队制作一个单页 homepage，传达：

1. **我们是谁**：聚焦创意人工智能、影视动画生成与底层智能研究的小型研究团队。
2. **我们在做什么**：围绕"通用创意智能"与"智能创意工作流"两条主线推进研究。
3. **我们为什么值得关注**：兼具学术深度与工程落地能力，并已积累若干代表成果。

整体气质：艺术 + 科学，电影感，现代前沿科技风，克制大气。

## 2. 技术决策

| 项 | 选择 | 理由 |
|---|---|---|
| 框架 | **Astro** | 静态站点 + Island Hydration，符合单页 + 轻交互需求 |
| 内容范围 | **核心叙事版**（6 大 section） | 聚焦主叙事；其他板块延后到第二阶段 |
| 多语言 | **同页 zh ⇄ en 切换器** | 两份内容同在一份 HTML，`data-lang` 切换显隐；URL 不变 |
| 动效 | **丰富动效** | Hero 粒子星空 + scroll-reveal + hover 微光 |
| 团队 | **全员上 + 占位** | 暂用 monogram 头像 fallback，资料补全后替换 |
| 部署 | **GitHub Pages** | 仓库即 `aigcresearch.github.io`，恢复历史 workflow |

## 3. 信息架构

页面自上而下 7 个区块（含 Nav 与 Footer）：

| # | Section | 角色 | 关键元素 |
|---|---|---|---|
| 0 | **Nav**（fixed top，滚动后毛玻璃化） | 全局导航 | 左：AIGC Research 字标 / 右：5 个锚点链接 + zh⇄en 切换器 |
| 1 | **Hero** | 第一印象 | 全屏粒子星空背景；中文主标题 + 英文副标题；2 个 CTA |
| 2 | **Philosophy / 研究核心理念** | 树立叙事 | 引言 + 三条 pillar：电影级标准 / 设计思维 / 工作流落地 |
| 3 | **Directions / 研究方向** | 主线展开 | 两张并排长卡片：通用创意智能 / 智能创意工作流 |
| 4 | **Publications / 代表成果** | 证明力 | 4 主卡（ViStoryBench / StyleMe3D / ShotStudio / Act2Cut）+ 1 条带卡（Awesome-PaperDaily） |
| 5 | **Team / 团队成员** | 谁在做 | 3 成员卡 + 分隔线 + 2 导师卡 |
| 6 | **Contact / 合作与联系** | 转化 | 邀请文案 + 邮箱按钮 + 公众号占位 + 外链图标 |
| 7 | **Footer** | 收尾 | © 2026 AIGC Research · AI4C Team |

- 导航锚点 5 个：理念 / 方向 / 成果 / 团队 / 联系。
- zh ↔ en 切换器位于 nav 右侧；状态保存到 `localStorage.lang`，刷新保留。
- 默认语言：中文。

## 4. 视觉系统

### 4.1 配色（深空电影感）

| Token | 值 | 用途 |
|---|---|---|
| `--bg-deep` | `#06090F` | 页面底色（近黑） |
| `--bg-nebula` | linear-gradient `#0B1A2E` → `#142A4A` | Hero / 大块背景层 |
| `--surface` | `rgba(18, 32, 56, 0.55)` + backdrop-blur(12px) | 卡片玻璃面 |
| `--surface-border` | `rgba(120, 180, 255, 0.12)` | 卡片描边 |
| `--accent-cyan` | `#7FD7FF` | 主点缀 / 链接 hover |
| `--accent-aurora` | linear-gradient `#5C8DFF` → `#9B7BFF` | CTA / 关键 tag |
| `--text-primary` | `#E8EEF7` | 主文本 |
| `--text-muted` | `rgba(232, 238, 247, 0.62)` | 次要文本 |
| `--gold-faint` | `#F2C58A` （≤8% 用量） | 强调点（如 Project Page 按钮） |

色相严格控制在 蓝-青-紫 区间，金色仅作微量提亮。

### 4.2 字体

- 中文：`"Noto Sans SC"`（fallback `PingFang SC`, `Microsoft YaHei`）；主标题 600，正文 400。
- 英文 / 字标：`"Inter"` 或 `"Sora"`（fallback system）。
- 数字 / 代号：`"Space Grotesk"`（科技感）。
- 字号节奏：H1 56px / H2 36px / H3 22px / body 16px / micro 13px。
- 行距：中文 1.75 / 英文 1.55。

### 4.3 卡片语言

- 玻璃面 + 1px 冷光描边，圆角 16px，阴影 `0 12px 40px rgba(80,140,255,.08)`。
- 角部装饰：左上 / 右下两个 12px 短切线（细青或细金），呼应电影 cut-corner。
- Hover：整卡 `translateY(-6px)`，描边亮度 .12 → .35，背景生成径向辉光。

### 4.4 动效

1. **Hero 粒子层**：Canvas2D ~800 颗星点 + 缓慢漂移 + 鼠标视差。
2. **Scroll-reveal**：IntersectionObserver；`.reveal` → `.in-view`；`opacity 0→1 + translateY 20→0`，错峰 80ms。
3. **导航毛玻璃化**：scrollY > 40 时 nav 加 backdrop-blur + 半透底色。
4. **语言切换**：fade 150ms cross-dissolve。
5. **CTA 按钮**：default outline → hover 注入 aurora 渐变 + `scale(1.02)`。
6. **prefers-reduced-motion**：`reduce` 时关闭粒子动画与位移过渡，仅保留 hover 颜色变化。

### 4.5 网格 & 节奏

- 容器宽：`min(1240px, 92vw)`。
- section 上下 padding：桌面 120px，移动 64px。
- 栅格：成果区 桌面 4 列 / 平板 2 列 / 手机 1 列；团队区 桌面 3 列。
- 分隔靠"冷光横线 + section 标题左侧·装饰"。

## 5. 文件结构

```
aigcresearch.github.io/
├── astro.config.mjs              # site / base path
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   ├── background.png            # Hero 备用底图（已存在）
│   └── images/                   # 后续头像 / 作品缩略图
├── src/
│   ├── data/
│   │   ├── content.zh.ts         # 中文文案
│   │   └── content.en.ts         # 英文文案
│   ├── layouts/
│   │   └── BaseLayout.astro      # html/head/全局字体 & meta
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
│   │   └── Footer.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       ├── tokens.css            # CSS 变量
│       ├── global.css            # reset + 排版
│       └── motion.css            # 动效 + reduced-motion
└── .github/
    └── workflows/
        └── deploy.yml
```

## 6. 数据与文案

所有文案集中到 `src/data/content.zh.ts` 与 `src/data/content.en.ts`，每个文件导出同构 Schema：

```ts
export const content = {
  meta: { title, description },
  nav:  { brand, links: [{ id, label }], cta },
  hero: { headline, subhead, intro, ctas: [{ label, href }] },
  philosophy: { title, intro, pillars: [{ icon, title, body }] },
  directions: { title, intro, items: [{ title, tagline, body, tags: string[] }] },
  publications: { title, items: [{ id, title, tagline, body, links: [{ label, href }] }] },
  team: { title, intro, members: Member[], advisors: Member[] },
  contact: { title, body, email, socials: [{ icon, label, href }], wechatNote },
  footer: { copyright },
};
```

`Member`：`{ name, role, affiliation, bio, monogram, avatar?, links: { homepage?, scholar?, github?, email? } }`。

未提供资料字段的占位策略：
- 无 avatar → 渲染 monogram（姓首字母圆环）。
- 待补简介 → 显示 "简介待补充" / "Bio coming soon"，保留卡片高度。

## 7. 多语言切换实现

- `BaseLayout` 输出 `<html lang="zh-CN" data-lang="zh">`。
- 文案级粒度：所有 zh 文本 wrap `<span data-lang="zh">…</span>`，en 文本 wrap `<span data-lang="en">…</span>`。
- 全局 CSS：
  ```css
  html[data-lang="zh"] [data-lang="en"] { display: none; }
  html[data-lang="en"] [data-lang="zh"] { display: none; }
  ```
- `LangToggle.astro` 内联 `<script>` 读 `localStorage.lang` 同步 `dataset.lang`，点击时切换并写回；同时更新 `<html lang>` 属性。
- SSG 出来的 HTML 同时包含两份内容，无 JS 时 fallback 显示中文（默认 `data-lang="zh"`）。

## 8. 粒子星空实现

`ParticleField.astro` 内联 `<canvas>` + 客户端脚本：

- 800 颗星点，初始随机分布；每帧 `x += vx; y += vy` 缓慢漂移。
- 部分高亮星（~5%）有 sin 微闪。
- 鼠标移动时整体偏移 `mouseX * 0.005`（视差）。
- Resize 重排；离屏时停 RAF（`document.hidden`）。
- `prefers-reduced-motion: reduce` 时绘一帧静态星图后不再 RAF。
- 移动端（< 768px）不启用粒子，使用 background.png + 暗渐变蒙层。

## 9. 部署

`astro.config.mjs`：

```js
export default defineConfig({
  site: 'https://aigcresearch.github.io',
  base: '/',
  output: 'static',
});
```

`.github/workflows/deploy.yml`（push 到 `main` 触发）：

1. checkout
2. setup-node 20 + npm ci
3. `npm run build`
4. `actions/configure-pages`
5. `actions/upload-pages-artifact` (path: `dist`)
6. `actions/deploy-pages`

权限：`pages: write`, `id-token: write`。

## 10. 可访问性

- 所有 section 用语义标签（`<section aria-labelledby>`）。
- 粒子 canvas `aria-hidden="true"`。
- 颜色对比度：主文本 `#E8EEF7` on `#06090F` ≥ 14:1；muted 文本 ≥ 4.5:1。
- 焦点环：键盘 focus 状态 `outline: 2px solid var(--accent-cyan)`，永远可见。
- `prefers-reduced-motion: reduce` 受尊重。

## 11. 移动端

- < 768px：nav 折叠为汉堡 + 浮层；hero 字号下降；卡片单列；section padding 64px。
- 不再生成粒子星空（性能 + 电池）；改用 background.png + 暗渐变蒙层。

## 12. 占位与待补资源

| 类型 | 当前状态 | 占位策略 |
|---|---|---|
| 团队成员头像 | 缺失 | monogram 圆环（取姓首字母 Z / H / D / C / X） |
| 成员简介（胡耀淇 / 董政） | 缺失 | "简介待补充 / Bio coming soon" |
| 论文卡缩略图 | 缺失 | background.png 局部 + 渐变蒙层 |
| Awesome-PaperDaily logo | 缺失 | 字标 + 渐变背板 |
| 微信公众号二维码 | 缺失 | 占位框 + "扫码关注 AIGC Research" |
| 外链 URL | 部分缺失 | 缺失链接渲染为 `aria-disabled` + tooltip "Link coming soon" |

## 13. 内容草稿（zh）

### Hero
- 主标题：**创意人工智能研究计划：从"工作流"走向"创意流"**
- 副标题：AI for Creativity Research Team
- 引言：我们致力于推动 AIGC 技术赋能艺术创作与内容生产，围绕"通用创意智能"与"智能创意工作流"开展持续研究，探索机器如何理解创作、参与创作，并服务未来影视级内容生产。
- CTA：[了解研究方向] [查看代表成果]

### Philosophy
秉持"以 AIGC 技术赋能艺术创作与内容生产，开启独立创作时代"的核心理念，本计划以"影视级动画"作为研究切入点。

三 pillar：
1. **电影级标准** — 镜头语言、视听协同、叙事节奏、情感传达。
2. **设计思维** — 让 AI 具备顶层设计能力，从生成器进化为创作者。
3. **工作流落地** — 真正进入 2D / 3D 动画生产流水线。

### Directions
1. **通用创意智能 · General Creative Intelligence** — 关注 AI 如何获得在创作中进行顶层设计的能力。研究多模态感知、跨模态设计对齐、美学认知与创作推理。Tags：多模态感知 · 跨模态对齐 · 创作推理 · 美学认知 · 设计思维智能体。
2. **智能创意工作流 · Intelligent Creative Workflow** — 将创意智能体引入内容生产流程，覆盖 1D 音频 → 2D 图像 → 3D 几何资产 → 4D 视频的全数据形态。Tags：智能体落地 · 2D/3D/4D 内容 · 多模态交互 · 影视动画工作流 · Workflow → Creative Flow。

### Publications
- **ViStoryBench** — 面向视觉故事讲述的综合性基准测试。Buttons: Tech Report / Code / Dataset / Project Page / Browse Results。
- **StyleMe3D** — 3D 高斯下的风格化生成，多编码器与解耦先验。Buttons: Tech Report / Project Page / Code。
- **ShotStudio** — 面向完整影视创作流程的 AIGC 框架。Buttons: Code / Demo / Docs。
- **Act2Cut** — 多镜头视频叙事的动作连续性与电影化镜头衔接。Buttons: Paper / Project Page / Code。
- **Awesome-PaperDaily**（条带卡） — 持续追踪 AIGC 前沿进展的开源知识整理项目。Buttons: Code。

### Team
- 成员：庄才林（上海科技大学硕士，AIGC）/ 胡耀淇（待补充）/ 董政（待补充）。
- 导师：程巍（阶跃星辰研究科学家，生成式 AI）/ 夏清零（重庆理工大学，生物医学工程）。
- 引言：AIGC Research 由一支关注创意人工智能、生成式模型与跨学科基础研究的小型团队组成。

### Contact
- 文案：如果您对我们的研究方向、项目合作、学术交流、开源共建或创意生产系统落地感兴趣，欢迎与我们取得联系。
- 邮箱按钮 + 微信公众号占位 + 外链图标（GitHub / Hugging Face / Scholar / Bilibili / X）。

## 14. 内容草稿（en）

镜像中文版结构。Hero 英文头条：**Creative AI Research — From Workflow to Creative Flow**；副标题 `AI for Creativity Research Team`。引言、philosophy、directions、publications、team、contact 各自英文版本，基于 `docs/homepage-content-plan.zh-CN.md` 中给出的英文摘要与用户提供的英文 welcome 文案扩写：

> Welcome to AIGC Research! We are the AI4C Team (AI for Creativity), dedicated to advancing artistic content creation. Our work focuses on two key pathways: "AI with Design Thinking" and "AI in Creative Workflows". Our ultimate vision is to democratize animation filmmaking and television production.

## 15. 非目标（NOT in scope）

- 不做新闻 / 动态板块（延后到第二阶段）。
- 不做开源生态地图、技术博客、在研探索板块（延后）。
- 不做后台 CMS / 内容数据库；文案仅以静态 TS 文件维护。
- 不做暗黑/明亮模式切换；只提供暗色（电影感）一套。
- 不做 SSR；纯静态构建。

## 16. 验收标准

- [ ] `npm run dev` 本地可访问，6 个 section 完整呈现。
- [ ] zh ⇄ en 切换即时，刷新后保留语言。
- [ ] 桌面 1440 / 平板 768 / 手机 375 三档断点显示无错位。
- [ ] Lighthouse Performance ≥ 85（本地构建静态资源）。
- [ ] `prefers-reduced-motion: reduce` 下无位移与粒子动画。
- [ ] GitHub Actions 构建通过，GitHub Pages 部署成功。
- [ ] 待补内容均有清晰占位，不出现裸 `TBD` / 空白。
