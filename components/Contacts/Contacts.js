import React from "react";
import styles from "./Contacts.module.scss";

export default function Contacts() {
  const slideToTopOfPage = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className={styles.container}>
      <h1>.contacts()</h1>
      <div className={styles.email}>calindodon62@gmail.com</div>
      <div className={styles.otherLinks}>
        <div className={styles.linkedin}>LinkedIn</div>
        <div className={styles.github}>Github</div>
        <div className={styles.cv}>CV</div>
      </div>

      <div onClick={slideToTopOfPage} className={styles.goUp}></div>
    </div>
  );
}
