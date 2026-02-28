import Navbar from "./components/Navbar";
import person1 from "./assets/person1.png";
import person2 from "./assets/person2.png";
import person3 from "./assets/person3.png";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState, useContext, useCallback, lazy, Suspense } from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AddProfilePage from "./pages/AddProfilePage";
import FetchedProfilesPage from "./pages/FetchedProfilePage";
import ProfileDetailPage from "./pages/ProfileDetailPage";
import ProfileLayoutPage from "./pages/ProfileLayoutPage";
import "./App.css";
import ModeContext from "./context/ModeContext";
import ProfileContext from "./context/ProfileContext";
import useFilters from "./hooks/useFilters";

const FetchedProfilePage = lazy(() => import("./pages/FetchedProfilePage"))

function App() {

  const {theme, toggleTheme} =useContext(ModeContext)
  const { profiles, updateProfiles } = useContext(ProfileContext)

  const {title, name, handleChangeTitle, handleSearch, handleClear} =useFilters ();
  
  // const [title, setTitle] = useState("");
  // const [name, setName] = useState("");
  // const handleChangeTitle = useCallback((event)=>{
  //   setTitle(event.target.value);
  // }, []);
  // const handleSearch = useCallback((event) => {
  //   setName(event.target.value);
  // }, []);
  // const handleClear = useCallback(() => {
  //   setTitle("");
  //   setName("");
  // }, []);
  
  return (
    <HashRouter>
      <div className={theme}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <Routes>
          <Route path="/" element={<HomePage profiles={profiles} title={title} name={name} theme={theme} handleChangeTitle={handleChangeTitle} handleSearch={handleSearch} handleClear={handleClear} />} />
          <Route path="/about" element={<AboutPage theme={theme} />} />
          <Route path="/fetched-profiles" element={<Suspense fallback={<p>Loading...</p>}> <FetchedProfilePage /></Suspense>}/>
          <Route path="/fetched-profiles/profile" element={<ProfileLayoutPage />} >
            <Route path=":id" element={<ProfileDetailPage />} />
          </Route>
          <Route path="/add-profile" element={<AddProfilePage />} />          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;