import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.css";
import grb from "../../assets/Img/kmf_grb.png";
import { useEffect, useRef, useState } from "react";

const NavigationBar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 30;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      style={{
        transition: "1s ease",
        backgroundColor: navBackground ? "black" : "transparent",
      }}
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`d-flex justify-content-space-between ${styles.nav}`}>
            <NavLink
              to="/home"
              className={(navData) =>
                navData.isActive ? styles.Active : styles.navLink
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/players"
              className={(navData) =>
                navData.isActive ? styles.Active : styles.navLink
              }
            >
              Players
            </NavLink>
            {!navBackground && (
              <NavLink
                to="/home"
                className={(navData) =>
                  navData.isActive ? styles.navLink : styles.navLink
                }
              >
                <a>
                  <img src={grb} alt="kmfvitez"></img>
                </a>
              </NavLink>
            )}
            {navBackground && (
              <NavLink
                to="/home"
                className={(navData) =>
                  navData.isActive ? styles.navLink : styles.navLink
                }
              >
                KMF VITEZ
              </NavLink>
            )}
            <NavLink
              to="/shop"
              className={(navData) =>
                navData.isActive ? styles.Active : styles.navLink
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/news"
              className={(navData) =>
                navData.isActive ? styles.Active : styles.navLink
              }
            >
              News
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
