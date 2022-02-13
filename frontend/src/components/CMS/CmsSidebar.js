import React from "react";
import { Nav } from "react-bootstrap";
import styles from "./CmsSidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faArchive,
  faFile,
  faFileSignature,
  faBlog
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = (props) => {
  return (
    <div>
      <Nav className={`d-none d-md-block bg-light ${styles.sidebar}`}>
        <div className={`sidebar-sticky`}></div>
        <p className={styles.manage}>Manage</p>
        <Nav.Item>
          <Nav.Link href="/home" className={`ps-0 ${styles.nlink}`}>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faHome} className={styles.icon} />
              Home
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home" className={`ps-0 ${styles.nlink}`}>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faFileSignature} className={styles.icon} />
              Create new match
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home" className={`ps-0 ${styles.nlink}`}>
            <FontAwesomeIcon icon={faBlog} className={styles.icon} />
            Blog articles
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home" className={`ps-0 ${styles.nlink}`}>
            <FontAwesomeIcon icon={faFile} className={styles.icon} />
            Files
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home" className={`ps-0 ${styles.nlink}`}>
            <FontAwesomeIcon icon={faArchive} className={styles.icon} />
            Archived matches
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
export default Sidebar;
