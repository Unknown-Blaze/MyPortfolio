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
import './Projects.css';
import ProjectCard from './ProjectCard';

const projects = [[
  {
    fullName: 'SC2002 CAMs Project',
    image: java_uml,
    desc: `Used Java OOP concepts to create a Command Line Interface Application to ease the registrations of
    model 'camps' in NTU`,
    href: "https://github.com/Unknown-Blaze/SC2002-Assignment-CAMS",
  },
  {
    fullName: 'DSA in C / C++',
    image: dsa,
    desc: `I have done quite a bit of Data structures and Algorithms through the modules in NTU and Leetcode.`,
    href: "https://github.com/Unknown-Blaze/DSA-in-C",
  },
  {
    fullName: 'Microprocessor design',
    image: msp432,
    desc: `Coding a TI MSP432 robot using interrupts, polling, infrared sensors, Reflectance sensors, Bumper 
    sensors, Tachometer, etc. Combined this to produce "follow the line", "Avoid objects", "Calculate RPM based 
    on a PWM signal passed on both wheels", etc.`,
    href: "https://github.com/Unknown-Blaze/Microprocessor-System-Design",
  },
  {
    fullName: 'Data Analysis in R',
    image: pastalah,
    desc: `Had fun making a project where we analyzed the waiting times of people in a pasta restaurant. All the code and
    scripts (explaining the code) were made by me consisting of simulations and regression analysis`,
    href: "https://www.youtube.com/watch?v=JNMVZW49hws",
  },
  {
    fullName: 'Javascript journey',
    image: jsjourney,
    desc: `Learned from YouTube and then the Meta Front-end Dev course. Created JavaScript projects (e.g., tic-tac-toe, cards) 
    and explored React features while working on portfolio projects during the course.`,
    href: "https://github.com/Unknown-Blaze/Learning-js",
  },],
  [
    {
      fullName: 'Full Stack AI app',
      image: fullstack,
      desc: `My current software engineering project. Depending on when you are seeing this, I will be closer to completion!`,
      href: "https://github.com/Unknown-Blaze/PineappleStudios",
    },
    {
      fullName: 'Python Discord Bot',
      image: discordbot,
      desc: `Coded an economy bot using the discord.py module. Learned the concepts of OOP, cogs and async functions in Python`,
      href: "",
    },
    {
      fullName: 'MACD predictor',
      image: macd,
      desc: `Project for one of my modules to predict stock market data using certain trend based algorithms and compared them
      to a simple buy-hold-sell strategy to determine the best course of action`,
      href: "https://github.com/Unknown-Blaze/MACD-Project-Python--SC1003-",
      },
    {
      fullName: '2D Game Dev',
      image: phaser,
      desc: `Used Phaser.js to code a few games. Learned about 2D game physics which paved the way for me to understand 
      3D game development`,
      href: "https://github.com/Unknown-Blaze/Starcollector",
    },
    {
      fullName: 'UE5 Game Dev',
      image: ue5,
      desc: `Game development has always seemed interesting, and I gave a shot and even coded a few mini games on unreal engine
      by following youtube tutorials. However, I was unfortunate to not find solutions for the problems I had, so I look forward 
      to getting back soon!`,
      href: "",
    },]
];

const Projects = () => {
  return (
    <>
    <section className="projects">
      <div className="container grid">
        <h2>Projects</h2>
        {projects[0].map((project, index) => 
          <ProjectCard key={`1-${index}`} project={project} href={projects[0][index].href}/>
        )}
     </div>
    </section>
    <section className="projects">
      <div className="container grid">
        <h2>More Projects</h2>
        {projects[1].map((project, index) => 
          <ProjectCard key={`2-${index}`} project={project} href={projects[1][index].href}/>
        )}
     </div>
    </section>
    </>
  );
};

export default Projects;
