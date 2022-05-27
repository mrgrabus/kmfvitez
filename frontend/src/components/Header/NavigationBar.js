import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.css";
import grb from "../../assets/Img/kmf_grb.png";
import menu from "../../assets/Img/menu.svg";
import arrowup from "../../assets/Img/arrow-up-circle.svg";
import { useEffect, useRef, useState } from "react";

const NavigationBar = () => {
  const [toggleClass, setClass] = useState(false);

  const changeClasses = () => {
    setClass(!toggleClass);
  };
  const arrowUpHandler = () => {
    window.scrollTo(0, 0);
  };
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
    <>
      <Container>
        <div className={`${styles.navbarContainer}`}>
          <div
            className={`${styles.navbar} ${
              navBackground ? styles.backgroundColor : ""
            }`}
          >
            <div className={styles.navbarContent}>
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
            </div>
          </div>
        </div>

        {/* Responsive navbar  */}
        <div className={styles.responsiveNav}>
          <div className={styles.responsiveLogoBurger}>
            <NavLink to="/home" className={styles.logo}>
              KMF VITEZ
            </NavLink>
            <div className={styles.burger}>
              <img src={menu} onClick={changeClasses} alt="burger" />
            </div>
          </div>

          <div
            className={
              toggleClass
                ? `${styles.responsiveItems} ${styles.navOpen}`
                : `${styles.responsiveItems} ${styles.navClose}`
            }
          >
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
          </div>
        </div>

        {/* <Navbar
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
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className={styles.hamburger}
          >
            <div className={styles.mobileMenu}>
              <p>KMF VITEZ</p>
              <img src={menu} />
            </div>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className={`d-flex justify-content-space-between ${styles.nav}`}
            >
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
      </Navbar> */}
      </Container>
      {navBackground && (
        <div className={styles.arrowUp} onClick={arrowUpHandler}>
          <img src={arrowup} />
        </div>
      )}
    </>
  );
};

export default NavigationBar;
