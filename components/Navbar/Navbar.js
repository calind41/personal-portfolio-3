import React, { useEffect } from "react";
import styles from "./Navbar.module.scss";
import ReactGa from "react-ga";

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  if (process.browser) {
    useEffect(() => {
      ReactGa.initialize("G-6ZVHLF4C5D");

      ReactGa.timing({
        category: "Load Performace",
        variable: "Some metric",
        value: "Value of Metric",
      });

      // to report pageview
      ReactGa.pageview(window.location.pathname + window.location.search);
    }, [window.location.pathname + window.location.search]);
  }
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
