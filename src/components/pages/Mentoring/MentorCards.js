import React from 'react';
import './MentorCards.css';
import stg from './assets/stg.jpg'
import sb from './assets/scholarsbeacon.png'
import rubiks from './assets/rubiks.jpg' 
import bigbrain from './assets/bigbrain.webp'
import ntupe from './assets/ntupe.png'
import owis from './assets/owis.jpg'
import tt from './assets/tt.jpg'
import spm from './assets/spm.png'

const mentoringcards = [
  {
    title: "Peer Coach",
    image: stg,
    text: `Selected as one of only four peer coaches from a competitive pool, recognized for exceptional mentoring 
    abilities and academic excellence. Demonstrated a profound impact on student success, notably in guiding a peer from 
    academic warning to good standing, underscoring a commitment to fostering academic achievement and personal growth. 
    Exemplified leadership and empathy in coaching, establishing trust and encouraging a culture of academic excellence 
    and resilience.`,
  },
  {
    title: "Chess Coach at OWIS",
    image: owis,
    text: `Achieved recognition as an MOE-approved Chess Coach, underscoring a commitment to educational excellence and 
    expertise in chess instruction. At OWIS, I lead a dynamic chess program, teaching children the strategic depths of 
    chess, fostering critical thinking, and enhancing problem-solving skills. My role reflects a blend of instructional 
    prowess, passion for chess, and a dedication to nurturing young minds.`,
  },
  {
    title: "Piano Music Director",
    image: ntupe,
    text: `In my role as Piano Music Director, I specialized in introducing the fundamentals of piano playing to 
    beginners, employing a comprehensive and empathetic teaching approach that facilitated rapid learning and a deep 
    appreciation for music. This position, while centered around musical instruction, encompassed curriculum development, 
    student performance oversight, and fostering an environment conducive to musical exploration and growth.`,
  },
  {
    title: "Teaching coding to friends",
    image: bigbrain,
    text: `In the first semester, I undertook the initiative to teach coding to my peers, a pivotal experience that not 
    only honed my technical and instructional skills but also clarified my passion for Computer Engineering. This 
    informal yet impactful role demonstrated my ability to simplify complex concepts, mentor effectively, and lead by 
    example in the pursuit of technological education.`,
  },
  {
    title: "Preparing students for SPM",
    image: spm,
    text: `Leveraged my expertise in Physics, Chemistry, and Mathematics to prepare students for the SPM examinations, 
    achieving notable success in elevating their understanding and performance in these subjects. Additionally, I 
    enriched the learning environment by introducing chess as a complementary skill set, fostering strategic thinking 
    and problem-solving abilities among students. This multifaceted role underscored my versatility as an educator and 
    mentor.`,
  },
  {
    title: "Founder & Tutor, Scholar's Beacon",
    image: sb,
    text: `Initiated "Scholar's Beacon," an educational venture, aimed at tutoring students in CBSE/IGCSE/IB curricula 
    across Singapore and Malaysia. This endeavor showcased our entrepreneurial spirit, commitment to education, and 
    ability to mobilize and lead a team towards a common goal of academic support and excellence.`,
  },
  {
    title: "Teaching table tennis",
    image: tt,
    text: `My teaching journey commenced with instructing table tennis, marking the beginning of a passionate commitment to 
    coaching and skill development. This initial foray into teaching, beyond academic subjects like Math and Chess, 
    showcased my versatility and innate ability to engage and inspire learners in physical sports.`,
  },
  {
    title: <a href="https://www.youtube.com/channel/UCGeCublTDNAkfnUDjNbOpyA" target="_blank"><u>Rubik's Cube (On Youtube)</u></a>,
    image: rubiks,
    text: `In response to the global lockdown, I launched a YouTube channel focused on Rubik's Cube tutorials, leveraging my 
    expertise in cube solving to educate and engage a global audience. Through this platform, I delivered comprehensive 
    guidance on solving techniques, strategies, and the mathematical concepts behind the Rubik's Cube, showcasing my 
    ability to simplify complex problems and connect with viewers of all skill levels.`,
  },
];

const MentorCards = () => {
  return (
    
    <div className='container'>
      <br/>
      <h1>Teaching Journey</h1>
      <h3 className='title'>Welcome to my teaching journey, where I ignite minds and foster a passion for learning</h3>
      <section className="grid teaching-journey">
        {mentoringcards.map((data, index) => (
          <div key={index} className={`teaching-journey-item ${index % 2 === 1 ? 'swap' : ''}`}>
            {index % 2 === 1 ? (
              <>
                <img src={data.image} alt={`Image ${index + 1}`} />
                <p><span className='big'>{data.title} </span><br/>{data.text}</p>
              </>
            ) : (
              <>
                <p><span className='big'>{data.title} </span><br/>{data.text}</p>
                <img src={data.image} alt={`Image ${index + 1}`} />
              </>
            )}
          </div>
        ))}
        <br/>
      </section>
    </div>
    
  );
};

export default MentorCards;
