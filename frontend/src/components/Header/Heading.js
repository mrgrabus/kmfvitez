import styles from "./Heading.module.css";

const Heading = (props) => {
  if (props.type === "article") {
    return (
      <div
        className={`${styles.div} container position-absolute top-50 start-50 translate-middle`}
      >
        <h1 className={styles.title}>{props.title}</h1>
      </div>
    );
  } else {
    return (
      <div
        className={`${styles.div} container position-absolute top-50 start-50 translate-middle text-center`}
      >
        <h1>{props.title}</h1>
      </div>
    );
  }
};

export default Heading;
