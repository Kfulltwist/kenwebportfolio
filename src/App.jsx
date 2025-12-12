import {motion} from "framer-motion";
import "./App.css";

function App() {

  return (
    <>
      <div className = "container">
       <motion.header
       initial={{opacity: 0, y: -40}}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6 }}
       className="header"
       >
        <div className="header-brand">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Kenneth Busilan
          </motion.h1>
          <span className="brand-subtitle">Web Developer</span>
        </div>
         <nav className="nav-menu">
          <motion.a 
            href="#about"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            About
          </motion.a>
          <motion.a 
            href="#skills"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Skills
          </motion.a>
          <motion.a 
            href="#projects"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Projects
          </motion.a>
          <motion.a 
            href="#contact"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="contact-cta"
          >
            Contact
          </motion.a>
        </nav>
        
        {/* Mobile Menu Button */}
        <motion.button 
          className="mobile-menu-btn"
          whileTap={{ scale: 0.95 }}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.button>
       </motion.header>

       {/* Hero Section */}
       <motion.section
        className="hero section"
        initial={{opacity: 0, y: 50}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
       >
        <div className="hero-content">
          <motion.div
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <img src="/img/projects/ken.jpg" alt="Kenneth Busilan" className="profile-image" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Kenneth Busilan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Passionate Web Developer & UI/UX Enthusiast
          </motion.p>
          <motion.a
            href="#projects"
            className="cta-button"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            View My Work
          </motion.a>
        </div>
       </motion.section>

       {/* About Section */}
       <motion.section
        id="about"
        className="section"
        initial={{opacity: 0, y: 50}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
       >
        <h2> About Me </h2>
        <p> 
          Hi! I'm <strong>Kenneth Busilan</strong>, a passionate web developer with experience in creating 
          interactive and responsive websites using React.js, HTML5, CSS3, and JavaScript. I enjoy bringing 
          business ideas to life through engaging pitch deck websites and have worked on projects ranging from 
          food industry presentations to Arduino-based IoT systems. My interests span both frontend development 
          and embedded systems programming, and I'm always eager to learn new technologies and tackle creative challenges.
        </p>
       </motion.section>

        {/* Skills Section */}
        <motion.section 
        id="skills"
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Skills & Technologies</h2>
        <motion.ul 
          className="skills-list"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.li
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            React.js
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            HTML5, CSS3 & JavaScript
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Arduino & Embedded Systems
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            UI/UX Design Principles
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Basic Network Troubleshooting
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            PC Hardware & Software Troubleshooting
          </motion.li>
        </motion.ul>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        >
        <h2>Featured Projects</h2>

        <div className="projects-grid">
          <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="project-image">
              <img src="/img/projects/arduino.png" alt="Arduino Projects" />
            </div>
            <div className="project-content">
              <h3>Arduino IoT Projects</h3>
              <p>Collection of innovative Arduino projects including home automation systems, sensor networks, and IoT devices. Features real-time data monitoring and wireless communication.</p>
              <div className="project-tech">
                <span className="tech-tag">Arduino</span>
                <span className="tech-tag">C++</span>
                <span className="tech-tag">IoT</span>
                <span className="tech-tag">Sensors</span>
              </div>
              <div className="project-links">
                <motion.a
                  href="https://github.com/Kfulltwist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>🔗</span> View on GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="project-image">
              <img src="/img/projects/banana.png" alt="Pitch Deck Website" />
            </div>
            <div className="project-content">
              <h3>Bananachips Pitch Deck Website</h3>
              <p>Interactive web-based pitch deck for a banana chips snack food business. Showcases product portfolio, market opportunity, and business model with engaging visuals and smooth animations.</p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">Framer Motion</span>
                <span className="tech-tag">Responsive</span>
              </div>
              <div className="project-links">
                <motion.a
                  href="https://appointment.csusolana.online/bananachips/"
                  className="project-link demo-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>🚀</span> Live Demo
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="project-image">
              <img src="/img/projects/osdw.png" alt="Capstone Project" />
            </div>
            <div className="project-content">
              <h3>Capstone Project</h3>
              <p>Final year capstone project demonstrating system design, and innovative problem-solving in computer science.</p>
              <div className="project-tech">
                <span className="tech-tag">Full Stack</span>
                <span className="tech-tag">Research</span>
                <span className="tech-tag">Innovation</span>
              </div>
              <div className="project-links">
                <motion.a
                  href="https://osdw.csusolana.online/user/login.php"
                  className="project-link details-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>📋</span> Project Details
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="project-image">
              <img src="/img/projects/lemonade.png" alt="Tech Startup Pitch Deck" />
            </div>
            <div className="project-content">
              <h3>Lemonade Pitch Deck</h3>
              <p>Professional business presentation for a refreshing lemonade beverage startup.</p>
              <div className="project-tech">
                <span className="tech-tag">Startup</span>
                <span className="tech-tag">Innovation</span>
                <span className="tech-tag">Tech Solutions</span>
                <span className="tech-tag">Presentation</span>
              </div>
              <div className="project-links">
                <motion.a
                  href="https://csusolana.online/lemonade"
                  className="project-link demo-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>🚀</span> View Pitch Deck
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="project-image">
              <img src="/img/projects/peanut.png" alt="Business Strategy Deck" />
            </div>
            <div className="project-content">
              <h3>Roasted Peanut Pitch Deck</h3>
              <p>Comprehensive business plan presentation for a premium roasted peanut snack company.</p>
              <div className="project-tech">
                <span className="tech-tag">Business Strategy</span>
                <span className="tech-tag">Market Analysis</span>
                <span className="tech-tag">Growth Planning</span>
                <span className="tech-tag">Corporate</span>
              </div>
              <div className="project-links">
                <motion.a
                  href="https://csusolana.online/pitchdeck/roastedpeanut"
                  className="project-link demo-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>📊</span> View Strategy
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="project-image">
              <img src="/img/projects/shanghai.png" alt="Creative Portfolio Deck" />
            </div>
            <div className="project-content">
              <h3>Shanghai Roll Pitch Deck</h3>
              <p>Creative presentation for an Asian fusion food concept featuring Shanghai-style spring rolls. Highlights unique recipes, and cultural authenticity in the food service industry.</p>
              <div className="project-tech">
                <span className="tech-tag">Creative Design</span>
                <span className="tech-tag">Visual Arts</span>
                <span className="tech-tag">Portfolio</span>
                <span className="tech-tag">UI/UX</span>
              </div>
              <div className="project-links">
                <motion.a
                  href="https://csusolana.online/pitchdeck/shanghairoll"
                  className="project-link demo-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>🎨</span> View Portfolio
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Get In Touch</h2>
        <p>
          I'm always interested in hearing about new projects and opportunities. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>

        <div className="social-links">
          <motion.a
            href="#"
            className="social-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="GitHub"
          >
            📧
          </motion.a>
          <motion.a
            href="#"
            className="social-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="LinkedIn"
          >
            💼
          </motion.a>
          <motion.a
            href="#"
            className="social-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="GitHub"
          >
            🔗
          </motion.a>
          <motion.a
            href="#"
            className="social-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="Twitter"
          >
            🐦
          </motion.a>
        </div>

        <p style={{ textAlign: 'center', marginTop: '40px', color: '#b0b0b0' }}>
          Email: <strong style={{ color: '#00eaff' }}>kennethbusilan@gmail.com</strong>
        </p>
      </motion.section>
      </div>
    </>
  )
}

export default App
