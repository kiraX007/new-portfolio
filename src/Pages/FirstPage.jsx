import { motion } from "framer-motion";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const FirstPage = () => {
  return (
    <div className="firstPage py-5 w-full text-center">
      <div className="row d-flex align-items-center justify-content-center text-center">
        <div className="col-lg-6 col-sm-12 mb-4 d-flex flex-column justify-content-center text-center">
          <h4 className="intro">
            Sandali <span className="color">Jaiswal</span>
          </h4>
          <TypeAnimation
            sequence={[
              "A Frontend Developer",
              1000,
              "A Web Developer",
              1000,
              "A Software Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-animation"
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
