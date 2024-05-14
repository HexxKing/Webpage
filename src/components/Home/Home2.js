import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              The first time I fell in love with technology was in 2020 during the COVID-19 pandemic lockdown. Stuck at home, I decided to buy a refurbished MacBook Air and enroll in an online coding bootcamp at Code Fellows. After an intense nine months, I transformed into a full stack software developer with skills in Python and JavaScript. Learning to code made me feel like I could learn anything, build anything, and do anything I dreamed up.
              <br />
              <br />I'm currently fluent in backend development with  
              <i>
                <b className="purple"> Python, Django, Node.js, Express.js, and Bash. </b>
              </i>
                For frontend development, I work with  
              <i>
                <b className="purple"> JavaScript, React, HTML, CSS, Bootstrap, and Markdown. </b>
              </i>
                My cloud service experience includes  
              <i>
                <b className="purple"> AWS and Heroku. </b>
              </i>
                I've worked with databases like  
              <i>
                <b className="purple"> SQL, MongoDB, and PostgreSQL. </b>
              </i>
                I also have some experience in data science and machine learning with  
              <i>
                <b className="purple"> SciKit-Learn, NLTK, Pandas, and NumPy. </b>
              </i>
                My other technical skills cover computer networking with  
              <i>
                <b className="purple"> Wireshark, Nmap, and Cisco Packet Tracer, </b>
              </i>
                as well as cybersecurity tools like 
              <i>
                <b className="purple"> RADIUS, OpenVPN, and Kali Linux. </b>
              </i>
              <br />
              <br />
                When I am not at the computer, you can find me being a great dane mom, tending to my backyard food forest and homemade compost, reading books about tech and women's empowerment, or baking new desserts and churning fresh ice cream inspired by classic treats. I'm also an enthusiast of carnivorous plants and love adding new specimens to my collection.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
