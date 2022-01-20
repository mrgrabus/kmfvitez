import CountdownTimer from "./Countdown/CountdownTimer";
import styles from "./Body.module.css";

const Body = () => {
  return (
    <div className={styles.body}>
      <CountdownTimer></CountdownTimer>
    </div>
  );
};

export default Body;
