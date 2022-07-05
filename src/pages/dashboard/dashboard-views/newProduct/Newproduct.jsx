import React from 'react';
import './newProduct.css';

function Newproduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Meal</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id='file' />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" id='file' />
        </div>
        <div className="addProductItem">
          <label>Time Status (Meal Preparation Time)</label>
          <select name="status" id="status">
            <option value="30mins">30 mins</option>
            <option value="45mins">45 mins</option>
            <option value="1hrs">1 hour</option>
            <option value="30mins">2 hours</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}

export default Newproduct