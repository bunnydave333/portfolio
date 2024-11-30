import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import LaptopImg from "../../assets/home-main.svg";
import homeLogo from '../about.jpg';
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
    return (
      <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={4} className="myAvtar">
            <Tilt>
              <img src={homeLogo} className="img-fluid"
                style={{ maxHeight: "450px", borderRadius: '50%' }} />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
             Hi, my name is <span className="yellow">Parth Dave </span>
             and I'm from <span className="yellow"> Surat, Gujarat, India.</span>
            <br />
            <br />
              As a motivated and results-driven
              <b className="yellow"> Data Analyst, </b> I'm skilled in Machine Learning, Data Analysis, and Python.
              <br />
              <br />I am proficient in solving
                <b className="yellow"> Complex Problems, </b>
                and <b className="yellow">Extracting Insights</b> from data.
                <br />
                <br/>
                I'm eager to contribute to 
              <b className="yellow"> Innovative Projects</b> in near future.
              <br />
              <br />
              With my excellent <i>
              <b className="yellow">Problem Solving Abilities</b> and a
                <b className="yellow">
                  {" "}
                  Collaborative Mindset 
                </b>
              </i> I'm able to work effectively both independently and as part of a team.
              &nbsp; like
              <br />
            
              
            </p>
          </Col>
          
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/parthdave333"
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
                  href="https://www.linkedin.com/in/parthdave333"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/BunnyDave333?t=sSsqEndw2ij13K3gSMxL_w&s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="x"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
            
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );   
}

export default About