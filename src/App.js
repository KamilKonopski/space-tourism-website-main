import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Crew from './pages/Crew/Crew';
import Destination from './pages/Destination/Destination';
import Home from './pages/Home/Home';
import Technology from './pages/Technology/Technology';
import DestinationItem from './components/DestinationItem/DestinationItem';
import CrewItem from './components/CrewItem/CrewItem';
import TechnologyItem from './components/TechnologyItem/TechnologyItem';

import { GlobalStyle } from './utils/GlobalStyles/GlobalStyles';
import { theme } from './utils/Theme/theme';
import { ThemeProvider } from 'styled-components';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/destination/:name" element={<DestinationItem />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/crew/:name" element={<CrewItem />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/technology:name" element={<TechnologyItem />} />
         </Routes>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
