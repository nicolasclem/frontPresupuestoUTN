import * as React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {refreshtable} from '../redux/actions';
import { useSelector } from "react-redux";
import CardInfo from '../components/CardInfo';
import {   Grid } from '@mui/material';
import ModalForm from '../components/ModalForm';
import TableOp from '../components/TableOp'


const Home = () => {

  const [test,setTest]= React.useState()
  const  {hookRefresh,message}  = useSelector(
    (state) => state.hookReducer
  );
  console.log("este es el hook refesh" + hookRefresh);
  const dispatch = useDispatch()
  

  const dataTable =async ()=>{

    const {data} = await axios.get(`${process.env.REACT_APP_SERVER}operations/api`)
    setTest(data.data)    
  }

  const delTable = async (id)=>{

    await axios.delete((`${process.env.REACT_APP_SERVER}operations/api/${id}`))

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
    <CardInfo  />
    <CardInfo  />
    </Grid>
    <p>{message}</p>
    <TableOp uno={test} delTable={delTable} />
   <ModalForm  crear  />
   
</>

    
  );
}
export default Home

