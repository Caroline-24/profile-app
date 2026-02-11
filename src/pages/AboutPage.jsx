import About from "../components/About";
import Wrapper from "../components/Wrapper";

const AboutPage = ({ theme }) => {
  return (
    <Wrapper id="about">
      <About theme={theme} />
    </Wrapper>
  );
};

export default AboutPage;