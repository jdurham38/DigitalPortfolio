

import Head from "next/head";
import { Card } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Works from "../components/Works";
import Contact from "../components/Contact";
import About from "../components/About";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Josh Durham Portfolio
        </title>
        <meta
          name="description"
          content="
        Josh is a Software Engineer & Internet Entrepreneur. He is the Co-Founder of Ice Gainz LLC."
        />
        <meta name="theme-color" content="#ffffff" />

        <meta name="og:type" content="website" />
        <meta
          name="og:title"
          content="
          Josh Durham - Software Engineer, Entrepuenuer, and Co-Founder
          at Ice Gainz LLC, • Web Development • Database Administration • Cloud Computing • Backend Development"
        />
        <meta
          name="keywords"
          content="Josh,Joshua,Durham,software engineer, entrepreneur, Ice Gainz"
        />
        <meta name="og:url" content="https://josh-durham.me" />
        <meta
          name="og:description"
          content="
          Josh is a Software Engineer & Internet Entrepreneur. He is the Co-Founder of Ice Gainz LLC."
        />
        <meta name="og:image" content="/assets/images/syamlal-og.jpg" />

        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Card className={styles.card}>
        <Card.Body>
          <Header />
          <About />
          <Experience />
          <Works />
          <Contact />
          <Footer />
        </Card.Body>
      </Card>
    </div>
  );
}