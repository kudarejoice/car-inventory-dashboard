import React, { useState } from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { server_calls } from '../../api'
import { useGetData } from '../../custom-hooks/FetchData'
import { Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { CarForm } from '../../components'



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
    field: 'makeAndModel',
    headerName: 'Make and Model',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    //valueGetter: (params: GridValueGetterParams) =>
    //`${params.getValue(params.id, 'make') || ''} ${
    //  params.getValue(params.id, 'model') || ''
   // }`,
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
interface gridData{
  data:{
    id?:string;
  }
}

export const DataTable = () =>{
  let { carData, getData } = useGetData();
  let [open, setOpen] = useState(false);
  let [gridData, setData ] = useState<GridSelectionModel>([])

  let handleOpen = () =>{
    setOpen(true)
  }
  let handleClose = () =>{
    setOpen(false)
  }

  let deleteData = async () =>{
    await server_calls.delete(`${gridData[0]}`)
    getData()
  }

  console.log(gridData)

  return(
    <div style={{ height:400, width: '100'}}>
            <h2>Cars in Inventory</h2>
            <DataGrid rows={carData} 
            columns={columns} 
            pageSize={5} 
            checkboxSelection 
            onSelectionModelChange= { (newSelectionModel) =>{setData(newSelectionModel);}}
            {...carData}
            />
        <Button onClick={handleOpen}>Update</Button>
        <Button variant='contained' color='secondary' onClick={deleteData}>Delete</Button>
        {/*Dialog Popup Start */}
        <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
          <DialogContent>
            <DialogContentText>Updating: {gridData[0]}</DialogContentText>
            <CarForm id= {`${gridData[0]}`}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} style={{backgroundColor: 'maroon'}}>Cancel</Button>
          </DialogActions>
        </Dialog>

    </div>
    )
}