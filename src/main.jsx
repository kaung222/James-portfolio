import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Braces,
  Layers3,
  Radio,
  Terminal,
  Globe,
  Smartphone,
  Plus,
} from "lucide-react";
import "./styles.css";

const email = "thirdgodiswinning@gmail.com";
const projects = [
  {
    id: "baranie",
    number: "01",
    name: "Baranie",
    category: "END-TO-END PRODUCT ENGINEERING",
    description: "One platform. The entire salon experience.",
    detail:
      "A salon booking and management ecosystem, taken from concept to deployment. Microservices connect customer apps, salon manager apps, management dashboards, and a dedicated system admin dashboard.",
    tags: ["Microservices", "React Native", "NestJS", "AWS", "CI/CD"],
    image: "/projects/baranie.webp",
    imageAlt: "Baranie salon booking and management platform",
    links: [
      ["Visit platform", "https://baranie.com"],
      ["Manager dashboard", "https://manager.baranie.com"],
      ["Dashboard v1", "https://management.baranie.com"],
    ],
    apps: [
      ["Customer · iOS", "https://apps.apple.com/us/app/baranie/id6751481413"],
      [
        "Customer · Android",
        "https://play.google.com/store/apps/details?id=com.baranie.innobytex",
      ],
      [
        "Manager · iOS",
        "https://apps.apple.com/us/app/baranie-management/id6751268246",
      ],
      [
        "Manager · Android",
        "https://play.google.com/store/apps/details?id=com.baraniemanagement.innobytex",
      ],
    ],
    kind: "WEB + MOBILE",
    featured: true,
  },
  {
    id: "burma-academy",
    number: "02",
    name: "Burma Academy",
    category: "EDUCATION & VIDEO INFRASTRUCTURE",
    description: "Built for learning. Architected to scale.",
    detail:
      "A multi-tenant education platform, learning management system, and mobile e-learning experience, supported by video streaming architecture with S3, CloudFront, ECS, and MediaConvert.",
    tags: ["Multi-tenant", "Video streaming", "AWS"],
    image: "/projects/burma-academy.webp",
    imageAlt: "Burma Academy education platform",
    links: [["Visit platform", "https://burmaacademy.com"]],
    kind: "WEB + MOBILE",
  },
  {
    id: "ilbc",
    number: "03",
    name: "ILBC Quick Learn",
    category: "LEARNING PLATFORM ENGINEERING",
    description: "Connecting students with their next lesson.",
    detail:
      "Developed and maintained education, e-learning, and learning management platforms at ILBC, with Firebase notifications and deployment workflows using GitHub Actions, Docker, and AWS.",
    tags: ["React", "Node.js", "Firebase", "Docker"],
    image: "/projects/ilbc.webp",
    imageAlt: "ILBC Quick Learn education platform",
    links: [["Visit platform", "https://www.ilbcquicklearn.com"]],
    kind: "WEB PLATFORM",
  },
];

function ExternalLink({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}
function ProjectImage({ project }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`project-image ${project.id} ${loaded ? "has-image" : ""}`}>
      <img
        src={project.image}
        alt={project.imageAlt}
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
        loading="lazy"
      />
      {!loaded && (
        <div
          className="image-placeholder"
          aria-label={`${project.name} project image coming soon`}
        >
          <span className="media-corner top-left" />
          <span className="media-corner top-right" />
          <span className="media-corner bottom-left" />
          <span className="media-corner bottom-right" />
          <span className="placeholder-symbol">
            <Plus size={24} strokeWidth={1} />
          </span>
          <span className="placeholder-title">{project.name}</span>
          <span className="mono placeholder-caption">
            PROJECT PREVIEW / COMING SOON
          </span>
        </div>
      )}
      <span className="media-label mono">{project.kind}</span>
    </div>
  );
}
function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.featured ? "featured" : ""}`}>
      <ProjectImage project={project} />
      <div className="project-content">
        <div className="project-eyebrow mono">
          <span>{project.category}</span>
          <span>/{project.number}</span>
        </div>
        <h3>{project.name}</h3>
        <p className="project-summary">{project.description}</p>
        <p className="muted project-detail">{project.detail}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {project.links.map(([label, href]) => (
            <ExternalLink key={label} href={href}>
              {label}
            </ExternalLink>
          ))}
        </div>
        {project.apps && (
          <details className="app-links">
            <summary>
              <Smartphone size={15} aria-hidden="true" /> Explore the mobile
              apps{" "}
              <Plus size={15} className="details-plus" aria-hidden="true" />
            </summary>
            <div>
              {project.apps.map(([label, href]) => (
                <ExternalLink key={label} href={href}>
                  {label}
                </ExternalLink>
              ))}
            </div>
          </details>
        )}
      </div>
    </article>
  );
}
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container nav-inner">
          <a href="#" className="wordmark" aria-label="James Marcus home">
            jm<span>.</span>
          </a>
          <nav
            className={menuOpen ? "nav-links is-open" : "nav-links"}
            aria-label="Main navigation"
          >
            {[
              ["Work", "#work"],
              ["Expertise", "#expertise"],
              ["Experience", "#experience"],
            ].map(([text, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {text}
              </a>
            ))}
            <a
              href="#contact"
              className="nav-contact"
              onClick={() => setMenuOpen(false)}
            >
              Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </nav>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-topline mono">
            <span>
              <i className="status-dot" /> JAMES MARCUS / DEPLOYMENT ENGINEER
            </span>
            <span className="hero-edition">PORTFOLIO — 2026</span>
          </div>
          <div className="hero-layout">
            <div className="hero-copy">
              <h1 id="hero-title">
                Behind every
                <br />
                great experience,
                <br />a <span>solid architecture.</span>
              </h1>
              <p className="hero-description">
                I build high-performance APIs and video streaming systems. From
                the first line of code to the infrastructure that keeps it
                running.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#work">
                  Explore my work <ArrowDown size={17} aria-hidden="true" />
                </a>
                <a className="text-link" href={`mailto:${email}`}>
                  Get in touch <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
            <aside
              className="architecture"
              aria-label="Areas of architecture expertise"
            >
              <div className="architecture-heading mono">
                <span>
                  <Terminal size={14} aria-hidden="true" /> SYSTEMS THINKING
                </span>
                <span className="lime">↗</span>
              </div>
              <div className="diagram">
                <div className="diagram-node clients">
                  <Globe size={18} aria-hidden="true" />
                  <span>Web & mobile clients</span>
                  <span className="node-code">01</span>
                </div>
                <div className="connection">
                  <span>REQUEST</span>
                </div>
                <div className="diagram-node api">
                  <Braces size={22} aria-hidden="true" />
                  <div>
                    <strong>High-performance APIs</strong>
                    <small>MICROSERVICES / NESTJS</small>
                  </div>
                  <span className="node-dot" />
                </div>
                <div className="connection">
                  <span>ORCHESTRATE</span>
                </div>
                <div className="diagram-split">
                  <div className="diagram-node small-node">
                    <Layers3 size={20} aria-hidden="true" />
                    <strong>Cloud systems</strong>
                    <small>AWS / DOCKER</small>
                  </div>
                  <div className="diagram-node small-node">
                    <Radio size={20} aria-hidden="true" />
                    <strong>Video delivery</strong>
                    <small>S3 / CLOUDFRONT</small>
                  </div>
                </div>
              </div>
              <div className="architecture-footer mono">
                <span className="status-dot" /> BUILT TO CONNECT. DESIGNED TO
                SCALE.
              </div>
            </aside>
          </div>
          <div className="hero-footer">
            <span className="mono">FROM PRODUCT TO PRODUCTION</span>
            <div>
              <span>API architecture</span>
              <i />
              <span>Video streaming</span>
              <i />
              <span>Cloud deployment</span>
            </div>
            <a href="#work" aria-label="Scroll to selected work">
              <ArrowDown size={19} />
            </a>
          </div>
        </section>
        <section
          id="work"
          className="section container"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <div className="eyebrow mono">
                <span>01 /</span> SELECTED WORK
              </div>
              <h2 id="work-title">
                Real products.
                <br />
                <span className="muted">Thoughtful engineering.</span>
              </h2>
            </div>
            <p className="section-intro">
              Platforms I’ve built and maintained,
              <br />
              from the interface to the infrastructure.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
        <section
          id="expertise"
          className="expertise-section section"
          aria-labelledby="expertise-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow mono">
                  <span>02 /</span> WHAT I BRING
                </div>
                <h2 id="expertise-title">
                  The whole system.
                  <br />
                  <span className="muted">Not just one layer.</span>
                </h2>
              </div>
              <p className="section-intro">
                Hands-on engineering across applications,
                <br />
                services, and the cloud.
              </p>
            </div>
            <div className="expertise-grid">
              {[
                {
                  icon: Braces,
                  title: "High-performance APIs",
                  text: "Service boundaries, data flows, and APIs built around the needs of the product. Experience with microservices and multi-tenant platforms.",
                  stack: [
                    "Node.js",
                    "NestJS",
                    "TypeScript",
                    "Redis",
                    "MySQL",
                    "MongoDB",
                  ],
                },
                {
                  icon: Radio,
                  title: "Video streaming",
                  text: "From media processing to delivery. Cloud-based video architecture that supports a seamless e-learning experience across web and mobile.",
                  stack: ["AWS S3", "CloudFront", "MediaConvert", "ECS"],
                },
                {
                  icon: Terminal,
                  title: "Deployment & delivery",
                  text: "Taking ownership from concept to production. Containerized applications, automated CI/CD, and the infrastructure behind complete products.",
                  stack: ["Docker", "GitHub Actions", "AWS EC2", "AWS ECS"],
                },
              ].map(({ icon: Icon, title, text, stack }, i) => (
                <article className="expertise-card" key={title}>
                  <div className="expertise-icon">
                    <Icon size={25} strokeWidth={1.5} />
                    <span className="mono">0{i + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p className="muted">{text}</p>
                  <div className="stack-list mono">{stack.join(" / ")}</div>
                </article>
              ))}
            </div>
            <div className="frontend-note">
              <span className="mono">AT THE APPLICATION LAYER</span>
              <span>
                React <i /> React Native <i /> TypeScript <i /> Firebase
              </span>
            </div>
          </div>
        </section>
        <section
          id="experience"
          className="section container experience-section"
          aria-labelledby="experience-title"
        >
          <div className="experience-intro">
            <div className="eyebrow mono">
              <span>03 /</span> THE JOURNEY
            </div>
            <h2 id="experience-title">
              Always building.
              <br />
              <span className="muted">Always learning.</span>
            </h2>
            <p className="muted">
              I’m James, a deployment engineer with a full-stack background. I
              bring a product mindset to architecture, connecting what people
              need with the systems that make it possible.
            </p>
            <div className="education">
              <span className="mono">EDUCATION</span>
              <p>Myanmar Maritime University</p>
              <p>Software Engineering · MMS IT</p>
            </div>
          </div>
          <div className="timeline">
            <article className="job current">
              <div className="job-meta mono">
                <span>JUL 2024 — PRESENT</span>
                <span className="current-tag">CURRENT</span>
              </div>
              <h3>Innobytex</h3>
              <h4>Full Stack Software Developer</h4>
              <p className="muted">
                Building web and mobile products with React, React Native, and
                TypeScript. Owned Baranie from concept to deployment, including
                microservices, cloud infrastructure, and the CI/CD pipeline.
              </p>
            </article>
            <article className="job">
              <div className="job-meta mono">JUN 2023 — JUN 2024</div>
              <h3>ILBC</h3>
              <h4>Software Engineer</h4>
              <p className="muted">
                Developed and maintained education platforms, e-learning
                experiences, and learning management systems with React,
                Node.js, NestJS, Firebase, and AWS.
              </p>
            </article>
            <article className="job">
              <div className="job-meta mono">NOV 2022 — JUN 2023</div>
              <h3>MMS IT</h3>
              <p className="muted">
                The beginning of my professional engineering journey.
              </p>
            </article>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="container">
            <div className="eyebrow mono">
              <span>04 /</span> LET’S BUILD SOMETHING
            </div>
            <div className="contact-layout">
              <h2>
                Have a complex idea?
                <br />
                Let’s make it <span>work.</span>
              </h2>
              <a
                className="contact-arrow"
                href={`mailto:${email}`}
                aria-label="Email James Marcus"
              >
                <ArrowUpRight size={50} strokeWidth={1.25} />
              </a>
            </div>
            <div className="contact-bottom">
              <a className="email-link" href={`mailto:${email}`}>
                {email}
                <ArrowUpRight size={22} aria-hidden="true" />
              </a>
              <a className="phone-link" href="tel:+959797961628">
                +95 9 797 961 628 <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <a href="#" className="wordmark" aria-label="Back to top">
          jm<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} James Marcus</p>
        <div>
          <ExternalLink href="https://github.com/kaung222">
            <Github size={16} aria-hidden="true" /> GitHub
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/james-marcus-27284724b/">
            <Linkedin size={16} aria-hidden="true" /> LinkedIn
          </ExternalLink>
          <a href={`mailto:${email}`} aria-label="Email James">
            <Mail size={17} />
          </a>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
