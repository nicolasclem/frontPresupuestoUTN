import { Box, Container } from '@mui/material'

import React from 'react'
import {useNavigate } from 'react-router-dom'
import Link from '@mui/material/Link';
import './page404.css'

const Page404 = () => {
  const navigate=useNavigate()
  return (
    <Container maxWidth="100%" className='container404' 
    sx={{display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column'}}>  
    <Box  component="div"  className='error404'>404</Box>
    <Link  variant="body2" className='error404' sx={{
    mt:2,
    color:'#fff',
    textDecoration:'none',  
    cursor:'pointer'
    }} onClick={()=>{navigate('/login')}}>
        {"HOME"}
    </Link>
    </Container >
  )
}

export default Page404