import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import VendorPage from './pages/vendor-page/VendorPage';
import FormsPage from './pages/form-page/FormsPage';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/"
          element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/vendorpage"
          element = {<VendorPage />}
          />
        </Routes>
        <Routes>
          <Route path='/vendorforms' 
          element={<FormsPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
