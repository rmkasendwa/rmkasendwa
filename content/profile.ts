export interface Principle {
  number: string;
  title: string;
  copy: string;
}

export interface Capability {
  title: string;
  copy: string;
}

export interface Project {
  name: string;
  category: string;
  description: string;
  contribution: string;
  technologies: string[];
}

export interface OpenSourceTool {
  name: string;
  description: string;
  type: string;
  link: string;
}

export interface TechnologyGroup {
  category: string;
  items: string[];
}

export type ApproachStep = [string, string];

export interface ContactLinks {
  github: string;
  linkedin: string;
  email: string;
}

export const contact: ContactLinks = {
  github: 'https://github.com/rmkasendwa',
  linkedin: 'https://www.linkedin.com/in/rmkasendwa',
  email: 'mailto:kasendwaronald@gmail.com',
};

export const principles: Principle[] = [
  {
    number: '01',
    title: 'Simplicity beats complexity.',
    copy: 'The best system is the clearest one that solves the problem well. Complexity has to earn its place.',
  },
  {
    number: '02',
    title: 'Shipping creates clarity.',
    copy: 'Real feedback is more valuable than imagined perfection. Deliver, learn, and improve with intent.',
  },
  {
    number: '03',
    title: 'User value comes first.',
    copy: 'Technology is a means, not the outcome. Good decisions begin with the person using the product.',
  },
  {
    number: '04',
    title: 'Maintainability matters.',
    copy: 'A product should remain understandable and adaptable long after its first release.',
  },
  {
    number: '05',
    title: 'Automation compounds.',
    copy: 'Reliable tools, tests, and delivery pipelines return time and confidence to the whole team.',
  },
  {
    number: '06',
    title: 'Products evolve.',
    copy: 'Strong products are shaped through measured iteration, not a single moment of inspiration.',
  },
];

export const capabilities: Capability[] = [
  {
    title: 'Product Development',
    copy: 'Turning early conversations into clear requirements, useful scope, and a product people can put to work.',
  },
  {
    title: 'Frontend Engineering',
    copy: 'Building fast, accessible interfaces with deliberate interaction design and resilient component systems.',
  },
  {
    title: 'Backend Engineering',
    copy: 'Designing dependable APIs, data models, integrations, and services around real product constraints.',
  },
  {
    title: 'Cloud Infrastructure',
    copy: 'Creating practical, observable environments that make deployment routine and operations predictable.',
  },
  {
    title: 'Developer Experience',
    copy: 'Improving the path from idea to production through tooling, automation, documentation, and sensible defaults.',
  },
  {
    title: 'Architecture & Systems Design',
    copy: "Making technical decisions that balance today's needs with the product's ability to grow and change.",
  },
];

export const selectedWork: Project[] = [
  {
    name: 'Skattebasserne',
    category: 'AI Platform',
    description:
      'An AI-assisted tax guidance platform for Danish homeowners navigating a high-stakes, regulation-heavy process. It had to make complex advice feel clear and dependable without sacrificing trust or accuracy at critical decision points.',
    contribution:
      'I led the product engineering work across the experience and platform layers, shaping the AI-assisted workflow, refining the interaction model, and building a dependable foundation for content, data flow, and user guidance.',
    technologies: [
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'AI workflows',
      'Next.js',
    ],
  },
  {
    name: 'Locals',
    category: 'Creator Platform',
    description:
      'A creator platform for publishing, community building, subscriptions, and direct audience relationships. It serves creators who need a reliable place to distribute content and turn engagement into recurring revenue.',
    contribution:
      'I contributed across the product surface and underlying services, helping translate a broad creator vision into a coherent experience while keeping the architecture maintainable as the platform grew.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Subscriptions',
      'Realtime',
    ],
  },
  {
    name: 'awamo360',
    category: 'Core Banking',
    description:
      'A core banking platform supporting loans, savings, fixed deposits, shares, and the operational tooling behind financial services. It serves financial institutions that need dependable workflows in a regulated environment.',
    contribution:
      'I worked across frontend and backend layers to support high-impact financial processes, improve operational visibility, and build features that were robust enough for production use under real-world constraints.',
    technologies: ['React', 'NestJS', 'AWS', 'Financial workflows'],
  },
  {
    name: 'Formula.Monks Topology',
    category: 'Automation Platform',
    description:
      'An automation platform for coordinating work across teams, processes, and operational systems. It helps organizations reduce handoff friction and make recurring tasks easier to manage and observe.',
    contribution:
      'I helped turn operational requirements into a product foundation that balanced usability with architectural discipline, allowing the platform to support real workflows without becoming brittle.',
    technologies: ['React', 'TsED', 'Airtable', 'MongoDB', 'TypeScript'],
  },
  {
    name: 'Traccar SaaS',
    category: 'Fleet Management',
    description:
      'A fleet management platform that gives operators visibility into vehicle activity, tracking, and operational oversight. It serves businesses that need dependable monitoring and straightforward reporting in day-to-day operations.',
    contribution:
      'I built and maintained product features that improved the management experience and strengthened the platform’s reliability in production, with attention to maintainability and operational clarity.',
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Tracking', 'SaaS'],
  },
  {
    name: 'Sliding Tiles',
    category: 'Consumer Product',
    description:
      'A consumer puzzle game designed for quick, social play and repeat sessions. It serves players who want a simple experience that still feels polished, responsive, and enjoyable over time.',
    contribution:
      'I shaped the end-to-end product experience and implemented the real-time systems that made multiplayer interaction feel immediate, stable, and easy to support.',
    technologies: ['React', 'WebSockets', 'Real-time', 'Self-hosted'],
  },
  {
    name: 'Airtable Client',
    category: 'Developer Platform',
    description:
      'A developer-facing client for working with Airtable data in a predictable and typed way. It serves engineers who want a lighter integration path for internal tools and automation work.',
    contribution:
      'I owned the SDK design and implementation, focusing on clarity of use, maintainable abstractions, and a surface that developers could rely on without unnecessary ceremony.',
    technologies: ['TypeScript', 'SDK', 'Developer tooling', 'API client'],
  },
  {
    name: 'Dubai Chamber Match',
    category: 'Enterprise Platform',
    description:
      'An enterprise platform for connecting businesses with relevant opportunities, services, and institutional relationships. It supports a structured matching process that needs strong data handling and careful workflow design.',
    contribution:
      'I contributed to the product implementation and architecture, helping connect business rules, interfaces, and backend logic into a system that was dependable for real use.',
    technologies: ['React', 'Node.js', 'Enterprise', 'Workflow'],
  },
  {
    name: 'PIMIS',
    category: 'Government Platform',
    description:
      'A government platform for the National Information Technology Authority Uganda, built to support structured information management and operational workflows. It serves public-sector stakeholders who need dependable, auditable systems rather than experimental tooling.',
    contribution:
      'I worked on the implementation and engineering foundations of a platform that had to balance usability, reliability, and long-term maintainability in a demanding institutional context.',
    technologies: ['TypeScript', 'Node.js', 'Government', 'Systems'],
  },
  {
    name: 'PayWay Express',
    category: 'Payment Platform',
    description:
      'A production payment platform that streamlines payment processing and operational workflows for merchants and businesses. It supports day-to-day financial operations with a focus on reliability, authorization handling, and predictable service behavior.',
    contribution:
      'I contributed across frontend and backend development, implementing scheduled payment workflows, business process automation, authorization logic, API integrations, and production-ready improvements that increased operational efficiency and reliability.',
    technologies: [
      'TypeScript',
      'Node.js',
      'Payments',
      'API integrations',
      'Automation',
    ],
  },
];

export const openSourceTools: OpenSourceTool[] = [
  {
    name: 'airtable-client',
    description:
      'A lightweight TypeScript SDK for Airtable workflows and data access.',
    type: 'SDK',
    link: '#',
  },
  {
    name: 'mui-extensions / @infinite-debugger/react-mui',
    description:
      'A compact set of MUI-focused extensions for faster UI composition.',
    type: 'Component library',
    link: '#',
  },
  {
    name: '@infinite-debugger/swagger-to-ts',
    description:
      'A utility for turning Swagger schemas into TypeScript interfaces.',
    type: 'Utility',
    link: '#',
  },
  {
    name: 'infinite-debugger/rmk-utils',
    description: 'A handful of practical helpers for everyday developer tasks.',
    type: 'Utility',
    link: '#',
  },
  {
    name: 'SVG Map Extra',
    description: 'A small utility for making richer SVG-based map experiences.',
    type: 'Utility',
    link: '#',
  },
  {
    name: 'cropit contribution',
    description:
      'A thoughtful contribution to a project focused on better image cropping flows.',
    type: 'Contribution',
    link: '#',
  },
];

export const technologies: TechnologyGroup[] = [
  {
    category: 'Frontend',
    items: [
      'TypeScript',
      'JavaScript',
      'React',
      'Next.js',
      'SolidJS',
      'Angular',
      'Tailwind CSS',
      'Material UI',
    ],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'NestJS', 'Express', 'TsED', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Data',
    items: ['PostgreSQL', 'MongoDB', 'ClickHouse'],
  },
  {
    category: 'Infrastructure',
    items: [
      'AWS',
      'Docker',
      'Pulumi',
      'Terraform',
      'ECS',
      'Route53',
      'RDS',
      'ECR',
      'CloudWatch',
    ],
  },
  {
    category: 'Tooling',
    items: [
      'Git',
      'GitHub Actions',
      'pnpm',
      'npm',
      'Prisma',
      'React Query',
      'Jest',
    ],
  },
];

export const approach: ApproachStep[] = [
  [
    'Understand',
    'Find the real user problem before prescribing a technical answer.',
  ],
  [
    'Define',
    'Align product goals, business constraints, and engineering reality.',
  ],
  [
    'Build',
    'Deliver the smallest complete version that creates meaningful value.',
  ],
  [
    'Operate',
    'Make quality, deployment, and observability part of the product.',
  ],
  [
    'Evolve',
    'Use evidence from production to decide what the product needs next.',
  ],
];
