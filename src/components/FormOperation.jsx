import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DateSelector from './DateSelector'
import { Button, FormControl } from '@mui/material';

const  FormOperation= ({crear})=> {
  return (
    <FormControl sx={{ width: '100%' }}>
    <Box
      sx={{
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        '& > :not(style)': { m: 3 },
      }}
    >
      <TextField
        helperText="Please enter your name"
        id="demo-helper-text-misaligned"
        label="description"
      />
      <TextField
        helperText="Please enter your name"
        id="demo-helper-text-misaligned"
        label="amount"
      />
      <DateSelector />
      <TextField
        helperText="Please enter your name"
        id="demo-helper-text-misaligned"
        label="type"
      />
    </Box>
    {crear?  
        <Button variant="text">Crear</Button>:
        <Button variant="text">Editar</Button>

    }
     </FormControl>
  );
}

export default FormOperation