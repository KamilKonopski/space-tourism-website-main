import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Destination from './pages/Destination/Destination'
import Crew from './pages/Crew/Crew'
import Technology from './pages/Technology/Technology'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
