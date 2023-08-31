import { Box, Typography, TextField, Stack, Button } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { fetchData, excerciseOptions } from "../Utils/FetchData";
import HorizontalScroll from "./HorizontalScroll";
const SearchExcersizes = ({ setExercises, setBodyPart, bodyPart }) => {
  const [search, setSearch] = useState(null);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchBodyParts = async () => {
      const fetchedExercises = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        excerciseOptions
      );
      setBodyParts(["all", ...fetchedExercises]);
    };
    fetchBodyParts();
  },[]);
  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        excerciseOptions
      );
      const searchExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchExercises);
    }
  };
  let timer = 500;
  let timeout;
  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  return (
    <Box>
      <Typography align="center" mt={7} variant="h4" fontWeight={700}>
        Awesome Excersizes You <br /> Should Know
      </Typography>
      <Stack direction="row" spacing={0.5} justifyContent="center" mt={3}>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          sx={{ width: "400px" }}
          onChange={(event) =>
            debounce(() => setSearch(event.target.value.toLowerCase()))
          }
        />
        <Button variant="contained" color="error" onClick={handleSearch}>
          Search
        </Button>
      </Stack>
      <Box>
        <HorizontalScroll bodyParts={bodyParts} bodyPart = {bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Box>
  );
};

export default SearchExcersizes;
