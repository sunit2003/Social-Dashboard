import React from "react";
import Chart from "react-apexcharts";

function RecentActivity() {
  return (
    <Chart
      type="bar"
      height={340}
      series={[
        {
          name: "General public",
          data: [65, 68, 55, 72, 23],
        },
        {
          name: "Industry professional",
          data: [25, 28, 29, 30, 33],
        },
        {
          name: "Potential customer",
          data: [4, 6, 7, 12, 17],
        },
        {
          name: "Friends and Family",
          data: [6, 3, 1, 7, 13],
        },
      ]}
      options={{
        title: {
          text: "Target Audience",
          style: {
            color: "white",
          },
        },

        chart: {
          stacked: true,
          toolbar: {
            show: false, // This removes the toolbar
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
            columnWidth: "100%",
          },
        },
        stroke: {
          width: 1,
        },
        yaxis: {
          labels: {
            style: {
              colors: "white", // Y-axis labels color
            },
          },
        },
        xaxis: {
          title: {
            text: "Categories of the year",
            style: {
              color: "White",
            },
          },
          style: {
            colors: "white",
          },
          labels: {
            style: {
              colors: "white",
            },
          },
          categories: [2020, 2021, 2022, 2023, 2024],
        },
        legend: {
          labels: {
            colors: "white", // This sets the legend label text color to white.
          },
        },
        tooltip: {
          enabled: true, // This disables the tooltip
          theme: "dark",
        },
      }}
    />
  );
}

export default RecentActivity;
