import Wrapper from "../components/Wrapper"
import AppProfileForm from "../components/AppProfileForm"
import { useContext } from "react"
import ProfileContext from "../context/ProfileContext"

const AddProfilePage = () => {
    const { updateProfiles } = useContext(ProfileContext);

    return (
        <Wrapper id="add-profile">
            <h1>Add Profile</h1>
            <AppProfileForm onAddProfile={updateProfiles} />
        </Wrapper>
    );
};

export default AddProfilePage;