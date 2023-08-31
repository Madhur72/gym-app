import { Box } from "@mui/material";
import React from "react";
import BodyPart from "./BodyPart";
const HorizontalScroll = ({ bodyParts, setBodyPart, bodyPart }) => {
  return (
    <div>
      {bodyParts.map((item) => (
        <Box key={item.id || item}>
          <BodyPart
            item={item}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScroll;
