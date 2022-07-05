import React from 'react';
import './sales.css';
import Chart from '../../components/chart/Chart';
import { salesData } from "../../data";

 function Sales() {
  return (
    <>
    <div className="sales">
    <h1 className="salesHeading">Sales Analytics</h1>
        <Chart data={salesData} title="Sales Analytics" grid dataKey="Meal Order" />
    </div>
    
    </>
  )
}

export default Sales