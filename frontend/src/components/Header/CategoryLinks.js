import { NavLink } from "react-router-dom";

import React from "react";

const CategoryLinks = () => {
  return (
    <div className={styles.CategoryLinksContainer}>
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
  );
};

export default CategoryLinks;
