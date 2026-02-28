import { useContext } from "react";
import ProfileContext from "../context/ProfileContext";

const useProfiles = () => {
  const { profiles, updateProfiles } = useContext(ProfileContext);

  return { profiles, updateProfiles };
};

export default useProfiles;