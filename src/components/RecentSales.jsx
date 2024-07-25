import React from "react";
import "./recentSales.css";
import Chart from "react-apexcharts";

function RecentSales() {
  return (
    <Chart
      className="full-width-chart"
      type="radialBar"
      height={350}
      series={[67, 84, 97, 61]}
      options={{
        plotOptions: {
          radialBar: {
            dataLabels: {
              total: {
                show: true,
                label: "TOTAL",
              },
            },
          },
        },
        labels: ["TEAM A", "TEAM B", "TEAM C", "TEAM D"],
        tooltip: {
          enabled: true, // This disables the tooltip
          theme: "dark",
        },
      }}
    />
  );
}

export default RecentSales;
