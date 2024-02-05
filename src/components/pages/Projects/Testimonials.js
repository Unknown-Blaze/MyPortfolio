import java_uml from './assets/java_uml.jpg';
import dsa from './assets/dsa.jpg';
import pastalah from './assets/pastalah.jpg'
import msp432 from './assets/msp432.jpg'
import jsjourney from './assets/jsjourney.jpg'
import macd from './assets/macd.jpg'
import discordbot from './assets/discordbot.jpg'
import phaser from './assets/phaser.jpg'
import fullstack from './assets/fullstack.jpg'
import ue5 from './assets/ue5.jpg'
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [[
  {
    fullName: 'SC2002 CAMs Project',
    image: java_uml,
    says: `Explain some stuff about the technologies used in the project like Java / UML`,
    href: "https://github.com/Unknown-Blaze/SC2002-Assignment-CAMS",
  },
  {
    fullName: 'DSA in C / C++',
    image: dsa,
    says: `Create a readme, also explain stuff about DSA mod, and my leetcode journey atm`,
    href: "https://github.com/Unknown-Blaze/DSA-in-C",
  },
  {
    fullName: 'Microprocessor design',
    image: msp432,
    says: `I explain about lab 5, the combination of IR, reflecctance, tacho, bumper, interrupts, polling and whatever`,
    href: "https://github.com/Unknown-Blaze/Microprocessor-System-Design",
  },
  {
    fullName: 'Data Analysis in R',
    image: pastalah,
    says: `I enjoy portraying through acting, joke about me falling (if there is space), I coded everything and created the 
    scripts that explain all the code`,
    href: "https://www.youtube.com/watch?v=JNMVZW49hws",
  },
  {
    fullName: 'Javascript journey',
    image: jsjourney,
    says: `Learned from YouTube and the Meta Front-end Dev course. Created JavaScript projects (e.g., tic-tac-toe, cards) 
    and explored React features while working on portfolio projects during the course.`,
    href: "https://github.com/Unknown-Blaze/Learning-js",
  },],
  [
    {
      fullName: 'Full Stack AI app',
      image: fullstack,
      says: `My current 2006 project`,
      href: "https://github.com/Unknown-Blaze/PineappleStudios",
    },
    {
      fullName: 'Python Discord Bot',
      image: discordbot,
      says: `I'll just explain about the economy bot`,
      href: "",
    },
    {
      fullName: 'MACD predictor',
      image: macd,
      says: `Project for one of my modules to predict stock market data using certain trend based algorithms and compared them`,
      href: "https://github.com/Unknown-Blaze/MACD-Project-Python--SC1003-",
      },
    {
      fullName: '2D Game Dev',
      image: phaser,
      says: `Used Phaser.js to code a little game. Learned about 2D game physics`,
      href: "https://github.com/Unknown-Blaze/SC2002-Assignment-CAMS",
    },
    {
      fullName: 'UE5 Game Dev',
      image: ue5,
      says: `Explain that I learned from Youtube videos and was very interested, but not enough resources to become 
      better (at least I can't find)`,
      href: "",
    },]
];

const Testimonials = () => {
  return (
    <>
    <section className="testimonials">
      <div className="container grid">
        <h2>Projects</h2>
        {customers[0].map((customer, index) => 
          <TestimonialCard key={`1-${index}`} customer={customer} href={customers[0][index].href}/>
        )}
     </div>
    </section>
    <section className="testimonials">
      <div className="container grid">
        <h2>More Projects</h2>
        {customers[1].map((customer, index) => 
          <TestimonialCard key={`2-${index}`} customer={customer} href={customers[1][index].href}/>
        )}
     </div>
    </section>
    </>
  );
};

export default Testimonials;
