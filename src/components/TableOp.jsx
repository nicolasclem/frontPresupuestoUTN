import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {  Box} from '@mui/material';



const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'description', headerName: 'Description', width: 200 },
    { field: 'amount', headerName: 'Amount', width: 200 },
    {
      field: 'date',
      headerName: 'Date',
      type: 'number',
      width: 200,
    },
    {
      field: 'Type',
      headerName: 'Type',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  //   },
    },
    {
      field: 'accion',
      headerName: 'accion',
      type: 'number',
      width: 100,
    },
  ];
  
  const rows = [
    { id: 1, description: 'Snow', amount: 'Jon', date: 35 ,type:1,},
    { id: 2, description: 'Lannister', amount: 'Cersei', date: 42 ,type:1,},
    { id: 3, description: 'Lannister', amount: 'Jaime', date: 45 ,type:1,},
    { id: 4, description: 'Stark', amount: 'Arya', date: 16 ,type:1,},
    { id: 5, description: 'Targaryen', amount: 'Daenerys', date: null,type: 1,},
    { id: 6, description: 'Melisandre', amount: null, date: 150 ,type: 1,},
    { id: 7, description: 'Clifford', amount: 'Ferrara', date: 44 ,type:1,},
    { id: 8, description: 'Frances', amount: 'Rossini', date: 36 ,type:1,},
    { id: 9, description: 'Roxie', amount: 'Harvey', date: 65 ,type:1,},
  ];

const TableOp = () => {
  return (
    <Box component="div" sx={{ height: 400 }}>
      <DataGrid 
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Box>
  )
}

export default TableOp
