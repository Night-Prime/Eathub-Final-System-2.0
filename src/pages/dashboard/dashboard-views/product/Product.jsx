import React from 'react';
import './product.css';
import icon from '../../img/Meals.png';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../data';
import { Publish } from '@material-ui/icons';

export default function Product() {
    return ( 
    <div className = "product" >
                <div className = "productTitleContainer" >
                    <h1 className = "productTitle"> Meal Info </h1> 
                    <Link to = "/product/meal/new">
                        <button className = "productEditButton" > Add Meal </button> 
                    </Link> 
                </div> 
                <div className = "productTop" >
                    <div className = "productTopLeft" >
                        <Chart data = { productData }
                        dataKey = "Meal Order"
                        title = "Meal Sales" />
                    </div> 
                    <div className = "productTopRight">
                        <div className = "productInfoTop" >
                            <img src = { icon }alt = { icon }className = "productInfoImg" />
                            <div className = "productName"> Jollof Rice </div> 
                        </div> 
                        <div className = "productInfoBottom" >
                            <div className = "productInfoItem" >
                                <span className = "productInfoKey"> Id: </span> 
                                <span className = "productInfoValue"> 123 </span> 
                            </div> 
                            <div className = "productInfoItem">
                                <span className = "productInfoKey"> Sales: </span> 
                                <span className = "productInfoValue" > 523 </span> 
                        </div> 
                        <div className = "productInfoItem">
                            <span className = "productInfoKey"> Time Status: </span> 
                            <span className = "productInfoValue"> 1 hour </span> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        <div className = "productBottom" >
            <form className = "productForm" >
                <div className = "productFormLeft" >
                    <label > Meal Name </label> 
                    <input type = "text"
                    placeholder = "Jollof Rice" />
                    <label > Time Status(Preparation Estimate) </label> 
                    <select name = "status" id = "idStatus" >
                        <option value = "30mins" > 30 Minutes </option> 
                        <option value = "45mins" > 45 Minutes </option> 
                        <option value = "1hrs" > 1 hour </option> 
                        <option value = "2hrs" > 2 hours </option>
                    </select> 
                </div> 
                    <div className = "productFormRight" >
                        <div className = "productUpload" >
                            {/* <img src = { icon }alt = { icon } className = "productUploadImg" /> */}
                            <label for = "file" >
                                < Publish />
                            </label> 
                            <input type = "file" id = "file" style = {{ display: "none" }}/> 
                        </div> 
                        <button className = "productButton"> Update </button> 
                    </div> 
                </form> 
        </div> 
</div>
    )
}