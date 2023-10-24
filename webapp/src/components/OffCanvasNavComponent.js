import React, { useEffect, useState } from "react";
import { useDeviceWidth } from "../context/DeviceWidthContext";
import { Link, useLocation } from "react-router-dom"; // Import useLocation

import icon from "../assets/images/icon.png";
// import "./YourCustomStyles.css"; // Import your custom CSS file

function OffCanvasNavComponent({ collapsed }) {
  const isSmall = useDeviceWidth();
  const location = useLocation(); // Get the current location

  const [activeTab, setActiveTab] = useState(""); // State to manage the active tab

  useEffect(() => {
    // When the location changes, update the active tab based on the current pathname
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <div
      style={{
        width: isSmall
          ? `${collapsed ? "100%" : "0"}`
          : `${collapsed ? 200 : 0}px`,
        overflowX: "hidden",
        transition: `width ${isSmall ? "100ms" : "200ms"} linear`,
      }}
      className="d-flex  flex-column flex-shrink-0 vh-100 m-0"
    >
      <div className="">
        <Link
          to="/"
          className="pt-2 text-center d-flex align-items-center  my-4 me-md-auto text-dark text-decoration-none"
        >
          <img src={icon} width="200px" />
        </Link>
      </div>

      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <span className="text-info">MAIN MENU</span>
        <li className="nav-item">
          <Link
            to="/dashboard"
            className={`nav-link ${activeTab === "/dashboard" ? "active" : ""}`}
          >
            <i class="bi bi-speedometer2 pe-2 text-dark"></i>
            <span className="text-dark">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/course"
            className={`nav-link ${
              activeTab === "/dashboard/course" ? "active" : ""
            }`}
          >
            <i class="bi bi-mortarboard pe-2 text-dark"></i>
            <span className="text-dark">Course</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/premium"
            className={`nav-link ${
              activeTab === "/dashboard/premium" ? "active" : ""
            }`}
          >
            <i class="bi bi-credit-card pe-2 text-dark"></i>
            <span className="text-dark">Premium</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/contactus"
            className={`nav-link ${
              activeTab === "/dashboard/contactus" ? "active" : ""
            }`}
          >
            <i class="bi bi-chat-left pe-2 text-dark"></i>
            <span className="text-dark">Contact us</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/aboutus"
            className={`nav-link ${
              activeTab === "/dashboard/aboutus" ? "active" : ""
            }`}
          >
            <i class="bi bi-file-person pe-2 text-dark"></i>
            <span className="text-dark">About us</span>
          </Link>
        </li>
      </ul>

      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <span className="text-info">PREFERENCE</span>
        <li className="nav-item">
          <Link
            to="/dashboard/updateProfile"
            className={`nav-link ${
              activeTab === "/dashboard/updateProfile" ? "active" : ""
            }`}
          >
            <i class="bi bi-gear pe-2 text-dark"></i>
            <span className="text-dark">Settings</span>
          </Link>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default OffCanvasNavComponent;
