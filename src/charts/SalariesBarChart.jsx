import { Bar } from "react-chartjs-2";
import { useRef, useState } from "react";
import { Chart, CategoryScale, BarElement } from "chart.js";

Chart.register(CategoryScale, BarElement);

const SalariesBarChart = () => {
  const chartRef = useRef(null);

  const [showSoftwareEngineer, setShowSoftwareEngineer] = useState(false);
  const [showDataScientist, setShowDataScientist] = useState(false);
  const [showUIUXDesigner, setShowUIUXDesigner] = useState(true);
  const [showProductManager, setShowProductManager] = useState(false);
  const [showDevOpsEngineer, setShowDevOpsEngineer] = useState(true);
  const [dataState, setDataState] = useState("average");

  var averageData = [
    showSoftwareEngineer && {
      label: "Software Engineer",
      data: [80000, 120000],
      backgroundColor: "#4bc0c0",
    },
    showDataScientist && {
      label: "Data Scientist",
      data: [80000, 100000],
      backgroundColor: "#ff6384",
    },
    showUIUXDesigner && {
      label: "UI/UX Designer",
      data: [60000, 80000],
      backgroundColor: "#36a2eb",
    },
    showProductManager && {
      label: "Product Manager",
      data: [150000, 200000],
      backgroundColor: "#ffce56",
    },
    showDevOpsEngineer && {
      label: "DevOps Engineer",
      data: [75000, 100000],
      backgroundColor: "#b18bfc",
    },
  ].filter(Boolean);

  var maximumData = [
    showSoftwareEngineer && {
      label: "Software Engineer",
      data: [100000, 180000],
      backgroundColor: "#4bc0c0",
    },
    showDataScientist && {
      label: "Data Scientist",
      data: [120000, 175000],
      backgroundColor: "#ff6384",
    },
    showUIUXDesigner && {
      label: "UI/UX Designer",
      data: [75000, 120000],
      backgroundColor: "#36a2eb",
    },
    showProductManager && {
      label: "Product Manager",
      data: [200000, 250000],
      backgroundColor: "#ffce56",
    },
    showDevOpsEngineer && {
      label: "DevOps Engineer",
      data: [100000, 150000],
      backgroundColor: "#b18bfc",
    },
  ].filter(Boolean);

  const data = {
    labels: ["Junior Level", "Senior Level"],
    datasets: dataState == "average" ? averageData : maximumData,
  };

  const toggleDataState = () => {
    if (dataState == "average") {
      setDataState("maximum");
      document.getElementById("toggleBarChartData").innerHTML =
        "Compare Salary Averages";
    } else {
      setDataState("average");
      document.getElementById("toggleBarChartData").innerHTML =
        "Compare Salary Maximums";
    }
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        display: true,
        max: 250000,
        title: {
          display: true,
          text:
            dataState == "average"
              ? "Average Salary Amount ($/year)"
              : "Maximum Salary Amount ($/year)",
          font: {
            size: 16,
          },
          padding: 30,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text:
          dataState == "average"
            ? "Salary Averages by Profession"
            : "Salary Maximums by Profession",
        font: {
          size: 18,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return " $" + context.parsed.y.toLocaleString() + "/year";
          },
        },
      },
    },
  };

  return (
    <div>
      <div className="flex">
        <div className="w-3/4 mr-10">
          <Bar data={data} options={options} ref={chartRef}/>
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
                  onChange={() =>
                    setShowSoftwareEngineer(!showSoftwareEngineer)
                  }
                  style={{ accentColor: "#4bc0c0", cursor: "pointer" }}
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
                  style={{ accentColor: "#ff6384", cursor: "pointer" }}
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
                  style={{ accentColor: "#36a2eb", cursor: "pointer" }}
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
                  style={{ accentColor: "#ffce56", cursor: "pointer" }}
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
                  style={{ accentColor: "#b18bfc", cursor: "pointer" }}
                />
                <span className="text-gray-700 font-medium select-none">
                  DevOps Engineer
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "40%", marginLeft: "20%" }}>
        <button
          style={{ width: "100%" }}
          id="toggleBarChartData"
          className="bg-blue-500 rounded text-white p-2 m-5 hover:bg-blue-600"
          onClick={toggleDataState}
        >
          Compare Salary Maximums
        </button>
      </div>
    </div>
  );
};

export default SalariesBarChart;
