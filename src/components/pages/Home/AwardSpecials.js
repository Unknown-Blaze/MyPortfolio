import ib from './assets/ib.jpg';
import deanslist from './assets/deanslist.jpg';
import scholarship from './assets/scholarship.png'
import './AwardSpecials.css';
import Card from './Card';

const awards = [
  {
    name: 'NTU Science and Engineering (Full) Scholarship',
    image: scholarship,
    time: '',
    description: `Distinguished as one of the select recipients of the prestigious NTU Science and Engineering 
    (Full) Scholarship, awarded to top-tier students demonstrating exceptional academic excellence, leadership 
    potential, and outstanding extracurricular achievements in the field of science and engineering. Awarded for
    entire undergraduate studies to a select few international students and covers tuition, hostel and daily spendings.`,
    href: "https://www.ntu.edu.sg/admissions/undergraduate/scholarships/ntu-science-and-engineering-undergraduate-scholarship#Content_C002_Col00",
  },
  {
    name: 'Dean\'s List', 
    image: deanslist,
    time: '2022-23',
    description: `Achieved a cumulative GPA of 4.73 out of 5.0 in my first year, placing in the top 5% of the course, 
    underscoring rigorous academic discipline and mastery in a challenging curriculum. After scoring 4.92 in year 2 semester 1,
    I'm expecting it for my second year as well.
    
    
    
    `,
    href: "https://www.ntu.edu.sg/engineering/admissions/ug/acad/deans-list",
  },
  {
    name: 'IBDP - Scholarship and second topper',
    image: ib,
    time: '',
    description: `Awarded a full tuition fee Scholarship for outstanding academic achievements and potential, and ended up
    achieving a remarkable score of 42 out of 45 points, ranking as the second topper among peers at Sri KDU International 
    School. Notably, I scored a 7 (full score) in all my higher level subjects.`+"\n\n\n\n\n" ,
    href: "",
  },
];

const AwardSpecials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>My Achievments</h2>
      </div>
      {awards.map((a, index) => 
        <Card key={index} award={a} href={awards.href}/>
      )}
    </section>
  );
};

export default AwardSpecials;
