import React from 'react';
import './index.css';

// --- TYPE DEFINITIONS ---

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  description?: string;
  url?: string;
}

interface SkillIconProps {
  label: string;
}

interface TagProps {
  label: string;
  variant?: 'dark' | 'light' | 'outline';
}

interface ContactInfo {
  icon: React.ReactNode;
  text: string;
}

// --- SVG ICONS ---

const SvgLinkedIn: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const SvgLocation: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const SvgEmail: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const SvgPhone: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const SvgStar: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="1"
    className="text-gray-700"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const SvgSparkle: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 0C12 0 10.5 7.5 10.5 12C10.5 16.5 12 24 12 24C12 24 13.5 16.5 13.5 12C13.5 7.5 12 0 12 0Z" />
    <path d="M0 12C0 12 7.5 10.5 12 10.5C16.5 10.5 24 12 24 12C24 12 16.5 13.5 12 13.5C7.5 13.5 0 12 0 12Z" />
  </svg>
);

// --- MOCK DATA ---

const educationData: TimelineItemProps[] = [
  {
    year: '2025-present',
    title: 'Lviv Polytechnic National University',
    subtitle: 'Masters in Computer Science (AI department)',
  },
  {
    year: '2021-2025',
    title: 'Lviv Polytechnic National University',
    subtitle: 'Bachelor in Computer Science (AI department)',
  },
   {
    year: 'autumn 2024 – winter 2025',
    title: 'Linnaeus University, Sweden',
    subtitle: 'International Exchange Program',
  },
];

const experienceData: TimelineItemProps[] = [
  {
    year: 'january 2025 - present',
    title: 'Data Scientist at EPAM Systems',
    subtitle: 'query intent, orchestration and MCP servers in financial domain',
  },
  {
    year: 'august 2024',
    title: 'AI Engineering Intern in the Cyber Police Department',
    subtitle: 'RAG system for legal document retrieval focused on the Ukrainian Criminal Code, involving PDF parsing, data indexing, and integration of LLaMA Index with transformer-based models with reranking mechanism.',
  }
];

const projectsData: TimelineItemProps[] = [
  {
    year: 'april 2025',
    title: 'BEST::HACKath0n 2025 Best Technical Solution!',
    subtitle: 'Developed a damage assessment web app within 2 days that analyzed damage caused by Russia aggression against Ukraine, calculated the projected repair costs for affected buildings or entire areas using ML.',
    description: 'sklearn, FastAPI, React, teamwork!',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7322573119661985792/',
  },
  {
    year: 'august 2024',
    title: 'EPAM Kaggle Data Science Competition',
    subtitle: 'Secured 1st place in Kaggle competition focused on information retrieval on big corpus with Ukrainian news.',
    description: 'faiss, hugging face, transformers, data cleaning and preprocessing',
  },
    {
    year: 'november 2023',
    title: 'TechGround Hackathon',
    subtitle: 'Secured 4th place by developing a custom algorithm for contructing wheelchair-accessible paths on the Kyiv map!',
    description: 'A*, ruby on rails, OpenStreetMap',
  },
];

const contactData: ContactInfo[] = [
  { icon: <SvgLocation />, text: 'Ukraine, Lviv' },
  { icon: <SvgEmail />, text: 'iraboyko098@gmail.com' },
  // { icon: <SvgPhone />, text: '07 82 84 59 00' },
];

const softwareSkills: string[] = ['Azure', 'Spark', 'VsCode', 'Docker'];
const codingSkills: string[] = ['Python', 'JavaScript', 'Pandas', 'Seaborn', 'FastMCP', 'Semantic Kernel'];
const designSkills: string[] = [
  'Classic Machine learning and not only',
  'Web programming',
  'Database Management',
  'Algorithms and Data Structures',
];

// --- ATOMIC COMPONENTS ---

const TimelineItem: React.FC<TimelineItemProps & { color: 'red' | 'white' | 'blue' | 'purple' | 'creamy'}> = ({
  year,
  title,
  subtitle,
  description,
  color,
  url,
}) => (
  <div className="timeline-item">
    <div className="timeline-marker-wrapper">
      <div className={`timeline-marker timeline-marker--${color}`}>◆</div>
      <div className={`timeline-line timeline-line--${color}`}></div>
    </div>
    <div className="timeline-content">
      <p className={`timeline-year timeline-marker--${color}`}>{year}</p>
      {/* <p className="timeline-title">{title}</p> */}
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="timeline-title timeline-title--link"
        >
          {title}
        </a>
      ) : (
        <p className="timeline-title">{title}</p>
      )}
      <p dangerouslySetInnerHTML={{ __html: subtitle }} />
      {description && <p className="text-description">{description}</p>}
    </div>
  </div>
);

const SkillIcon: React.FC<SkillIconProps> = ({ label }) => (
  <div className="skill-icon">
    <span className="skill-icon-label">{label}</span>
  </div>
);

const Tag: React.FC<TagProps> = ({ label, variant = 'dark' }) => {
  return <span className={`tag tag--${variant}`}>{label}</span>;
};

// --- SECTION COMPONENTS ---

const Hero: React.FC = () => (
  <section className="section relative">
    <SvgSparkle className="absolute -top-6 -right-6 w-16 h-16 text-[#FFD700] opacity-50" />
    <SvgSparkle className="absolute top-32 -left-4 w-12 h-12 text-[#E94E1B] opacity-40" />
    <SvgSparkle className="absolute bottom-8 right-16 w-10 h-10 text-[#2B1B42] opacity-30" />
    <h1 className="heading-display">
      Hello,
      <br />
      I'm Ira!
    </h1>
    <p className="text-body max-width-content mt-6">
      I am Machine learning enthusiast with experience working on NLP projects and data analysis. I have fondation in math, statistic and algorithms. Nice to meet you hehe!
    </p>
    
    <a
      href="https://www.linkedin.com/in/iryna-boiko-618248275/"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary btn-primary--orange mt-8"
    >
      <SvgLinkedIn />
      <span>linkedin.com/in/iryna-boiko</span>
    </a>
  </section>
);

const Experience: React.FC = () => (
  <section className="section relative">
    <SvgSparkle className="absolute -top-6 -right-4 w-14 h-14 text-[#E94E1B] opacity-45" />
    <SvgSparkle className="absolute bottom-4 -left-3 w-10 h-10 text-[#FFD700] opacity-50" />
    <h2 className="heading-section mb-8">Experience</h2>
    <div className="timeline-container">
      {experienceData.map((item) => (
        <TimelineItem key={item.title} {...item} color="red" />
      ))}
    </div>
  </section>
);

const Education: React.FC = () => (
  <section className="section-card section-card--orange relative overflow-hidden">
    <SvgSparkle className="absolute -top-4 -right-4 w-16 h-16 text-white opacity-25" />
    <SvgSparkle className="absolute top-1/2 -left-5 w-12 h-12 text-[#FFD700] opacity-35" />
    <SvgSparkle className="absolute -bottom-6 right-12 w-14 h-14 text-white opacity-20" />
    <h2 className="heading-section mb-8">Education</h2>
    <div className="timeline-container">
      {educationData.map((item) => (
        <TimelineItem key={item.title} {...item} color="creamy" />
      ))}
    </div>
    {/* <div className="flex flex-wrap gap-2 mt-4">
      <Tag label="#Learning" variant="light" />
      <Tag label="#Growth" variant="light" />
    </div> */}
  </section>
);

const Projects: React.FC = () => (
  <section className="section-card section-card--accent section-spacing-large relative overflow-hidden">
    <SvgSparkle className="absolute -top-5 -left-5 w-16 h-16 text-[#FFD700] opacity-20" />
    <SvgSparkle className="absolute top-1/3 -right-6 w-14 h-14 text-white opacity-15" />
    <SvgSparkle className="absolute -bottom-7 left-1/4 w-12 h-12 text-[#E94E1B] opacity-25" />
    <h2 className="heading-section mb-8">Projects</h2>
    <div className="timeline-container">
      {projectsData.map((item) => (
        <TimelineItem key={item.title} {...item} color="purple" />
      ))}
    </div>
    <div className="flex flex-wrap gap-2 mt-4">
      <Tag label="#Hackathons" variant="outline" />
      <Tag label="#Machine Learning" variant="outline" />
      <Tag label="#just cool tags" variant="outline" />
    </div>
  </section>
);

const Profile: React.FC = () => (
  <div className="profile-container">
    <div className="profile-background"></div>

    <SvgSparkle className="absolute top-12 left-8 z-30 w-14 h-14 text-[#FFD700] opacity-60" />
    <SvgSparkle className="absolute top-1/3 right-4 z-30 w-10 h-10 text-white opacity-40" />

    <div className="profile-image-wrapper">
      <div className="profile-accent-rectangle"></div>
      
      <img
        src="/photo_2025-11-07_13-13-00.jpg"
        alt="Han"
        className="profile-image"
      />
    </div>

    <div className="badge-info badge-info--gold profile-badge-birth">
      11 August 2004
    </div>
    <div className="badge-info badge-info--gold profile-badge-nationality">
      Ukrainian
    </div>

    <div className="contact-card">
      <h3 className="contact-heading">Contact</h3>
      <div className="contact-list">
        {contactData.map((item) => (
          <div key={item.text} className="contact-item">
            {item.icon}
            <span className="text-small">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TechnicalSkills: React.FC = () => (
  <section className="skills-section">
    <div className="skills-watermark" aria-hidden="true">
      <div className="skills-watermark-text">NWL</div>
      <div className="skills-watermark-text">NWL</div>
    </div>

    <SvgSparkle className="absolute -top-8 -left-6 w-16 h-16 text-[#E94E1B] opacity-35 hidden lg:block" />
    <SvgSparkle className="absolute top-1/4 -right-8 w-14 h-14 text-[#FFD700] opacity-40 hidden lg:block" />
    <SvgSparkle className="absolute bottom-12 left-1/3 w-12 h-12 text-[#2B1B42] opacity-30" />

    <div className="skills-content">
      <h2 className="heading-section mb-10">Technical skills</h2>

      <div className="skills-grid">
        <div className="skills-column">
          <div>
            <h3 className="heading-subsection mb-4">Software Skills</h3>
            <div className="skill-list">
              {softwareSkills.map((skill) => (
                <SkillIcon key={skill} label={skill} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="heading-subsection mb-4">Coding Skills</h3>
            <div className="skill-text-list">
              {codingSkills.map((skill) => (
                <span key={skill} className="skill-text-item">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="design-skills-list">
            {designSkills.map((skill) => (
              <div key={skill} className="design-skill-item">
                <SvgStar />
                <span className="skill-text-item">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Language: React.FC = () => (
  <section className="language-section">
    <h2 className="heading-section">Language</h2>
    <div className="language-list">
      <p className="language-item">
        <span className="language-label">Ukrainian:</span> Native
      </p>
      <p className="language-item">
        <span className="language-label">English:</span> Advanced
      </p>
        <p className="language-item">
        <span className="language-label">Swedish:</span> Beginner
      </p>
      <p className="language-item">
        <span className="language-label">French:</span> Bonjour 🥐
      </p>
    </div>
  </section>
);

// --- MAIN APP COMPONENT ---

const App: React.FC = () => {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <div className="two-column-layout">
          <div className="column-left">
            <Hero />
            <Experience />
            <Education />
          </div>

          <div className="column-right">
            <Profile />
            <Projects />
            <TechnicalSkills />
            <Language />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;