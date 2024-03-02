import lecturehall from './assets/lecturehall.jpg'
import './Hero.css';
import ReactGA from "react-ga";

const Hero = () => {
  const scrollToBottom = () => {
      
    // Get the height of the entire page
    const pageHeight = document.documentElement.scrollHeight;

    // Scroll to the bottom with a smooth transition
    document.documentElement.scrollTo({ 
      top: pageHeight, 
      left: 0, 
      behavior: 'smooth', 
    });
  };
  const trackResumeDownload = () => {
    ReactGA.event({
      category: 'Button',
      action: 'Click',
      label: 'My Resume Button',
    });
  };

  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1 className='align'>Rudra Prasadh Ganesh</h1>
          <h2>Sophomore at NTU Singapore</h2>
          <p>
            Studying Bachelor of Engineering in Computer Engineering and 
            have been awarded the Engineering and Science Scholarship
          </p>
          <div className='grid inline'>
          <button className="button-primary first" onClick={scrollToBottom}>
            Contact Me
          </button>
          <a href="https://drive.google.com/file/d/1nSYaM9-oQSFznPccAfjvEtelVxLoXDBA/view?usp=drive_link" target="_blank">
          <button className="button-primary second" onClick={trackResumeDownload}>
            My Resume
          </button>
          </a>
          </div>
        </div>
        <img 
          className="hero-image" 
          src={lecturehall} 
          alt="Me!" 
        />
      </div>
    </section>
  );
};

export default Hero;
