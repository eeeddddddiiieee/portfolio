import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import blog from "../../Assets/Projects/blog.png";
import ai from "../../Assets/Projects/AI.png";
import mars from "../../Assets/Projects/mars.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
        projects
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Cornell Trading Competition"
              date = "2022"
              description="Won the first Cornell Trading Competition through superior performance in three separate cases: Options, Crytocurrencies, and Equities."
              ghLink="https://github.com/bryantpark04/ctc2022"
              demoLink="https://cornellquantfund.org/competition"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Wordle Solver"
              date = "2022"
              description="Project from my time at the Jane Street Academy of Math and Programming. Average of 3.63 guesses."
              ghLink="https://github.com/eeeddddddiiieee/wordle-eeeddddddiiieee/"
              demoLink="https://www.janestreet.com/join-jane-street/programs-and-events/amp/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="FIRST Tech Challenge Robotics"
              date = "2021-2022"
              description="Founded FTC Team #19379 Singularity in 2021. Regional Winning Alliance, IL State Championship 2nd Place Connect Award."
              ghLink="https://github.com/eeeddddddiiieee/FTC-19379"
              demoLink="https://www.singularityftc.org"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="FIRST Tech Challenge Robotics"
              date ="2019-2021"
              description="I co-founded the first-ever FTC team at the Illinois Mathematics and Science Academy in 2019, TITANS FTC #17576. Won 2nd place Think Award at the IL State Championsip in 2021."
              //ghLink="https://github.com/sohumsuthar/portfolio"
              demoLink="https://titansftc.weebly.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mars}
              isBlog={false}
              title="FIRST Tech Challenge Robotics"
              date="2018-2019"
              description="I was part of team TESLAS #13197 as the mechanical lead in my freshman year. Division Finalist at State Championship 2019."
              //ghLink="https://github.com/sohumsuthar/portfolio"
              demoLink="https://teslasftc.weebly.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ai}
              isBlog={false}
              title="VEX AI Robotics"
              date="2021"
              description="Utilized AI with the NVidia Jetson Nano paired with depth perception cameras, progammed in C++ using advanced math for high fidelity sensor programming."
              ghLink="https://github.com/sohumsuthar/91008A-VEX-AI"
              //demoLink="https://docs.google.com/document/d/1lh3AYdR2V4zIdTpO24tG1HMpoaHcadkZX031bctqgSs/edit?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="YouTube"
              date = "2017"
              description="YouTube channel managed by me for technology education."
              //ghLink="https://github.com/sohumsuthar/91008A-VEX-AI"
              demoLink="https://www.youtube.com/c/NanoBeasts"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Portfolio"
              description="sohumsuthar.com! Programmed with node.js and react in VSCode"
              ghLink="https://github.com/sohumsuthar/portfolio"
              demoLink="https://www.sohumsuthar.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
