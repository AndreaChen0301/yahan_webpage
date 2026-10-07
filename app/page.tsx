"use client";

import { useEffect, useState } from "react";

type Tab = "about" | "resume" | "projects";

const assetBase = process.env.NODE_ENV === "production" ? "/yahan_webpage" : "";

const tabs: { id: Tab; label: string }[] = [
  { id: "about", label: "About me" },
  { id: "resume", label: "Resume" },
  { id: "projects", label: "Projects" },
];

const Arrow = () => <span aria-hidden="true">↗</span>;

function Header({ active, onChange }: { active: Tab; onChange: (tab: Tab) => void }) {
  return (
    <header className="site-header">
      <button className="wordmark" onClick={() => onChange("about")} aria-label="Go to About me">
        YC<span>.</span>
      </button>
      <nav aria-label="Primary navigation">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={active === tab.id ? "active" : ""}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <a className="say-hi" href="mailto:yahanc27@uw.edu">Say hello <Arrow /></a>
    </header>
  );
}

function About({ onProjects }: { onProjects: () => void }) {
  return (
    <main className="page-shell about-page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Data scientist · Biostatistician · Researcher</p>
          <h1>I turn complex data into evidence people can act on.</h1>
          <p className="lede">
            I’m Yahan (Andrea) Chen, a Biostatistics master’s student at the University of Washington.
            I build rigorous, scalable analyses across healthcare, statistical genetics, NLP, and
            learning science.
          </p>
          <div className="hero-actions">
            <button className="primary-button" onClick={onProjects}>Explore my work <Arrow /></button>
            <a className="text-link" href="mailto:yahanc27@uw.edu">yahanc27@uw.edu</a>
          </div>
        </div>
        <div className="portrait-wrap" aria-label="Avatar placeholder">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="avatar" role="img" aria-label="Memoji-style avatar placeholder">👩🏻‍💻</div>
          <p>Seattle, Washington</p>
        </div>
      </section>

      <section className="signal-strip" aria-label="Highlights">
        <div><strong>100M+</strong><span>Steam reviews processed</span></div>
        <div><strong>1M+</strong><span>GWAS variants analyzed</span></div>
        <div><strong>9</strong><span>advanced research analyses</span></div>
        <div><strong>3rd</strong><span>JPMorgan Data for Good</span></div>
      </section>

      <section className="intro-grid">
        <div>
          <p className="section-kicker">What I do</p>
          <h2>Statistics with a point of view.</h2>
        </div>
        <div className="intro-copy">
          <p>
            My work sits between careful statistical reasoning and practical delivery. I have built
            high-performance pipelines, modeled clinical outcomes, studied language at scale, and
            translated findings into decisions for researchers and stakeholders.
          </p>
          <div className="focus-list">
            <span>Statistical modeling</span><span>Healthcare analytics</span><span>NLP</span>
            <span>High-performance computing</span><span>Data visualization</span><span>Research communication</span>
          </div>
        </div>
      </section>

      <section className="currently">
        <p className="section-kicker">Currently</p>
        <div className="current-grid">
          <article><span>01</span><h3>Brain imaging genetics</h3><p>Building scalable R and SLURM workflows for multivariate analysis of UK Biobank GWAS data.</p></article>
          <article><span>02</span><h3>Cardiovascular risk</h3><p>Using clustering and Cox models to study how Lp(a)-associated CVD risk differs across patient profiles.</p></article>
          <article><span>03</span><h3>Biostatistics at UW</h3><p>Deepening my work in study design, statistical inference, and health data science.</p></article>
        </div>
      </section>

      <Contact />
    </main>
  );
}

const roles = [
  {
    date: "Mar 2024 — May 2025",
    role: "Research Intern",
    org: "Epistemic Analytics · Epistemic Lab",
    place: "Madison, WI",
    bullets: [
      "Led automated R and Python pipelines for learning-science research, improving repeatability and processing efficiency.",
      "Completed nine advanced analyses spanning network analysis, text mining, NLP, and telemetry data for internal and external collaborators.",
      "Mentored 15+ fellows and supported five visiting scholars while co-authoring LAK conference papers and posters.",
    ],
  },
  {
    date: "Jun 2023 — Aug 2023",
    role: "Summer Quantitative Analyst",
    org: "Orient Securities · Sales Department",
    place: "Chengdu, China",
    bullets: [
      "Co-led exploratory modeling of public-company performance to support portfolio recommendations.",
      "Built an Analytic Hierarchy Process using financial and trading indicators, then translated the model into an interactive simulation dashboard.",
      "Presented the dashboard to stakeholders; it reached 90% usage within the department by the end of the internship.",
    ],
  },
];

function Resume() {
  return (
    <main className="page-shell resume-page">
      <section className="page-intro">
        <p className="eyebrow">Experience & education</p>
        <h1>Built for research.<br />Grounded in impact.</h1>
        <p>My experience combines statistical depth, reproducible computing, and clear communication across academic and industry teams.</p>
      </section>

      <section className="resume-section">
        <div className="resume-label"><span>01</span><h2>Experience</h2></div>
        <div className="timeline">
          {roles.map((item) => (
            <article className="timeline-item" key={item.org}>
              <div className="timeline-meta"><p>{item.date}</p><p>{item.place}</p></div>
              <div><h3>{item.role}</h3><p className="organization">{item.org}</p><ul>{item.bullets.map((b) => <li key={b}>{b}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section education-section">
        <div className="resume-label"><span>02</span><h2>Education</h2></div>
        <div className="education-list">
          <article><p>2025 — 2027</p><h3>University of Washington</h3><strong>MS, Biostatistics</strong><span>Seattle, WA</span></article>
          <article><p>2021 — 2025</p><h3>University of Wisconsin–Madison</h3><strong>BS, Statistics and Data Science</strong><span>Dean’s List · Madison, WI</span></article>
        </div>
      </section>

      <section className="resume-section skills-section">
        <div className="resume-label"><span>03</span><h2>Toolkit</h2></div>
        <div className="skill-columns">
          <div><h3>Languages & tools</h3><p>Python · R · SAS · SQL · Tableau · SLURM · Git</p></div>
          <div><h3>Methods</h3><p>Machine learning · Survival analysis · Clustering · NLP · Network analysis · Statistical genetics</p></div>
          <div><h3>Domains</h3><p>Healthcare · Learning science · Genomics · Financial analytics · Social impact</p></div>
        </div>
      </section>
      <Contact />
    </main>
  );
}

const projects = [
  {
    number: "01",
    title: "STEAM Review Exploration & Re-prediction",
    period: "May 2024",
    category: "HPC · NLP · Machine Learning",
    summary: "Processed a 40 GB dataset with more than 100 million game reviews by splitting computation into 50 parallel jobs. We rebuilt Steam’s helpfulness signal, investigated playtime behavior, and tested bag-of-words and toxicity approaches for review quality.",
    stats: ["100M+ reviews", "50 parallel jobs", "40 GB source data"],
    images: ["/project-visuals/steam-hpc-pipeline.jpg", "/project-visuals/steam-word-clouds.jpg"],
    link: "https://github.com/AndreaChen0301/STAT-405-Final-Project-Steam-Review-HPC-Analysis/tree/main",
    linkLabel: "View code",
  },
  {
    number: "02",
    title: "Exploring Online Mental Health Counseling",
    period: "Jan — May 2025",
    category: "NLP · Healthcare · Research",
    summary: "Analyzed 3,000+ online counseling exchanges to examine power, conversational versus medical language, and empathy. The study combined spaCy preprocessing, language dictionaries, topic modeling, biomedical NER, and pronoun analysis.",
    stats: ["3,512 conversations", "44% used a medical term", "3 research questions"],
    images: ["/project-visuals/counseling-language.jpg", "/project-visuals/counseling-medical-terms.jpg"],
  },
  {
    number: "03",
    title: "JPMorgan Chase Data for Good",
    period: "October 2023",
    category: "Social impact · Clustering · Visualization",
    summary: "Built a data-driven expansion recommendation for Move to PROSPER, integrating education, safety, income, inequality, housing, and population indicators. Our team used K-means, PCA, and exploratory visualization to recommend three Ohio cities.",
    stats: ["3rd of 14 teams", "3 recommended cities", "Multi-source civic data"],
    images: ["/project-visuals/data-for-good-map.jpg"],
  },
  {
    number: "04",
    title: "Sexual Offense Demographic Analysis",
    period: "Feb — May 2023",
    category: "EDA · Random Forest · Public data",
    summary: "Created a visual analysis of U.S. sexual-offense data from 2016–2021, testing common assumptions about victims, offenders, and demographic drivers. A Random Forest model assessed eight state-level features and surfaced their relative importance.",
    stats: ["2016–2021", "8 demographic features", "Interactive story"],
    link: "https://andreachen0301.github.io/sexual-offense-project/",
    linkLabel: "View project",
  },
];

function Projects() {
  return (
    <main className="page-shell projects-page">
      <section className="page-intro project-intro">
        <p className="eyebrow">Selected work · 2023—2026</p>
        <h1>Questions worth<br />measuring.</h1>
        <p>Selected work across large-scale computing, health research, NLP, and public-interest analytics.</p>
      </section>

      <section className="project-list">
        {projects.map((project) => (
          <article className="project" key={project.number}>
            <div className="project-heading">
              <span>{project.number}</span>
              <div><p>{project.category} · {project.period}</p><h2>{project.title}</h2></div>
            </div>
            {project.images && (
              <div className={`project-gallery ${project.images.length === 1 ? "single" : ""}`}>
                {project.images.map((image, index) => <img src={`${assetBase}${image}`} alt={`${project.title} result ${index + 1}`} key={image} />)}
              </div>
            )}
            <div className="project-details">
              <p>{project.summary}</p>
              <div className="project-stats">{project.stats.map((stat) => <span key={stat}>{stat}</span>)}</div>
              {project.link && <a href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <Arrow /></a>}
            </div>
          </article>
        ))}
      </section>

      <section className="more-work">
        <p className="section-kicker">Current research</p>
        <div>
          <article><span>2025—Now</span><h3>Brain Imaging GWAS</h3><p>R and SLURM pipelines for 1M+ SNPs, LD matrix alignment, and shared genetic architecture.</p></article>
          <article><span>2026—Now</span><h3>MESA Cardiovascular Risk</h3><p>Patient clustering, Cox proportional hazards models, and interpretable Lp(a) subgroup analysis.</p></article>
        </div>
        <a href="https://github.com/AndreaChen0301?tab=repositories" target="_blank" rel="noreferrer">See all GitHub repositories <Arrow /></a>
      </section>
      <Contact />
    </main>
  );
}

function Contact() {
  return (
    <footer className="contact">
      <p className="section-kicker">Let’s connect</p>
      <h2>Interested in careful analysis<br />and useful answers?</h2>
      <div className="contact-links">
        <a href="mailto:yahanc27@uw.edu">Email <Arrow /></a>
        <a href="https://www.linkedin.com/in/yahan-chen-391940250/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
        <a href="https://github.com/AndreaChen0301" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
        <a href="tel:18200231408">+86 18200231408</a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Yahan Chen</p>
    </footer>
  );
}

export default function Home() {
  const [active, setActive] = useState<Tab>("about");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as Tab;
    if (tabs.some((tab) => tab.id === hash)) setActive(hash);
  }, []);

  const navigate = (tab: Tab) => {
    setActive(tab);
    window.history.replaceState(null, "", `#${tab}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header active={active} onChange={navigate} />
      {active === "about" && <About onProjects={() => navigate("projects")} />}
      {active === "resume" && <Resume />}
      {active === "projects" && <Projects />}
    </>
  );
}
