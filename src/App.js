import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
