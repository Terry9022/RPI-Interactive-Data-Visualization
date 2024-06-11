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
  const [selectedCareers, setSelectedCareers] = useState([
    "Software Engineer",
    "Data Scientist",
    "UI/UX Designer",
    "Product Manager",
    "DevOps Engineer",
  ]);
  const [selectedLevels, setSelectedLevels] = useState(["Junior", "Senior"]);

  const data = {
    labels: selectedCareers,
    datasets: selectedLevels.map((level, index) => ({
      label: `${level} Level`,
      data: [100, 80, 120, 90, 110, 200, 150, 180, 160, 190].slice(
        index * 5,
        index * 5 + selectedCareers.length
      ),
      backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"][
        index
      ],
      borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"][index],
      borderWidth: 1,
    })),
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

  const handleCareerChange = (career) => {
    if (selectedCareers.includes(career)) {
      setSelectedCareers(selectedCareers.filter((c) => c !== career));
    } else {
      setSelectedCareers([...selectedCareers, career]);
    }
  };

  const handleLevelChange = (level) => {
    if (selectedLevels.includes(level)) {
      setSelectedLevels(selectedLevels.filter((l) => l !== level));
    } else {
      setSelectedLevels([...selectedLevels, level]);
    }
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
              {[
                "Software Engineer",
                "Data Scientist",
                "UI/UX Designer",
                "Product Manager",
                "DevOps Engineer",
              ].map((career) => (
                <label key={career} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedCareers.includes(career)}
                    onChange={() => handleCareerChange(career)}
                    className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                  />
                  <span className="text-gray-700 font-medium select-none">
                    {career}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-2">Levels</h4>
            <div className="space-y-2">
              {["Junior", "Senior"].map((level) => (
                <label key={level} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedLevels.includes(level)}
                    onChange={() => handleLevelChange(level)}
                    className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                  />
                  <span className="text-gray-700 font-medium select-none">
                    {level}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostingsChart;
