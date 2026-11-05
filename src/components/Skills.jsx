import { useEffect, useRef } from 'react';
import '../styles/Skills.css';

const skills = [
  { icon: '🌐', name: 'HTML / CSS' },
  { icon: '⚡', name: 'JavaScript' },
  { icon: '⚛️', name: 'React' },
  { icon: '🟢', name: 'Node.js' },
  { icon: '🐍', name: 'Python' },
  { icon: '🗄️', name: 'SQL / DB' },
  { icon: '🔧', name: 'Git' },
  { icon: '☁️', name: 'Cloud' },
];

function Skills() {
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
    <section id="skills" className="skills" ref={sectionRef}>
      <h2 className="section-title fade-in">Skills &amp; Tools</h2>
      <p className="section-subtitle fade-in">Technologies I work with</p>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card fade-in" key={skill.name}>
            <div className="skill-icon">{skill.icon}</div>
            <h4>{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
