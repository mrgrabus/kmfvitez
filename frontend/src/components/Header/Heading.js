import styles from "./Heading.module.css";
import React, { useState } from "react";
import Trail from "./Trail";

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
        <Trail open={true}>
          {props.title}
        </Trail>
      </div>
    );
  }
};

export default Heading;
