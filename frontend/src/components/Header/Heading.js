import styles from "./Heading.module.css";

const Heading = (props) => {
  return (
    <div
      className={`${styles.div} container position-absolute top-50 start-50 translate-middle text-center`}
    >
      <h1>{props.title}</h1>
    </div>
  );
};

export default Heading;
