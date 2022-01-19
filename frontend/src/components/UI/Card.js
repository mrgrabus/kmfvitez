import styles from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import fks from "../../assets/Grbovi/FK_Sarajevo 1.png";
import kmf from "../../assets/Grbovi/KMF Grb.png";
import teren from "../../assets/Img/teren.png";

const Card = (props) => {
  return (
    <div class={styles.gameCard}>
      <div class={styles.headerClass}>
        <div class={styles.time}>
          <p class={styles.dateNumber}>20.</p>
          <div class={styles.dayWrapper}>
            <p class={styles.day}>
              NEDJELJA
              <br /> <span class={styles.month}>NOVEMBAR</span>
            </p>
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon={faClock} className={styles.clock} />
        </div>
      </div>
      <div class={styles.teamsLogos}>
        <div class="logo">
          <img src={kmf} />
        </div>
        <div class={styles.tekmaDetails}>
          <p>PRVA LIGA</p>
          <p class="time">21:00</p>
          <p>
            GRADSKA SPORTSKA <br />
            DVORANA VITEZ
          </p>
        </div>
        <div class="logo">
          <img src={fks} />
        </div>
      </div>
      <div class={styles.teamNames}>
        <p>KMF Vitez</p>
        <p>VS</p>
        <p>FK Sarajevo</p>
      </div>
      {/* <div class={styles.terenContainer}>
        <img src={teren} />
      </div> */}
      <div class={styles.buttonContainer}>
        <button>DISCOVER MORE</button>
      </div>
    </div>
  );
};

export default Card;
