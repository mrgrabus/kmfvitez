import React from "react";
import { Nav } from "react-bootstrap";
import styles from "./CmsSidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faArchive,
  faFile,
  faFileSignature,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";
import pen from "../../assets/Img/pen-gray.svg";
import filePlus from "../../assets/Img/file-plus.svg";
import home from "../../assets/Img/home.svg";
import image from "../../assets/Img/imageframe.svg";
import trash from "../../assets/Img/trash.svg";

const Sidebar = (props) => {
  return (
    <div>
      <Nav className={`d-none d-md-block bg-light ${styles.sidebar}`}>
        <div className={`sidebar-sticky`}></div>
        <p className={styles.manage}>Manage</p>
        <Nav.Item>
          <Nav.Link href="/home" className={`ps-0 ${styles.nlink}`}>
            <div className="d-flex align-items-center">
              <img src={home} alt="home" />
              Dashboard
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home" className={`ps-0 ${styles.nlink}`}>
            <div className="d-flex align-items-center">
              <img src={filePlus} alt="fileplus" />
              Create new match
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home" className={`ps-0 ${styles.nlink}`}>
            <img src={pen} alt="blog" />
            Blog articles
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home" className={`ps-0 ${styles.nlink}`}>
            <img src={image} alt="image" />
            Files
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home" className={`ps-0 ${styles.nlink}`}>
            <img src={trash} alt="trash" />
            Archived matches
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
export default Sidebar;
