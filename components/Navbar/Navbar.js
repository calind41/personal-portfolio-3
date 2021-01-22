import React from "react";
import styles from "./Navbar.module.scss";

const dom = (selector) => document.querySelector(selector);

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div onClick={scrollToTop} className={styles.portfolio}>
          <a href='/'>Portfolio</a>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.works}>
            <a href='#works'> Works</a>
            <span></span>
          </div>
          <div className={styles.skills}>
            <a href='#skills'>Skills</a>
            <span></span>
          </div>
          <div className={styles.contacts}>
            <a href='#contacts'>Contacts</a>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
