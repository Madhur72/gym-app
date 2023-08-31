import React from "react";
import { Box } from "@mui/material";
import Banner from "../Components/Banner";
import SearchExcersizes from "../Components/SearchExcersizes";
import Excersizes from "../Components/Excersizes";
import Description from "../Components/Description";
import { useState } from "react";
const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);
  return (
    <Box>
      <Banner />
      <Description />
      <SearchExcersizes
        bodyParts={bodyParts}
        setExercises={setExercises}
        setBodyParts={setBodyParts}
      />
      <Excersizes
        bodyParts={bodyParts}
        setExercises={setExercises}
        setBodyParts={setBodyParts}
      />
    </Box>
  );
};

export default Home;
