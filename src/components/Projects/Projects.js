import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/ctc.png";
import blog from "../../Assets/Projects/blog.png";
import dyad from "../../Assets/Projects/dyad1.png";
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
              imgPath={dyad}
              isBlog={false}
              title="Dyad"
              date = "2022-"
              description="Working as a core quant with the Dyad team on a fundamentally new DeFi primitive."
              ghLink="https://github.com/DyadStablecoin"
              demoLink="https://dyadstable.com"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Cornell Trading Competition"
              date = "2022"
              description="Won the first Cornell Trading Competition through superior performance across three cases: Options, Crytocurrencies, and Equities."
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
              ghLink="https://github.com/titans17576"
              demoLink="https://titansftc.weebly.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mars}
              isBlog={false}
              title="FIRST Tech Challenge Robotics"
              date="2018-2019"
              description="I was part of team TESLAS #13197 as the mechanical lead in my freshman year. Cooper Division Finalist at IL State Championship 2019."
              ghLink="https://github.com/advait-patel-17/RoverRuckus_13197"
              demoLink="https://teslasftc.weebly.com/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Portfolio"
              description="zhangedward.com! Programmed with node.js and react in VSCode."
              ghLink="https://github.com/eeeddddddiiieee/portfolio"
              demoLink="https://www.zhangedward.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
