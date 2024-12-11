import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavbarRec = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // Remove all user data
    navigate("/"); // Redirect to login
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#000" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: "#fff", fontWeight: "bold" }}>
          Career Search
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/recruiter"
                style={{
                  color: "#fff",
                  margin: "0 15px", // Add space between links
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  padding: "8px 15px", // Add padding for button-like feel
                  transition: "all 0.3s ease", // Smooth transition for hover effect
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#444"; // Dark gray on hover
                  e.target.style.transform = "scale(1.1)"; // Pop-up effect
                  e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)"; // Subtle shadow
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.transform = "scale(1)"; // Reset size
                  e.target.style.boxShadow = "none"; // Remove shadow
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/recruiter/applications"
                style={{
                  color: "#fff",
                  margin: "0 15px",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  padding: "8px 15px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#444";
                  e.target.style.transform = "scale(1.1)";
                  e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "none";
                }}
              >
                Applications
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/recruiter/addjob"
                style={{
                  color: "#fff",
                  margin: "0 15px",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  padding: "8px 15px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#444";
                  e.target.style.transform = "scale(1.1)";
                  e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "none";
                }}
              >
                Add Job
              </Link>
            </li>
            <li className="nav-item dropdown">
              <button
                className="btn btn-light dropdown-toggle"
                id="profileDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  color: "#fff", // White text
                  backgroundColor: "transparent", // Transparent background
                  border: "none", // Remove outline and border
                  borderRadius: "5px", // Rounded corners
                  padding: "8px 15px",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#444";
                  e.target.style.transform = "scale(1.1)";
                  e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "none";
                }}
              >
                <i className="bi bi-person-circle"></i> {/* Bootstrap Profile Icon */}
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="profileDropdown"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/recruiter/profile"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={handleLogout}
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarRec;
