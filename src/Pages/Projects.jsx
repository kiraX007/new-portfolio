import { motion } from "framer-motion";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Projects = () => {
  const all_projects = [
    {
      id: 1,
      title: "Travel Website",
      description:
        "Created Using HTML, CSS (Bootstrap Framework), and JavaScript",
      image: "/travel.png",
      link: "https://legendary-tulumba-cc9c41.netlify.app/",
    },
    {
      id: 2,
      title: "Restaurant Site",
      description: "Created Using HTML, CSS (Bootstrap Framework)",
      image: "/resturant.png",
      link: "https://legendary-biscuit-0ba6b6.netlify.app/",
    },
    {
      id: 3,
      title: "Nike clone",
      description:
        "Created Using HTML, Bootstrap, JS, and React with React Slick",
      image: "/nike.png",
      link: "https://nike-clone-react-zeta.vercel.app/",
    },
  ];

  return (
    <div className="projects py-5">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, scale: 0, y: -10 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-center intro"
          style={{ color: "#6c63ff", fontFamily: "Arial, sans-serif" }} // Soft purple color
        >
          My <span className="color">Projects</span>
        </motion.h1>
        <div className="row">
          {all_projects.map((project, index) => (
            <div key={project.id} className="col-lg-4 col-md-6 col-sm-12 mt-5">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                className="card-container"
              >
                <Card
                  className="shadow border-0"
                  style={{ borderRadius: "15px" }}
                >
                  <Card.Img
                    variant="top"
                    src={project.image}
                    style={{ borderRadius: "15px 15px 0 0" }}
                  />
                  <Card.Body>
                    <Card.Title
                      className="text-center"
                      style={{ fontWeight: "bold", color: "#6c63ff" }}
                    >
                      {project.title}
                    </Card.Title>
                    <Card.Text className="text-center">
                      {project.description}
                    </Card.Text>
                    <div className="d-flex align-items-center justify-content-center">
                      <Button
                        variant="info"
                        style={{
                          textDecoration: "none",
                          color: "white",
                          backgroundColor: "#6c63ff",
                          border: "none",
                          borderRadius: "20px", // Soft rounded corners
                        }}
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        Go to Project
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
