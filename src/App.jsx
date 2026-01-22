import Navbar from './components/Navbar'
import About from './components/About'
import Card from './components/Card'
import Wrapper from './components/Wrapper'
import person1 from "./assets/person1.png"
import person2 from "./assets/person2.png"
import person3 from "./assets/person3.png"
import './styles/Card.css';

function App() {
  const profiles =[
    {id:0, name: "Caroline", title: "UX designer", image: person2 },
    {id:1, name: "Sam", title: "Frontend Developer", image: person1 },
    {id:2, name: "Bob", title: "Backend Developer", image: person3 },
  ];
  return (
    <>
      <Navbar />
      <Wrapper id="about">
        <About />
      </Wrapper>
      <Wrapper id="profiles">
        <div className="grid">
          {profiles.map((profiles) => (
            <Card 
              key={profiles.id} 
              name={profiles.name} 
              title={profiles.title} 
              image={profiles.image} 
            />
          ))}
        </div>
      </Wrapper>
    </>
  );
}

export default App;
