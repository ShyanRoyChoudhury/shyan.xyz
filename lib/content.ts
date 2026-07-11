/**
 * Single source of truth for all site content.
 * Bullets and prose may embed **bold** spans; the page renders them
 * with a tiny splitter (no markdown dependency).
 */

export const site = {
  url: 'https://shyan.xyz',
  name: 'Shyan Roy Choudhury',
  title: 'Shyan Roy Choudhury — Senior Software Engineer',
  description:
    'Senior Software Engineer at Zenara Technologies building backend & infrastructure: eBPF-powered observability, Temporal workflow orchestration, and distributed systems serving millions of requests a month.',
  email: 'shayan.roy31@gmail.com',
  github: 'https://github.com/ShyanRoyChoudhury',
  linkedin: 'https://www.linkedin.com/in/shyan-roy-choudhury-79a860198',
  twitter: 'https://twitter.com/kenobi8356',
  twitterHandle: '@kenobi8356',
  company: 'Zenara Technologies',
} as const;

export type NavLink = {
  label: string;
  href: string;
  /** decorative prefix rendered before the label */
  prefix: string;
  external?: boolean;
  cta?: boolean;
};

export const navLinks: NavLink[] = [
  { label: 'experience', href: '#experience', prefix: './' },
  { label: 'projects', href: '#projects', prefix: './' },
  { label: 'skills', href: '#skills', prefix: './' },
  { label: 'github', href: site.github, prefix: '↗ ', external: true },
  { label: 'contact', href: '#contact', prefix: '', cta: true },
];

export type ProofChip = {
  value: string;
  label: string;
};

/** Hard-number proof strip under the hero copy. */
export const proofChips: ProofChip[] = [
  { value: 'millions req/mo', label: 'distributed queues' },
  { value: '−75% infra cost', label: 'Azure serverless' },
  { value: 'eBPF', label: 'kernel-level telemetry' },
  { value: 'Temporal', label: 'resilient workflows' },
];

export type ProfileRow = {
  key: string;
  value: string;
};

/** profile.yml terminal card — every key traceable to resume facts. */
export const profileRows: ProfileRow[] = [
  { key: 'role', value: 'senior swe' },
  { key: 'focus', value: 'backend & infra' },
  { key: 'domain', value: 'fintech · devtools' },
  { key: 'tz', value: 'UTC+5:30' },
];

export type Experience = {
  company: string;
  role: string;
  sub: string;
  dates: string;
  location: string;
  current?: boolean;
  /** bullet text; **bold** spans allowed */
  points: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    company: 'Zenara Technologies',
    role: 'Senior Software Engineer',
    sub: 'financial workflow automation',
    dates: 'Jun 2026 — Present',
    location: 'Remote',
    current: true,
    points: [
      'Developing **APIs and business logic** for financial workflow automation.',
      'Improving **database-backed services** behind those workflows.',
    ],
    tags: [
      'Python',
      'Node.js',
      'Go',
      'TypeScript',
      'Temporal',
      'GCP',
      'AWS',
      'Kubernetes',
      'Docker',
      'Redis',
      'PostgreSQL',
    ],
  },
  {
    company: 'OrbitCI',
    role: 'Product Engineer',
    sub: 'eBPF observability for CI & GPU workloads',
    dates: 'Nov 2025 — May 2026',
    location: 'Remote · Contract',
    points: [
      'Built **eBPF-powered, kernel-level telemetry** for CI pipelines and GPU workloads.',
      'Scaled APIs and **distributed job queues to millions of requests/month**.',
      'Wrote **Temporal workers** for resilient, long-running workflows.',
    ],
    tags: ['eBPF', 'Temporal', 'Go', 'Distributed queues', 'Kernel telemetry'],
  },
  {
    company: 'Publiq Studio',
    role: 'SDE 2',
    sub: 'payments · cloud cost · auth',
    dates: 'Oct 2024 — Oct 2025',
    location: 'Remote',
    points: [
      'Integrated the **Razorpay payment gateway** end-to-end.',
      'Cut cloud infrastructure costs **75%** by moving to Azure Functions + Container Apps.',
      'Built auth on **AWS Cognito** — OAuth 2.0 flows, JWT — and isolated workloads with Azure VNet.',
      'Shipped **LLM integrations** in FastAPI with Pydantic-typed contracts.',
    ],
    tags: [
      'Razorpay',
      'Azure Functions',
      'Container Apps',
      'AWS Cognito',
      'OAuth 2.0',
      'JWT',
      'FastAPI',
      'Pydantic',
    ],
  },
  {
    company: 'Cognizant',
    role: 'Programmer Analyst',
    sub: 'internal tooling · CI/CD',
    dates: 'Apr 2023 — Sep 2024',
    location: 'Kolkata',
    points: [
      'Built a full-stack internal dashboard (React, Node/Express) driving a **20% productivity gain**.',
      'Set up Azure DevOps CI/CD with Jest — **90% fewer deploy errors**.',
    ],
    tags: ['React', 'Node/Express', 'Azure DevOps', 'Jest'],
  },
];

export type Project = {
  name: string;
  lang: string;
  description: string;
  source: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: 'claude-workflows',
    lang: 'JS',
    description:
      'Multi-agent workflows for Claude Code: build → review⇄fix loop → human-gated DB changes → GitHub PR. Agent orchestration with a hard human gate where it matters.',
    source: 'https://github.com/ShyanRoyChoudhury/claude-workflows',
  },
  {
    name: 'ci-visualizer',
    lang: 'GO · REACT',
    description:
      'CI/CD pipeline dashboard — ingests GitHub Actions webhooks into PostgreSQL and visualizes workflow runs and job performance.',
    source: 'https://github.com/ShyanRoyChoudhury/ci-visualizer',
    live: 'https://ci-visualizer-ui.onrender.com/',
  },
  {
    name: 'django-order-management',
    lang: 'PYTHON',
    description:
      'Production-grade order backend: DRF, SimpleJWT auth, Celery + Redis task queues, PostgreSQL, rate limiting, fully Dockerized.',
    source: 'https://github.com/ShyanRoyChoudhury/django-order-management',
  },
  {
    name: 'multiplayer-quiz',
    lang: 'TS',
    description: 'Real-time multiplayer quiz.',
    source: 'https://github.com/ShyanRoyChoudhury/multiplayer-quiz',
    live: 'https://multiplayer-quiz-rust.vercel.app',
  },
  {
    name: 'Fileshare',
    lang: 'PY · REACT',
    description:
      'Secure file-sharing platform: React + Django/Flask behind Nginx, Dockerized, self-signed SSL.',
    source: 'https://github.com/ShyanRoyChoudhury/Fileshare',
  },
  {
    name: 'ChatApp',
    lang: 'TS',
    description:
      'Ephemeral real-time chat rooms — nothing persisted, no message storage by design.',
    source: 'https://github.com/ShyanRoyChoudhury/ChatApp',
    live: 'https://chatrooom-c84ec.web.app/',
  },
];

export type SkillGroup = {
  key: string;
  values: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    key: 'LANGUAGES',
    values: ['TypeScript', 'JavaScript', 'Python', 'Go', 'SQL', 'Bash'],
  },
  {
    key: 'BACKEND',
    values: [
      'Node.js / Express',
      'FastAPI',
      'Django + Celery',
      'Temporal',
      'REST',
      'Socket.io',
    ],
  },
  {
    key: 'FRONTEND',
    values: ['Next.js', 'React', 'Redux / Recoil', 'Tailwind CSS', 'shadcn/ui'],
  },
  {
    key: 'DATA',
    values: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'ClickHouse', 'Prisma'],
  },
  {
    key: 'INFRA',
    values: [
      'Docker',
      'Kubernetes',
      'RabbitMQ',
      'AWS',
      'Azure',
      'GCP',
      'eBPF',
      'CI/CD',
    ],
  },
];

export type EduCell = {
  label: string;
  value: string;
  sub: string;
};

export const education: EduCell[] = [
  {
    label: 'Education',
    value: 'B.Tech, Electrical Engineering',
    sub: 'MIT World Peace University, Pune · 2018–2022 · GPA 8.16',
  },
  {
    label: 'Certifications',
    value: 'Microsoft AZ-900 · DP-900',
    sub: 'Azure Fundamentals · Azure Data Fundamentals',
  },
];

export type ContactLink = {
  label: string;
  href: string;
  /** rel="me" identity link (GitHub / LinkedIn / X) */
  me?: boolean;
};

export const contactLinks: ContactLink[] = [
  { label: 'github/ShyanRoyChoudhury', href: site.github, me: true },
  { label: 'linkedin', href: site.linkedin, me: true },
  { label: 'x/kenobi8356', href: site.twitter, me: true },
  { label: 'shyan.xyz', href: site.url },
];
