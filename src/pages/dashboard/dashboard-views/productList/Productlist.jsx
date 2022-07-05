import React from 'react';
import { useState } from 'react';
import './productList.css';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';
import { productRows } from '../../data'; 
import { DeleteOutline } from '@material-ui/icons';


export default function Productlist() {
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
      headerName: 'Meal',
      width: 300,
      renderCell: (params) => {
        return(
          <div className='productListPro'>
            <img className='productListImg' src={params.row.avatar} alt='' />
            {params.row.meal}
          </div>

        )
      }
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
      width:150,
      renderCell: (params) =>{
        return(
          <>
          <Link to={'/product/'+ params.row.id} >
            <button className="productListEdit">
               Edit
            </button>
            </Link> 
            <DeleteOutline className="productListDelete" onClick={()=>handleDelete(params.row.id)} /> 
          </>
        );
      },
    },
  ];

  return(
    <>
    <div className='productList'>
    <div className="productTitleContainer">
    <h1 className="productListHead">Meals</h1>
        <Link to ="/product/meal/new">
            <button className="productEditButton">Add Meal</button>
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
    </>
  )
}