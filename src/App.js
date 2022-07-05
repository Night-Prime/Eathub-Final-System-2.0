import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import VendorPage from './pages/vendor-page/VendorPage';
import FormsPage from './pages/form-page/FormsPage';
import LoginPage from './pages/login-page/loginPage';
import ErrorPage from './pages/error/ErrorPage';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/"
          element={<HomePage />} />
          <Route path="/vendorpage"
          element = {<VendorPage />}
          />
          <Route path='/vendorforms' 
          element={<FormsPage />}/>
          <Route path='/vendorlogin' 
            element ={<LoginPage />}/>
             <Route path ='*' element = {<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
