import React from "react";
import "./pageTitle.css";

const PageTitle = () => {
  return (
    <div className="pagetitle">
      <h2>Dashboard</h2>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">
              <i className="bi bi-house-door"></i>
            </a>
          </li>
          <li className="breadcrumb-item">/ Dashboard</li>
        </ol>
      </nav>
    </div>
  );
};

export default PageTitle;
