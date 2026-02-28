import Wrapper from "../components/Wrapper"
import AppProfileForm from "../components/AppProfileForm"
import { useContext } from "react"
import ProfileContext from "../context/ProfileContext"
import useProfiles from "../hooks/useProfiles"

const AddProfilePage = () => {
    const { updateProfiles } = useProfiles();

    return (
        <Wrapper id="add-profile">
            <h1>Add Profile</h1>
            <AppProfileForm onAddProfile={updateProfiles} />
        </Wrapper>
    );
};

export default AddProfilePage;