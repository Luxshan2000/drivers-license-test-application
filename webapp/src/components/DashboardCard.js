import React from "react";
import "../assets/CSS/dashboardStyle.css";
import { Link } from "react-router-dom";

function DashboardCard({card}) {
  return (
    <Link to={card.to} className="dashboard__card">
      <h5>{card.heading}</h5>
      <div className="card__image-details">
        <img className="card__image" src={card.icon} alt="" />
        <h6>{card.content}</h6>
      </div>
    </Link>
  );
}

export default DashboardCard;
