/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
// import "./Chart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Chart = ({ datas, labels, text }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    // aspectRatio: 0.2,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: text,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          callback: (value) => `$${value}`,
        },
      },
    },
    width: 50,
    height: 100,
  };

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Price",
        data: datas,
        borderColor: "#67ad67",
        backgroundColor: "rgb(203,243,203,0.4)",
      },
    ],
  };

  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default Chart;
