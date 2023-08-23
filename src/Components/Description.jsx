import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import yoga from "../assets/yoga.svg";
import zumba from "../assets/zumba.svg";
import weight from "../assets/weightlifting.svg";
import body from "../assets/bodybuilding.svg";
const Description = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={10}
      sx={{ padding: "20px" }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <img
          src={yoga}
          alt=""
          width="60px"
          height="60px"
          justify-content="center"
        />
        <Typography variant="h7" gutterBottom>
          YOGA
        </Typography>
        <Typography>
          Yoga provides physical flexibility, strength, and stress reduction. It
          enhances mindfulness, aids sleep, and supports weight management.
        </Typography>
      </Stack>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <img
          src={zumba}
          alt=""
          width="60px"
          height="60px"
          justify-content="center"
        />
        <Typography variant="h7" gutterBottom>
          ZUMBA
        </Typography>
        <Typography>
          Zumba blends dance and fitness, boosting cardiovascular health,
          coordination, and mood, welcoming all fitness levels.
        </Typography>
      </Stack>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <img
          src={weight}
          alt=""
          width="60px"
          height="60px"
          justify-content="center"
        />
        <Typography variant="h7" gutterBottom>
          WEIGHT LIFTING
        </Typography>
        <Typography>
          Weightlifting builds strength and muscle with resistance training,
          offering improved physique and functional fitness.
        </Typography>
      </Stack>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <img
          src={body}
          alt=""
          width="60px"
          height="60px"
          justify-content="center"
        />
        <Typography variant="h7" gutterBottom>
          BODY BUILDING
        </Typography>
        <Typography>
          Bodybuilding focuses on sculpting muscle through targeted training and
          nutrition, enhancing aesthetics and strength for competition or
          personal goals.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Description;
