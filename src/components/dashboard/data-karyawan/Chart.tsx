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
import { parseISO, getDay } from "date-fns";
import { useState } from "react";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

enum AttendanceStatus {
  TELAT = "TELAT",
  IZIN = "IZIN",
  ALPHA = "ALPHA",
  HADIR = "HADIR",
  MISSED = "MISSED",
}

interface Attendance {
  id: number;
  id_karyawan: number;
  id_location: number | null;
  tanggal: Date;
  jam_masuk: Date | null;
  jam_keluar: Date | null;
  status: AttendanceStatus;
}
const getWeeklyData = (attendances: Attendance[]) => {
  type AttendanceData = { [key in AttendanceStatus]: number[] };
  // Initialize an empty object to store counts for each status by day
  const data: AttendanceData = {
    [AttendanceStatus.HADIR]: Array(7).fill(0),
    [AttendanceStatus.IZIN]: Array(7).fill(0),
    [AttendanceStatus.TELAT]: Array(7).fill(0),
    [AttendanceStatus.ALPHA]: Array(7).fill(0),
    [AttendanceStatus.MISSED]: Array(7).fill(0),
  };

  // Populate the data object with counts for each status by day
  attendances.map((attendance: Attendance) => {
    const dayIndex = getDay(attendance.tanggal); // Get the day of the week (0-6)
    data[attendance.status][dayIndex] += 1; // Increment the count for the corresponding status and day
  });

  return {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Hadir",
        data: data[AttendanceStatus.HADIR],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Izin",
        data: data[AttendanceStatus.IZIN],
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
      {
        label: "Telat",
        data: data[AttendanceStatus.TELAT],
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
      {
        label: "Alfa",
        data: data[AttendanceStatus.ALPHA],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Missed",
        data: data[AttendanceStatus.MISSED],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };
};

const getMonthlyData = (attendances: Attendance[]) => {
  // Initialize an empty object to store counts for each status
  type MonthlyAttendanceData = { [key in AttendanceStatus]: number };
  const data: MonthlyAttendanceData = {
    [AttendanceStatus.HADIR]: 0,
    [AttendanceStatus.IZIN]: 0,
    [AttendanceStatus.TELAT]: 0,
    [AttendanceStatus.ALPHA]: 0,
    [AttendanceStatus.MISSED]: 0,
  };

  // Populate the data object with counts for each status
  attendances.map((attendance) => {
    data[attendance.status] += 1; // Increment the count for the corresponding status
  });

  return {
    labels: ["Hadir", "Izin", "Telat", "Alfa", "Missed"],
    datasets: [
      {
        data: [
          data[AttendanceStatus.HADIR],
          data[AttendanceStatus.IZIN],
          data[AttendanceStatus.TELAT],
          data[AttendanceStatus.ALPHA],
          data[AttendanceStatus.MISSED],
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "#FFCE56",
          "#F71384",
          "rgba(54, 162, 235, 1)",
        ],
      },
    ],
  };
};

// Chart options
const barOptions: any = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
  },
};
const pieOptions: any = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true, // Use point style
        pointStyle: "circle", // Set point style to circle
      },
    },
  },
};

const Charts = (attendances: any) => {
  const weeklyData = getWeeklyData(attendances.attendances);
  const monthlyData = getMonthlyData(attendances.attendances);
  return (
    <div className="charts flex space-x-[15px] mt-[37px] ml-[71px]  mx-auto w-3/2">
      <div className="weekly-chart w-[645px] shadow-sm h-[351px] rounded-[30px] bg-white p-7         ">
        <h2>Data Absen Mingguan</h2>
        <Bar data={weeklyData} options={barOptions} />
      </div>
      <div className="monthly-chart w-[378px] shadow-sm p-7 h-[351px] rounded-[30px] bg-white">
        <h2>Data Absen Bulanan</h2>
        <Pie data={monthlyData} options={pieOptions} />
      </div>
    </div>
  );
};

export default Charts;
