import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Science and Engineering Major",
          "Experienced Professional Full Stack Software Developer",
          "Experienced Professional Computer Networking and Systems Admin Specialist",
          "Lead Instructor",
          "Lead Curriculum Developer",
          "STEMinist",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
