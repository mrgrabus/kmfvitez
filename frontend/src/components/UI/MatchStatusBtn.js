import styles from "./MatchStatusBtn.module.css";

const MatchStatusBtn = (props) => {
  if (props.type === "1") {
    return <div className={styles.statusActive}>Active</div>;
  }
  if (props.type === "2") {
    return <div className={styles.statusInactive}>Inactive</div>;
  }
  if (props.type === "3") {
    return <div className={styles.statusSuperActive}>Super Active</div>;
  }
  else {
    return <></>;
  }
};

export default MatchStatusBtn;
