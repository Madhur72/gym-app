import React from "react";
import { Box, Stack } from "@mui/material";
import gmyster from "../assets/logo.jpg";
const Navbar = () => {
  return (
    <Box>
<Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      spacing={50}
      
    >
      <img
        src={gmyster}
        alt="logo"
        style={{ padding:"10px" , width: "75px", height: "55px", margin: "0 20px" }}
      />

      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={12}
      >
        <a
          href="#about"
          style={{ fontSize: "20px", fontWeight:"bold" , color: "#3c3c3c", textDecoration: "None" }}
        >
          About Us
        </a>
        <a
          href="#benefits"
          style={{ fontSize: "20px", fontWeight:"bold" , color: "#3c3c3c", textDecoration: "None" }}
        >
          Benefits
        </a>
        <a
          href="#contact"
          style={{ fontSize: "20px",fontWeight:"bold" ,color: "#3c3c3c", textDecoration: "None" }}
        >
          Calculator
        </a>
        <a
          href="#contact"
          style={{ fontSize: "20px", fontWeight:"bold" , color: "#3c3c3c", textDecoration: "None" }}
        >
          Gallery
        </a>
        <a
          href="#contact"
          style={{ fontSize: "20px", fontWeight:"bold" , color: "#3c3c3c", textDecoration: "None" }}
        >
          Contact Us
        </a>
        
      </Stack>
    </Stack>
    </Box>
    
  );
};

export default Navbar;
