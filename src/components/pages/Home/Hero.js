import lecturehall from './assets/lecturehall.jpg'
import './Hero.css';
import resume from "./assets/Ganesh Rudra Prasadh Resume - Feb 2024.pdf"

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

  // const download = () => {
  //   window.open(resume, '_blank');
  // }
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
          <a href={resume} target="_blank">
          <button className="button-primary second">
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
