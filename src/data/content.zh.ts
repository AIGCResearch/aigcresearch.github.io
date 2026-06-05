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
    title: "研究方向",
    intro:
      "我们的研究围绕三条主线协同推进：通用创意智能关注机器创造力的边界，智能创意工作流关注人类创造力的释放方式，科学智能关注生命认知的边界。三者并行构成从创意理解、生产应用到底层生命认知科学探索的完整研究闭环。",
    items: [
      {
        id: "cgi",
        title: "通用创意智能",
        subtitle: "Creative General Intelligence",
        tagline: "探索机器创造力的边界 —— 从“理解人类创作”出发，赋予AI顶层设计与美学推理的能力。",
        body:
          "我们旨在打破传统AI“只能机械生成、无法理解创作”的局限。本方向不仅研究人类在艺术创作中的意图、过程与认知机制，更致力于让AI真正具备类似人类导演或设计师的“设计思维 (Design Thinking)”。\
          \
          1. 跨模态美学对齐：优秀的艺术作品源于对声音、画面与故事的整体想象。我们的研究核心是实现文字、音乐、色彩、情感与动态效果等跨模态设计元素的深度对齐，赋予AI顶层的美学感知和全景式构思能力，使其不仅能生成素材，更能理解创作背后的美学逻辑。\
          2. 大模型的可解释性与轻量化： 从微观（神经元激活表征）、中观（子网络与注意力机制协同）到宏观（整体泛化与涌现能力）三个尺度，深度剖析生成式大模型的内在机理。通过揭示这些“黑盒”规律，指导算法优化与架构精简，实现“以小博大”的高效、轻量化计算。",
        tags: [
          "多模态感知",
          "跨模态对齐",
          "创作推理",
          "设计思维",
          "美学感知",
        ],
      },
      {
        id: "icw",
        title: "智能创意工作流",
        subtitle: "Intelligent Creative Workflow",
        tagline: "探索人类创造力的边界 —— 从“数字资产高效生产”出发，将创意智能体融入工业流水线，解放人类生产力。",
        body:
          "我们专注于将前沿的AI能力转化为高效的生产力工具。通过解决2D/3D动画及影视制作中耗时费力的机械性劳动，让创作者从繁琐的重复性工作中抽离出来，专注于灵感本身。\
          \
          1. 全维度多模态交互： 我们的研究横跨一维音频、二维原画、三维几何资产到四维时空视频。通过打破单一的“图文驱动 (Text/Image-to-X)”局限，拓展更符合艺术家直觉的交互方式（如动作、音频或多模态协同驱动）。\
          2. 生产应用范式的革命： 推动生成式AI与现有成熟工业流流水线的深度融合，解决视觉预览、冷启动3D建模、手工补间帧等具体痛点，实现从繁琐的“工作流 (Workflow)”到纯粹的“创意流 (Creative Flow)”的范式转变。",
        tags: [
          "全维度多模态交互",
          "2D/3D/4D 内容",
          "数字资产生产",
          "影视动画工作流",
          "工业流水线融合",
        ],
      },
      {
        id: "ai4s",
        title: "科学智能",
        subtitle: "AI for Science / Neuroscience",
        tagline: "探索生命认知的边界 —— 借鉴神经生物学与认知科学，开展“类脑研究”与“科学赋能”的双向互哺。",
        body:
          "我们聚焦于人工智能与神经科学的交叉前沿。通过将计算科学与生物智能深度结合，寻找下一代AI架构的突破口，同时利用AI技术拓展人类对大脑的认知边界。\
          \
          1. 向内借鉴 (仿真驱动的类脑研究)： 引入前沿神经科学理论，将复杂的生物学神经机制转化为可计算的数学模型。通过构建对应大脑不同功能区及脑网络的数学模型与神经网络算法，寻求AI模型架构层面的突破。\
          2. 向外赋能 (AI驱动的神经科学)： 利用先进的生成式AI与数据分析技术，反哺神经科学研究。辅助科学家探索人类大脑复杂的神经连接机制和疾病机理，在脑科学领域发掘并解决具有重大价值的科学难题，并推动临床应用。",
        tags: [
          "类脑研究",
          "神经科学",
          "双向互哺",
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
          { label: "Paper", href: "https://arxiv.org/abs/2505.24862" },
          { label: "Code", href: "https://github.com/ViStoryBench/vistorybench" },
          { label: "Dataset", href: "https://huggingface.co/datasets/ViStoryBench/ViStoryBench" },
          { label: "Project Page", href: "https://vistorybench.github.io/" },
        ],
      },
      {
        id: "styleme3d",
        title: "StyleMe3D",
        tagline: "3D 高斯下的解耦先验风格化。",
        body:
          "在 3D 高斯表示下探索可控、可交互、可扩展的风格化生成，通过多编码器与解耦先验实现稳定的风格控制，体现团队对 3D 作为创作媒介的长期判断。",
        links: [
          { label: "Paper", href: "https://arxiv.org/abs/2504.15281" },
          { label: "Project Page", href: "https://styleme3d.github.io/" },
          { label: "Code", href: "https://github.com/AIGCResearch/styleme3d" },
        ],
      },
      {
        id: "shotstudio",
        title: "ShotStudio",
        tagline: "面向完整影视创作流程的 AIGC 框架。",
        body:
          "将创意理解、镜头组织、素材生成与创作流程协同串联起来，是面向未来电影生成与影视创作系统的重要框架原型，也是不断演化的创意工作流实验场。",
        links: [
          { label: "Code", href: "https://github.com/AIGCResearch/ShotStudio" },
          { label: "Demo", href: "https://aigcresearch.github.io/ShotStudio/" },
          { label: "Docs", href: "https://github.com/AIGCResearch/ShotStudio/blob/main/README.md" },
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
          { label: "Project Page", href: "https://aigcresearch.github.io/Act2Cut.github.io/" },
          { label: "Code", href: "#", disabled: true },
        ],
      },
      {
        id: "awesome-paperdaily",
        title: "Awesome-PaperDaily",
        tagline: "持续追踪 AIGC 前沿进展的开源知识整理项目。",
        body:
          "体现团队在知识组织、趋势追踪与社区共享方面的持续投入，不仅服务于内部研究，也希望与更广泛社区共同推动 AIGC 发展。",
        links: [{ label: "Code", href: "https://github.com/AIGCResearch/Awesome-PaperDaily" }],
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
        affiliation: "上海科技大学硕士，复旦大学博0",
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
        affiliation: "—",
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
        links: {
          google_scholar: "https://scholar.google.com/citations?user=OC8eBkYAAAAJ&hl=zh-TW",
        },
      },
      {
        name: "李梦甜",
        monogram: "X",
        role: "学术界导师",
        affiliation: "上海大学 · 上海电影学院",
        bio: "研究方向为AI电影。",
        links: {
          personal_page: "https://mengtianli.github.io/cv/",
          google_scholar: "https://scholar.google.com/citations?user=SFvOV2oAAAAJ&hl=zh-CN",

        },
      },
      {
        name: "夏清玲",
        monogram: "X",
        role: "学术界导师",
        affiliation: "重庆理工大学",
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
      { icon: "huggingface", label: "Hugging Face", href: "https://huggingface.co/ViStoryBench" },
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
