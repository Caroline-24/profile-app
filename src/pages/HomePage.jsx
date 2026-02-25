import Filters from "../components/Filters";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import { useContext } from "react";
import ProfileContext from "../context/ProfileContext";
import { useMemo } from "react";

function HomePage({ profiles, handleChangeTitle, handleSearch, handleClear, title, name, theme}) {

  const titles = useMemo(()=>
    [...new Set(profiles.map((p) => p.title))],
    [profiles],
  );
  
  const filteredProfiles = useMemo(() =>
    profiles.filter(
      (profile) =>
        (profile.title === title || !title) &&
        profile.name.toLowerCase().includes(name.toLowerCase())),
        [profiles, title, name]
  );

  return (
      <Wrapper id="profiles">
        <h1>Profiles</h1>
        <Filters
          titles={titles}
          title={title}
          name={name}
          handleChange={handleChangeTitle}
          handleSearch={handleSearch}
          handleClick={handleClear}
        />

        <div className="grid">
          {filteredProfiles.length > 0 ? (
            filteredProfiles.map((profile) => (
              <Card
                key={profile.id} {...profile} theme={theme}
              />
            ))
          ) : (
            <p>No profiles selected.</p>
          )}
        </div>
      </Wrapper>
  );
}

export default HomePage;