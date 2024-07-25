import React from "react";
import Chart from "react-apexcharts";
function GenderPie() {
  return (
    <Chart
      type="donut"
      // width={420}
      height={350}
      series={[67, 30, 3]}
      options={{
        labels: ["Men", "Women", "Others"],
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

export default GenderPie;
