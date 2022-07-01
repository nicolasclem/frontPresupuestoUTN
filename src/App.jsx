
import './App.css';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/themeConfig";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import Page404 from './pages/page404/Page404' 
import Register from './pages/Register'
import Home from './pages/Home'
import NavBar from './components/NavBar';



const App=()=> {
  return (
 
    
    <ThemeProvider  theme={theme}>
    <BrowserRouter>
      <NavBar />
    <Routes>
    <Route  path='/' element={<Login />}/>
      <Route  path='/home' element={<Home />} />
      <Route  path='/login' element={<Login />}/>
      <Route  path='/Register' element={<Register />}/>
      <Route  path='/*' element={<Page404 />}/>
      

    </Routes>
    </BrowserRouter>
    </ThemeProvider>

  
  );
}

export default App;
