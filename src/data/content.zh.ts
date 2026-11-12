import type { Content } from "./types";

export const zh: Content = {
  meta: {
    title: "AIGC Research · AI4C 创意人工智能研究院",
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
    eyebrow: "AI for Generative Creativity Research",
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
    title: "核心理念",
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


  
  // directions: {
  //   eyebrow: "Research Directions",
  //   title: "研究方向",
  //   intro:
  //     "我们的研究围绕两条主线协同推进：通用创意智能关注机器创造力的边界，智能创意工作流关注人类创造力的释放方式，二者并行构成从创意理解到创意生产的完整研究闭环。",
  //   items: [
  //     {
  //       id: "gci",
  //       title: "通用创意智能",
  //       subtitle: "General Creative Intelligence",
  //       tagline: "从“素材生成器”走向“具有设计思维的创意智能体”。",
  //       body:
  //         "我们关注 AI 如何获得在创作中进行顶层设计的能力。导演构思叙事作品时，本质上是在脑海中同时组织声音、画面、动作、节奏与故事逻辑，进行跨模态的整体想象。本方向重点研究多模态感知、跨模态语义对齐、设计元素建模、美学认知与创作推理，使模型能够理解声音、画面、叙事与情绪之间的复杂关系。",
  //       tags: [
  //         "多模态感知",
  //         "跨模态对齐",
  //         "创作推理",
  //         "美学认知",
  //         "设计思维智能体",
  //       ],
  //     },
  //     {
  //       id: "icw",
  //       title: "智能创意工作流",
  //       subtitle: "Intelligent Creative Workflow",
  //       tagline: "让工具适应创作，而不是让艺术家适应工具。",
  //       body:
  //         "我们关注如何将创意智能体真正引入内容生产流程，减少 2D / 3D 动画制作中视觉预览、冷启动建模、补间帧、多镜头衔接等耗时环节的重复劳动。覆盖从 1D 音频、2D 图像、3D 几何资产到 4D 视频的全数据形态，打破单一图文驱动范式，构建更贴近影视动画创作直觉的多模态交互机制。",
  //       tags: [
  //         "智能体落地",
  //         "2D/3D/4D 内容",
  //         "多模态交互",
  //         "影视动画工作流",
  //         "Workflow → Creative Flow",
  //       ],
  //     },
  //   ],
  // },

  directions: {
    eyebrow: "Research Directions",
    title: "实验室与工作室",
    intro:
      "通用创意智能实验室负责基础研究，智能影像叙事实验室聚焦应用研究，星联无限灵感工作室专注创作实践。",
    items: [
      {
        id: "cgi",
        title: "通用创意智能实验室",
        subtitle: "Creative General Intelligent Lab",
        tagline: "探索机器创造力的边界：从“机械生成”到“设计思维”",
        body: `从“理解人类创作”出发，我们旨在打破传统 AI 的局限，融合顶层设计思维、类脑启发与科学赋能，研究人类创作意图与认知机制，赋予 AI 类似导演或设计师的创造性智能。

1. 跨模态美学对齐
深度对齐文字、音乐、色彩、情感与动态效果，赋予 AI 美学感知、创作推理与全景构思能力。

2. 可解释性与轻量化
从微观、中观到宏观多尺度剖析大模型“黑盒”机理，以机理解析指导架构优化，实现“以小博大”的高效轻量计算。

3. 类脑启发与双向赋能
内化探索：将创造力神经机制转化为可计算模型，研发下一代创意智能架构。
外哺科研：利用生成式 AI 反哺神经科学，辅助攻克神经连接、疾病机理、创造力神经机制等重大科学难题。`,
        tags: ["跨模态美学", "设计思维", "可解释性", "轻量化", "类脑启发", "神经科学"],
      },
      {
        id: "icn",
        title: "智能影像叙事实验室",
        subtitle: "Intelligent Cinema Narrative Lab",
        tagline: "拓展人类创造力的边界：从“繁琐工作流”到“自由创意流”",
        body: `从"赋能人类创作"出发，我们旨在将前沿 AI 能力转化为创作者可用的智能工具，以支持影像叙事与影视级内容生产，让创作者更专注于故事与表达而非受制于重复劳动，并探索AI时代的原生后期制作范式。

1. 全维度多模态交互
贯穿音频、原画、三维资产至时空视频的全形态，探索动作、音频与多模态协同驱动的高效创作范式。

2. 影像叙事与镜头语言
突破长视频在角色一致性、动作连续性与剧情对齐上的痛点，打造服务于完整故事表达与镜头的智能影像生成技术。

3. 创作流程重塑与落地
深入影视制作环节解构“灯下黑”痛点，构建 AI 原生后期制作新形态，实现从 Workflow 到 Creative Flow 的跨越。`,
        tags: ["全维度多模态交互", "影像叙事", "镜头语言", "数字资产生产", "影视创意流", "AI原生后期制作"],
        team: {
          name: "ActXCut Team",
          description: "ActXCut Team 是智能影像叙事实验室的连续多镜头视频研发团队，围绕跨镜头动作连续性与叙事一致性，开创ActXCut系列研究工作，探索 AI 原生的影像创作与后期制作。",
          logoBase: "/images/logo-actxcut-team",
        },
      },
      {
        id: "starx",
        title: "星联无限灵感工作室",
        subtitle: "StarX Infinite Inspiration Studio",
        tagline: "塑造全新的创意世界：产学研创的灵感落地",
        body: `StarX Studio 旨在连接创意智能研究与真实创作实践，探索人工智能与影像、故事及视觉表达的深度融合，实现从“构思”到“作品”的全程贯穿，并以真实创作经验反哺技术研究。

1. 灵感共创
围绕故事构思、视觉设计与跨媒介表达，探索人机协同在发散、收敛与迭代全过程的交互机制。

2. 作品实践
融合实验室前沿研究与创作者实际经验，打造并持续迭代具备高展示度与实用性的影像作品与创意原型。

3. 创作反馈
从真实制作流程中精准提炼创作痛点与技术需求，反哺并驱动智能工具与影像叙事方法的持续演进。`,
        tags: ["人机共创", "视觉设计", "跨媒介表达", "作品实践", "创作反馈"],
        team: {
          name: "Seek Team | StarX Team",
          logoBase: "/images/logo-seek-starx-team",
        },
      },
    ],
  },

  publications: {
    eyebrow: "Publications & Projects",
    title: "代表成果",
    intro:
      "整体布局与单点突破｜每项工作都有清晰的研究动机，彼此衔接成一条连贯的研究脉络，如多米诺骨牌般逐步发现并回答一系列具体问题。",
    items: [
      {
        id: "act2cut",
        title: "Act2Cut",
        venue: "SIGGRAPH Asia 2026",
        institutions: "TeleAI · AIGC Research · 复旦大学",
        tagline: "连续动作驱动的多镜头视频生成。",
        body:
          "聚焦电影语言中“动作匹配剪辑”这一长期被忽视的关键问题，让生成式视频系统具备跨镜头动作连续性理解，强调叙事动作与电影语法之间的协同。",
        links: [
          { label: "论文", href: "#", disabled: true },
          { label: "项目主页", href: "https://aigcresearch.github.io/Act2Cut.github.io/" },
          { label: "代码", href: "#", disabled: true },
        ],
      },
      {
        id: "vistorybench",
        title: "ViStoryBench",
        venue: "CVPR 2026",
        institutions: "上海科技大学 · 阶跃星辰 · AIGC Research",
        tagline: "故事可视化基准测试。",
        body:
          "针对定制化视觉故事讲述这一电影生成的核心任务，构建系统性评测框架，衡量模型在角色一致性、风格稳定性、剧情对齐、构图质量与故事可视化方面的真实能力。",
        links: [
          { label: "论文", href: "https://arxiv.org/abs/2505.24862" },
          { label: "代码", href: "https://github.com/ViStoryBench/vistorybench" },
          { label: "数据集", href: "https://huggingface.co/datasets/ViStoryBench/ViStoryBench" },
          { label: "项目主页", href: "https://vistorybench.github.io/" },
        ],
      },
      {
        id: "styleme3d",
        title: "StyleMe3D",
        venue: "ArXiv 2025",
        institutions: "上海科技大学 · 阶跃星辰 · AIGC Research · 光明实验室",
        tagline: "基于解耦先验的 3DGS 风格化。",
        body:
          "在 3D 高斯表示下探索可控、可交互、可扩展的风格化生成，通过多编码器与解耦先验实现稳定的风格控制，体现团队对 3D 作为创作媒介的长期判断。",
        links: [
          { label: "论文", href: "https://arxiv.org/abs/2504.15281" },
          { label: "项目主页", href: "https://styleme3d.github.io/" },
          { label: "代码", href: "https://github.com/AIGCResearch/styleme3d" },
        ],
      },
      {
        id: "shotstudio",
        title: "ShotStudio",
        tagline: "面向完整影视创作流程的 AIGC 框架。",
        body:
          "将创意理解、镜头组织、素材生成与创作流程协同串联起来，是面向未来电影生成与影视创作系统的重要框架原型，也是不断演化的创意工作流实验场。",
        links: [
          { label: "代码", href: "https://github.com/AIGCResearch/ShotStudio" },
          { label: "演示", href: "https://aigcresearch.github.io/ShotStudio/" },
          { label: "文档", href: "https://github.com/AIGCResearch/ShotStudio/blob/main/README.md" },
        ],
      },
      {
        id: "awesome-paperdaily",
        title: "Awesome-PaperDaily",
        institutions: "AIGC Research",
        tagline: "持续追踪 AIGC 前沿进展的开源知识整理项目。",
        body:
          "体现团队在知识组织、趋势追踪与社区共享方面的持续投入，不仅服务于内部研究，也希望与更广泛社区共同推动 AIGC 发展。",
        links: [{ label: "代码", href: "https://github.com/AIGCResearch/Awesome-PaperDaily" }],
        featured: true,
      },
    ],
  },
  team: {
    eyebrow: "Team",
    title: "团队成员",
    intro:
      "AIGC Research 由一支关注创意人工智能、生成式模型与跨学科基础研究的小型团队组成，并与工业界、学术界导师保持持续合作，共同推进从基础问题到创作系统落地的全链路研究。",
    membersLabel: "核心成员",
    members: [
      {
        name: "庄才林",
        monogram: "Z",
        avatar: "/images/team/cailin-zhuang.webp",
        role: "团队成员",
        affiliation: "复旦大学在读博士",
        bio: "研究方向为 AIGC，关注创意人工智能与影视级内容生成。",
        wechatQr: "/images/6703e9890583c36c70358de568aed799.jpg",
        links: {
          homepage: "https://journey-zhuang.github.io/",
          github: "https://github.com/journey-zhuang",
          email: "journeyzhuang@gmail.com",
          google_scholar: "https://scholar.google.com/citations?user=YuOegioAAAAJ&hl=zh-CN",
        },
      },
      {
        name: "胡耀淇",
        monogram: "H",
        role: "团队成员",
        affiliation: "独立研究者",
        bio: "专注于开源社区贡献（Hugging Face）、企业级数据工作流开发，并在多媒体与视觉生成领域具有深厚的研究积累。",
        wechatQr: "/images/9a344fabd81afa4267fec428c2be6d52.jpg",
        links: {
          homepage: "https://github.com/yaoqih",
          github: "https://github.com/yaoqih",
          email: "1375626371@qq.com",
        },
      },
      {
        name: "董政",
        monogram: "D",
        role: "团队成员",
        affiliation: "独立研究者",
        bio: "简介待补充。",
        links: {},
      },
      {
        name: "郭一铭",
        monogram: "G",
        role: "团队成员",
        affiliation: "上海大学本科在读",
        bio: "简介待补充。",
        links: {},
      }
    ],
    advisorsLabel: "合作导师",
    advisors: [
      {
        name: "程巍",
        monogram: "C",
        avatar: "/images/team/wei-cheng.webp",
        role: "工业界导师",
        affiliation: "阶跃星辰 · 研究科学家",
        bio: "研究方向为生成式人工智能。",
        links: {
          google_scholar: "https://scholar.google.com/citations?user=OC8eBkYAAAAJ&hl=zh-TW",
        },
      },
      {
        name: "朱思语",
        monogram: "Z",
        avatar: "/images/team/siyu-zhu.webp",
        role: "学术界导师",
        affiliation: "复旦大学 · 正教授\n上海创智学院 · 全时导师",
        bio: "研究方向为视频世界模型。",
        links: {
          personal_page: "https://sites.google.com/site/zhusiyucs/home",
          google_scholar: "https://scholar.google.com.hk/citations?hl=en&user=vNCnDiMAAAAJ&view_op=list_works&sortby=pubdate",
        },
      },
      {
        name: "李梦甜",
        monogram: "X",
        avatar: "/images/team/mengtian-li.webp",
        role: "学术界导师",
        affiliation: "上海大学 · 上海电影学院 · 教授",
        bio: "研究方向为AI电影。",
        links: {
          personal_page: "https://mengtianli.github.io/",
          google_scholar: "https://scholar.google.com/citations?user=SFvOV2oAAAAJ&hl=zh-CN",

        },
      },
      {
        name: "夏清玲",
        monogram: "X",
        avatar: "/images/team/qingling-xia.webp",
        role: "学术界导师",
        affiliation: "重庆理工大学 · 两江人工智能学院 · 教授",
        bio: "研究方向为生物医学工程。",
        links: {
          google_scholar: "https://scholar.google.com/citations?user=QgwsFLQAAAAJ&hl=zh-CN",
        },
      },
    ],
  },
  contact: {
    eyebrow: "Get in Touch",
    title: "合作与联系",
    body:
      "如果您对我们的研究方向、项目合作、学术交流、开源共建或创意生产系统落地感兴趣，欢迎与我们取得联系。让我们共同塑造一个全新的创意世界。",
    email: "journeyzhuang@gmail.com",
    emailCtaLabel: "邮件联系",
    wechatTitle: "微信公众号",
    wechatNote: "扫码关注 AIGC Research",
    socials: [
      { icon: "github", label: "GitHub", href: "https://github.com/AIGCResearch" },
      { icon: "huggingface", label: "Hugging Face", href: "https://huggingface.co/AIGC-Research" },
      { icon: "youtube", label: "YouTube", href: "https://www.youtube.com/@AIGC_Research" },
      { icon: "bilibili", label: "Bilibili", href: "https://space.bilibili.com/552581860?spm_id_from=333.337.0.0" },
      { icon: "x", label: "X", href: "https://x.com/AIGC_Research" },
    ],
  },
  footer: {
    copyright: "© 2026 AIGC Research",
    tagline: "塑造一个全新的创意世界。",
  },
  langToggle: { zh: "中", en: "EN" },
};
