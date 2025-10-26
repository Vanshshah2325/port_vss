import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="purple"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                  I’m Vansh Shah, a passionate <b className="purple">Full Stack Developer</b> who loves creating clean and functional web applications.
                  <br />
                  <br />
                  I'm skilled in
                  <i>
                    <b className="purple"> React.js, Next.js, Node.js, Express.js, and MongoDB</b>
                  </i>
                  <br />
                  <br />
                  I enjoy working on &nbsp;
                  <i>
                    <b className="purple">Web Technologies</b> and building scalable & impactful{" "}
                    <b className="purple">Products</b>.
                  </i>
                  <br />
                  <br />
                  I also love to build with the <b className="purple">MERN Stack</b> and am always learning and improving my craft with modern libraries and frameworks.
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/Vanshshah2325"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/vansh-shah-632757244/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                    {/* Twitter and LeetCode removed per request */}
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About