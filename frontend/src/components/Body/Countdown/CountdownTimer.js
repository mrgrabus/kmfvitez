import React from "react";
import Countdown from "react-countdown";

import fks from "../../../assets/Grbovi/cd-fks.png";
import kmf from "../../../assets/Grbovi/cd-kmf.png";

import styles from "./CountdownTimer.module.css";

const CountdownTimer = () => {
  return (
    <div className={`container ${styles.countdown}`}>
      <div className={styles.cdContent}>
        <div className={styles.cdLogo}>
          <img src={kmf} alt="kmf vitez" />
        </div>
        <div className={styles.cdNametag}>
          <p>KMF Vitez</p>
        </div>
        <div className={styles.cdTimer}>
          <p className={styles.nm}>NEXT MATCH</p>
          <p className={styles.demo}>
            <Countdown date={"03/05/2022"} />
            <p className={styles.d}>Days / Hour / Min / Sec</p>
          </p>
        </div>
        <div className={styles.cdNametag}>
          <p>FK Sarajevo</p>
        </div>
        <div className={styles.cdLogo}>
          <img src={fks} alt="fk sarajevo" />
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
