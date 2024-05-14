import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey ya'll, I am <span className="purple">Hexx </span>
            from <span className="purple"> Charleston, South Carolina.</span>
            <br />
            <br />
              I am currently a college student at <span className="purple"> Trident Technical College,</span> where I am studying full time toward an <span className="purple">Associate of Science</span> degree that will transfer with me to <span className="purple">Clemson University's Electrical Engineering</span> program. At Clemson, I plan to pursue minors in <span className="purple">Generative AI, Robotics, and Women's Leadership. </span> 
            <br />
            <br />
            While employed professionally, I earned Certificates of Instruction in <span className="purple">"Foundations of Computer Operations", "Intermediate Software Development", "Networking and System Administration"</span> and a Certificate of Training in <span className="purple">Advanced Software Development with Python"</span> from Code Fellows, a technical skills training academy.
            <br />
            <br />
            Apart from coding, I'm focusing mostly on course work...
          </p>
          <ul>
            <li className="about-activity">
              <span className="purple"><ImPointRight /></span> Differential Calculus, Integral Calculus and Vector Calculus
            </li>
            <li className="about-activity">
              <span className="purple"><ImPointRight /></span> Differential Equations
            </li>
            <li className="about-activity">
              <span className="purple"><ImPointRight /></span> Chemisty and Physics Lab 
            </li>
            <li className="about-activity">
              <span className="purple"><ImPointRight /></span> Engineering Disciplines and Skills
            </li>
            <li className="about-activity">
              <span className="purple"><ImPointRight /></span> Engineering Applications of Numerical Methods
            </li>
            <li className="about-activity">
              <span className="purple"><ImPointRight /></span> Electrical Engineering and Circuits Lab
            </li>
            <li className="about-activity">
              <span className="purple"><ImPointRight /></span> Computer Programming in C++
            </li>
            <li className="about-activity">
              <span className="purple"><ImPointRight /></span> Computer Engineering 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The world would be a better place if more engineers, like me, hated technology. The stuff I design, if I’m successful, nobody will ever notice. Things will just work, and will be self-managing."{" "}
          </p>
          <footer className="blockquote-footer">Radia Perlman | “Mother of the Internet”</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
