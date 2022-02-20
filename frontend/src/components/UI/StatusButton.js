import styles from "./StatusButton.module.css";

const StatusButton = (props) => {
  if (props.type === "1") {
    return <div className={styles.statusPublished}>Published</div>;
  }
  if (props.type === "2") {
    return <div className={styles.statusDraft}>Draft</div>;
  }
  if (props.type === "3") {
    return <div className={styles.statusScheduled}>Scheduled</div>;
  }
  if (props.type === "4") {
    return <div className={styles.statusScheduled}>Archived</div>;
  } else {
    return <></>;
  }
};

export default StatusButton;
