import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import weatherapp from "../../src/assets/Projects/weatherapp.png";
import Tictactoe from "../../src/assets/Projects/Tictactoe.png";
import urlshortner from "../../src/assets/Projects/urlshortnerwhite.png";
import offerhub from "../../src/assets/Projects/offerhub.png";
import xerox from "../../src/assets/Projects/xerox.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xerox}
              isBlog={false}
              title="Vss Printers"
              description="A clean and responsive e-commerce website for a Xerox and printing service business, built using HTML and CSS. The site showcases products such as xerox machines, printers, and accessories. Designed with a modern layout, it features intuitive navigation, product listings, and a professional look suitable for commercial use."
              ghLink="https://github.com/Vanshshah2325/E-commerece-site-XEROX-"
            // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tictactoe}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="A classic Tic-Tac-Toe game built using HTML, CSS, and JavaScript. Designed with a clean and responsive UI, this interactive game allows two players to play in turns, detects winning combinations, and displays the result instantly. Perfect for learning game logic and DOM manipulation with pure JavaScript."
              ghLink="https://github.com/Vanshshah2325/TIC-TOC-TOE"
            // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={urlshortner}
              isBlog={false}
              title="Url Shortner"
              description="A simple and efficient URL Shortener built using Node.js, Express.js, MongoDB, and EJS. This project allows users to generate shortened URLs using unique IDs, manage them via a clean UI, and redirect users seamlessly to the original links. It uses nanoid and shortid for generating short codes, and stores all data securely in MongoDB using Mongoose."
              ghLink="https://github.com/Vanshshah2325/Short-URL"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Weather App"
              description="A weather application built with a frontend using HTML and CSS, and a backend powered by Node.js and Express. This app allows users to enter a city name and fetch real-time weather information by integrating a weather API. The backend handles API requests and serves the weather data dynamically to the user interface."
              ghLink="https://github.com/Vanshshah2325/Weather_App"
            // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={offerhub}
              isBlog={false}
              title="Offer-Hub"
              description="OfferHub is a modern web platform for discovering and managing deals across categories like restaurants, cafes, fashion, and gaming. Built using React (with Vite), Express.js, and MySQL, it features user authentication, category-based dashboards, JWT-based session handling, dynamic charting with Recharts, PDF export with jsPDF, and a sleek UI powered by Bootstrap and Framer Motion. Ideal for users to explore local offers and for businesses to manage their listings efficiently."
              ghLink="https://github.com/Vanshshah2325/OfferHub"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


        </Row>
      </Container>
    </Container>
  )
}

export default Projects