import React from 'react'
import { Box } from '@mui/material'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
const App = () => {
  return (
        <Box sx={{width:"100%",height:"100vh"}}>
            <Navbar/>
            <Home/>
        </Box>
  )
}

export default App
