import React from "react";

const AboutMe = () => {
  return (
    <div className="aboutMe py-5" style={{ backgroundColor: "#fce4ec" }}>
      <div className="row d-flex align-items-center justify-content-center text-center">
        <div className="col-lg-4 col-sm-12 mb-2 d-flex justify-content-center align-items-center">
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTN3NGxwejMyMmxneXlwYWk0cGxndTUydXl0b3Y3MHNyNGh5anprYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZVik7pBtu9dNS/giphy.webp"
            alt=""
            className="gify"
            style={{
              height: "300px",
              width: "370px",
              borderRadius: "30px",
              border: "4px solid #ec407a", // Pink border
            }}
          />
        </div>
        <div className="col-lg-5 col-sm-12 mb-4">
          <h3 className="text-center about" style={{ color: "#d81b60" }}>
            About Me
          </h3>
          <p
            className="about_text mt-3 px-3 py-3 bg-light rounded border border-3"
            style={{
              color: "#6a1b9a",
              backgroundColor: "#f8bbd0", // Light pink background
              borderColor: "#ec407a", // Pink border for text box
            }}
          >
            I'm Sandali Jaiswal, a dedicated front-end developer with a growing
            proficiency in SQL and a strong interest in DevOps. I thrive on
            building intuitive, responsive user interfaces with React.js while
            also expanding my expertise in managing data through SQL. My passion
            lies in solving complex problems with efficient, user-centered
            solutions, and I am committed to delivering top-notch work that
            integrates both design and functionality. As I dive deeper into
            DevOps, I’m excited to enhance my skills in automating processes and
            optimizing deployments. Let’s collaborate and bring your ideas to
            life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
