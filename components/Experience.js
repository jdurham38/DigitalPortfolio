import styles from "../styles/Experience.module.css";

export default function Experience() {
  return (
    <div className={styles.experience}>
      <h2>Experience</h2>
      <img src="/line.svg" className="line" />
      <div className={styles.lineContainer}>
        <div className={styles.line}>
        
          <div>
          
            <p>
            <div className={styles.college}>
            <i class="bi bi-briefcase"></i>
              <a href="https://splitfyi.com/" target="_blank" rel="noreferrer">
                Split.FYI
              </a>
            </div>
            <div className={styles.branch}>
            &emsp;&emsp;&emsp;&ensp;WordPress Developer (05/2022-09/2022) 
            </div>
            </p>
            <p>
           
            <div className={styles.college}>
            <i class="bi bi-briefcase"></i>
              Start2Star Communications
            </div>
            <div className={styles.branch}>
            &emsp;&emsp;&emsp;&ensp;Software Development Intern (05/2020-05/2022) 
            </div>
            </p>
            <p>
           
            <div className={styles.college}>
            <i class="bi bi-briefcase"></i>
              Start2Star Communications
            </div>
            <div className={styles.branch}>
            &emsp;&emsp;&emsp;&ensp;Billing Intern (04/2019-05/2020) 
            </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}