import styles from "./PlayersContentItem.module.css";
import placeholder from "../../../assets/Img/Players/playerholder.jpg";
import hero from "../../../assets/Img/Players/hero.png";
import React, { useState } from "react";

const PlayersContentItem = ({ firstName, lastName, position, number }) => {
  
  return (
    <div className={styles.imageHolder}>
      <div className={styles.layer}></div>
      <img src={hero} className={styles.hero} alt="hero"></img>
      <img src={placeholder} alt="placeholder" />
      <div className={styles.itemName}>
        <p className={styles.text}>
          {number} <span>{firstName}</span> {lastName} <br />{" "}
          {position.charAt(0).toUpperCase() + position.slice(1, -1)}
        </p>
      </div>
    </div>
  );
};

export default PlayersContentItem;
