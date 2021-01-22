import React from "react";
import styles from "./Contacts.module.scss";

export default function Contacts() {
  const slideToTopOfPage = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div id='contacts' className={styles.container}>
      <h1>.contacts()</h1>
      <div className={styles.email}>calindodon62@gmail.com</div>
      <div className={styles.otherLinks}>
        <div className={styles.linkedin}>
          <a
            href='https://www.linkedin.com/in/c%C4%83lin-dodon-90217a107/'
            target='_blank'
          >
            LinkedIn
          </a>
        </div>
        <div className={styles.github}>
          <a href='https://github.com/calind41' target='_blank'>
            Github
          </a>
        </div>
        <div className={styles.cv}>
          <a
            href='https://pdfhost.io/v/QmMATyRG~_Front_End_Developer.pdf'
            target='_blank'
          >
            CV
          </a>
        </div>
      </div>

      <div onClick={slideToTopOfPage} className={styles.goUp}></div>
    </div>
  );
}
