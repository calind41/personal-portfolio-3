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
        <title>Calin Dodon</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff'></meta>
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
