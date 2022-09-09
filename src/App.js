import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Crew from './pages/Crew/Crew';
import Destination from './pages/Destination/Destination';
import Home from './pages/Home/Home';
import Technology from './pages/Technology/Technology';

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
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
         </Routes>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
