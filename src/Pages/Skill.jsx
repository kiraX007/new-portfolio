import React from "react";
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
  faBootstrap,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Skill = () => {
  const waveAnimation = {
    y: [0, -10, 0],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 2,
      ease: "easeInOut",
    },
  };

  const container = {
    hidden: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const icons = [
    { icon: faHtml5, color: "#ff7043", padding: "9px 15px 9px 15px" }, // Soft Orange
    { icon: faCss3Alt, color: "#64b5f6", padding: "9px 15px 9px 15px" }, // Light Blue
    { icon: faJs, color: "#ffeb3b", padding: "9px 13px 9px 13px" }, // Soft Yellow
    { icon: faReact, color: "#81d4fa", padding: "9px 10px 9px 10px" }, // Pastel Blue
    { icon: faJava, color: "#f48fb1", padding: "9px 15px 9px 15px" }, // Light Pink
    { icon: faBootstrap, color: "#ba68c8", padding: "9px 5px 9px 5px" }, // Soft Purple
  ];

  return (
    <div className="skills py-5" style={{ backgroundColor: "#fce4ec" }}>
      <h1 className="text-center" style={{ color: "#ec407a" }}>
        {" "}
        {/* Feminine accent color */}
        My Skills
      </h1>
      <motion.div
        className="row text-center"
        variants={container}
        animate="animate"
        initial="hidden"
      >
        {icons.map((iconObj, index) => (
          <div key={index} className="col-lg-2 col-sm-3 col-5 pt-5">
            <motion.div variants={{ animate: waveAnimation }}>
              <FontAwesomeIcon
                className="fa-3x"
                icon={iconObj.icon}
                style={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  padding: iconObj.padding,
                  color: iconObj.color,
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Soft shadow for elegance
                }}
              />
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skill;
