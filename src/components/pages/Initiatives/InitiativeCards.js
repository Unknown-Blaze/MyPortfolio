import React from 'react';
import './InitiativeCards.css';
import chess from './assets/chess.jpg';
import ichess from './assets/ichess.jpg';
import mathemagics from './assets/mathemagics.png';
import cardmagic from './assets/cardmagic.webp';
import piano from './assets/piano.png';
import rubiks from './assets/rubikscube.png';
import sports from './assets/sports.jpg';
import tt from './assets/tabletennis.webp';

const imageParagraphData = [
  {
    title: "Piano",
    image: piano,
    text: `Highly skilled and accomplished professional pianist with a passion for musical expression and an exceptional 
    record of performance excellence. Completed the prestigious Grade 8 ABRSM examination with distinction, demonstrating 
    outstanding technical proficiency, expressive musicality, and a deep understanding of a wide repertoire. I have also
    volunteered as a music instructor and mentor for aspiring musicians, sharing expertise and fostering a love for music 
    in the community.`
  },
  {
    title: "I.Chess Club NTU",
    image: ichess,
    text: `As the Varsity Chess Captain of NTU, I have honed an exceptional blend of strategic thinking, leadership, 
    and interpersonal skills, leading my team with distinction in various competitive arenas. Renowned for my innovative 
    approach to game strategy and team management, I have successfully fostered a culture of respect, excellence, and 
    continuous improvement within the club. Led the team to first place in several varsity-level competitions`,
  },
  {
    title: "Chess",
    image: chess,
    text: `Before NTU, I've played in competitions and have led the school teams to many wins. The team not only comes to me
    for tactical support but also for emotional support. I might not be the strongest player in the team, but me being the 
    most experienced places me as a very well rounded captain. I have drawn and beat much stronger players with me thanks
    to the knowledge and experience I've gained throughout`,
  },
  {
    title: <a href="https://www.youtube.com/watch?v=145lcIPwNe4" target="_blank"><u>Human Calculator</u></a>,
    image: mathemagics,
    text: `Since young I have enjoyed this concept, especially fueled by the TedTalk by Arthur Benjamin. Since then,
    I've learned to square 2, 3, 4 and 5 digit numbers mentally, find the day of any given date, and perform other 
    cool tricks and calculations. I have also performed this on several stages`,
  },
  {
    title: "Rubik's cube",
    image: rubiks,
    text: `National and International Recognition: Secured a top 15 ranking in Malaysia and top 100 in India for Pyraminx, 
    showcasing superior skill and strategic mastery in one of the most challenging puzzle categories. Finalist in National 
    Cube Open: Achieved finalist status in a highly competitive national event, underlining competitive excellence and 
    consistent performance against elite solvers.`,
  },
  {
    title: "Table tennis",
    image: tt,
    text: `A highly skilled table tennis player with extensive experience competing at the district level in Malaysia. 
    Demonstrates exceptional hand-eye coordination, agility, and strategic gameplay, coupled with a strong dedication to 
    personal and athletic development. Recognized for outstanding sportsmanship, competitive spirit, and the ability to 
    perform under pressure.`,
  },
  {
    title: "Badminton and others",
    image: sports,
    text: `A highly skilled and versatile athlete with a passion for competitive sports, including badminton, 
    basketball, and handball. Known for exceptional agility, coordination, and strategic thinking, I excel in fast-paced 
    and dynamic sporting environments. My dedication to athletics is matched by a strong commitment to teamwork, 
    sportsmanship, and continuous improvement, making me a valuable player in any sporting discipline.`,
  },
  {
    title: "Card Magic",
    image: cardmagic,
    text: `Adept at card and coin sleight of hand, having cultivated this unique skill set during the lockdown period 
    as a self-driven initiative to master the art of magic. Recognized for exceptional dexterity, precision, and creativity, 
    with a proven ability to captivate and engage audiences through sophisticated performances. Utilizes this talent as an 
    effective icebreaker and tool for enhancing interpersonal connections in both professional and social settings.`,
  },
];

const OurStory = () => {
  return (
    <div className='container'>
      <br/>
      <h1>All Initiatives taken throughout the last decade </h1><br/>
    <section className="grid our-story">
      
      {imageParagraphData.map((data, index) => (
        <div key={index} className={`our-story-item ${index % 2 === 1 ? 'swap' : ''}`}>
          {index % 2 === 1 ? (
            <>
              <p><span className='big'>{data.title} </span><br/>{data.text}</p>
              <img src={data.image} alt={`Image ${index + 1}`} />
            </>
          ) : (
            <>
              <img src={data.image} alt={`Image ${index + 1}`} />
              <p><span className='big'>{data.title} </span><br/>{data.text}</p>
            </>
          )}
        </div>
      ))}
      <br/>
    </section>
    </div>
  );
};

export default OurStory;
