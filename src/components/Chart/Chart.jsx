/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import numeral from "numeral";
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
          callback: (value) => {
            let testReg = /\b([01]?[0-9]|2[0-3]):00\b/;
            let stringValue = labels[value];
            let [, x] = stringValue.split(",");
            let y = x.split(":");
            if (testReg.test(`${y[0]}:${y[1]}`)) {
              return `${y[0]}:${y[1]} ${y[2].slice(-2)}`;
            } else {
              return "";
            }
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          callback: (value) => `$${numeral(value).format("0.00a")}`,
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
