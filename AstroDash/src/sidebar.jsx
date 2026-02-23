// Sidebar.jsx
import React from "react";

function Sidebar({ activeView, onNavigate }) {
  return (
    <div className="sidebar">
      <div className="logo">
        <span className="logo-icon">🍺</span> BrewDash
      </div>
      
      <nav className="nav-menu">
        <div 
          className={`nav-item ${activeView === "dashboard" ? "active" : ""}`}
          onClick={() => onNavigate("dashboard")}
        >
          <span className="nav-icon">🏠</span> Dashboard
        </div>
        <div 
          className={`nav-item ${activeView === "search" ? "active" : ""}`}
          onClick={() => onNavigate("search")}
        >
          <span className="nav-icon">🔍</span> Search
        </div>
        <div 
          className={`nav-item ${activeView === "about" ? "active" : ""}`}
          onClick={() => onNavigate("about")}
        >
          <span className="nav-icon">ℹ️</span> About
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
