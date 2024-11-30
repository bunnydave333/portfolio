import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
      <Typewriter
      options={{
        strings: [
          "Data Scientist",
          "Data Analyst",
          "Web Developer",
        ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type