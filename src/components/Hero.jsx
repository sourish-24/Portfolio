import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div>
        <h1>Hi, I'm <span>Sourish Musib</span></h1>
        <p className="tagline">
          A passionate developer building modern web experiences and solving
          real-world problems with clean, efficient code.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
