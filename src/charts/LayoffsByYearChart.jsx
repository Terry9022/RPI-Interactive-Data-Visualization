import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import "chartjs-adapter-date-fns";
import annotationPlugin from "chartjs-plugin-annotation";

Chart.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  annotationPlugin
);

const LayoffsByYearChart = () => {
  const [showChatGPTLine, setShowChatGPTLine] = useState(true);

  const data = {
    labels: [
      "2019-01-01",
      "2020-01-01",
      "2021-01-01",
      "2022-01-01",
      "2022-11-30",
      "2023-01-01",
      "2024-01-01",
    ],
    datasets: [
      {
        label: "Software Engineer",
        data: [
          { x: "2019-01-01", y: 500 },
          { x: "2020-01-01", y: 800 },
          { x: "2021-01-01", y: 1200 },
          { x: "2022-01-01", y: 1500 },
          { x: "2022-11-30", y: 1800 },
          { x: "2023-01-01", y: 3500 },
          { x: "2024-01-01", y: 5000 },
        ],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: false,
      },
      {
        label: "Data Scientist",
        data: [
          { x: "2019-01-01", y: 300 },
          { x: "2020-01-01", y: 500 },
          { x: "2021-01-01", y: 800 },
          { x: "2022-01-01", y: 1000 },
          { x: "2022-11-30", y: 1200 },
          { x: "2023-01-01", y: 2500 },
          { x: "2024-01-01", y: 3500 },
        ],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: false,
      },
      {
        label: "UI/UX Designer",
        data: [
          { x: "2019-01-01", y: 200 },
          { x: "2020-01-01", y: 400 },
          { x: "2021-01-01", y: 600 },
          { x: "2022-01-01", y: 800 },
          { x: "2022-11-30", y: 1000 },
          { x: "2023-01-01", y: 2000 },
          { x: "2024-01-01", y: 3000 },
        ],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: false,
      },
      {
        label: "Product Manager",
        data: [
          { x: "2019-01-01", y: 100 },
          { x: "2020-01-01", y: 200 },
          { x: "2021-01-01", y: 300 },
          { x: "2022-01-01", y: 400 },
          { x: "2022-11-30", y: 500 },
          { x: "2023-01-01", y: 1000 },
          { x: "2024-01-01", y: 1500 },
        ],
        borderColor: "rgba(255, 206, 86, 1)",
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        fill: false,
      },
      {
        label: "DevOps Engineer",
        data: [
          { x: "2019-01-01", y: 150 },
          { x: "2020-01-01", y: 250 },
          { x: "2021-01-01", y: 350 },
          { x: "2022-01-01", y: 450 },
          { x: "2022-11-30", y: 600 },
          { x: "2023-01-01", y: 1200 },
          { x: "2024-01-01", y: 1800 },
        ],
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Job Layoffs by Year and Career",
        font: {
          size: 18,
        },
      },
      annotation: {
        annotations: showChatGPTLine
          ? [
              {
                type: "line",
                scaleID: "x",
                value: "2022-11-30",
                borderColor: "black",
                borderWidth: 2,
                label: {
                  display: true,
                  content: "ChatGPT Release",
                  position: "bottom",
                  font: {
                    size: 10,
                  },
                },
              },
            ]
          : [],
      },
      tooltip: {
        callbacks: {
          title: (context) => {
            const date = context[0].label;
            const date2 = new Date(date.slice(0, 11));
            return date2.toISOString().split("T")[0];
          },
          label: (context) => {
            const label = context.dataset.label || "";
            const value = context.parsed.y;
            return `${label}: ${value}`;
          },
        },
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "year",
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "nearest",
    },
  };

  const handleToggleChatGPTLine = () => {
    setShowChatGPTLine(!showChatGPTLine);
  };

  return (
    <div className="relative">
      <div className="absolute top-4 right-4 z-10">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
            checked={showChatGPTLine}
            onChange={handleToggleChatGPTLine}
          />
          <span className="text-gray-700 font-medium select-none">
            Show ChatGPT Release Line
          </span>
        </label>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LayoffsByYearChart;
