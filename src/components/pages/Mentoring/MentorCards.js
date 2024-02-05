import React from 'react';
import './MentorCards.css';
import image1 from './assets/chefs-mario-and-adrian_a.jpg'
import image2 from './assets/chefs-mario-and-adrian_b.jpg'

const imageParagraphData = [
  {
    title: "Peer Coach",
    image: image1,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    title: "Chess Coach at OWIS",
    image: image2,
    text: "Applied for MOE approved coach, teach kids",
  },
  {
    title: "Piano Music Director",
    image: image2,
    text: "Although not exactly decipherable from the name, I taught beginners to play the piano",
  },
  {
    title: "Teaching coding to friends",
    image: image2,
    text: "Sem 1, this was one of the important factors that let me switch to CE",
  },
  {
    title: "Preparing students for SPM",
    image: image2,
    text: "PCM + Addmath, ended up teaching chess to some of the students too!",
  },
  {
    title: "Teaching IB Math",
    image: image2,
    text: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    title: "Scholar's Beacon",
    image: image2,
    text: `Teaching CBSE/IGCSE/IB to Students from Singapore and Malaysia. I started this initiative, however most of us 
    ended up not having enough time to commit and stopped it.`,
  },
  {
    title: "Teaching primary students Math and Chess",
    image: image2,
    text: `Seems to be a common theme, but since year 8 I have been intent on teaching Math and chess to all ages, starting
    with friends and mutuals who are between year 3 and year 7.`,
  },
  {
    title: "Teaching table tennis",
    image: image2,
    text: `One of the first things I taught (other than Math and Chess) was Table tennis, and it was a very casual beginning for
    my teaching journey.`,
  },
  {
    title: <a href="https://www.youtube.com/channel/UCGeCublTDNAkfnUDjNbOpyA" target="_blank"><u>Rubik's Cube (On Youtube)</u></a>,
    image: image2,
    text: `During lockdown, created a youtube channel and taught several things on the rubik's cube. Click on the title to see more!`,
  },
  // Add more objects as needed
];

const MentorCards = () => {
  return (
    
    <div className='container'>
      <br/>
      <h1>All teaching related </h1>
      <h3 className='title'>I have always loved learning and teaching everything I know to those around me. 
       This deserves a separate page where I highlight my teaching journey</h3>
      <section className="grid our-story">
        {imageParagraphData.map((data, index) => (
          <div key={index} className={`our-story-item ${index % 2 === 1 ? 'swap' : ''}`}>
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
      </section>
    </div>
    
  );
};

export default MentorCards;
