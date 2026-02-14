import Navbar from "./components/Navbar";
import person1 from "./assets/person1.png";
import person2 from "./assets/person2.png";
import person3 from "./assets/person3.png";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AddProfilePage from "./pages/AddProfilePage";
import FetchedProfilesPage from "./pages/FetchedProfilePage";
import ProfileDetailPage from "./pages/ProfileDetailPage";
import ProfileLayoutPage from "./pages/ProfileLayoutPage";
import "./App.css"

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme(prev => (prev === "light" ? "dark" : "light"));

  const [profiles, setProfiles] = useState([
    { id: 0, name: "Sam", title: "UX designer", image: person1 },
    { id: 1, name: "Caroline", title: "Frontend Developer", image: person2 },
    { id: 2, name: "Bob", title: "Backend Developer", image: person3 },
  ]);

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");

  const updateProfiles = (profile) => {
    setProfiles((prev) => [...prev, profile])
  }
  
  return (
    <HashRouter>
      <div className={theme}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <Routes>
          <Route path="/" element={<HomePage profiles={profiles} title={title} name={name} theme={theme} handleChangeTitle={(e) => setTitle(e.target.value)} handleSearch={(e) => setName(e.target.value)} handleClear={() => {setTitle(""); setName("");}} />} />
          <Route path="/about" element={<AboutPage theme={theme} />} />
          <Route path="/fetched-profiles" element={<FetchedProfilesPage />} />
          <Route path="/fetched-profiles/profile" element={<ProfileLayoutPage />} >
            <Route path=":id" element={<ProfileDetailPage />} />
          </Route>
          <Route path="/add-profile" element={<AddProfilePage updateProfiles={updateProfiles} />} />
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;