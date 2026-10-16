import Link from 'next/link';
import InteractivePortrait from '@/components/interactive-portrait';

const focusAreas = [
  'Leading Renesas\' India-for-India business unit across power management, sensing, and embedded analog semiconductor portfolios.',
  'Shaping localised product roadmaps and accelerating adoption across automotive, industrial, and energy segments.',
  'Developing ecosystem partnerships to support sustainable scaling within India\'s electronics hardware economy.',
];

const trackRecord = [
  ['01', 'Portfolio management', '$3B – $30B', 'Go-to-market strategies, sales playbooks, and KPI architectures across global business structures.'],
  ['02', 'Operational efficiency', '+15% to 20%', 'Central program networks governing resource deployment, outsourcing, and analytics automation.'],
  ['03', 'Organisation transformation', '~10% growth', 'Post-merger integration strategies and commercial growth pilots at McKinsey & Company.'],
  ['04', 'Deep-tech hardware', 'Patented', 'Emergency shutoff mechanics and published industrial research at Mitsubishi Heavy Industries.'],
];

const selectedWork = [
  ['Research', 'Global surveys of consumer sentiment during the coronavirus crisis', 'McKinsey & Company · 2020', 'https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/a-global-view-of-how-consumer-behavior-is-changing-amid-covid-19'],
  ['Technical paper', 'Technical Challenges for Compressors and Steam Turbines in Mega Ethylene Plants', 'Texas A&M Turbomachinery Symposium · 2016', 'https://oaktrust.library.tamu.edu/items/05594529-135d-421d-9e9b-1ca4e1ad9cce'],
  ['Patent', 'Emergency Shutoff Device and System', 'Mitsubishi Heavy Industries · 2016', 'https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2016084140'],
  ['Research', 'Low Hanging Fruit: VC Investment Trends in Food Waste', 'Stanford EIPER · 2020', 'https://earth.stanford.edu/eiper'],
];

const experience = ['Renesas Electronics', 'McKinsey & Company', 'Mitsubishi Heavy Industries', 'NextEra Energy', 'AutoGrid', 'Sparkz Inc.', 'Averda'];
const education = ['Stanford University (MBA)', 'Stanford University (MS Earth)', 'IIT Kanpur (B.Tech)'];

function AnchorArrow() {
  return <span className="anchor-arrow" aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main className="three-d-site">
      <header className="three-d-header">
        <Link className="three-d-wordmark" href="/" aria-label="Abhay Jain home">
          <span className="three-d-mark">AJ</span>
          <span>Abhay Jain</span>
        </Link>
        <nav aria-label="Primary navigation">
          <a href="#focus">Focus</a>
          <a href="#record">Record</a>
          <Link href="/about">About</Link>
          <a className="three-d-nav-cta" href="#contact">Contact <AnchorArrow /></a>
        </nav>
      </header>

      <section className="three-d-hero" id="top">
        <div className="hero-copy-3d">
          <p className="eyebrow-3d"><span /> Executive profile · India / Global</p>
          <h1>Abhay<br /><em>Jain</em></h1>
          <p className="hero-role-3d">Business Division Leader <b>·</b> Renesas Electronics</p>
          <p className="hero-lede-3d">Bridging technology, localised product strategy, and cross-functional operations across power-management semiconductors.</p>
          <div className="hero-actions-3d">
            <a className="button-3d button-3d-dark" href="#contact">Start a conversation <AnchorArrow /></a>
            <a className="button-3d button-3d-quiet" href="https://www.linkedin.com/in/abhay-jain-10/" target="_blank" rel="noreferrer">LinkedIn <AnchorArrow /></a>
          </div>
          <p className="hero-note-3d"><span>↙</span> Move across the portrait to explore the profile</p>
        </div>

        <InteractivePortrait />
        <div className="hero-axis hero-axis-one" aria-hidden="true">01 / POSITIONING</div>
        <div className="hero-axis hero-axis-two" aria-hidden="true">POWER · SYSTEMS · SCALE</div>
      </section>

      <section className="data-strip-3d" aria-label="Profile summary">
        <div><span>01</span><strong>Strategy</strong><small>Product direction</small></div>
        <div><span>02</span><strong>Systems</strong><small>Operational range</small></div>
        <div><span>03</span><strong>Execution</strong><small>Market adoption</small></div>
        <p>Clarity for relevant conversations.</p>
      </section>

      <section className="three-d-section" id="focus">
        <div className="three-d-section-heading">
          <p className="section-kicker-3d">01 / Current focus</p>
          <h2>Where the work<br /><em>is now.</em></h2>
          <p>A concise filter for advisory, operating, and ecosystem conversations.</p>
        </div>
        <div className="focus-list-3d">
          {focusAreas.map((area, index) => <article key={area}><span>0{index + 1}</span><p>{area}</p></article>)}
        </div>
      </section>

      <section className="three-d-section record-section-3d" id="record">
        <div className="three-d-section-heading">
          <p className="section-kicker-3d">02 / Track record</p>
          <h2>Proof,<br />not <em>volume.</em></h2>
        </div>
        <div className="record-list-3d">
          {trackRecord.map(([index, label, stat, detail]) => <article key={index}><span className="record-index">{index}</span><div><p className="record-label">{label}</p><strong>{stat}</strong><p>{detail}</p></div></article>)}
        </div>
      </section>

      <section className="three-d-section work-section-3d" id="work">
        <div className="three-d-section-heading">
          <p className="section-kicker-3d">03 / Selected work</p>
          <h2>Published<br /><em>record.</em></h2>
          <p>Research, technical writing, and patents that sit behind the operating profile.</p>
        </div>
        <div className="work-list-3d">
          {selectedWork.map(([type, title, source, href], index) => <a href={href} target="_blank" rel="noreferrer" key={title}><span>{String(index + 1).padStart(2, '0')} · {type}</span><strong>{title}</strong><small>{source}</small><AnchorArrow /></a>)}
        </div>
      </section>

      <section className="three-d-section range-section-3d" id="about-preview">
        <div className="three-d-section-heading"><p className="section-kicker-3d">04 / Range</p><h2>Built across<br /><em>systems.</em></h2></div>
        <div className="range-columns-3d"><div><small>Current</small><strong>{experience[0]}</strong></div><div><small>Earlier</small>{experience.slice(1).map((item) => <strong key={item}>{item}</strong>)}</div><div><small>Education</small>{education.map((item) => <strong key={item}>{item}</strong>)}</div></div>
      </section>

      <section className="contact-section-3d" id="contact">
        <p className="section-kicker-3d">05 / Contact</p>
        <h2>Relevant conversation?<br /><em>Begin there.</em></h2>
        <p>Open to precise conversations regarding advisory positions, semiconductor ecosystem strategies, or institutional alignment.</p>
        <div className="contact-actions-3d"><a className="button-3d button-3d-light" href="https://www.linkedin.com/in/abhay-jain-10/" target="_blank" rel="noreferrer">Connect on LinkedIn <AnchorArrow /></a><Link className="button-3d button-3d-outline-light" href="/about">View full profile <AnchorArrow /></Link></div>
      </section>

      <footer className="three-d-footer"><span>© 2026 Abhay Jain</span><span>Separate 3D concept / 01</span><Link href="/about">About <AnchorArrow /></Link></footer>
    </main>
  );
}
