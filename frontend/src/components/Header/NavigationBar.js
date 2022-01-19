import { Container, Navbar, Nav } from "react-bootstrap";
import styles from "./NavigationBar.module.css";
import grb from "../../assets/Img/kmf_grb.png";

const NavigationBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="transparent"
      variant="dark"
      className="fixed-top"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`d-flex justify-content-space-evenly ${styles.nav}`}>
            <Nav.Link href="#home" className={styles.navLink}>
              Home
            </Nav.Link>
            <Nav.Link href="#players" className={styles.navLink}>
              Players
            </Nav.Link>
            <Nav.Link href="#logo" className={styles.navLink}>
              <a>
                <img src={grb} alt="kmfvitez"></img>
              </a>
            </Nav.Link>
            <Nav.Link href="#shop" className={styles.navLink}>
              Shop
            </Nav.Link>
            <Nav.Link href="#contact" className={styles.navLink}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
