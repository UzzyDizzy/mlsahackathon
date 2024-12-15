import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({ onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">CIVILIAN PORTAL</div>
      <ul className="navbar-links">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/resource-trading">Resource Trading</Link>
        </li>
        <li>
          <Link to="/survival-guide">Survival Guide</Link>
        </li>
        <li>
          <button onClick={onLogout} className="logout-btn">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
