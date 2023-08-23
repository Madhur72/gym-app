import React from "react";
import { Box } from "@mui/material";
import Banner from "../Components/Banner";
import SearchExcersizes from "../Components/SearchExcersizes"
import Excersizes from "../Components/Excersizes"
import Description from "../Components/Description";
const Home = () => {
  return (
    <Box>
      <Banner/>
      <Description/>
      <SearchExcersizes/>
      <Excersizes/>
    </Box>
  );
};

export default Home;
