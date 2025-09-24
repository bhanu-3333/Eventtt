import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar({ user }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">🎬 MovieTime</Link>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/now-showing">Now Showing</Link>
        <Link to="/coming-soon">Coming Soon</Link>
        <Link to="/tickets">My Tickets</Link>
        {user ? (
          <span style={{ cursor: "pointer", color: "#ffdd00" }} onClick={handleLogout}>Logout</span>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>

      <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
