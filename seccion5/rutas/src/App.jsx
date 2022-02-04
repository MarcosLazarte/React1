import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import Inicio from './components/Inicio';
import Base from './components/Base';

function App() {
  return (
    <Router>
      <Link to="/inicio">Inicio</Link>
      <Link to="/">Base</Link>
      <Routes>
        <Route path="/inicio/:nombre" element={<Inicio/>}/>
        <Route path="/" element={<Base/>}/>
      </Routes>
    </Router>
  );
}

export default App;
