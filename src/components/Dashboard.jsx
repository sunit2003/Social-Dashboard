import React from "react";
import "./dashboard.css";

import RecentSales from "./RecentSales";
import GenderPie from "./GenderPie";
import RecentActivity from "./RecentActivity";
import ReportCharts from "./ReportCharts";
import Radar from "./Radar";
import SocialPost from "./SocialPost";

// DashboardCard component for reusability
const DashboardCard = ({ title, children }) => (
  <div className="card my-3">
    <div className="card-body">
      {title && <h5 className="card-title">{title}</h5>}
      {children}
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <section className="dashboard section">
      <div className="row">
        {/* Report Section */}
        <div className="col-lg-8">
          <DashboardCard>
            <ReportCharts />
          </DashboardCard>
        </div>

        {/* Gender Pie & Recent Activity */}
        <div className="col-lg-4">
          <DashboardCard title="Gender Pie">
            <GenderPie />
          </DashboardCard>
        </div>

        {/* Additional Cards as needed, example: */}
        {/* Recent Sales */}
        <div className="col-lg-4">
          <DashboardCard title="GenderPie">
            <RecentSales />
          </DashboardCard>
        </div>
        <div className="col-lg-6">
          <DashboardCard>
            <RecentActivity />
          </DashboardCard>
        </div>
        <div className="col-lg-2">
          <DashboardCard>
            <RecentActivity />
          </DashboardCard>
        </div>

        <div className="col-lg-5">
          <DashboardCard title="Radar">
            <Radar />
          </DashboardCard>
        </div>
        <div className="col-lg-7">
          <DashboardCard title="Social Posts">
            <SocialPost />
          </DashboardCard>
        </div>

        {/* Add more sections/cards here */}
      </div>
    </section>
  );
};

export default Dashboard;
