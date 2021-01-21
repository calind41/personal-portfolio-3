import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Intro from "../components/Intro/Intro";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Contacts from "../components/Contacts/Contacts";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <script
          src='https://kit.fontawesome.com/5f927066d0.js'
          crossorigin='anonymous'
        ></script>
      </Head>
      <Navbar />
      <Intro />
      <Projects />
      <Skills />
      <Contacts />
    </div>
  );
}
