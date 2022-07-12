import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const Unknown = () => {
    const navigate=useNavigate()
  return (
    <Card sx={{m:"auto",mt:15, maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt="usuario desconocido"
      height="250"
      image="https://i.postimg.cc/nzh2L3CK/desco.jpg"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Usuario desconocido
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Recuerda que debes logearte para usar nuestros servicios
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={()=>navigate('/')} >Login</Button>
      
    </CardActions>
  </Card>
  )
}

export default Unknown



