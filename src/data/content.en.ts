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
    "eyebrow": "Research Directions",
    "title": "Research Directions",
    "intro": "Our research advances synergistically along three main threads: General Creative Intelligence explores the boundaries of machine creativity; Intelligent Creative Workflow focuses on unleashing human creative potential; and AI for Science probes the frontiers of life cognition. Together, these pillars form a complete research loop—spanning from creative understanding and production applications to foundational scientific exploration in life cognition.",
    "items": [
      {
        "id": "gci",
        "title": "General Creative Intelligence",
        "subtitle": "General Creative Intelligence",
        "tagline": "Exploring the boundaries of machine creativity — starting with 'understanding human creation' to endow AI with top-level design and aesthetic reasoning capabilities.",
        "body": "We aim to break through the traditional limitation of AI being confined to mechanical generation without an understanding of the creative process. This direction not only investigates human intent, processes, and cognitive mechanisms in artistic creation but also strives to grant AI a 'Design Thinking' capability akin to that of human directors or designers.\n\n1. Cross-modal Aesthetic Alignment: Outstanding artworks stem from a holistic imagination of sound, visuals, and narrative. Our core research focuses on the deep alignment of cross-modal design elements—such as text, music, color, emotion, and motion—endowing AI with top-level aesthetic perception and panoramic conceptualization abilities. This enables AI to generate assets while truly understanding the underlying aesthetic logic of creation.\n\n2. Interpretability and Lightweighting of Large Models: We conduct a multi-scale analysis of generative large models—from the micro level (neuron activation patterns), through the meso level (sub-network and attention mechanism synergy), to the macro level (overall generalization and emergent capabilities). By demystifying these 'black boxes,' we guide algorithmic optimization and architectural refinement to achieve efficient, lightweight computing that 'does more with less.'",
        "tags": [
          "Multimodal Perception",
          "Cross-modal Alignment",
          "Creative Reasoning",
          "Design Thinking",
          "Aesthetic Perception"
        ]
      },
      {
        "id": "icw",
        "title": "Intelligent Creative Workflow",
        "subtitle": "Intelligent Creative Workflow",
        "tagline": "Exploring the boundaries of human creativity — starting with 'efficient digital asset production' to integrate creative agents into industrial pipelines and liberate human productivity.",
        "body": "We focus on translating cutting-edge AI capabilities into efficient productivity tools. By addressing the labor-intensive, mechanical tasks in 2D/3D animation and film production, we enable creators to detach from tedious repetitive work and refocus on inspiration itself.\n\n1. Full-dimensional Multimodal Interaction: Our research spans 1D audio, 2D concept art, 3D geometric assets, and 4D spatiotemporal video. Moving beyond single-modality 'Text/Image-to-X' paradigms, we explore interaction methods that align with artists' intuition, such as motion-driven, audio-driven, or multimodal collaborative generation.\n\n2. Revolutionizing Production Paradigms: We promote the deep integration of generative AI with established industrial pipelines. By solving specific pain points—such as visual previews, cold-start 3D modeling, and manual in-betweening—we facilitate a paradigm shift from cumbersome 'workflows' to pure 'creative flow.'",
        "tags": [
          "Full-dimensional Multimodal Interaction",
          "2D/3D/4D Content",
          "Digital Asset Production",
          "Film & Animation Workflow",
          "Industrial Pipeline Integration"
        ]
      },
      {
        "id": "ai4s",
        "title": "AI for Science",
        "subtitle": "AI for Science / Neuroscience",
        "tagline": "Exploring the boundaries of life cognition — leveraging neurobiology and cognitive science to foster a bidirectional symbiosis between 'brain-inspired research' and 'scientific empowerment.'",
        "body": "We focus on the intersection of artificial intelligence and neuroscience. By deeply integrating computational science with biological intelligence, we seek breakthroughs for next-generation AI architectures while utilizing AI technology to expand the boundaries of human understanding of the brain.\n\n1. Inward Inspiration (Simulation-driven Brain-inspired Research): Introducing advanced neuroscience theories, we translate complex biological neural mechanisms into computable mathematical models. By constructing mathematical models and neural network algorithms corresponding to different functional areas and brain networks, we seek architectural breakthroughs in AI models.\n\n2. Outward Empowerment (AI-driven Neuroscience): Utilizing advanced generative AI and data analytics, we give back to neuroscience research. We assist scientists in exploring the complex neural connectivity mechanisms and disease pathologies of the human brain, aiming to solve significant scientific challenges in brain science and promote clinical applications.",
        "tags": [
          "Brain-inspired Research",
          "Neuroscience",
          "Bidirectional Symbiosis"
        ]
      }
    ]
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
          { label: "Paper", href: "https://arxiv.org/abs/2505.24862" },
          { label: "Code", href: "https://github.com/ViStoryBench/vistorybench" },
          { label: "Dataset", href: "https://huggingface.co/datasets/ViStoryBench/ViStoryBench" },
          { label: "Project Page", href: "https://vistorybench.github.io/" },
        ],
      },
      {
        id: "styleme3d",
        title: "StyleMe3D",
        tagline: "Stylization with disentangled priors on 3D Gaussians.",
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
        id: "act2cut",
        title: "Act2Cut",
        tagline: "Continuous multi-shot video narrative — match on action.",
        body:
          "Tackling the long-overlooked “match on action” problem in cinematic language, Act2Cut enables generative video systems to understand action continuity across shots — narrative motion, not just surface frame similarity.",
        links: [
          { label: "Paper", href: "#", disabled: true },
          { label: "Project Page", href: "https://aigcresearch.github.io/Act2Cut.github.io/" },
          { label: "Code", href: "#", disabled: true },
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
    members: [
      {
        name: "Cailin Zhuang",
        monogram: "Z",
        role: "Team Member",
        affiliation: "M.Sc., ShanghaiTech University",
        bio: "Working on AIGC, creative intelligence, and cinematic content generation.",
        links: {
          homepage: "https://journey-zhuang.github.io/",
          github: "https://github.com/journey-zhuang",
          email: "journeyzhuang@gmail.com",
        },
      },
      {
        name: "Yaoqi Hu",
        monogram: "H",
        role: "Team Member",
        affiliation: "—",
        bio: "Bio coming soon.",
        links: {
          github: "https://github.com/yaoqih",
        },
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
      "If our research directions, open-source efforts, academic exchanges, or creative production systems resonate with you, we warmly invite you to connect. Let's shape a novel creative world together.",
    email: "journeyzhuang@gmail.com",
    emailCtaLabel: "Email Us",
    wechatTitle: "WeChat",
    wechatNote: "Scan to follow AIGC Research",
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
