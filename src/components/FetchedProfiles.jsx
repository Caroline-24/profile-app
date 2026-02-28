import { useState, useEffect } from "react"
import Filters from "../components/Filters"
import Card from "../components/Card"
import { Link } from "react-router-dom"
import useFilters from "../hooks/useFilters"

const FetchedProfiles = () => {
    
    const [titles, setTitles] = useState([])
    const [profiles, setProfiles] = useState([])
    const {title, name, handleChangeTitle, handleSearch, handleClear} = useFilters();
    // const handleChangeTitle = (event) => {
    //     setTitle(event.target.value);
    // };
    // const handleSearch = (event) => {
    //     setName(event.target.value);
    // };
    // const handleClear = () => {
    //     setTitle("");
    //     setName("");
    // };

    useEffect(()=>{ 

        fetch ("https://web.ics.purdue.edu/~zong6/profile-app/get-titles.php")
        .then(res => res.json())
        .then(res => setTitles(res.titles))

    }, [])

    useEffect(() =>{
        fetch (`https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-filter.php?title=${title}&name=${name}&limit=10`)
        .then(res => res.json())
        .then(res => setProfiles(res.profiles))
    },[title, name])

    return(
        <>
            <Filters
                titles={titles}
                title={title}
                name={name}
                handleChange={handleChangeTitle}
                handleSearch={handleSearch}
                handleClick={handleClear}
            />
            <div className="grid">
                {profiles.length > 0 ? (
                    profiles.map((profile) => (
                        <Link key={profile.id} to={`/fetched-profiles/profile/${profile.id}`}>
                        <Card
                            key={profile.id}
                            name={profile.name}
                            title={profile.title}
                            image={profile.image_url}
                        />
                        </Link>
                    ))

                ) : (
                    <p>No profiles selected.</p>
                )}
            </div>
        </>
    );
};
export default FetchedProfiles;