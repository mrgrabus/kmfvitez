import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

import fks from "../../../assets/Grbovi/cd-fks.png";
import kmf from "../../../assets/Grbovi/cd-kmf.png";

import styles from "./CountdownTimer.module.css";
import moment from "moment/min/moment-with-locales";
moment.locale("bs");


const CountdownTimer = () => {
  const [data, setData] = useState();
  const apiCall = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/matches/supermatch"
      );
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.log(error);
    }
  };
  let date = moment(data?.date).format();
  useEffect(() => {
    apiCall();
  }, []);
  return (
    <div className={`container ${styles.countdown}`}>
      <div className={styles.cdContent}>
        <div className={styles.cdLogo}>
          <img src={kmf} alt="kmf vitez" />
        </div>
        <div className={styles.cdNametag}>
          <p>{data?.isHome ? "KMF Vitez" : data?.team.teamName}</p>
        </div>
        <div className={styles.cdTimer}>
          <p className={styles.nm}>NEXT MATCH</p>
          <p className={styles.demo}>
            <Countdown date={date} />
            <p className={styles.d}>Days / Hour / Min / Sec</p>
          </p>
        </div>
        <div className={styles.cdNametag}>
          <p>{data?.isHome ? data?.team.teamName : "KMF Vitez"}</p>
        </div>
        <div className={styles.cdLogo}>
          <img src={fks} alt="fk sarajevo" />
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
