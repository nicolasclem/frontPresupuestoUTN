import * as React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {refreshtable} from '../redux/actions';
import { useSelector } from "react-redux";

import {   Box, Grid, Typography } from '@mui/material';
import ModalForm from '../components/ModalForm';
import TableOp from '../components/TableOp'



const Home = () => {

  const [test,setTest]= React.useState()
  const  {hookRefresh, hookIsLogged ,message}  = useSelector(
    (state) => state.hookReducer
  );

  const dispatch = useDispatch()
  
  /*
const tokkenActive =localStorage.getItem("regularUser")
    const tokkenDIST="3465431"
    const resultCheck = await axios.get(`${process.env.REACT_APP_SERVER}/check/${tokkenActive}`)
    
    const authLogged = async (a,b)=>{
      await a
      await b
      console.log(a , b);
      if(a===b){
        console.log("son IGUALES")
        await  dispatch(islogged())

        return hookIsLogged
      }
    }
    if(resultCheck){
  authLogged(md5(result.data.token), resultCheck.data)
    }
    else{
      console.log("esperando datos");
    }




  */
  console.log(hookIsLogged);

  const dataTable =async ()=>{
    const {data} = await axios.get(`${process.env.REACT_APP_SERVER}/operations/api/${localStorage.getItem('idUser')}`)
    //const {data} = await axios.get(`${process.env.REACT_APP_SERVER}/operations/api`)
    setTest(data.data)    
  }

  const delTable = async (id)=>{

    await axios.delete(`${process.env.REACT_APP_SERVER}/operations/api/${id}`)

    dispatch(refreshtable())

  }



   console.log(test);
  React.useEffect(() => {
    dataTable()
// eslint-disable-next-line
  }, [hookRefresh])
  
  return (
   <>
    <Grid container  alignItems="center" justifyContent="center">
    
    </Grid>
    <Typography align="center">{message}</Typography>
    {hookIsLogged?<TableOp infoTable={test} delTable={delTable} />:"NO TE CONOZCO"}
    <Box  sx={{ml:"45%",mb:10}}>
     <ModalForm  crear  />
   </Box>
</>

    
  );
}
export default Home

