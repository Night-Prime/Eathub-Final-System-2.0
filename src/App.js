import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import VendorPage from './pages/vendor-page/VendorPage';

function App() {
  return (
    <Router>
      <div class="container">
        <Routes>
          <Route exact path="/"
          element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/vendorpage"
          element = {<VendorPage />}
          />
        </Routes>
        {/* <Route exact path="**">
            {<Redirect to="/" />}
        </Route> */}
      </div>
    </Router>
  );
}

export default App;
