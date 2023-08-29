import { Box, Typography, TextField, Stack,Button } from "@mui/material";
import React from "react";

const SearchExcersizes = () => {
  return (
    <Box>
      <Typography align="center" mt={7} variant="h4" fontWeight={700}>
        Awesome Excersizes You <br /> Should Know
      </Typography>
      <Stack direction='row' spacing={0.5}justifyContent='center' mt={3}>
        <TextField id="outlined-basic" label="Search" variant="outlined" sx={{width:"400px"}} />
        <Button variant="contained" color="error">
          Search
        </Button>
      </Stack>
    </Box>
  );
};

export default SearchExcersizes;
