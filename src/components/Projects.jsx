import { useEffect, useRef } from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Project Alpha',
    description: 'A full-stack web application with modern UI and robust backend architecture.',
    tags: ['React', 'Node.js', 'MongoDB'],
    emoji: '🚀',
    gradient: 'p1',
  },
  {
    title: 'Data Dashboard',
    description: 'Interactive analytics dashboard with real-time data visualization and reporting.',
    tags: ['Python', 'D3.js', 'API'],
    emoji: '📊',
    gradient: 'p2',
  },
  {
    title: 'Smart Assistant',
    description: 'AI-powered tool that automates daily tasks and enhances productivity.',
    tags: ['Python', 'ML', 'REST API'],
    emoji: '🤖',
    gradient: 'p3',
  },
];

function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <h2 className="section-title fade-in">Featured Projects</h2>
      <p className="section-subtitle fade-in">Some things I've built</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card fade-in" key={project.title}>
            <div className={`project-thumb ${project.gradient}`}>{project.emoji}</div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
