
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <main className={styles.header}>
      <img src="/HeadShot.jpeg/" className={styles.dp} />

      <h1 className={styles.name}>Josh Durham</h1>

      <p className={styles.about}>
        Software Engineer, Student, & Entrepreneur,
        <br />
        Co-Founder at{" "}
        <a href="https://IceGainz.com" target="_blank" rel="noreferrer">
          Ice Gainz LLC
        </a>
      </p>
    </main>
  );
}