import React from "react";
import styles from "./Intro.module.scss";

export default function Intro() {
  return (
    <div className={styles.container}>
      {/* <img src='/fe-434.png' alt='bg' /> */}
      <div className={styles.imageContainer}>
        <img src='/bgg.png' alt='bg' />
      </div>
      <div className={styles.rightSide}>
        <h1>Hello, My name is Călin</h1>
        <h2>Frontend Developer</h2>
      </div>
    </div>
  );
}
