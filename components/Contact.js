import { Row, Col } from "react-bootstrap";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Contact</h2>
      <img src="/line.svg" className="line" />
      <Row className={styles.boxes}>
        <Col lg={6} md={6} sm={12}>
          <a
            href="mailto:jdurham38@gmail.com"
            target="_blank"
            rel="noreferrer"
            className={styles.box}
          >
            <i className="bi bi-envelope"></i>
            Email Me
          </a>
        </Col>
        
        <Col lg={6} md={6} sm={12}>
          <a
            href="tel:+19414475720"
            target="_blank"
            rel="noreferrer"
            className={styles.box}
          >
            <i className="bi bi-telephone"></i>
            +1-9414475720
          </a>
        </Col>
      </Row>
    </div>
  );
}
