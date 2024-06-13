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
  const [showSoftwareEngineer, setShowSoftwareEngineer] = useState(true);
  const [showDataScientist, setShowDataScientist] = useState(true);
  const [showUIUXDesigner, setShowUIUXDesigner] = useState(true);
  const [showProductManager, setShowProductManager] = useState(true);
  const [showDevOpsEngineer, setShowDevOpsEngineer] = useState(true);

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
      showSoftwareEngineer && {
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
      showDataScientist && {
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
      showUIUXDesigner && {
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
      showProductManager && {
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
      showDevOpsEngineer && {
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
    ].filter(Boolean),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: false,
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
    <div className="flex" style={{ width: "100%", minWidth: "1200px" }}>
      <div className="w-11/12 md:w-[1000px]">
        <div className="relative top-8 left-10">
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
      <div className="w-[280px] pl-4 relative left-2">
        <div className="bg-white shadow-md rounded-md p-4 relative top-[120px]">
          <h3 className="text-lg font-semibold mb-2">Filters</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 transition duration-150 ease-in-out"
                style={{
                  accentColor: "rgba(75, 192, 192, 0.2)",
                }}
                checked={showSoftwareEngineer}
                onChange={() => setShowSoftwareEngineer(!showSoftwareEngineer)}
              />
              <span className="text-gray-700 font-medium select-none">
                Software Engineer
              </span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                style={{
                  accentColor: "rgba(255, 99, 132, 0.2)",
                }}
                checked={showDataScientist}
                onChange={() => setShowDataScientist(!showDataScientist)}
              />
              <span className="text-gray-700 font-medium select-none">
                Data Scientist
              </span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                style={{
                  accentColor: "rgba(54, 162, 235, 0.2)",
                }}
                checked={showUIUXDesigner}
                onChange={() => setShowUIUXDesigner(!showUIUXDesigner)}
              />
              <span className="text-gray-700 font-medium select-none">
                UI/UX Designer
              </span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                style={{
                  accentColor: "rgba(255, 206, 86, 0.2)",
                }}
                checked={showProductManager}
                onChange={() => setShowProductManager(!showProductManager)}
              />
              <span className="text-gray-700 font-medium select-none">
                Product Manager
              </span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out "
                style={{
                  accentColor: "rgba(177, 139, 252, 0.6)",
                }}
                checked={showDevOpsEngineer}
                onChange={() => setShowDevOpsEngineer(!showDevOpsEngineer)}
              />
              <span className="text-gray-700 font-medium select-none">
                DevOps Engineer
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoffsByYearChart;
