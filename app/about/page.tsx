import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Abhay Jain — Executive Profile',
  description: 'Career, education, recognitions, and selected publications of Abhay Jain — business and strategy leader across semiconductors, energy, and institutional markets.',
  alternates: { canonical: '/about' },
};

/* ── data ────────────────────────────────────────────────────────────────── */
const workExperience = [
  {
    logo: '/mckinsey_logo.png',
    company: 'McKinsey & Co.',
    role: 'Consultant',
    alt: 'McKinsey & Company',
  },
  {
    logo: '/mitsubishi_logo.png',
    company: 'Mitsubishi Heavy Industries',
    role: 'Sales & Marketing Executive; Compressor & Steam Turbine Engineer',
    alt: 'Mitsubishi Heavy Industries',
  },
  {
    logo: '/nextera_logo.png',
    company: 'NextEra Energy',
    role: 'MBA Intern, Renewable Energy Innovation and Strategy',
    alt: 'NextEra Energy',
  },
  {
    logo: '/autogrid_logo.png',
    company: 'AutoGrid',
    role: 'Summer Intern, Solutions and Data Science',
    alt: 'AutoGrid',
  },
  {
    logo: '/sparkz_logo.png',
    company: 'Sparkz Inc.',
    role: 'Business and Product Development Manager (Intern)',
    alt: 'Sparkz Inc.',
  },
  {
    logo: '/averda_logo.png',
    company: 'Averda',
    role: 'Operations Intern, COO Office',
    alt: 'Averda',
  },
];

const education = [
  {
    logo: '/iit_logo.png',
    school: 'IIT Kanpur',
    degree: 'B.Tech — Materials & Metallurgical Engineering',
    alt: 'IIT Kanpur',
    whiteBg: true,
  },
  {
    logo: '/stanford_logo.png',
    school: 'Stanford University',
    degree: 'MBA, Graduate School of Business',
    alt: 'Stanford University',
    whiteBg: false,
  },
  {
    logo: '/stanford_earth_logo.png',
    school: 'Stanford University',
    degree: 'MS in Environment and Resources, School of Earth',
    alt: 'Stanford University — Earth',
    whiteBg: false,
  },
];

const publications = [
  {
    title: 'Global surveys of consumer sentiment during the coronavirus crisis',
    source: 'McKinsey & Company · 2020',
    href: 'https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/a-global-view-of-how-consumer-behavior-is-changing-amid-covid-19',
  },
  {
    title: 'Technical Challenges for Compressors and Steam Turbines in Mega Ethylene Plants',
    source: 'Texas A&M Turbomachinery Symposium · 2016',
    href: 'https://oaktrust.library.tamu.edu/items/05594529-135c-421d-9e9b-1ca4e1ad9cce',
  },
  {
    title: 'Emergency Shutoff Device and System Patent',
    source: 'Mitsubishi Heavy Industries · 2016',
    href: 'https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2016084140',
  },
  {
    title: 'The clock stops ticking, Vox-populi',
    source: 'IIT Kanpur · 2016',
    href: 'https://voxiitk.com/the-clock-stops-ticking/',
  },
  {
    title: 'Emergency Shut-Off Device Patent',
    source: 'Mitsubishi Heavy Industries · 2017',
    href: 'https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2017104037',
  },
  {
    title: 'Low Hanging Fruit: VC Investment Trends in Food Waste',
    source: 'Stanford EIPER · 2020',
    href: 'https://earth.stanford.edu/eiper',
  },
];

const awards = [
  { title: 'K.C. Mahindra Scholarship', note: 'For Graduate Studies · 2017' },
  { title: 'J.N. Tata Scholarship', note: 'For Graduate Studies · 2017' },
  { title: 'Social Management Immersion', note: 'Fellowship, Stanford · 2018' },
  { title: 'Certificate in Public Management & Social Innovation', note: 'Stanford · 2019' },
  { title: 'InSite Fellowship', note: '2019' },
];

/* ── Route Map SVG ───────────────────────────────────────────────────────── */
function RouteMap() {
  return (
    <div className="route-map" aria-label="Career geography — Himalayan foothills, Japan, United States, India">
      <svg viewBox="0 0 640 520" fill="none">
        <path className="route-grid" d="M80 130H560M80 260H560M80 390H560" />
        <path className="route-grid" d="M160 60V460M320 60V460M480 60V460" />
        <path className="route-path" d="M96 375C172 335 155 222 245 256C332 288 305 116 400 160C486 200 474 348 552 132" />
        <circle className="route-node" cx="96"  cy="375" r="5" />
        <circle className="route-node" cx="245" cy="256" r="5" />
        <circle className="route-node" cx="400" cy="160" r="5" />
        <circle className="route-node" cx="552" cy="132" r="5" />
      </svg>
      <span className="route-lbl route-lbl-1">Himalayan foothills</span>
      <span className="route-lbl route-lbl-2">Japan · 4 years</span>
      <span className="route-lbl route-lbl-3">United States</span>
      <span className="route-lbl route-lbl-4 route-lbl-accent">India</span>
      <span className="route-cap">A personal geography / 01</span>
    </div>
  );
}

/* ── page ────────────────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <main>
      {/* ── HEADER ─────────────────────────────────────────────────── */}
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Abhay Jain — home">
          <span className="wordmark-badge">AJ</span>
          <span>Abhay Jain</span>
        </Link>
        <nav className="site-nav" aria-label="Primary">
          <Link href="/about" className="nav-active">About</Link>
          <span className="nav-dot" aria-hidden="true">·</span>
          <Link href="/#focus">Focus</Link>
          <span className="nav-dot" aria-hidden="true">·</span>
          <Link href="/#track-record">Track Record</Link>
          <span className="nav-dot" aria-hidden="true">·</span>
          <Link href="/#contact" className="nav-cta">Contact <span aria-hidden="true">↗</span></Link>
        </nav>
      </header>

      {/* ── ABOUT HERO ─────────────────────────────────────────────── */}
      <section className="about-hero wrap">
        <div className="about-hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            Executive Profile
            <span className="eyebrow-muted">— Full biography</span>
          </p>
          <h1 className="about-h1">
            A global<br />
            professional<br />
            <em>at scale.</em>
          </h1>
          <p className="about-lede">
            Comprehensive expertise in management consulting, energy sustainability,
            deep-tech hardware, and manufacturing operations across international markets.
          </p>
          <p className="about-origin">
            From the foothills of the Himalayas · Japan · United States · India
          </p>
        </div>

        <div className="about-visual hero-visual">
          <RouteMap />
          <figure className="portrait-wrap" style={{ width: 'min(60%, 280px)', marginTop: '24px' }}>
            <Image
              src="/Abhay_Jain_profile_pic.jpg"
              alt="Abhay Jain"
              width={400}
              height={533}
              className="portrait-img"
              priority
            />
            <figcaption className="portrait-cap">
              <span>PROFILE / 01</span>
              <span>ABHAY JAIN</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── STATEMENT BAND ─────────────────────────────────────────── */}
      <section className="about-statement">
        <div className="wrap statement-inner">
          <p className="section-label" style={{ color: 'rgba(180,83,42,.8)' }}>The throughline</p>
          <p className="statement-text">
            With early roots in the Himalayan region of India, a four-year tenure in Japan,
            graduate studies in the United States — the work has changed industries, but the
            question has stayed consistent: how do complex systems become useful, adoptable, and durable?
          </p>
        </div>
      </section>

      {/* ── WORK EXPERIENCE ────────────────────────────────────────── */}
      <section id="pedigree" className="section">
        <div className="wrap reveal">
          <div className="logo-section-header">
            <p className="section-number">01</p>
            <p className="section-label">Work Experience</p>
            <h2 className="section-h2">
              Operating<br />
              <em>range.</em>
            </h2>
          </div>
          <div className="logo-grid">
            {workExperience.map((item) => (
              <article className="logo-card" key={item.company}>
                <div className="logo-card-img-wrap">
                  <Image
                    src={item.logo}
                    alt={item.alt}
                    width={160}
                    height={60}
                    className="logo-card-img"
                  />
                </div>
                <h3 className="logo-card-name">{item.company}</h3>
                <p className="logo-card-role">{item.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ──────────────────────────────────────────────── */}
      <section className="section section-alt">
        <div className="wrap reveal">
          <div className="logo-section-header">
            <p className="section-number">02</p>
            <p className="section-label">Education</p>
            <h2 className="section-h2">
              Technical<br />
              <em>grounding.</em>
            </h2>
          </div>
          <div className="logo-grid logo-grid-3">
            {education.map((item) => (
              <article className="logo-card" key={`${item.school}-${item.degree}`}>
                <div className={`logo-card-img-wrap${item.whiteBg ? ' logo-card-img-wrap--white' : ''}`}>
                  <Image
                    src={item.logo}
                    alt={item.alt}
                    width={160}
                    height={60}
                    className="logo-card-img"
                  />
                </div>
                <h3 className="logo-card-name">{item.school}</h3>
                <p className="logo-card-role">{item.degree}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── HONORS & PUBLICATIONS ──────────────────────────────────── */}
      <section id="honors" className="section">
        <div className="wrap reveal">
          <div className="logo-section-header">
            <p className="section-number">03</p>
            <p className="section-label">Honors & Published Work</p>
            <h2 className="section-h2">
              Signals<br />
              of<br />
              <em>trust.</em>
            </h2>
          </div>

          {/* Publications */}
          <p className="sub-head">Publications & Patents</p>
          <div className="pub-list pub-list-about">
            {publications.map((item, i) => (
              <a
                className="pub-item"
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`View: ${item.title}`}
              >
                <span className="pub-idx">0{i + 1}</span>
                <span className="pub-title">{item.title}</span>
                <span className="pub-src">{item.source}</span>
                <span className="pub-view">View <span aria-hidden="true">↗</span></span>
              </a>
            ))}
          </div>

          {/* Awards */}
          <p className="sub-head" style={{ marginTop: '56px' }}>Awards & Fellowships</p>
          <div className="rec-list">
            {awards.map((item, i) => (
              <div className="rec-item" key={item.title}>
                <span className="rec-idx">0{i + 1}</span>
                <div>
                  <p className="rec-text" style={{ fontWeight: 500 }}>{item.title}</p>
                  <p className="rec-text" style={{ color: 'var(--ink-60)', fontSize: '13px', marginTop: '2px' }}>{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEYOND WORK ────────────────────────────────────────────── */}
      <section className="section section-alt">
        <div className="wrap section-grid reveal">
          <div>
            <p className="section-number">04</p>
            <p className="section-label">Beyond Work</p>
            <h2 className="section-h2">
              Keep a<br />
              wider<br />
              <em>view.</em>
            </h2>
          </div>
          <div className="beyond-body">
            <p className="beyond-quote">
              Raised in the Himalayan foothills. Four years in Japan.
              Graduate studies in the United States. Now based in India.
            </p>
            <p className="rec-text" style={{ marginBottom: '16px', color: 'var(--ink-60)' }}>
              Outside formal roles: competitive table tennis, pool, golf, road trips, and international dance performances.
            </p>
            <p className="beyond-cap">Personal detail, kept in proportion.</p>
          </div>
        </div>
      </section>

      {/* ── BANNER ─────────────────────────────────────────────────── */}
      <section className="banner-section">
        <div className="banner-img-wrap">
          <Image
            src="/Abhay_Jain_banner_pic.jpg"
            alt="Abhay Jain presenting technical frameworks"
            fill
            className="banner-img"
            sizes="100vw"
          />
          <div className="banner-overlay" />
        </div>
        <div className="wrap banner-content">
          <h2 className="banner-h2">Inbound</h2>
          <p className="banner-sub">
            Open to precise conversations regarding advisory positions,
            semiconductor ecosystem strategies, or institutional alignment.
          </p>
          <a className="btn btn-dark" href="https://www.linkedin.com/in/abhay-jain-10/" target="_blank" rel="noreferrer">
            Connect on LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────────── */}
      <section className="contact-section">
        <div className="wrap contact-inner">
          <div>
            <p className="eyebrow contact-eyebrow">
              <span className="eyebrow-line" aria-hidden="true" />
              05 · Contact
            </p>
            <h2 className="contact-h2">
              Relevant<br />
              conversation?<br />
              <em>Begin there.</em>
            </h2>
          </div>
          <div className="contact-side">
            <p className="contact-desc">
              For advisory, operating, semiconductor ecosystem, or institutional conversations.
            </p>
            <div className="contact-actions">
              <a className="contact-link contact-link-primary" href="https://www.linkedin.com/in/abhay-jain-10/" target="_blank" rel="noreferrer">
                Connect on LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <Link className="contact-link contact-link-secondary" href="/">← Back to home</Link>
            </div>
          </div>
        </div>
        <footer className="wrap site-footer footer-dark">
          <Link href="/">← Home</Link>
          <span>© {new Date().getFullYear()} Abhay Jain</span>
          <span>abhayjain.net</span>
        </footer>
      </section>
    </main>
  );
}
