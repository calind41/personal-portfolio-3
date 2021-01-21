import React from "react";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const scrollToWorksSection = () => {
    window.scrollTo(0, 410);
  };
  const scrollToSkillSection = () => {
    window.scrollTo(0, 1700);
  };
  const scrollToContactSection = () => {
    window.scrollTo(0, 2300);
  };
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div onClick={scrollToTop} className={styles.portfolio}>
          Portfolio
        </div>
        <div className={styles.wrapper}>
          <div onClick={scrollToWorksSection} className={styles.works}>
            Works
            <span></span>
          </div>
          <div onClick={scrollToSkillSection} className={styles.skills}>
            Skills
            <span></span>
          </div>
          <div onClick={scrollToContactSection} className={styles.contacts}>
            Contacts
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
