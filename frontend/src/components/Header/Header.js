import { Container } from "react-bootstrap";
import BgImg from "./BgImg";
import NavigationBar from "./NavigationBar";
import SocialIcons from "../UI/SocialIcons";
import Carousel from "../UI/Carousel";
import Heading from "./Heading";

const Header = (props) => {
  if (props.type === "home") {
    return (
      <Container fluid className="ps-0 pe-0 position-relative">
        <NavigationBar />
        <Carousel />
        <BgImg />
        <SocialIcons />
      </Container>
    );
  } else if (props.type === "article") {
    return (
      <Container fluid className="ps-0 pe-0 position-relative">
        <NavigationBar />
        <BgImg type="article"/>
        <Heading title={props.title} type="article"/>
      </Container>
    );
  } else {
    return (
      <Container fluid className="ps-0 pe-0 position-relative">
        <NavigationBar />
        <BgImg />
        <Heading title={props.type} />
        <SocialIcons />
      </Container>
    );
  }
};

export default Header;
