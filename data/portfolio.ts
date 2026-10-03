// ─────────────────────────────────────────────────────────────────────────────
// All website content lives in this file. Edit text, links and image paths here.
//
// Images: put files in /public/images/... and reference them as "/images/...".
// Any image that is missing shows a placeholder (with the expected path in dev).
//
// Links: a project link left as "" falls back to your GitHub profile
// (paper links fall back to your ResearchGate profile).
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Muhammad Sarmad Saleem",
  shortName: "Sarmad",
  alias: "MSS",
  role: "Full Stack AI Engineer & Researcher",
  tagline:
    "I research and build intelligent systems across AI, machine learning, large language models and AI agents — and ship them as full-stack products.",
  location: "Lahore / Islamabad, Pakistan",
  email: "sarmadsaleem.333@gmail.com",
  photo: "/images/profile.png",
  aboutPhoto: "/images/about.jpeg",
  socials: {
    github: "https://github.com/sarmadsaleem333",
    researchgate: "https://www.researchgate.net/profile/Muhammad-Sarmad-Saleem",
    linkedin: "https://www.linkedin.com/in/muhammad-sarmad-saleem-3bb060266/",
    scholar: "", // ← Google Scholar profile (optional)
  },
  interests: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Large Language Models", "AI Agents"],
};

export const about = {
  paragraphs: [
    "I'm a Computer Science graduate from NUST working where research meets real products. My work spans artificial intelligence, machine learning, large language models and agentic systems — from designing and evaluating new methods to deploying them as reliable software.",
    "On the research side, I've worked as a Research Assistant at the Machine Vision & Intelligent Systems Lab (NUST) and as a fully funded DAAD research intern at the Robotics Research Lab, RPTU Kaiserslautern, Germany — work that led to two IEEE conference papers.",
    "On the engineering side, I build LLM agents, RAG systems and full-stack applications — from real-time WebRTC and WebSocket platforms to production AI pipelines — so I care as much about shipping reliable systems as I do about model performance.",
  ],
};

export type ExperienceKind = "Industry" | "Research";

export const experience: {
  role: string;
  org: string;
  place: string;
  period: string;
  kind: ExperienceKind;
  logo?: string;
  points: string[];
  tags: string[];
}[] = [
  {
    role: "AI Engineer",
    org: "Adept Tech Solutions",
    place: "NSTP, Islamabad",
    period: "Sep 2026 — Present",
    kind: "Industry",
    logo: "/images/logos/adept.jpg",
    points: [
      "Research and build AI agents for the company's in-house synthetic data generation product.",
      "Design LLM-based agents that reason over relational database schemas and integrity constraints.",
      "Evaluate agentic approaches that generate realistic, constraint-aware data while preserving the statistical properties of the source schema.",
    ],
    tags: ["LLM Agents", "LangGraph", "Synthetic Data", "SQL"],
  },
  {
    role: "DAAD Research Intern (Fully Funded)",
    org: "Robotics Research Lab, RPTU Kaiserslautern",
    place: "Kaiserslautern, Germany",
    period: "Jul 2025 — Aug 2025",
    kind: "Research",
    logo: "/images/logos/daad.png",
    points: [
      "Formulated glacier extent and elevation change prediction as a spatio-temporal learning problem, fusing satellite imagery with glacio-meteorological data.",
      "Developed and benchmarked deep learning models with automated, reproducible experimentation pipelines.",
      "Presented findings to international researchers; the work led to the GlacioVision paper (IEEE FMLDS 2026).",
    ],
    tags: ["PyTorch", "Spatio-temporal DL", "Remote Sensing"],
  },
  {
    role: "Research Assistant",
    org: "Machine Vision & Intelligent Systems Lab, NUST",
    place: "Islamabad, Pakistan",
    period: "Oct 2024 — Jul 2026",
    kind: "Research",
    logo: "/images/logos/machvis.jpg",
    points: [
      "Investigated deep learning models for multispectral satellite image classification, focusing on generalization across geographically diverse regions.",
      "Proposed a multi-task, rank-aware learning framework for stable elite genotype selection from UAV multispectral temporal imagery under data scarcity (IEEE FMLDS 2026).",
      "Built reproducible PyTorch pipelines for preprocessing, training and evaluation of remote sensing experiments.",
    ],
    tags: ["PyTorch", "Multispectral Imaging", "UAV", "MLflow"],
  },
  {
    role: "Software Engineer",
    org: "Search O' Pal",
    place: "Pakistan",
    period: "Apr 2024 — Oct 2024",
    kind: "Industry",
    logo: "/images/logos/searchopal.jpg",
    points: [
      "Built a complete assessment module — companies create assessments, candidates take them — backed by scalable backend APIs.",
      "Developed a WebRTC-based video module for real-time interviews and a WebSocket-powered group chat.",
    ],
    tags: ["Node.js", "React", "WebRTC", "WebSockets"],
  },
];

export type ProjectCategory = "Research" | "AI Engineering" | "Software";

export const projects: {
  title: string;
  summary: string;
  points: string[];
  category: ProjectCategory;
  image: string;
  tags: string[];
  github: string; // ← GitHub repo URL ("" → GitHub profile)
  live: string; // ← live website URL ("" → GitHub profile)
  paper?: string; // ← paper URL, only for published work ("" → ResearchGate)
  featured?: boolean;
}[] = [
  {
    title: "GlacioVision",
    summary: "Deep learning for forecasting future glacier extent and elevation change.",
    points: [
      "Joint segmentation + regression models fusing multi-temporal satellite imagery with glacio-meteorological variables — IoU 0.87.",
      "Full-stack platform that visualises forecasts for interpretation by domain scientists.",
      "Accepted at IEEE FMLDS 2026.",
    ],
    category: "Research",
    image: "/images/projects/glaciovision.svg",
    tags: ["PyTorch", "Remote Sensing", "Segmentation", "Full-stack"],
    github: "",
    live: "https://glacio-vision.vercel.app/",
    paper: "",
    featured: true,
  },
  {
    title: "Elite Genotype Selection from UAV Imagery",
    summary: "Multi-task, rank-aware learning for stable selection under data scarcity.",
    points: [
      "Learns from UAV-based multispectral temporal imagery to rank crop genotypes reliably with very few labelled samples.",
      "Accepted at IEEE FMLDS 2026.",
    ],
    category: "Research",
    image: "/images/projects/genotype.svg",
    tags: ["Multi-task Learning", "Ranking", "UAV", "PyTorch"],
    github: "",
    live: "",
    paper: "",
    featured: true,
  },
  {
    title: "LawBot — Legal Document QA",
    summary: "Source-grounded retrieval-augmented generation over long legal texts.",
    points: [
      "Studied chunking and dense retrieval strategies to reduce hallucination.",
      "FAISS semantic search grounds every answer in retrieved source passages.",
    ],
    category: "AI Engineering",
    image: "/images/projects/lawbot.svg",
    tags: ["RAG", "LangChain", "FAISS", "LLMs"],
    github: "https://github.com/sarmadsaleem333/LawBot",
    live: "",
  },
  {
    title: "Bank Chatbot: RAG vs. Fine-Tuning",
    summary: "Domain adaptation of LLMs for enterprise banking support.",
    points: [
      "Hybrid system combining a fine-tuned LLM with FAISS retrieval.",
      "Analysed response accuracy and domain faithfulness of RAG vs. supervised fine-tuning. FastAPI + Streamlit.",
    ],
    category: "AI Engineering",
    image: "/images/projects/bank-chatbot.svg",
    tags: ["Fine-tuning", "RAG", "FastAPI", "Streamlit"],
    github: "",
    live: "",
  },
  {
    title: "AI Assistant via MCP",
    summary: "Tool-augmented LLM agent for secure enterprise document access.",
    points: [
      "Claude Desktop + Model Context Protocol Filesystem server for secure local document access.",
      "Natural-language search, summarisation, cross-document comparison and contextual QA.",
    ],
    category: "AI Engineering",
    image: "/images/projects/mcp-assistant.svg",
    tags: ["MCP", "Agents", "Tool Use"],
    github: "",
    live: "",
  },
  {
    title: "AI Email Automation Agent",
    summary: "n8n + LLM workflows that triage, summarise and answer email.",
    points: [
      "Email classification, summarisation and response generation.",
      "Gmail and Slack integrations for notifications, intelligent routing and task management.",
    ],
    category: "AI Engineering",
    image: "/images/projects/email-agent.svg",
    tags: ["n8n", "LLMs", "Gmail API", "Slack API"],
    github: "",
    live: "",
  },
  {
    title: "Multi-Temporal Crop Classification",
    summary: "CNN-LSTM over multispectral satellite time series across Canadian provinces.",
    points: [
      "Captures phenological growth patterns across multiple growing seasons.",
      "79% accuracy with improved cross-region generalisation.",
    ],
    category: "Research",
    image: "/images/projects/crop-classification.svg",
    tags: ["CNN-LSTM", "Satellite Imagery", "TensorFlow"],
    github: "https://github.com/sarmadsaleem333/Canadian-Crop-Classification-Using-Continual-Learning",
    live: "",
  },
  {
    title: "Intent-Aware University FAQ Chatbot",
    summary: "Fine-tuned BERT intent classifier for NUST student queries.",
    points: [
      "Studied transformer generalisation to paraphrased and ambiguous domain-specific questions.",
      "Predicted intent selects responses from the matching pool of QA pairs.",
    ],
    category: "Research",
    image: "/images/projects/faq-chatbot.svg",
    tags: ["BERT", "NLP", "HuggingFace"],
    github: "",
    live: "",
  },
  {
    title: "Candidate Assessment Platform",
    summary: "Assessments, live video interviews and group chat for hiring teams.",
    points: [
      "Companies build assessments; candidates take them via scalable backend APIs.",
      "WebRTC real-time interviews and WebSocket group chat.",
    ],
    category: "Software",
    image: "/images/projects/assessment-platform.svg",
    tags: ["Node.js", "React", "WebRTC", "WebSockets"],
    github: "",
    live: "https://searchopal.com",
  },
];

export const publications: {
  authors: string;
  title: string;
  venue: string;
  year: string;
  status: string;
  link: string; // ← paper / DOI URL ("" → ResearchGate)
  pdf: string; // ← direct PDF URL ("" → ResearchGate)
}[] = [
  {
    authors: "M. S. Saleem, A. Imran, A. Haider, Z. Zafar, K. Berns, M. M. Fraz",
    title:
      "GlacioVision: Deep Learning for Predicting Future Glacier Extent and Elevation Change from Remote Sensing and Glacio-Meteorological Data",
    venue: "IEEE International Conference on Future Machine Learning and Data Science (FMLDS)",
    year: "2026",
    status: "Accepted · to appear",
    link: "",
    pdf: "",
  },
  {
    authors: "M. S. Saleem, Z. Mahmood, Z. Zafar, M. M. Fraz",
    title:
      "Multi-Task Rank-Aware Learning for Stable Elite Genotype Selection from UAV-based Multispectral Temporal Imagery under Data Scarcity",
    venue: "IEEE International Conference on Future Machine Learning and Data Science (FMLDS)",
    year: "2026",
    status: "Accepted · to appear",
    link: "",
    pdf: "",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "C", "C++", "Java", "JavaScript"] },
  { group: "LLMs & Agents", items: ["LangChain", "LangGraph", "RAG", "MCP", "FAISS", "Pinecone", "n8n", "Prompt Engineering"] },
  { group: "ML / Deep Learning", items: ["PyTorch", "TensorFlow", "Transformers", "HuggingFace", "Scikit-learn", "OpenCV", "Pandas", "NumPy"] },
  { group: "Web & Backend", items: ["FastAPI", "Flask", "Django", "Node.js", "REST APIs", "WebSockets", "WebRTC", "React", "Next.js"] },
  { group: "MLOps & Tools", items: ["Docker", "MLflow", "DVC", "Git", "AWS", "LaTeX"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
];

export const education: {
  degree: string;
  school: string;
  place: string;
  period: string;
  grade: { label: string; value: string };
  logo: string;
  description: string;
  coursework: string[];
}[] = [
  {
    degree: "BS Computer Science",
    school: "National University of Sciences & Technology (NUST)",
    place: "Islamabad, Pakistan",
    period: "2022 — 2026",
    grade: { label: "CGPA", value: "3.41 / 4.00" },
    logo: "/images/logos/nust.png",
    description:
      "Undergraduate degree with a focus on artificial intelligence and software engineering. Alongside coursework, worked as a Research Assistant at the Machine Vision & Intelligent Systems Lab and completed a DAAD-funded research internship in Germany.",
    coursework: [
      "Machine Learning",
      "Deep Learning",
      "Artificial Intelligence",
      "Natural Language Processing",
      "Data Structures & Algorithms",
      "Database Systems",
      "Operating Systems",
      "Software Engineering",
    ],
  },
  {
    degree: "FSc Pre-Engineering",
    school: "Government College University (GCU)",
    place: "Lahore, Pakistan",
    period: "2020 — 2022",
    grade: { label: "Marks", value: "1061 / 1100" },
    logo: "/images/logos/gcu.jpg",
    description: "Higher secondary education in the pre-engineering track, graduating with distinction (96.5%).",
    coursework: ["Mathematics", "Physics", "Chemistry"],
  },
];

export const hobbies: { name: string; blurb: string; emoji: string }[] = [
  { name: "Badminton", blurb: "Fast rallies and the best way to clear my head after a long day.", emoji: "🏸" },
  { name: "Cricket", blurb: "Grew up with it — weekend matches with friends are non-negotiable.", emoji: "🏏" },
  { name: "Gym", blurb: "Consistency over intensity — the same mindset I bring to research.", emoji: "🏋️" },
  { name: "Acting", blurb: "Keeps me creative and comfortable on stage and in front of an audience.", emoji: "🎭" },
];
