import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = ({ showJobs = true }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // Remove all user data
    navigate("/"); // Redirect to login
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "black", // Set navbar background color to black
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: "white" }}>
          Career Search {/* Changed Job Portal to Career Search */}
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
                to="/"
                style={{
                  color: "white",
                  backgroundColor: "transparent", // Transparent background
                  opacity: 0.7, // Set opacity for "Home" button
                  padding: "10px 15px", // Reduced padding for less space
                  border: "1px solid white", // Thinner border
                  borderRadius: "5px", // Slight rounded corners for a rectangle shape
                  textDecoration: "none", // Remove underline
                  fontWeight: "bold", // Bold text
                  transition: "all 0.3s ease", // Smooth transition
                  marginRight: "10px", // Space between buttons
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "#00d2ff"; // Change border to light blue on hover
                  e.target.style.transform = "translateY(-3px)"; // Lift the button
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "white"; // Revert border color
                  e.target.style.transform = "translateY(0)"; // Revert lift effect
                }}
              >
                Home
              </Link>
            </li>
            {showJobs && (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/user/jobs"
                  style={{
                    color: "white",
                    backgroundColor: "transparent", // Transparent background
                    padding: "10px 15px", // Reduced padding for less space
                    border: "1px solid white", // Thinner border
                    borderRadius: "5px", // Slight rounded corners for a rectangle shape
                    textDecoration: "none", // Remove underline
                    fontWeight: "bold", // Bold text
                    transition: "all 0.3s ease", // Smooth transition
                    marginRight: "10px", // Space between buttons
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = "#00d2ff"; // Change border to light blue on hover
                    e.target.style.transform = "translateY(-3px)"; // Lift the button
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = "white"; // Revert border color
                    e.target.style.transform = "translateY(0)"; // Revert lift effect
                  }}
                >
                  Jobs
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/user/applications"
                style={{
                  color: "white",
                  backgroundColor: "transparent", // Transparent background
                  opacity: 0.7, // Set opacity for "Applications" button
                  padding: "10px 15px", // Reduced padding for less space
                  border: "1px solid white", // Thinner border
                  borderRadius: "5px", // Slight rounded corners for a rectangle shape
                  textDecoration: "none", // Remove underline
                  fontWeight: "bold", // Bold text
                  transition: "all 0.3s ease", // Smooth transition
                  marginRight: "10px", // Space between buttons
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "#00d2ff"; // Change border to light blue on hover
                  e.target.style.transform = "translateY(-3px)"; // Lift the button
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "white"; // Revert border color
                  e.target.style.transform = "translateY(0)"; // Revert lift effect
                }}
              >
                Applications
              </Link>
            </li>
            <li className="nav-item dropdown">
              <button
                className="btn dropdown-toggle"
                id="profileDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  background: "transparent", // Transparent background
                  color: "white", // White text
                  border: "1px solid white", // Thinner border for profile button
                  fontWeight: "bold", // Bold text
                  padding: "10px 15px", // Reduced padding for less space
                  borderRadius: "5px", // Slight rounded corners for a rectangle shape
                  transition: "all 0.3s ease", // Smooth transition
                  marginRight: "10px", // Space between buttons
                  opacity: 0.7, // Set opacity for profile button
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "#00d2ff"; // Change border to light blue on hover
                  e.target.style.transform = "translateY(-3px)"; // Lift the button
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "white"; // Revert border color
                  e.target.style.transform = "translateY(0)"; // Revert lift effect
                }}
              >
                <i className="bi bi-person-circle"></i> {/* Bootstrap Profile Icon */}
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="profileDropdown"
                style={{
                  backgroundColor: "#222", // Dark background for the dropdown
                  borderRadius: "10px", // Rounded corners
                }}
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/user/profile"
                    style={{
                      color: "white", // White text
                      textDecoration: "none", // Remove underline
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
                      color: "white", // White text
                      backgroundColor: "transparent", // Transparent background
                      border: "2px solid white", // Thin white border
                      borderRadius: "5px", // Rounded corners
                      padding: "10px 20px", // Padding
                      cursor: "pointer", // Pointer cursor on hover
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = "#00d2ff"; // Change border to light blue on hover
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = "white"; // Revert to original color
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

export default Navbar;