"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const weeklyData = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "Hadir",
      data: [12, 19, 3, 5, 2, 3, 7],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
    {
      label: "Sakit",
      data: [2, 3, 20, 5, 1, 4, 8],
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      borderColor: "rgba(153, 102, 255, 1)",
      borderWidth: 1,
    },
    {
      label: "Telat",
      data: [3, 10, 13, 15, 22, 30, 45],
      backgroundColor: "rgba(255, 206, 86, 0.2)",
      borderColor: "rgba(255, 206, 86, 1)",
      borderWidth: 1,
    },
    {
      label: "Alfa",
      data: [1, 2, 1, 1, 2, 2, 3],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

const monthlyData = {
  labels: ["Hadir", "Sakit", "Telat", "Alfa"],
  datasets: [
    {
      data: [56, 10, 6, 28],
      backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#FF6384"],
    },
  ],
};

const Charts = () => (
  <div className="charts flex space-x-[15px] mt-[37px] ml-[71px]  mx-auto w-3/2">
    <div className="weekly-chart w-[645px] rounded-[30px] bg-white p-4     ">
      <h2>Data Absen Mingguan</h2>
      <Bar data={weeklyData} />
    </div>
    <div className="monthly-chart w-[378px] p-4 rounded-[30px] bg-white">
      <h2>Data Absen Bulanan</h2>
      <Pie data={monthlyData} />
    </div>
  </div>
);

export default Charts;
