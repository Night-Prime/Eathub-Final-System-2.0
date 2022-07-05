import React from 'react';
import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import icon from '../../img/icon-1.png';

export default function Userlist() {
  
  const columns = [
    { field: 'id',
     headerName: 'ID',
      width: 120
    },
 
    {
      field: 'username',
      headerName: 'User',
      width: 300,
    },
    {
      field: 'email',
      headerName: 'Email Address',
      width: 200,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      editable: true,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      type:'number',
      width: 160,
      editable: true,
    },
  ];
  
  const rows = [
    { id: 1,
    username: 'Jon Snow',
    // avatar: {icon},
    email: "jinsnow@gmail.com",
    status: "Satisfactory",
    transaction:"$120.00"
   },
   { id: 2,
    username: 'Leanne Graham',
    // avatar: {icon},
    email: "Sincere@april.biz",
    status: "Bad",
    transaction:"$330.00"
   },
   { id: 3,
    username: 'Ervin Howell',
    // avatar: {icon},
    email: "Shanna@melissa.tv",
    status: "Fair",
    transaction:"$80.00"
   },
  ];
  
  return(
    <>
    <div className='userList'>
    <h1 className="userListHeading">Customer(s)</h1>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
    </>
  )
}