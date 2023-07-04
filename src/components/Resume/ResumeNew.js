import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../Assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import resumePdf from "src\Assets\resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://github.com/eeeddddddiiieee/portfolio/blob/main/src/Assets/resume.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(800);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        
      <Container>
          <h1 className="project-heading">
      
            
            resume
          </h1>
        <Row >
          
        </Row>
        <Row className="resume">
          <Document file={"resume.pdf"} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
