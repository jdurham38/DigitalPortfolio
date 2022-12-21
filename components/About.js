import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h2>About</h2>
      <img src="/line.svg" className="line" />
      <p>
        Hello! I'm Joshua Durham or just Josh, a Software Engineer & current student at Florida Gulf Coast.
        <a href="" target="_blank" rel="noreferrer">
          
        </a>
        .
      </p>
      <p>
        As a full-stack developer I can work with Next.js, Wordpress, SQL, Microsoft Azure, Backend languages (Python, Java, C++).
      </p>
      
    </div>
  );
}