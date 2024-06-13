import { useState } from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const JobPostingsChart = () => {
  const [showSoftwareEngineer, setShowSoftwareEngineer] = useState(true);
  const [showDataScientist, setShowDataScientist] = useState(true);
  const [showUIUXDesigner, setShowUIUXDesigner] = useState(true);
  const [showProductManager, setShowProductManager] = useState(true);
  const [showDevOpsEngineer, setShowDevOpsEngineer] = useState(true);
  const [showJuniorLevel, setShowJuniorLevel] = useState(true);
  const [showSeniorLevel, setShowSeniorLevel] = useState(true);

  const juniorLevelData = [
    showSoftwareEngineer && 100,
    showDataScientist && 80,
    showUIUXDesigner && 120,
    showProductManager && 90,
    showDevOpsEngineer && 110,
  ].filter(Boolean);

  const seniorLevelData = [
    showSoftwareEngineer && 200,
    showDataScientist && 150,
    showUIUXDesigner && 180,
    showProductManager && 160,
    showDevOpsEngineer && 190,
  ].filter(Boolean);

  const data = {
    labels: [
      showSoftwareEngineer && "Software Engineer",
      showDataScientist && "Data Scientist",
      showUIUXDesigner && "UI/UX Designer",
      showProductManager && "Product Manager",
      showDevOpsEngineer && "DevOps Engineer",
    ].filter(Boolean),
    datasets: [
      showJuniorLevel && {
        label: "Junior Level",
        data: juniorLevelData,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      showSeniorLevel && {
        label: "Senior Level",
        data: seniorLevelData,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ].filter(Boolean),
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Job Postings by Profession and Level",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 250,
      },
    },
  };

  return (
    <div className="flex">
      <div className="w-3/4">
        <Radar data={data} options={options} />
      </div>
      <div className="w-1/4 pl-4 relative top-[200px]">
        <div className="bg-white shadow-md rounded-md p-4">
          <h3 className="text-lg font-semibold mb-2">Filters</h3>
          <div className="mb-4">
            <h4 className="text-md font-semibold mb-2">Professions</h4>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={showSoftwareEngineer}
                  onChange={() =>
                    setShowSoftwareEngineer(!showSoftwareEngineer)
                  }
                  className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out cursor-pointer"
                />
                <span className="text-gray-700 font-medium select-none">
                  Software Engineer
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={showDataScientist}
                  onChange={() => setShowDataScientist(!showDataScientist)}
                  className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out cursor-pointer"
                />
                <span className="text-gray-700 font-medium select-none">
                  Data Scientist
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={showUIUXDesigner}
                  onChange={() => setShowUIUXDesigner(!showUIUXDesigner)}
                  className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out cursor-pointer"
                />
                <span className="text-gray-700 font-medium select-none">
                  UI/UX Designer
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={showProductManager}
                  onChange={() => setShowProductManager(!showProductManager)}
                  className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out cursor-pointer"
                />
                <span className="text-gray-700 font-medium select-none">
                  Product Manager
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={showDevOpsEngineer}
                  onChange={() => setShowDevOpsEngineer(!showDevOpsEngineer)}
                  className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out cursor-pointer"
                />
                <span className="text-gray-700 font-medium select-none">
                  DevOps Engineer
                </span>
              </label>
            </div>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-2">Levels</h4>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={showJuniorLevel}
                  onChange={() => setShowJuniorLevel(!showJuniorLevel)}
                  className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out cursor-pointer"
                />
                <span className="text-gray-700 font-medium select-none">
                  Junior
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={showSeniorLevel}
                  onChange={() => setShowSeniorLevel(!showSeniorLevel)}
                  className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out cursor-pointer"
                />
                <span className="text-gray-700 font-medium select-none">
                  Senior
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostingsChart;
