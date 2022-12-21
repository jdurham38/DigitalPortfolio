import { Card, Col, Row } from "react-bootstrap";
import styles from "../styles/Works.module.css";

export default function Works() {
  return (
    <div className={styles.works}>
      <h2>Works</h2>
      <img src="/line.svg" className="line" />
      <Row>
        <Col md={6}>
          <Card className={styles.card}>
            <a href="https://github.com/jdurham38/discord-bot" target="_blank" rel="noreferrer">
              <Card.Img
                variant="top"
                src="/DiscordBot.jpeg/"
              />
              <Card.Body>
                <Card.Title className={styles.title}>Music Discord Bot</Card.Title>
                <p className={styles.category}>Social Bot</p>
                <Card.Text>
                  A discord bot able to connect to a single Discord server 
                  and be able to play any song on YouTube on your Discord server.
                </Card.Text>
                <Card.Text>
                  Topics include javascript and an external API to pull from YouTube
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>
        <Col md={6}>
          <Card className={styles.card}>
            <a
              href="https://github.com/jdurham38/InternshipGroupProject"
              target="_blank"
              rel="noreferrer"
            >
              <Card.Img
                variant="top"
                src="/ServerImage.jpeg/"
              />
              <Card.Body>
                <Card.Title className={styles.title}>Internship Finder/Creater App</Card.Title>
                <p className={styles.category}>Non Published App</p>
                <Card.Text>
                  An internship program able to create and find different internships.
                </Card.Text>
                <Card.Text>
                  Topics include MySQL and Python
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>
        <Col md={6}>
          <Card className={styles.card}>
            <a href="https://github.com/jdurham38/MechanicalFlower" target="_blank" rel="noreferrer">
              <Card.Img variant="top" src="/MechanicalFlower.jpeg/" />
              <Card.Body>
                <Card.Title className={styles.title}>Mechanical Flower</Card.Title>
                <p className={styles.category}>Gift for Girlfriend</p>
                <Card.Text>
                 This is a gift for my girlriend so please don't tell her!
                This is a Arduino based project of a mechnical flower, using a servo motor to expand the pedals
                as well as collapse them.
                </Card.Text>
                <Card.Text>
                  Topics include C++, Arduino schematics, and physics related concepts (voltage, resistance, etc).
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>
      </Row>
    </div>
  );
}