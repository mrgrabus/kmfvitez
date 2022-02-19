import styles from "./CmsMatchesContent.module.css";
import match from "../../assets/Img/match-w.svg";
import React, { useState } from "react";
import CmsArticlesList from "./CmsArticlesList";
import CmsNewArticleModal from "./CmsNewArticleModal";

const CmsMatchesContent = () => {
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
        <div className={styles.heading}>
          <p>Home Team</p>
          <p>Away Team</p>
          <p>Date</p>
          <p>Time</p>
          <p>Location</p>
          <p>Status</p>
          <button
            className={styles.btn}
            onClick={() => {
              setShow(true);
            }}
          >
            <img src={match} alt="match" />
            <span>Create new</span>
          </button>
        </div>
        <CmsArticlesList />
      </div>
    </>
  );
};

export default CmsMatchesContent;
