import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import React from "react";

const Greeting = ({ timeOfDay }) => {
  if (timeOfDay == "morning") {
    return <h1>Good Morning
      <FaSun/>
    </h1>;
  } else if (timeOfDay == "afternoon") {
    return <h1>Good Afternoon</h1>;
  } else if (timeOfDay == "evening") {
    return <h1>Good Evening
      <FaMoon/>
    </h1>;
  }
};

export default Greeting;
