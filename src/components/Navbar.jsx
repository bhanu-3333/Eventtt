import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar(){
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand">CineWave</Link>
        <div className="tag">Book. Watch. Enjoy 🎬</div>
      </div>
    </nav>
  );
}
