import React from 'react';
import './home.css';
import FeaturedInfo from '../../components/featured-info/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import { salesData } from "../../data";
import Widgetlg from '../../components/widgetLg/Widgetlg';
import Widgetsm from '../../components/widgetSm/Widgetsm';

 function Home() {
  return (
    <>
    <div className="home">
    <h1 className="homeHeading">Overview</h1>
        <FeaturedInfo />
        <Chart data={salesData} title="Sales Analytics" grid dataKey="Meal Order" />
        <div className="homeWidgets">
          <Widgetsm />
          <Widgetlg />
        </div>
    </div>
    </>
  )
}

export default Home