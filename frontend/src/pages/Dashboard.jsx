import React from "react";
import Navbar from "../components/Navbar";
import "./Dashboard.css";

export default function Dashboard({ onLogout }) {
  return (
    <div className="dashboard-container">
      <Navbar onLogout={onLogout} />
      <div className="dashboard-content">
        <h1>Welcome, Civilian</h1>
        <section>
          <h2>Post Live Alert</h2>
          <input type="text" placeholder="Alert Message" />
          <button>Post Alert</button>
        </section>
        <section>
          <h2>Alert History</h2>
          <p>No alerts available.</p>
        </section>
      </div>
    </div>
  );
}
