import React from "react";
import { motion } from "framer-motion";
import { spiral } from "ldrs";

// Default values shown

const Loader = ({ setIsLoading }) => {
  spiral.register();

  return (
    <motion.div
      initial={{ opacity: 1 }} // initially when page loads we will see page as opacity 1
      animate={{ opacity: 0 }} // after delay of 5 sec opacity will be zero
      transition={{ duration: 1, delay: 3 }} // delay for 5 sec is used so that we can see page for 5 sec after that in duration of 1 sec aniamte will execute where opacity will be zero
      onAnimationComplete={() => setIsLoading(false)} // Call setIsLoading(false) after animation is complete
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FCE4EC",
      }}
    >
      <h6 style={{ color: "gray" }}>
        {" "}
        <span className="color" style={{ fontWeight: "bold" }}>
          {" "}
          Sandali Jaiswal
        </span>{" "}
        Portfolio is Loading Please Wait:
      </h6>
      <h1 className="mt-2">
        {/* <l-grid size="60" speed="1.5" color="white"></l-grid> */}
        <l-spiral size="33" speed="0.9" color="#D81B60"></l-spiral>{" "}
      </h1>
    </motion.div>
  );
};

export default Loader;
