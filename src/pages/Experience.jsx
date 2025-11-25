// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "../components/Projects/ProjectCard";
// import Particle from "../components/Particle";

// const Projects = () => {
//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           Recent Top <strong className="yellow">Works </strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are a few projects I've worked on recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

//           <Col md={6} className="project-card">
//             <ProjectCard
//               isBlog={false}
//               title="Full Stack Developer – Ker Infotech"
//               description={
//                 <>
//                   <p><strong>(April 2025 – Present)</strong></p>
//                   <ul>
//                     <li>Developing and maintaining scalable web applications using <strong>React.js, Node.js, Express.js, and MySQL</strong>.</li>
//                     <li>Leading feature development, handling <strong>API integrations</strong>, and managing user authentication and session handling.</li>
//                     <li>Collaborating with UI/UX designers and backend engineers to deliver seamless user experiences.</li>
//                   </ul>
//                 </>
//               }
//             />
//           </Col>

//           <Col md={6} className="project-card">
//             <ProjectCard
//               isBlog={false}
//               title="Full Stack Intern – Ker Infotech"
//               description={
//                 <>
//                   <p><strong>(January 2025 – April 2025)</strong></p>
//                   <ul>
//                     <li>Developed and maintained full-stack web applications using <strong>React.js, Node.js, Express.js, and MySQL</strong>.</li>
//                     <li>Built responsive UIs, designed RESTful APIs, and optimized database queries.</li>
//                     <li>Gained hands-on experience in <strong>backend development, authentication, and API integration</strong> following industry best practices.</li>
//                   </ul>
//                 </>
//               }
//             />
//           </Col>

//           {/* 
//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={urlshortner}
//               isBlog={false}
//               title="Url Shortner"
//               description="A simple and efficient URL Shortener built using Node.js, Express.js, MongoDB, and EJS. This project allows users to generate shortened URLs using unique IDs, manage them via a clean UI, and redirect users seamlessly to the original links. It uses nanoid and shortid for generating short codes, and stores all data securely in MongoDB using Mongoose."
//               ghLink="https://github.com/Vanshshah2325/Short-URL"
//             // demoLink="https://chatify-49.web.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={weatherapp}
//               isBlog={false}
//               title="Weather App"
//               description="A weather application built with a frontend using HTML and CSS, and a backend powered by Node.js and Express. This app allows users to enter a city name and fetch real-time weather information by integrating a weather API. The backend handles API requests and serves the weather data dynamically to the user interface."
//               ghLink="https://github.com/Vanshshah2325/Weather_App"
//             // demoLink="https://plant49-ai.herokuapp.com/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={offerhub}
//               isBlog={false}
//               title="Offer-Hub"
//               description="OfferHub is a modern web platform for discovering and managing deals across categories like restaurants, cafes, fashion, and gaming. Built using React (with Vite), Express.js, and MySQL, it features user authentication, category-based dashboards, JWT-based session handling, dynamic charting with Recharts, PDF export with jsPDF, and a sleek UI powered by Bootstrap and Framer Motion. Ideal for users to explore local offers and for businesses to manage their listings efficiently."
//               ghLink="https://github.com/Vanshshah2325/OfferHub"
//             // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
//             />
//           </Col> */}


//         </Row>
//       </Container>
//     </Container>
//   )
// }

// export default Projects






import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

const Experience = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Professional <strong className="yellow">Experience</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here is my work experience showcasing roles and responsibilities.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* ---- EXPERIENCE CARD 1 ---- */}
          <Col md={10} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Full Stack Developer – Ker Infotech"
              description={
                <>

                  <Col className="d-flex align-items-end justify-content-end">
                    <p className="m-0"><strong>(April 2025 – Present)</strong></p>
                  </Col>
                  <ul>
                    <li>
                      Developing and maintaining scalable web applications using
                      <strong> React.js, Node.js, Express.js, and MySQL</strong>.
                    </li>
                    <li>
                      Leading feature development, handling <strong>API integrations</strong>,
                      and managing user authentication and session handling.
                    </li>
                    <li>
                      Collaborating with UI/UX designers and backend engineers to
                      deliver seamless user experiences.
                    </li>
                  </ul>
                </>
              }
            />
          </Col>

          {/* ---- EXPERIENCE CARD 2 ---- */}
          <Col md={10} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Full Stack Intern – Ker Infotech"
              description={
                <>
                  {/* <p><strong>(January 2025 – April 2025)</strong></p> */}
                  <Col  className="d-flex align-items-end justify-content-end">
                    <p className="m-0"><strong>(January 2025 – April 2025)</strong></p>
                  </Col>

                  <ul>
                    <li>
                      Developed and maintained full-stack web applications using
                      <strong> React.js, Node.js, Express.js, and MySQL</strong>.
                    </li>
                    <li>
                      Built responsive UIs, designed RESTful APIs, and optimized
                      database queries.
                    </li>
                    <li>
                      Gained hands-on experience in
                      <strong> backend development, authentication, and API integration</strong>.
                    </li>
                  </ul>
                </>
              }
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
};

export default Experience;
