import Wrapper from "../components/Wrapper"
import AppProfileForm from "../components/AppProfileForm"

const AddProfilePage = ({ updateProfiles }) => {
    return (
        <Wrapper id="add-profile">
            <h1>Add Profile</h1>
            <AppProfileForm onAddProfile={updateProfiles} />
        </Wrapper>
    );
};

export default AddProfilePage;