import React from "react";
import image from "../assets/peakpx.jpg";
import { Box, Typography,Button, Stack } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "60vh",
        position: "relative",
      }}
    >
      <Typography
        variant="h4"
        color="white"
        sx={{
          position: "absolute",
          top: "25%",
          left: "20%",
        }}
      >
        GET FIT
      </Typography>
      <Typography
        variant="h4"
        color="white"
        sx={{
          position: "absolute",
          top: "25%",
          left: "68%",
        }}
      >
        BUILD STRENGTH
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          position: "absolute",
          top: "85%",
          left: "45%",
        }}
      >
        GET Started
      </Button>
    </Box>
  );
};

export default Banner;
