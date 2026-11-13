import type { Content } from "./types";

export const en: Content = {
  meta: {
    title: "AIGC Research · AI4C — AI for Creativity",
    description:
      "We are the AI4C Team, dedicated to advancing artistic content creation. Our work focuses on Creative General Intelligence and Intelligent TV & Filmmaking.",
  },
  nav: {
    brand: "AIGC Research",
    brandSub: "AI4C",
    links: [
      { id: "philosophy", label: "Philosophy" },
      { id: "directions", label: "Lab" },
      { id: "publications", label: "Pub" },
      { id: "team", label: "Team" },
      { id: "contact", label: "Contact" },
    ],
  },
  hero: {
    eyebrow: "AI for Generative Creativity Research",
    headline: "Creative AI Research",
    subhead: "From Workflow to Creative Flow",
    intro:
      "We are the AI4C Team (AI for Creativity), dedicated to advancing artistic content creation. Our work focuses on two pathways — Creative General Intelligence and Intelligent TV & Filmmaking — toward democratizing animation filmmaking and television production.",
    ctas: [
      { label: "Research Directions", href: "#directions" },
      { label: "Featured Work", href: "#publications" },
    ],
  },
  philosophy: {
    eyebrow: "Philosophy",
    title: "Core Philosophy",
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


  
  // directions: {
  //   eyebrow: "Research Directions",
  //   title: "Two Research Pathways",
  //   intro:
  //     "Our research advances along two pathways. General Creative Intelligence explores the frontier of machine creativity; Intelligent Creative Workflow focuses on releasing human creativity. Together they form a closed loop from creative understanding to creative production.",
  //   items: [
  //     {
  //       id: "gci",
  //       title: "General Creative Intelligence",
  //       subtitle: "通用创意智能",
  //       tagline: "From asset generator to design-thinking creative agent.",
  //       body:
  //         "A film director, when conceiving a narrative, orchestrates sound, image, action, pacing, and story logic simultaneously — a cross-modal act of imagination. This pathway studies how AI can acquire that top-level design capability through multimodal perception, cross-modal alignment, aesthetic cognition, and creative reasoning.",
  //       tags: [
  //         "Multimodal Perception",
  //         "Cross-modal Alignment",
  //         "Creative Reasoning",
  //         "Aesthetic Cognition",
  //         "Design-Thinking Agent",
  //       ],
  //     },
  //     {
  //       id: "icw",
  //       title: "Intelligent Creative Workflow",
  //       subtitle: "智能创意工作流",
  //       tagline: "Let the tools adapt to creators — not the other way around.",
  //       body:
  //         "We bring creative agents into real production, reducing mechanical steps in 2D / 3D animation: previsualization, cold-start 3D modeling, inbetweening, shot transitions, asset recomposition. We cover the full data spectrum — 1D audio, 2D images, 3D geometry, 4D video — and break the single text-to-image paradigm with multimodal interaction grounded in artist intuition.",
  //       tags: [
  //         "Agent Deployment",
  //         "2D/3D/4D Content",
  //         "Multimodal Interaction",
  //         "Film & Animation Workflow",
  //         "Workflow → Creative Flow",
  //       ],
  //     },
  //   ],
  // },

  directions: {
    eyebrow: "Research Directions",
    title: "Labs & Studio",
    intro:
      "The Creative General Intelligent Lab leads foundational research, the Intelligent TV & Filmmaking Lab focuses on applied research, and the StarX Infinite Inspiration Studio specializes in creative practice.",
    items: [
      {
        id: "cgi",
        title: "Creative General Intelligent Lab",
        subtitle: "Creative Intelligence & Brain-inspired AI",
        tagline: "Exploring the Boundaries of Machine Creativity: From Mechanical Generation to Design Thinking",
        body: `Starting from an understanding of human creation, we aim to move beyond the limits of traditional AI. We combine high-level design thinking, brain-inspired insights, and scientific advances to study creative intent and cognition, giving AI creative intelligence akin to that of a director or designer.

1. Cross-modal Aesthetic Alignment
Align text, music, color, emotion, and motion to equip AI with aesthetic perception, creative reasoning, and the ability to conceive works as a whole.

2. Interpretability and Efficiency
Analyze the black-box mechanisms of large models across micro, meso, and macro scales. Use these insights to optimize architectures and achieve efficient, lightweight computation that does more with less.

3. Brain-inspired Insights and Two-way Empowerment
Inward exploration: Turn the neural mechanisms of creativity into computable models to develop next-generation creative intelligence architectures.
Outward scientific impact: Use generative AI to advance neuroscience and help tackle major questions about neural connectivity, disease mechanisms, and the neural basis of creativity.`,
        tags: ["Cross-modal Aesthetics", "Design Thinking", "Interpretability", "Efficiency", "Brain-inspired Research", "Neuroscience"],
      },
      {
        id: "ifm",
        title: "Intelligent TV & Filmmaking Lab",
        subtitle: "Visual Storytelling & Filmmaking",
        tagline: "Expanding the Boundaries of Human Creativity: From Cumbersome Workflows to Free Creative Flow",
        body: `Starting from the goal of empowering human creators, we turn cutting-edge AI capabilities into practical tools for visual storytelling and cinematic content production. We aim to free creators from repetitive work so they can focus on story and expression, while exploring a new paradigm for AI-native post-production.

1. Full-spectrum Multimodal Interaction
Connect the full range of media, from audio and concept art to 3D assets and spatiotemporal video, and explore efficient creation driven by motion, sound, and multimodal collaboration.

2. Visual Storytelling and Cinematic Language
Address the challenges of character consistency, action continuity, and plot alignment in long-form video, developing intelligent video generation that supports complete stories and cinematic composition.

3. Reshaping Creative Production
Examine overlooked pain points across filmmaking, build new forms of AI-native post-production, and move from Workflow to Creative Flow.`,
        tags: ["Full-spectrum Multimodal Interaction", "Visual Storytelling", "Cinematic Language", "Digital Asset Production", "Cinematic Creative Flow", "AI-native Post-production"],
        team: {
          name: "ActXCut Team",
          description: "ActXCut Team is the lab's multi-shot video research team. It studies action continuity and narrative consistency across shots, pioneers the ActXCut research series, and explores AI-native filmmaking and post-production.",
          logoBase: "/images/logo-actxcut-team",
        },
      },
      {
        id: "starx",
        title: "StarX Infinite Inspiration Studio",
        subtitle: "Creative Practice Studio",
        tagline: "Shaping a New Creative World: Bringing Ideas to Life across Academia, Industry, Research, and Creative Practice",
        body: `StarX Studio connects creative intelligence research with real creative practice. We explore deeper integration of AI with film, story, and visual expression, carry ideas from concept to finished work, and feed hands-on creative experience back into technical research.

1. Idea Co-creation
Across story concepts, visual design, and cross-media expression, explore how people and AI interact throughout divergence, convergence, and iteration.

2. Creative Production
Combine leading laboratory research with creators' firsthand experience to develop and continually refine compelling, practical visual works and creative prototypes.

3. Creative Feedback
Identify creative pain points and technical needs from real production workflows, feeding them back to drive continued advances in intelligent tools and visual storytelling methods.`,
        tags: ["Human-AI Co-creation", "Visual Design", "Cross-media Expression", "Creative Production", "Creative Feedback"],
        team: {
          name: "Seek Team | StarX Team",
          description: "Seek Team explores cinematic world models, while StarX Team focuses on filmmaking. Together at StarX Studio, they connect generative technology with creative practice, from story ideas to visual works.",
          logoBase: "/images/logo-seek-starx-team",
        },
      },
    ],
  },

  publications: {
    eyebrow: "Publications & Projects",
    title: "Featured Work",
    intro:
      "An overarching vision with focused breakthroughs | Each piece of work has a clear research motivation; together, they form a coherent line of inquiry, where each step sets off the next like dominoes, progressively revealing and answering a series of concrete questions.",
    items: [
      {
        id: "act2cut",
        title: "Act2Cut",
        paperTitle: "Act2Cut: Continuous Multi-Shot Video Narrative Match on Action-Cut",
        venue: "SIGGRAPH Asia 2026",
        institutions: "TeleAI · AIGC Research · Fudan University",
        tagline: "Continuous-action-driven Multi-shot Video Generation.",
        body:
          "Tackling the long-overlooked “match on action” problem in cinematic language, Act2Cut enables generative video systems to understand action continuity across shots — narrative motion, not just surface frame similarity.",
        links: [
          { label: "Paper", href: "#", disabled: true },
          { label: "Project Page", href: "https://aigcresearch.github.io/Act2Cut.github.io/" },
          { label: "Code", href: "#", disabled: true },
        ],
      },
      {
        id: "vistorybench",
        title: "ViStoryBench",
        paperTitle: "ViStoryBench: Comprehensive Benchmark Suite for Story Visualization",
        venue: "CVPR 2026",
        institutions: "ShanghaiTech University · StepFun · AIGC Research",
        tagline: "Story Visualization Benchmark.",
        body:
          "Targeting customized visual storytelling — the core task of cinematic generation — ViStoryBench defines a systematic evaluation framework for character consistency, style stability, plot alignment, compositional quality, and visualization.",
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
        paperTitle: "StyleMe3D: Stylization with Disentangled Priors by Multiple Encoders on 3D Gaussians",
        venue: "ArXiv 2025",
        institutions: "ShanghaiTech · StepFun · AIGC Research · Guangming Lab",
        tagline: "3DGS Stylization with Disentangled Priors.",
        body:
          "Multi-encoder, disentangled-prior stylization for 3D Gaussian representations — exploring controllable, interactive, scalable 3D creation as a long-term creative medium.",
        links: [
          { label: "Paper", href: "https://arxiv.org/abs/2504.15281" },
          { label: "Project Page", href: "https://styleme3d.github.io/" },
          { label: "Code", href: "https://github.com/AIGCResearch/styleme3d" },
        ],
      },
      {
        id: "shotstudio",
        title: "ShotStudio",
        tagline: "An AIGC framework for end-to-end film creation.",
        body:
          "An evolving framework that integrates creative understanding, shot organization, asset generation, and production coordination — a pioneering scaffold for future cinematic generation systems.",
        links: [
          { label: "Code", href: "https://github.com/AIGCResearch/ShotStudio" },
          { label: "Demo", href: "https://aigcresearch.github.io/ShotStudio/" },
          { label: "Docs", href: "https://github.com/AIGCResearch/ShotStudio/blob/main/README.md" },
        ],
      },
      {
        id: "awesome-paperdaily",
        title: "Awesome-PaperDaily",
        institutions: "AIGC Research",
        tagline: "Following the advance of AIGC, day by day.",
        body:
          "An open knowledge curation project that tracks AIGC frontiers — reflecting our continued investment in knowledge organization, trend tracking, and community contribution.",
        links: [{ label: "Code", href: "https://github.com/AIGCResearch/Awesome-PaperDaily" }],
        featured: true,
      },
    ],
  },
  team: {
    eyebrow: "Team",
    title: "Team Members",
    intro:
      "AIGC Research is a small team focused on creative AI, generative models, and cross-disciplinary fundamentals. We collaborate with both industry and academic advisors across the full chain — from foundational questions to deployed creative systems.",
    membersLabel: "Core Members",
    members: [
      {
        name: "Cailin Zhuang",
        monogram: "Z",
        avatar: "/images/team/cailin-zhuang.webp",
        role: "Team Member",
        affiliation: "Ph.D. student, Fudan University",
        bio: "Working on AIGC, creative intelligence, and cinematic content generation.",
        wechatQr: "/images/6703e9890583c36c70358de568aed799.jpg",
        links: {
          homepage: "https://journey-zhuang.github.io/",
          github: "https://github.com/journey-zhuang",
          email: "journeyzhuang@gmail.com",
          google_scholar: "https://scholar.google.com/citations?user=YuOegioAAAAJ&hl=zh-CN",
        },
      },
      {
        name: "Yaoqi Hu",
        monogram: "H",
        role: "Team Member",
        affiliation: "Independent researcher",
        bio: "Focuses on open-source community contributions on Hugging Face, enterprise data workflow development, and multimedia and visual generation research.",
        wechatQr: "/images/9a344fabd81afa4267fec428c2be6d52.jpg",
        links: {
          homepage: "https://github.com/yaoqih",
          github: "https://github.com/yaoqih",
          email: "1375626371@qq.com",
        },
      },
      {
        name: "Zheng Dong",
        monogram: "D",
        role: "Team Member",
        affiliation: "Independent researcher",
        bio: "Bio coming soon.",
        links: {},
      },
      {
        name: "Yiming Guo",
        monogram: "G",
        role: "Team Member",
        affiliation: "B.S. student, Shanghai University",
        bio: "Bio coming soon.",
        links: {},
      },
    ],
    advisorsLabel: "Advisors",
    advisors: [
      {
        name: "Wei Cheng",
        monogram: "C",
        avatar: "/images/team/wei-cheng.webp",
        role: "Industry Advisor",
        affiliation: "StepFun · Research Scientist",
        bio: "Research on generative AI.",
        links: {
          google_scholar: "https://scholar.google.com/citations?user=OC8eBkYAAAAJ&hl=zh-TW",
        },
      },
      {
        name: "Siyu Zhu",
        monogram: "Z",
        avatar: "/images/team/siyu-zhu.webp",
        role: "Academic Advisor",
        affiliation: "Fudan University · Full Professor\nShanghai Innovation Institute · Full-time Mentor",
        bio: "Research on video world models.",
        links: {
          personal_page: "https://sites.google.com/site/zhusiyucs/home",
          google_scholar: "https://scholar.google.com.hk/citations?hl=en&user=vNCnDiMAAAAJ&view_op=list_works&sortby=pubdate",
        },
      },
      {
        name: "Mengtian Li",
        monogram: "X",
        avatar: "/images/team/mengtian-li.webp",
        role: "Academic Advisor",
        affiliation: "Shanghai University · Shanghai Film Academy · Professor",
        bio: "Research on AI filmmaking.",
        links: {
          personal_page: "https://mengtianli.github.io/",
          google_scholar: "https://scholar.google.com/citations?user=SFvOV2oAAAAJ&hl=zh-CN",
        },
      },
      {
        name: "Qingling Xia",
        monogram: "X",
        avatar: "/images/team/qingling-xia.webp",
        role: "Academic Advisor",
        affiliation: "Chongqing University of Technology · School of AI · Professor",
        bio: "Research on biomedical engineering.",
        links: {
          google_scholar: "https://scholar.google.com/citations?user=QgwsFLQAAAAJ&hl=zh-CN",
        },
      },
    ],
  },
  contact: {
    eyebrow: "Get in Touch",
    title: "Open to collaboration",
    body:
      "If our research directions, open-source efforts, academic exchanges, or creative production systems resonate with you, we warmly invite you to connect. Let's shape a novel creative world together.",
    email: "journeyzhuang@gmail.com",
    emailCtaLabel: "Email Us",
    wechatTitle: "WeChat",
    wechatNote: "Scan to follow AIGC Research",
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
    tagline: "Shaping a New Creative World.",
  },
  langToggle: { zh: "中", en: "EN" },
};
