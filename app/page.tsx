import { cookies } from 'next/headers';
import { ThemeControl } from '@/components/theme-control';
import {
  approach,
  capabilities,
  contact,
  openSourceTools,
  principles,
  selectedWork,
  technologies,
} from '@/content/profile';

type ThemePreference = 'light' | 'system' | 'dark';

function isThemePreference(
  value: string | undefined,
): value is ThemePreference {
  return value === 'light' || value === 'system' || value === 'dark';
}

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
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={typeof children === 'string' ? children : href}
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
      <a className="skip-link" href="#content">
        Skip to content
      </a>
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

      <main id="content">
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
                infrastructure, and developer experience to turn ambiguous ideas
                into useful products, dependable systems, and clear delivery
                habits.
              </p>
              <div className="socials" aria-label="Contact links">
                <SocialLink href={contact.github}>GitHub</SocialLink>
                <SocialLink href={contact.linkedin}>LinkedIn</SocialLink>
                <SocialLink href={contact.email}>Email</SocialLink>
                <SocialLink href="https://drive.google.com/file/d/1cLoltLQBoGfKqyHL9CoLE6y1Hg8_jTJZ/view?usp=sharing">
                  View Resume
                </SocialLink>
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
            eyebrow="How I think"
            title="Good products are built on clear decisions."
            copy="I work from first principles: define the real problem, make tradeoffs deliberately, and keep the product moving with evidence."
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
            eyebrow="What I can own"
            title="From product framing to production support."
            copy="I can move from problem definition to implementation and stay involved as the product evolves in the real world."
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
            title="A curated collection of products and systems."
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
              These are representative examples selected from a much broader
              body of work spanning enterprise software, AI systems, fintech,
              government platforms, payment systems, developer tooling, cloud
              infrastructure, automation platforms, consulting engagements, and
              open source projects.
            </p>
          </div>
        </section>

        <section
          className="open-source page-shell"
          aria-labelledby="open-source-title"
        >
          <SectionIntro
            eyebrow="Tools and libraries"
            title="Small tools, built where they remove friction."
            copy="I build practical utilities and developer-facing pieces when they make delivery clearer, faster, or more consistent."
          />
          <div className="open-source-grid">
            {openSourceTools.map((tool) => (
              <article className="open-source-card" key={tool.name}>
                <div className="tool-heading">
                  <h3>{tool.name}</h3>
                  <span className="tool-type">{tool.type}</span>
                </div>
                <p className="tool-description">{tool.description}</p>
                {tool.link ? (
                  <a className="tool-link" href={tool.link}>
                    View placeholder
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section
          className="technology page-shell"
          aria-labelledby="technology-title"
        >
          <SectionIntro
            eyebrow="Technical range"
            title="Tools chosen for the product, not the other way around."
            copy="I work across the stack and keep the implementation practical. The right stack is the one that helps the product ship, scale, and stay maintainable."
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
              eyebrow="How I approach product development"
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
              The goal is not only to ship software. It is to build the right
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
                the hard work of turning an idea into something real.
              </p>
              <div className="socials" aria-label="Resume and contact links">
                <SocialLink href="/Ronald-M-Kasendwa-Resume.pdf">
                  View Resume
                </SocialLink>
                <a className="email-cta" href={contact.email}>
                  kasendwaronald@gmail.com
                  <ArrowIcon />
                </a>
              </div>
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
