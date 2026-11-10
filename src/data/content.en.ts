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
      { id: "directions", label: "Lab" },
      { id: "publications", label: "Pub" },
      { id: "team", label: "Team" },
      { id: "contact", label: "Contact" },
    ],
  },
  hero: {
    eyebrow: "AI for Creativity (AI4C) Research",
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
      "The Creative General Intelligent Lab leads foundational research, the Intelligent Cinema Narrative Lab focuses on applied research, and the StarX Infinite Inspiration Studio specializes in creative practice.",
    items: [
      {
        id: "cgi",
        title: "Creative General Intelligent Lab",
        subtitle: "Creative Intelligence & Brain-inspired AI",
        tagline: "Exploring the boundaries of machine creativity | Starting with an understanding of human creation, we combine high-level design thinking, brain-inspired insights, and scientific empowerment.",
        body: `We aim to move beyond traditional AI's limitation of mechanically generating content without understanding creativity. We study the intentions, processes, and cognitive mechanisms behind human artistic creation, equip AI with design thinking akin to that of human directors or designers, and draw on neuroscience to explore next-generation creative intelligence architectures.

1. Cross-modal Aesthetic Alignment: Outstanding artworks emerge from a holistic vision of sound, visuals, and story. We pursue deep alignment across design elements such as text, music, color, emotion, and motion, enabling AI to perceive aesthetics, reason creatively, and conceive works as a whole.

2. Interpretability and Lightweighting of Large Models: We analyze generative models at three scales: micro (neuron activation patterns), meso (coordination among subnetworks and attention mechanisms), and macro (overall generalization and emergent capabilities). By revealing how these black boxes work, we guide algorithmic optimization and architectural refinement to achieve efficient, lightweight computation that does more with less.

3. Brain-inspired Research and Scientific Empowerment: Inward inspiration (simulation-driven brain-inspired research) turns neural mechanisms and brain networks into computable models to explore next-generation intelligent architectures. Outward empowerment (AI-driven neuroscience) uses generative AI and data analysis to advance neuroscience, help investigate neural connectivity and disease mechanisms, identify and solve significant scientific challenges, and promote progress in both AI and brain science.`,
        tags: ["Multimodal Perception", "Cross-modal Alignment", "Creative Reasoning", "Design Thinking", "Aesthetic Perception", "Brain-inspired Research", "Neuroscience"],
      },
      {
        id: "icn",
        title: "Intelligent Cinema Narrative Lab",
        subtitle: "Visual Storytelling & Filmmaking",
        tagline: "Expanding the boundaries of human creativity | Starting from the goal of empowering human creators, we use intelligent tools to support visual storytelling and cinematic content production.",
        body: `We focus on visual storytelling and filmmaking, turning cutting-edge AI capabilities into tools creators can use and reducing repetitive work in animation and film production so creators can focus on story and expression.

1. Full-spectrum Multimodal Interaction: We study content forms ranging from audio and concept art to 3D assets and spatiotemporal video, exploring creation driven by motion, audio, and multimodal collaboration.

2. Visual Storytelling and Cinematic Language: For long-form video, we study character consistency, action continuity, plot alignment, and cinematic language to develop intelligent visual methods that support complete storytelling.

3. Creative Workflow in Practice: We rethink and advance the integration of generative AI into filmmaking, uncover overlooked problems in today's creative process, and pioneer AI-native forms of post-production, moving from cumbersome workflows (Workflow) toward free creative flow (Creative Flow).`,
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
        tagline: "Exploring the boundaries of human–AI co-creation | Starting by connecting research with creative practice, we turn ideas into works that can be shared and refined.",
        body: `StarX Infinite Inspiration Studio connects creative intelligence research with real creative practice. We explore how AI can work with visual storytelling and expression, helping ideas become tangible works and bringing lessons from making back into research.

1. Co-creating Ideas: Across story concepts, visual design, and cross-media expression, we explore divergence, convergence, and iteration in human–AI co-creation.

2. Creative Practice: We combine laboratory research with creators' experience to make and refine visual works and creative prototypes that can be shared.

3. Learning from Creation: We draw needs and questions from real creative work to keep improving intelligent tools and visual storytelling methods.`,
        tags: ["Human-AI Co-creation", "Storytelling", "Cross-media Expression", "Visual Creation", "Creative Practice"],
        team: {
          name: "Seek Team | StarX Team",
          logoBase: "/images/logo-seek-starx-team",
        },
      },
    ],
  },

  publications: {
    eyebrow: "Publications & Projects",
    title: "Featured Work",
    intro:
      "An overarching vision with focused breakthroughs | Each piece of work starts from a clear research motivation; together, they form a coherent line of inquiry that progressively addresses a series of concrete questions.",
    items: [
      {
        id: "act2cut",
        title: "Act2Cut",
        venue: "SIGGRAPH Asia 2026",
        tagline: "Continuous Multi-shot Video Narrative Match on Action-Cut.",
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
        venue: "CVPR 2026",
        tagline: "A Comprehensive Benchmark Suite for Story Visualization.",
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
        venue: "ArXiv 2025",
        tagline: "Stylization with Disentangled Priors on 3D Gaussians.",
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
        bio: "",
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
        affiliation: "Shanghai University · Shanghai Film Academy",
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
        affiliation: "Chongqing University of Technology · School of AI",
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
    tagline: "Shaping a novel creative world.",
  },
  langToggle: { zh: "中", en: "EN" },
};
