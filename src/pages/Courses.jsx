import React, { useState } from "react";
import { Modal, Button, Card, Container, Row, Col } from "react-bootstrap";

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShow = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };
  const handleClose = () => setShowModal(false);

  const courses = [
    {
      id: "dsa",
      title: "Data Structures & Algorithms",
      subtitle: "C++ & Java",
      desc: "Master problem-solving and algorithmic thinking with real-world projects.",
      details: [
        "Strong understanding of DSA",
        "Optimized & scalable code",
        "Problem-solving for interviews",
        "Hands-on industry projects",
      ],
    },
    {
      id: "mern",
      title: "MERN Stack Development",
      subtitle: "MongoDB, Express, React, Node",
      desc: "Build full-stack web apps with React, Node.js, and MongoDB.",
      details: [
        "Responsive web apps",
        "REST APIs & Authentication",
        "Cloud deployment",
        "Live industry projects",
      ],
    },
    {
      id: "data",
      title: "Data Science & AI",
      subtitle: "Python, ML, AI",
      desc: "Learn Data Science, Machine Learning & AI with real-world datasets.",
      details: [
        "Python & SQL proficiency",
        "Machine Learning projects",
        "Big Data & AI applications",
        "Hands-on industry experience",
      ],
    },
    {
      id: "cloud",
      title: "Cloud Computing & DevOps",
      subtitle: "AWS, Docker, CI/CD",
      desc: "Understand cloud infrastructure and DevOps pipelines for scalable apps.",
      details: [
        "AWS fundamentals",
        "Docker & containerization",
        "CI/CD pipeline setup",
        "Deploy enterprise-grade applications",
      ],
    },
    {
      id: "cyber",
      title: "Cybersecurity Essentials",
      subtitle: "Ethical Hacking & Network Security",
      desc: "Learn to secure systems and networks with hands-on exercises.",
      details: [
        "Penetration testing",
        "Network vulnerability assessment",
        "Security best practices",
        "Industry-level projects",
      ],
    },
  ];

  const highlights = [
    "Industry-expert instructors",
    "Hands-on projects & case studies",
    "Career-ready skills & interview prep",
    "Cloud, AI, Web Dev, and more",
  ];

  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column">
      {/* Header */}
      <header className="text-center py-5 px-3">
        <h1 className="fw-bold text-info" style={{ fontFamily: "Satoshi" }}>
          Explore Our Training Programs
        </h1>
        <p className="text-secondary fs-5">
          Courses designed with industry experts to make you job-ready
        </p>
      </header>

      {/* Key Highlights */}
      <Container className="mb-5">
        <Row className="text-center">
          {highlights.map((item, idx) => (
            <Col md={3} sm={6} xs={12} key={idx} className="mb-3">
              <Card className="bg-secondary bg-opacity-10 border-0 shadow-sm h-100">
                <Card.Body>
                  <h5 className="text-info">{item}</h5>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Courses Grid */}
      <Container className="flex-grow-1 mb-5">
        <Row className="g-4">
          {courses.map((course) => (
            <Col md={6} lg={4} key={course.id}>
              <Card
                className="h-100 shadow-sm border-0 text-light"
                style={{
                  background: "#1c1c1e",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  cursor: "pointer",
                }}
                onClick={() => handleShow(course)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
                }}
              >
                <Card.Body>
                  <Card.Title className="text-info fw-bold">{course.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{course.subtitle}</Card.Subtitle>
                  <Card.Text className="text-secondary">{course.desc}</Card.Text>
                  <Button
                    variant="info"
                    className="mt-3 w-100"
                    onClick={() => handleShow(course)}
                  >
                    Explore
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton className="bg-dark text-light border-secondary">
          <Modal.Title>{selectedCourse?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-light">
          <p className="text-secondary">{selectedCourse?.desc}</p>
          <ul>
            {selectedCourse?.details.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer className="bg-dark border-secondary">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" href="/registration">
            Register Now
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Call-to-action */}
      <div className="text-center py-5">
        <h2 className="text-info">Ready to kickstart your career?</h2>
        <Button variant="primary" size="lg" href="/registration">
          Register Now
        </Button>
      </div>
    </div>
  );
}
