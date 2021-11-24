import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'make', headerName: 'Make', width: 130 },
    { field: 'model', headerName: 'Model', width: 130 },
    {
      field: 'year',
      headerName: 'Year',
      type: 'number',
      width: 90,
    },
    {
      field: 'makeandmodel',
      headerName: 'Cars',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
   // valueGetter: (params: GridValueGetterParams) =>
       // `${params.getValue('model') || ''} ${params.getValue('make') || ''}`,
    },
  ];

  const rows = [
    { id: 1, make: 'Audi', model: 'R8', year: '2022' },
    { id: 2, make: 'Chevy', model: 'Camaro ZL1', year: '2017' },
    { id: 3, make: 'Dodge', model: 'Viper', year: '2012' },
    { id: 4, make: 'Dodge', model: 'Ram', year: '2019' },
    { id: 5, make: 'Toyota', model: 'Tundra', year: '2020' },
    { id: 6, make: 'Plymouth', model: 'Baracuda', year: '1970' },
    { id: 7, make: 'Mercedes', model: 'Benz', year: '1955' },
    { id: 8, make: 'Volkswagen', model: 'Beetle', year: '1967' },
    { id: 9, make: 'SSC', model: 'Tuatara', year: '2021' },
  ];

export const DataTable = () =>{
    return(
        <div style={{ height:400, width: '100'}}>
            <h2>Cars in Inventory</h2>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
}