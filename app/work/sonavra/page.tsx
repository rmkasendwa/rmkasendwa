import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sonavra — Self-hosted transcription',
  description:
    'An engineering case study of Sonavra, a self-hosted audio transcription workspace with durable background jobs and private storage.',
};

const decisions = [
  {
    title: 'Own the transcription pipeline',
    copy: 'The product is designed to run speech recognition without depending on a third-party transcription API. That gives operators more control over data handling and deployment.',
  },
  {
    title: 'Treat processing as durable work',
    copy: 'Uploads and transcription are separate operations. Persisted job states, retry behavior, and restart recovery are central to the architecture rather than an afterthought.',
  },
  {
    title: 'Keep files private',
    copy: 'Audio belongs in private S3-compatible object storage. Presigned upload and controlled retrieval flows keep large files out of ordinary application request handling.',
  },
  {
    title: 'Make self-hosting practical',
    copy: 'Local development and container packaging are part of the product. The goal is to make the full stack reproducible and straightforward to operate.',
  },
];

export default function SonavraCaseStudy() {
  return (
    <main className="case-study page-shell">
      <Link className="case-study-back" href="/#work">← Back to selected work</Link>
      <p className="eyebrow">Independent product · Open source</p>
      <h1>Sonavra<span className="case-study-period">.</span></h1>
      <p className="case-study-lead">
        A self-hosted transcription workspace designed around privacy, resilient processing,
        and control over the infrastructure.
      </p>
      <div className="case-study-meta">
        <div><span>Role</span><strong>Product engineering · Architecture · Implementation</strong></div>
        <div><span>Stack</span><strong>Next.js · TypeScript · PostgreSQL · Whisper · Docker</strong></div>
        <div><span>Status</span><strong>Active development</strong></div>
      </div>
      <section className="case-study-section">
        <p className="eyebrow">The challenge</p>
        <h2>Transcription should not require surrendering control of the workflow.</h2>
        <p>
          Uploading audio is the easy part. A dependable transcription product must handle
          long-running processing, failures, private storage, speaker-aware output, and
          the operational reality of running everything on your own infrastructure.
        </p>
      </section>
      <section className="case-study-section">
        <p className="eyebrow">Engineering decisions</p>
        <h2>Designed for the difficult parts.</h2>
        <div className="case-study-decisions">
          {decisions.map((decision, index) => (
            <article key={decision.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{decision.title}</h3>
              <p>{decision.copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="case-study-section">
        <p className="eyebrow">What this demonstrates</p>
        <h2>Product thinking, from interface to infrastructure.</h2>
        <p>
          Sonavra brings together user experience, API design, data modeling, asynchronous
          processing, object storage, local tooling, and deployment. It is an evolving
          engineering project, not a claim of production scale or commercial adoption.
        </p>
        <a className="case-study-link" href="https://github.com/Infinite-Debugger/sonavra" target="_blank" rel="noopener noreferrer">
          Explore the source on GitHub ↗
        </a>
      </section>
      <footer className="case-study-footer">
        <Link href="/#work">← All selected work</Link>
        <a href="mailto:kasendwaronald@gmail.com">Discuss a project ↗</a>
      </footer>
    </main>
  );
}
