import React, {useState} from 'react';
import './Order.css';
import { DataGrid } from '@material-ui/data-grid';
import { productRows } from '../../data';


export default function Order() {

    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !==id));
    }

  const columns = [
    { field: 'id',
     headerName: 'ID',
      width: 120
    },
 
    {
      field: 'meal',
      headerName: 'Incoming Orders',
      width: 300,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Time Status',
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width:180,
      renderCell: (params) =>{
        return(
          <>
            <button className="orderAccept">
               Accept
            </button>
            <button className="orderDeclined" onClick={()=>handleDelete(params.row.id)}>
               Decline
            </button>
          </>
        );
      },
    },
  ];

  return(
    <div className='order'>
        <>
        <h1 className="orderHead">Incoming Orders</h1>
      <DataGrid
        rows={productRows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
      </>
    </div>
  )
}