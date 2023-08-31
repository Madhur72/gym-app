import { Box } from "@mui/material";
import React from "react";
import BodyPart from "./BodyPart";
const HorizontalScroll = ({ bodyParts,setBodyParts }) => {
  return (
    <div>
      {bodyParts.map((item) => (
        <Box key={item.id||item}><BodyPart item = {item} bodyParts = {bodyParts} setBodyParts = {setBodyParts}/></Box>
      ))}
    </div>
  );
};

export default HorizontalScroll;
