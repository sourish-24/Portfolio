import { useEffect, useRef } from 'react';
import '../styles/Contact.css';

function Contact() {
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
    <section id="contact" className="contact" ref={sectionRef}>
      <h2 className="section-title fade-in">Get In Touch</h2>
      <p className="section-subtitle fade-in">I'd love to hear from you</p>

      <div className="contact-content fade-in">
        <p>
          Whether you have a project idea, a question, or just want to say hi —
          feel free to reach out!
        </p>
        <div className="contact-links">
          <a href="mailto:sourishmusib@gmail.com" className="contact-link">📧 Email Me</a>
          <a href="https://github.com/sourish-24" target="_blank" rel="noopener noreferrer" className="contact-link">💻 GitHub</a>
          <a href="https://linkedin.com/in/sourish" target="_blank" rel="noopener noreferrer" className="contact-link">🔗 LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
