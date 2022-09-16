import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Home from "../../components/Home/Home";
import "./OwnerDashboard.css";

const OwnerDashboard = () => {
  return (
    <div className="owner-dashboard-container">
      <div className="owner-inner-container">
        <div className="owner-left">
          <Sidebar/>
        </div>
        <div className="owner-right">
          <Home/>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
