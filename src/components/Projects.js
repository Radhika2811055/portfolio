import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const majorProjects = [
    {
      title: "Automated detection of rare astronomical events using image analysis and ML",
      description: "Upcoming – Advanced project combining computer vision and machine learning",
      imgUrl: projImg1,
      githubUrl: "",
    },
    {
      title: "Waste Segregation System",
      description: "Image-based classification using OpenCV and basic ML techniques",
      imgUrl: projImg2,
      githubUrl: "https://github.com/Radhika2811055/Waste_Segreagtion_model",
    },
  ];

  const academicProjects = [
    {
      title: "Linux System Resource Monitoring Tool",
      description: "CLI-based tool to monitor CPU, memory, and process information",
      imgUrl: projImg3,
      githubUrl: "https://github.com/Radhika2811055/linux-system-monitor",
    },
  ];

  const exploratoryProjects = [
    {
      title: "AI-assisted Tax & Event Planner",
      description: "Application integrating external APIs for planning and automation tasks",
      imgUrl: projImg1,
      githubUrl: "https://github.com/Radhika2811055/Innotech_Project",
    },
    {
      title: "Face Detection Attendance System",
      description: "Python, OpenCV – Automated attendance using real-time face detection",
      imgUrl: projImg2,
      githubUrl: "https://github.com/Skill-Sprint/SkillSprint-2.0_PySight/tree/main/Final%20Task%20Submission/Radhika_Saxena_2nd_CSE/Final_Project_Radhika_Saxena_CSE",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Below are selected academic and self-initiated projects that demonstrate my understanding of programming, system fundamentals, and practical software development. These projects focus on applying core computer science concepts rather than surface-level features.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Major Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Academic Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Exploratory Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="justify-content-center">
                        {
                          majorProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row className="justify-content-center">
                        {
                          academicProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row className="justify-content-center">
                        {
                          exploratoryProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}
