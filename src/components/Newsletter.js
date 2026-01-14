import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {
  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row className="justify-content-center">
            <Col lg={10} className="text-center">
              <h4 className="achievements-title">Achievements</h4>
              <div className="achievements-wrapper">
                <div className="achievements-column left-column">
                  <ul className="achievement-list">
                    <li>NPTEL: Programming and Data Structures in Python</li>
                    <li>Selected among Top 100 Participants — Women Engineers Scholarship Program.</li>
                    <li>Runner-Up — Pysight “Dive into Computer Vision” Program.</li>
                    <li>Participant — Google Cloud Arcade Facilitator Program.</li>
                  </ul>
                </div>
                <div className="achievements-vertical-line"></div>
                <div className="achievements-column right-column">
                  <ul className="achievement-list">
                    <li>Infosys: Unix and Operating Systems Fundamentals (Jun 2025)</li>
                    <li>Infosys Springboard: Learn Programming with Java (Jun 2025)</li>
                    <li>Palo Alto Networks Academy: Cybersecurity Certification</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
