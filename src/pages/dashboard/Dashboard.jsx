import React from 'react';
import './dashboard.css';
import Topbar from './components/navbar/topbar';
import Sidebar from './components/sidebar/sidebar';
import {Outlet, BrowserRouter as Router,Routes,Route} from "react-router-dom";

function Dashboard() {
    return (
        <div className="dashboard-container">
            <Topbar />
            <div className="dash-container">
                <Sidebar />
            </div>
            <Outlet />
        </div>

    )
}

export default Dashboard
