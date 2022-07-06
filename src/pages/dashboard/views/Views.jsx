import React from 'react';
import './views.css';
import Topbar from '../components/navbar/topbar';
import Home from '../views/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Views() {
  return (
    <Router>
      <div className="views-container">
          <Topbar />
          <Routes>
          <div className="route-section">
            <Route path='/home'
            element = {<Home />}
             />
          </div>
          </Routes>
      </div>
    </Router>
  )
}

export default Views