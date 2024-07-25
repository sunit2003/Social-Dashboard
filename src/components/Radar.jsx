import React from "react";
import Chart from "react-apexcharts";

function Radar() {
  // Define the options for the chart

  const options = {
    labels: ["April", "May", "June", "July", "August", "September"],
    chart: {
      height: 350,
      type: "radar",
      toolbar: {
        show: false, // This removes the toolbar
      },
    },
    legend: {
      labels: {
        colors: "white", // This sets the legend label text color to white.
      },
    },
    // Additional customization options can be added here
    tooltip: {
      enabled: true, // This disables the tooltip
      theme: "dark",
    },
  };

  // Define the series data for the chart
  const series = [
    {
      name: "Radar Series 1",
      data: [45, 52, 38, 24, 33, 10],
    },
    {
      name: "Radar Series 2",
      data: [26, 21, 20, 6, 8, 15],
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="radar"
      height={350}
      // width={420} // Uncomment if you want to set a specific width
    />
  );
}

export default Radar;
