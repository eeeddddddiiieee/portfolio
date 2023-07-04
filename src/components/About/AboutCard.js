import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Edward Zhang </span>
            from <span className="purple"> Peoria, Illinois.</span>
            <br />I am an incoming sophomore at Duke University.
            <br />
            <br />
            Some of my hobbies:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Golf
            </li>
            <li className="about-activity">
              <ImPointRight /> Building and racing drones
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            ""{" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
