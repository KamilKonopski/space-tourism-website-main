import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home/Home'
import Destination from './pages/Destination/Destination'
import Crew from './pages/Crew/Crew'
import Technology from './pages/Technology/Technology'

const App = () => {
  const location = window.location.pathname;
  console.log(location);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
