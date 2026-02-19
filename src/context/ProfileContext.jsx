import { createContext, useState } from "react";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";

const ProfileContext = createContext()

export const ProfileProvider = ({ children }) => {

  const [profiles, setProfiles] = useState([
    { id: 0, name: "Sam", title: "UX designer", image: person1 },
    { id: 1, name: "Caroline", title: "Frontend Developer", image: person2 },
    { id: 2, name: "Bob", title: "Backend Developer", image: person3 },
  ])

  const updateProfiles = (profile) => {
    setProfiles(prev => [...prev, profile]);
  }

  return (
    <ProfileContext.Provider value={{ profiles, updateProfiles }}>
      {children}
    </ProfileContext.Provider>
  )
};

export default ProfileContext;