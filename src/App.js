import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './home-page/HomePage';

function App() {
  return (
    <Router>
      <div class="container">
        <Routes>
          <Route exact path="/"
            element={<HomePage />} />
        </Routes>
        {/* <Route exact path="**">
            {<Redirect to="/" />}
        </Route> */}
      </div>
    </Router>
  );
}

export default App;
