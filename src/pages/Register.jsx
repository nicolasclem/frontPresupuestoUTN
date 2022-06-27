import React from 'react'
import{useNavigate}from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/themeConfig'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';








const Login = () => {
  const navigate=useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  
  }
  
  const [values, setValues] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <ThemeProvider theme={theme}>
       <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        
            
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box

            sx={{
              my: 8,
              mx: 6,
              display: 'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor:'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} 
            sx={{ mt: 1 , 
            display: 'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems: 'center',
            width:'85%'
          }}
          
          >
          <Box component="div"  
             xs={12} 
            sx={{ 
            display: 'flex',
            flexDirection:'row',
          }}
          
          >
        <FormControl sx={{ mr: 1, width: '100%' }} variant="outlined">
          <OutlinedInput
            id="firstName"
            value={values.firstName}
            onChange={handleChange('firstName')}
            placeholder="First Name"
            inputProps={{
              'aria-label': 'firstName',
            }}
          />
          </FormControl>
          <FormControl sx={{ width: '100%' }} variant="outlined">
          <OutlinedInput
            id="lastName"
            value={values.lastName}
            onChange={handleChange('lastName')}
            placeholder="Last Name"
            inputProps={{
              'aria-label': 'lastName',
            }}
          />
          </FormControl>

          </Box>
          <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <OutlinedInput
            id="email"
            value={values.email}
            onChange={handleChange('email')}
            placeholder="Email"
            inputProps={{
              'aria-label': 'email',
            }}
          />
          </FormControl>
        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color='secondary'
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
                <Grid item>
                  <Link  variant="body2"  sx={{cursor:"pointer"}} onClick={()=>{navigate('/login')}}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://i.postimg.cc/wjVFDkQ2/registerwall.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        </Grid>
      {/* </Container> */}
    </ThemeProvider>
  )
}

export default Login