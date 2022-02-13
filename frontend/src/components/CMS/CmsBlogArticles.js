import styles from "./CmsBlogArticles.module.css";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import CmsArticlesList from "./CmsArticlesList";
import CmsNewArticleModal from "./CmsNewArticleModal";

const CmsBlogArticles = () => {
  const [show, setShow] = useState(false);
  const modalHandler = () => {
    setShow(true);
  };
  return (
    <>
    <CmsNewArticleModal show={show} />
    <div className={styles.content}>
      <Row className={styles.headingDiv}>
        <Col lg={5} className={styles.heading}>
          <p className={styles.title1}>Title</p>
        </Col>
        <Col lg={4} className={styles.heading}>
          <p>Status</p>
        </Col>
        <Col lg={3} className={styles.heading}>
          <button className={styles.btn} onClick={modalHandler}>
            <FontAwesomeIcon icon={faPen} />
            <span>Create new article</span>
          </button>
        </Col>
      </Row>
      <CmsArticlesList />
    </div>
    </>
  );
};

export default CmsBlogArticles;
