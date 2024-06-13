import { Scatter } from "react-chartjs-2";
import { Chart } from "chart.js";
import { useRef, useState } from "react";

Chart.register();

const CompetitivenessScatterChart = () => {
  const chartRef = useRef(null);

  const [showSoftwareEngineer, setShowSoftwareEngineer] = useState(false);
  const [showDataScientist, setShowDataScientist] = useState(true);
  const [showUIUXDesigner, setShowUIUXDesigner] = useState(false);
  const [showProductManager, setShowProductManager] = useState(false);
  const [showDevOpsEngineer, setShowDevOpsEngineer] = useState(false);

  const data = {
    datasets: [
      showSoftwareEngineer && {
        label: "Software Engineer",
        data: [
          {
            x: 800,
            y: 6,
          },
        ],
        backgroundColor: "#4bc0c099",
        pointStyle: "circle",
      },
      showDataScientist && {
        label: "Data Scientist",
        data: [
          {
            x: 500,
            y: 5,
          },
        ],
        backgroundColor: "#ff638499",
        pointStyle: "rectRot",
      },
      showUIUXDesigner && {
        label: "UI/UX Designer",
        data: [
          {
            x: 200,
            y: 7,
          },
        ],
        backgroundColor: "#36a2eb99",
        pointStyle: "rect",
      },
      showProductManager && {
        label: "Product Manager",
        data: [
          {
            x: 250,
            y: 10,
          },
        ],
        backgroundColor: "#ffce5699",
        pointStyle: "rectRounded",
      },
      showDevOpsEngineer && {
        label: "DevOps Engineer",
        data: [
          {
            x: 300,
            y: 2,
          },
        ],
        backgroundColor: "#b18bfc99",
        pointStyle: "triangle",
      },
    ].filter(Boolean),
  };

  const options = {
    responsive: true,
    interaction: {
      mode: "dataset",
    },
    elements: {
      point: {
        radius: 10,
      },
    },
    scales: {
      x: {
        display: true,
        min: 0,
        title: {
          display: true,
          text: "Average Amount of Applicants",
          font: {
            size: 14,
          },
          padding: 30,
        },
      },
      y: {
        display: true,
        min: 0,
        title: {
          display: true,
          text: "Average Amount of Experience Required (Years)",
          font: {
            size: 14,
          },
          padding: 30,
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: "Average Amount of Experience Required vs. Average Amount of Applicants, by Profession",
        font: {
          size: 14,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return [
              " Average applicants: " + context.parsed.x.toLocaleString() + "",
              " Average experience required: " +
                context.parsed.y.toLocaleString() +
                " years",
            ];
          },
        },
      },
    },
  };

  return (
    <div className="flex" style={{ width: "80%", margin: "auto" }}>
      <div className="w-3/4 mr-10">
        <Scatter data={data} options={options} ref={chartRef} />
      </div>
      <div className="w-1/4 pl-4 relative top-[100px]">
        <div className="bg-white shadow-md rounded-md p-4">
          <h3 className="text-lg font-semibold mb-2">Filters</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                checked={showSoftwareEngineer}
                onChange={() => setShowSoftwareEngineer(!showSoftwareEngineer)}
                style={{ accentColor: "#4bc0c099", cursor: "pointer" }}
              />
              <span className="text-gray-700 font-medium select-none">
                Software Engineer
              </span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                checked={showDataScientist}
                onChange={() => setShowDataScientist(!showDataScientist)}
                style={{ accentColor: "#ff638499", cursor: "pointer" }}
              />
              <span className="text-gray-700 font-medium select-none">
                Data Scientist
              </span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                checked={showUIUXDesigner}
                onChange={() => setShowUIUXDesigner(!showUIUXDesigner)}
                style={{ accentColor: "#36a2eb99", cursor: "pointer" }}
              />
              <span className="text-gray-700 font-medium select-none">
                UI/UX Designer
              </span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                checked={showProductManager}
                onChange={() => setShowProductManager(!showProductManager)}
                style={{ accentColor: "#ffce5699", cursor: "pointer" }}
              />
              <span className="text-gray-700 font-medium select-none">
                Product Manager
              </span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                checked={showDevOpsEngineer}
                onChange={() => setShowDevOpsEngineer(!showDevOpsEngineer)}
                style={{ accentColor: "#b18bfc99", cursor: "pointer" }}
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

export default CompetitivenessScatterChart;
