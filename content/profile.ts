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
    name: 'Locals',
    category: 'Creator Platform',
    description:
      'A creator platform for publishing, communities, subscriptions, livestreams, and monetization.',
    contribution:
      'I helped shape a product experience that made it easier for creators to build direct relationships and grow sustainable audiences.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Subscription systems'],
  },
  {
    name: 'Skattebasserne',
    category: 'AI Product',
    description:
      'An AI-powered tax advisory platform for Danish homeowners navigating a complex and high-stakes domain.',
    contribution:
      'I led the product experience and delivery of AI-assisted guidance, turning a difficult workflow into something clearer and more trustworthy.',
    technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'AI workflows'],
  },
  {
    name: 'awamo360',
    category: 'FinTech Platform',
    description:
      'A financial software platform supporting core banking operations across loans, savings, fixed deposits, shares, support tooling, and production debugging.',
    contribution:
      'I worked across the product and platform layers to support high-importance financial workflows with dependable implementation and strong operational visibility.',
    technologies: ['React', 'NestJS', 'AWS', 'Financial systems'],
  },
  {
    name: 'Formula.Monks Topology',
    category: 'Automation Platform',
    description:
      'An internal automation and workflow platform built to help teams coordinate work with more clarity and less friction.',
    contribution:
      'I helped turn complex operational requirements into a reliable product foundation that balanced usability with technical depth.',
    technologies: ['React', 'TsED', 'Airtable', 'MongoDB', 'TypeScript'],
  },
  {
    name: 'Sliding Tiles',
    category: 'Multiplayer Game',
    description:
      'A modern puzzle game with competitive play, replay flows, progress tracking, and deployment on self-managed infrastructure.',
    contribution:
      'I shaped the product experience and built the real-time systems that made the game feel immediate, social, and dependable.',
    technologies: ['React', 'WebSockets', 'Realtime', 'Self-hosted infra'],
  },
  {
    name: 'LovePulse',
    category: 'Mobile App',
    description:
      'A relationship app focused on thoughtful notifications, message experiences, and daily emotional connection.',
    contribution:
      'I focused on the interaction design and product details that made communication feel intentional rather than transactional.',
    technologies: [
      'Mobile product',
      'Realtime messaging',
      'Notifications',
      'Product design',
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
