import { cookies } from 'next/headers';
import { ThemeControl } from '@/components/theme-control';

type ThemePreference = 'light' | 'system' | 'dark';

function isThemePreference(
  value: string | undefined,
): value is ThemePreference {
  return value === 'light' || value === 'system' || value === 'dark';
}

const contact = {
  github: 'https://github.com/rmkasendwa',
  linkedin: 'https://www.linkedin.com/in/rmkasendwa',
  email: 'mailto:kasendwaronald@gmail.com',
};

const principles = [
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

const capabilities = [
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

const selectedWork = [
  {
    name: 'Skattebasserne',
    category: 'AI Product',
    description:
      'A tax advisory experience that helped users navigate complex rules through a clearer, more explainable workflow.',
    contribution:
      'I owned the product experience end to end, shaping the interaction model, integrating AI-assisted guidance, and making the system dependable enough for real-world use.',
    technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'AI workflows'],
  },
  {
    name: 'Locals',
    category: 'Creator Platform',
    description:
      'A creator-first platform for building direct communities around content, interaction, and sustained audience connection.',
    contribution:
      'I shaped the core product experience and the interface system, helping turn a broad idea into a focused, usable product.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Product design'],
  },
  {
    name: 'awamo360',
    category: 'FinTech Platform',
    description:
      'A banking platform for small businesses that brought operational workflows and financial activity into a single system.',
    contribution:
      'I worked across the product surface and platform services to support transactional flows with strong architecture and careful implementation.',
    technologies: ['React', 'NestJS', 'REST APIs', 'AWS'],
  },
  {
    name: 'Formula.Monks Topology',
    category: 'Automation Platform',
    description:
      'An automation platform that helped teams coordinate work across systems without sacrificing clarity or control.',
    contribution:
      'I helped translate complex automation requirements into a dependable product structure, balancing technical depth with day-to-day usability.',
    technologies: ['TypeScript', 'Docker', 'Pulumi', 'Event systems'],
  },
  {
    name: 'Traccar SaaS',
    category: 'Fleet Management Platform',
    description:
      'A fleet operations product built to give teams a practical view of vehicles, movement, and operational oversight.',
    contribution:
      'I contributed to the product and platform layer, improving reliability and making the experience more useful for day-to-day operations.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Cloud services'],
  },
  {
    name: 'Sliding Tiles',
    category: 'Consumer Product',
    description:
      'A lightweight multiplayer game designed for quick, social rounds and a simple, immediate form of play.',
    contribution:
      'I built the real-time interaction layer and the product experience that made the game feel responsive and easy to pick up.',
    technologies: ['React', 'WebSockets', 'Realtime', 'Game logic'],
  },
  {
    name: 'Airtable Client',
    category: 'Developer SDK',
    description:
      'A developer-facing client that made working with Airtable data more approachable through a clear and consistent interface.',
    contribution:
      'I designed and implemented the client surface and integration patterns that made the SDK practical to adopt and maintain.',
    technologies: ['TypeScript', 'SDK design', 'APIs', 'Developer tooling'],
  },
  {
    name: 'Dubai Chamber Match',
    category: 'Enterprise Platform',
    description:
      'An enterprise matching platform built to support meaningful business connections in a structured, trustworthy environment.',
    contribution:
      'I worked closely with stakeholders and engineering teams to build a system that balanced business needs with durable architecture.',
    technologies: ['React', 'Node.js', 'Enterprise workflows', 'Integration'],
  },
  {
    name: 'PIMIS',
    category: 'Government Platform',
    description:
      'A government platform supporting information management and operational workflows where consistency and maintainability matter deeply.',
    contribution:
      'I contributed to a system that needed to be reliable, clear, and maintainable in a sensitive public-sector context.',
    technologies: [
      'TypeScript',
      'System design',
      'Government workflows',
      'Cloud infrastructure',
    ],
  },
  {
    name: 'MUI Extensions',
    category: 'Developer Tooling',
    description:
      'An open source TypeScript library that extends Material UI with production-ready components and utilities developed from years of building commercial React applications. The project focuses on improving developer experience, consistency, maintainability, and development speed in enterprise-grade interfaces.',
    contribution:
      'I designed, implemented, documented, and maintained the component library, creating reusable UI building blocks and utilities that accelerate development across multiple products.',
    technologies: ['TypeScript', 'React', 'Material UI', 'Storybook', 'npm'],
  },
];

const technologies = [
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

const approach = [
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

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function SocialLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith('http');

  return (
    <a
      className="social-link"
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

export default async function Home() {
  const cookieStore = await cookies();
  const savedTheme = cookieStore.get('theme')?.value;
  const themePreference = isThemePreference(savedTheme) ? savedTheme : 'system';
  const siteUrl = 'https://rmkasendwa.com';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Ronald M. Kasendwa',
        givenName: 'Ronald',
        familyName: 'Kasendwa',
        url: siteUrl,
        jobTitle: 'Product Engineer',
        homeLocation: {
          '@type': 'Place',
          name: 'Kampala, Uganda',
        },
        sameAs: [contact.github, contact.linkedin],
        knowsAbout: [
          'Product development',
          'Frontend engineering',
          'Backend engineering',
          'Cloud infrastructure',
          'Developer experience',
          'Systems architecture',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Ronald M. Kasendwa',
        description:
          'The portfolio of Ronald M. Kasendwa, a Product Engineer in Kampala, Uganda.',
        inLanguage: 'en',
        publisher: { '@id': `${siteUrl}/#person` },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${siteUrl}/#webpage`,
        url: siteUrl,
        name: 'Ronald M. Kasendwa — Product Engineer',
        isPartOf: { '@id': `${siteUrl}/#website` },
        mainEntity: { '@id': `${siteUrl}/#person` },
        about: { '@id': `${siteUrl}/#person` },
        inLanguage: 'en',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="site-header">
        <a
          className="wordmark"
          href="#top"
          aria-label="Ronald M. Kasendwa, home"
        >
          RMK<span>.</span>
        </a>
        <div className="site-header-actions">
          <nav aria-label="Main navigation">
            <a href="#work">What I do</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
          </nav>
          <ThemeControl initialPreference={themePreference} />
        </div>
      </header>

      <main id="top">
        <section className="hero page-shell" aria-labelledby="hero-heading">
          <div className="hero-status">
            <span className="status-dot" />
            Product Engineer · Kampala, Uganda
          </div>
          <div className="hero-grid">
            <div>
              <p className="hero-name">Ronald M. Kasendwa</p>
              <h1 id="hero-heading">
                Turning ideas
                <br />
                into <em>products.</em>
              </h1>
            </div>
            <div className="hero-aside">
              <p>
                I work across product thinking, software engineering, cloud
                infrastructure, and developer experience to build useful,
                maintainable products.
              </p>
              <div className="socials" aria-label="Contact links">
                <SocialLink href={contact.github}>GitHub</SocialLink>
                <SocialLink href={contact.linkedin}>LinkedIn</SocialLink>
                <SocialLink href={contact.email}>Email</SocialLink>
              </div>
            </div>
          </div>
          <div className="experience-line">
            <p>Deep experience in software engineering</p>
            <div aria-hidden="true" />
            <p>From first conversation to production</p>
          </div>
        </section>

        <section
          className="philosophy page-shell"
          aria-labelledby="philosophy-title"
        >
          <SectionIntro
            eyebrow="Engineering philosophy"
            title="Good products are built on clear decisions."
            copy="A few principles guide how I scope, build, and improve software."
          />
          <div className="principle-grid">
            {principles.map((principle) => (
              <article className="principle-card" key={principle.number}>
                <span>{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="capabilities page-shell"
          id="work"
          aria-labelledby="work-title"
        >
          <SectionIntro
            eyebrow="What I do"
            title="One product. Every layer."
            copy="I move across disciplines to keep the product coherent—from the problem being solved to the system running in production."
          />
          <div className="capability-list">
            {capabilities.map((capability, index) => (
              <article className="capability-row" key={capability.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{capability.title}</h3>
                <p>{capability.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="selected-work page-shell"
          aria-labelledby="selected-work-title"
        >
          <SectionIntro
            eyebrow="Selected work"
            title="Representative work across products, platforms, and systems."
          />
          <p className="selected-work-intro">
            A small selection of products, platforms, and engineering work from
            more than a decade of building software across fintech, creator
            platforms, AI, government, enterprise systems, developer tooling,
            and cloud infrastructure.
          </p>
          <div className="selected-work-grid">
            {selectedWork.map((project) => (
              <article className="selected-work-card" key={project.name}>
                <div className="project-meta">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.name}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-contribution">
                  <p className="project-label">
                    Primary engineering contribution
                  </p>
                  <p>{project.contribution}</p>
                </div>
                <ul
                  className="project-tags"
                  aria-label={`${project.name} technologies`}
                >
                  {project.technologies.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="selected-work-close">
            <p className="selected-work-close-line">And many more.</p>
            <p className="selected-work-footnote">
              This is a curated selection from a much broader body of work that
              includes enterprise software, government systems, fintech, AI,
              developer tooling, automation platforms, internal products,
              consulting engagements, and open source projects.
            </p>
          </div>
        </section>

        <section
          className="technology page-shell"
          aria-labelledby="technology-title"
        >
          <SectionIntro
            eyebrow="Technical range"
            title="Tools chosen for the product, not the other way around."
            copy="Broad enough to own the whole system. Experienced enough to know that the right stack depends on the problem."
          />
          <div className="technology-grid">
            {technologies.map((group) => (
              <div className="technology-group" key={group.category}>
                <h3>{group.category}</h3>
                <p>{group.items.join(' · ')}</p>
              </div>
            ))}
            <div className="technology-more">
              <span aria-hidden="true">•••</span>
              <p>
                And more, as the product calls for it. The stack is a working
                set, not a boundary.
              </p>
            </div>
          </div>
        </section>

        <section
          className="approach page-shell"
          id="approach"
          aria-labelledby="approach-title"
        >
          <div className="approach-heading">
            <SectionIntro
              eyebrow="Product mindset"
              title="Engineering starts before the code."
            />
            <p>
              Building a product means navigating uncertainty, making tradeoffs,
              and keeping technical work connected to user and business value.
            </p>
          </div>
          <ol className="approach-list">
            {approach.map(([title, copy], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
          <blockquote>
            <p>
              The goal is not just to ship software. It is to build the right
              thing, make it work well, and leave it ready for what comes next.
            </p>
          </blockquote>
        </section>

        <section
          className="contact page-shell"
          id="contact"
          aria-labelledby="contact-title"
        >
          <p className="eyebrow">Start a conversation</p>
          <div className="contact-grid">
            <h2 id="contact-title">
              Have something
              <br />
              worth <em>building?</em>
            </h2>
            <div>
              <p>
                I enjoy conversations about products, engineering, startups, and
                the difficult work of turning a promising idea into something
                real.
              </p>
              <a className="email-cta" href={contact.email}>
                kasendwaronald@gmail.com
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer page-shell">
        <p>© {new Date().getFullYear()} Ronald M. Kasendwa</p>
        <p>Product thinking · Engineering depth · Thoughtful execution</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
