import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link ,useLocation, useNavigate} from 'react-router-dom';


const optionNav= [
  {
    display: 'Home',
    path:'/home'
  },
  {
    display: 'Register',
    path:'/register'
  }

]


const NavBar = () => {

  
  const {pathname}=useLocation();
  const navigate= useNavigate();
 

  const active= optionNav.findIndex(e =>e.path === pathname);
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
      <Button onClick={()=>navigate('/')} color="inherit"  >
      <box-icon 
          name='dollar-circle' 
          animation='tada'
          size="large"
          edge="start"
          color="#285c7c"
          sx={{ mr: 2}} />
     
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         utn
        </Typography>
          
      </Button>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
              <ul>{
                  optionNav.map((e,i)=>(
                  <li  key={i} className={`${i===active ?'active':''}`}>
                    <Link to={e.path}>
                      {e.display}
                    </Link>
                  </li>
                  ))
                  }
              </ul>
        </Typography>
        
      
      </Toolbar>
    </AppBar>
  </Box>
);
  
}

export default NavBar