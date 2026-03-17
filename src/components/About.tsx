import "./styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <div className="about-me">
        <h2 id="about-heading" className="title">About Me</h2>
        <p className="para">
          Full Stack Developer with 3+ years of experience building scalable web
          applications using React.js, Angular, Next.js, Node.js, and NestJS. Skilled
          in microservices architecture, CMS development, and low-code platforms.
          Passionate about creating high-performance, production-ready solutions
          from concept to deployment.
        </p>
      </div>
    </section>
  );
};

export default About;
