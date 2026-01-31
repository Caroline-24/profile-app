import Card from "./components/Card";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Wrapper from "./components/Wrapper";
import Filters from "./components/Filters";
import person1 from "./assets/person1.png";
import person2 from "./assets/person2.png";
import person3 from "./assets/person3.png";
import { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme(prev => (prev === "light" ? "dark" : "light"));

  const profiles = [
    { id: 0, name: "Sam", title: "UX designer", image: person1 },
    { id: 1, name: "Caroline", title: "Frontend Developer", image: person2 },
    { id: 2, name: "Bob", title: "Backend Developer", image: person3 },
  ];

  const titles = [...new Set(profiles.map((p) => p.title))];
  
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");

  const filteredProfiles = profiles.filter(
    (profile) =>
      (profile.title === title || !title) &&
      profile.name.toLowerCase().includes(name.toLowerCase()),
  );

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <Wrapper id="about">
        <About theme={theme} />
      </Wrapper>
      
      <Wrapper id="profiles">
        <Filters
          titles={titles}
          title={title}
          name={name}
          handleChange={(e) => setTitle(e.target.value)}
          handleSearch={(e) => setName(e.target.value)}
          handleClick={() => {
            setTitle("");
            setName("");
          }}
        />

        <div className="grid">
          {filteredProfiles.length > 0 ? (
            filteredProfiles.map((profile) => (
              <Card
                key={profile.id} {...profile} theme={theme}
                // name={profile.name}
                // title={profile.title}
                // image={profile.image}
              />
            ))
          ) : (
            <p>No profiles selected.</p>
          )}
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
