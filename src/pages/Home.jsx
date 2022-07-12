import * as React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {refreshtable} from '../redux/actions';
import { useSelector } from "react-redux";
import {   Box, Grid, Typography } from '@mui/material';
import ModalForm from '../components/ModalForm';
import TableOp from '../components/TableOp'
import Unknown from '../components/Unknown';




const Home = () => {

  const [test,setTest]= React.useState()
  const  {hookRefresh, hookIsLogged ,message}  = useSelector(
    (state) => state.hookReducer
  );

  const dispatch = useDispatch()

  const dataTable =async ()=>{
    const {data} = await axios.get(`${process.env.REACT_APP_SERVER}/operations/api/${localStorage.getItem('idUser')}`)
    //const {data} = await axios.get(`${process.env.REACT_APP_SERVER}/operations/api`)
    setTest(data.data)    
  }

  const delTable = async (id)=>{

    await axios.delete(`${process.env.REACT_APP_SERVER}/operations/api/${id}`)

    dispatch(refreshtable())

  }

  React.useEffect(() => {
    dataTable()
// eslint-disable-next-line
  }, [hookRefresh])
  
  return (
   <>
    <Grid container  alignItems="center" justifyContent="center">
    
    </Grid>
    <Typography align="center"sx={{color:"#73bccc",mt:5}} >{message}</Typography>
    {hookIsLogged?<TableOp infoTable={test} delTable={delTable} />:<Unknown />}
    <Box  sx={{ml:"45%",mb:10}}>
    {hookIsLogged&& <ModalForm  crear  />}
   </Box>
</>

    
  );
}
export default Home

