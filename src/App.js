import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Home/Home';
import AboutUs from'./about/AboutPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/About' element={<AboutUs/>}/>
      </Routes>
    </Router>
  );
}

export default App;