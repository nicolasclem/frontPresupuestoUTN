import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'description', headerName: 'Description', width: 130 },
  { field: 'amount', headerName: 'Amount', width: 130 },
  {
    field: 'date',
    headerName: 'Date',
    type: 'number',
    width: 130,
  },
  {
    field: 'Type',
    headerName: 'Type',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
  },
  {
    field: 'accion',
    headerName: 'accion',
    type: 'number',
    width: 130,
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

const Home = () => {
  return (
    
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
export default Home

