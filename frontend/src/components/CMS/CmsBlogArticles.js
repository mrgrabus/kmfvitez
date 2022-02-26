import styles from "./CmsBlogArticles.module.css";
import { Col, Row } from "react-bootstrap";
import pen from "../../assets/Img/pen-white.svg";
import React, { useState } from "react";
import CmsArticlesList from "./CmsArticlesList";
import CmsNewArticleModal from "./CmsNewArticleModal";

const CmsBlogArticles = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <CmsNewArticleModal
        open={show}
        onClose={() => {
          setShow(false);
        }}
      />
      <div className={styles.content}>
        <Row className={styles.headingDiv}>
          <Col xs={3} lg={5} className={styles.heading}>
            <p className={styles.title1}>Title</p>
          </Col>
          <Col xs={3} lg={4} className={styles.heading}>
            <p>Status</p>
          </Col>
          <Col xs={6} lg={3} className={`${styles.heading}`}>
            <button
              className={`${styles.btn}`}
              onClick={() => {
                setShow(true);
              }}
            >
              <img src={pen} alt="pen" />
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
