import { Container } from "react-bootstrap";
import BgImg from "./BgImg";
import NavigationBar from "./NavigationBar";
import SocialIcons from "../UI/SocialIcons";
import Carousel from "../UI/Carousel";

const Header = () => {
  return (
    <Container fluid className="ps-0 pe-0 position-relative">
      <Carousel/>
      <BgImg/>
      <NavigationBar/>
      <SocialIcons/> 
    </Container>
  );
};

export default Header;
