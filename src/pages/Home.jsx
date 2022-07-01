import * as React from 'react';
import CardInfo from '../components/CardInfo';
import {   Grid } from '@mui/material';
import ModalForm from '../components/ModalForm';
import TableOp from '../components/TableOp'


const Home = () => {
  return (
   <>
    <Grid container  alignItems="center" justifyContent="center">
    <CardInfo  />
    <CardInfo  />
    </Grid>
    <TableOp />
   
    <ModalForm />
</>

    
  );
}
export default Home

