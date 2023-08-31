import { Stack, Typography } from '@mui/material'
import React from 'react'
import logo from "../assets/gym-logo.svg"
const BodyPart = ({item,bodyPart,setBodyPart}) => {
  return (
    <Stack>
      <img src={logo} alt="" width="50px" height="50px" />
      <Typography>
        {item}
      </Typography>
    </Stack>
  )
}

export default BodyPart
