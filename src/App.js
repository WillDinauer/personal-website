import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/about" exact element={<Home />}/>
        <Route path="/skills" exact element={<Home />}/>
        <Route path="/projects" exact element={<Home />}/>
        <Route path="/contact" exact element={<Home />}/>
        <Route path="/projectdetails" exact element={<ProjectDetails />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
