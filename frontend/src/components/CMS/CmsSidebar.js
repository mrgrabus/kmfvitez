import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";
import styles from "./CmsSidebar.module.css";
import pen from "../../assets/Img/pen-gray.svg";
import home from "../../assets/Img/home.svg";
import image from "../../assets/Img/imageframe.svg";
import trash from "../../assets/Img/trash.svg";
import match from "../../assets/Img/match.svg";
import players from "../../assets/Img/player.svg";
import positions from "../../assets/Img/position.svg";
import teams from "../../assets/Img/teams.svg";

import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  useEffect(() => {
    document.title = "KMF Vitez | CMS";
  }, []);
  return (
    <div>
      <Nav className={`d-none d-md-block bg-light ${styles.sidebar}`}>
        <div className={`sidebar-sticky`}></div>
        <p className={styles.manage}>Manage</p>
        <NavLink
          to="/cms/dashboard"
          className={(navData) =>
            navData.isActive ? styles.Active : styles.navLink
          }
        >
          <div className="d-flex align-items-center ps-0 p-2">
            <img src={home} alt="match" className="pe-3" />
            <span className="pt-1">Dashboard</span>
          </div>
        </NavLink>
        <NavLink
          to="/cms/matches"
          className={(navData) =>
            navData.isActive ? styles.Active : styles.navLink
          }
        >
          <div className="d-flex align-items-center ps-0 p-2">
            <img src={match} alt="match" className="pe-3" />
            <span className="pt-1">Matches</span>
          </div>
        </NavLink>
        <NavLink
          to="/cms/blog"
          className={(navData) =>
            navData.isActive ? styles.Active : styles.navLink
          }
        >
          <div className="d-flex align-items-center ps-0 p-2">
            <img src={pen} alt="match" className="pe-3" />
            <span className="pt-1">Blog Articles</span>
          </div>
        </NavLink>
        <NavLink
          to="/cms/images"
          className={(navData) =>
            navData.isActive ? styles.Active : styles.navLink
          }
        >
          <div className="d-flex align-items-center ps-0 p-2">
            <img src={image} alt="match" className="pe-3" />
            <span className="pt-1">Images</span>
          </div>
        </NavLink>
        <NavLink
          to="/cms/players"
          className={(navData) =>
            navData.isActive ? styles.Active : styles.navLink
          }
        >
          <div className="d-flex align-items-center ps-0 p-2">
            <img src={players} alt="match" className="pe-3" />
            <span className="pt-1">Players</span>
          </div>
        </NavLink>
        <NavLink
          to="/cms/positions"
          className={(navData) =>
            navData.isActive ? styles.Active : styles.navLink
          }
        >
          <div className="d-flex align-items-center ps-0 p-2">
            <img src={positions} alt="match" className="pe-3" />
            <span className="pt-1">Positions</span>
          </div>
        </NavLink>
        <NavLink
          to="/cms/teams"
          className={(navData) =>
            navData.isActive ? styles.Active : styles.navLink
          }
        >
          <div className="d-flex align-items-center ps-0 p-2">
            <img src={teams} alt="teams" className="pe-3" />
            <span className="pt-1">Teams</span>
          </div>
        </NavLink>
        <NavLink
          to="/cms/archive"
          className={(navData) =>
            navData.isActive ? styles.Active : styles.navLink
          }
        >
          <div className="d-flex align-items-center ps-0 p-2">
            <img src={trash} alt="match" className="pe-3" />
            <span className="pt-1">Archive</span>
          </div>
        </NavLink>
      </Nav>
    </div>
  );
};
export default Sidebar;
