import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';  
import HomePage from './HomePage';  
import Archive from './Archive';    
import ProjectDetail from './ProjectDetail'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />   
        <Route path="/archive" element={<Archive />} /> 
        <Route path="/projects/:id" element={<ProjectDetail />} /> 
      </Routes>
    </Router>
  );
};

export default App;
