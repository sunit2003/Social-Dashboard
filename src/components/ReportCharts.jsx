import React, { useState } from "react";
import Chart from "react-apexcharts";

function ReportCharts() {
  const [data] = useState({
    series: [
      {
        name: "January",
        data: [3000, 4000, 3800],
      },
      {
        name: "February",
        data: [2000, 1000, 3000],
      },
      {
        name: "March",
        data: [3000, 2000, 6000],
      },
      // {
      //   name: "Student",
      //   data: [20, 50, 11, 33, 50, 67],
      // },
      // {
      //   name: "HomeMaker",
      //   data: [11, 21, 33, 54, 27, 77],
      // },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 4,
      },
      colors: ["#4154f1", "#2eca6a", "#ff771d", "#1cf223", "#F05454"],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.4,
          stops: [0, 90, 100],
        },
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      xaxis: {
        type: "datetime",
        labels: {
          style: {
            colors: "white",
          },
        },
        categories: [
          "2024-01-09T00:00:00.000Z",
          "2024-01-19T01:30:00.000Z",
          "2024-01-29T02:30:00.000Z",
          "2024-02-08T03:30:00.000Z",
          "2024-02-18T04:30:00.000Z",
          "2024-02-28T05:30:00.000Z",
          "2024-02-9T06:30:00.000Z",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "white", // Y-axis labels color
          },
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
        theme: "dark",
      },
      toolbar: {
        show: false,
      },
      legend: {
        labels: {
          colors: "white", // This sets the legend label text color to white.
        },
      },
    },
  });
  return (
    <Chart
      options={data.options}
      series={data.series}
      type={data.options.chart.type}
      height={data.options.chart.height}
    />
  );
}

export default ReportCharts;
