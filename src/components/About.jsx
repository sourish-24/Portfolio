import { useEffect, useRef } from 'react';
import '../styles/About.css';

function About() {
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
    <section id="about" className="about" ref={sectionRef}>
      <h2 className="section-title fade-in">About Me</h2>
      <p className="section-subtitle fade-in">Get to know me a little better</p>

      <div className="about-grid">
        <div className="about-image fade-in">SM</div>
        <div className="about-text fade-in">
          <p>
            Hello! I'm Sourish, a developer who loves turning ideas into reality
            through code. I enjoy building things that live on the internet —
            whether it's websites, applications, or anything in between.
          </p>
          <p>
            I'm constantly learning and exploring new technologies. When I'm not
            coding, you can find me exploring new tech, reading, or working on
            personal projects.
          </p>
          <a href="#contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
