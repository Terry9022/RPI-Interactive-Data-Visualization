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
  const data = {
    labels: [
      "Software Engineer",
      "Data Scientist",
      "UI/UX Designer",
      "Product Manager",
      "DevOps Engineer",
    ],
    datasets: [
      {
        label: "Junior Level",
        data: [100, 80, 120, 90, 110],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Senior Level",
        data: [200, 150, 180, 160, 190],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
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

  return <Radar data={data} options={options} />;
};

export default JobPostingsChart;
