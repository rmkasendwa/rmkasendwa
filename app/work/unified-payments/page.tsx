import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Unified Payment Flow — Engineering case study',
  description: 'Frontend engineering contributions to a unified payment experience at Rumble.',
};

const areas = [
  ['Payment status', 'Built reusable payment-status UI for loading, successful, and unsuccessful checkout outcomes.'],
  ['Payment methods', 'Developed payment method selection and card details experiences, including saved and new card flows.'],
  ['Wallet integration', 'Worked on Apple Pay and Google Pay routing within the payment gateway integration.'],
  ['Integration', 'Connected component-level experiences into a shared checkout shell and supported QA integration.'],
];

export default function PaymentCaseStudy() {
  return (
    <main className="case-study page-shell">
      <Link className="case-study-back" href="/#work">← Back to selected work</Link>
      <p className="eyebrow">Professional work · Frontend engineering</p>
      <h1>Unified<span className="case-study-period">.</span></h1>
      <p className="case-study-lead">Bringing fragmented payment interactions into a coherent checkout experience.</p>
      <div className="case-study-meta">
        <div><span>Company</span><strong>Rumble</strong></div>
        <div><span>Role</span><strong>Frontend product engineering</strong></div>
        <div><span>Focus</span><strong>React · TypeScript · Payments</strong></div>
      </div>
      <section className="case-study-section">
        <p className="eyebrow">The challenge</p>
        <h2>One payment experience, several moving parts.</h2>
        <p>Checkout brings together plans, billing information, saved and new payment methods, wallets, status handling, and integration states. The engineering challenge is making those pieces feel consistent and reliable to the person paying.</p>
      </section>
      <section className="case-study-section">
        <p className="eyebrow">My contributions</p>
        <h2>Building the pieces that make checkout work.</h2>
        <div className="case-study-decisions">
          {areas.map(([title, copy], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="case-study-section">
        <p className="eyebrow">What I learned</p>
        <h2>Payments demand careful state management and collaboration.</h2>
        <p>Successful payment interfaces depend on more than component polish. Integration contracts, clear loading and error states, reusable patterns, and close coordination with QA are essential. This case study describes my engineering contributions, not a claim that every planned payment integration shipped.</p>
      </section>
      <footer className="case-study-footer">
        <Link href="/#work">← All selected work</Link>
        <a href="mailto:kasendwaronald@gmail.com">Discuss a project ↗</a>
      </footer>
    </main>
  );
}
