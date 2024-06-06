import { PolarArea } from "react-chartjs-2";
import {
  Chart,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const JobPostingsPolarChart = () => {
  const data = {
    labels: [
      "Software Engineer (Junior)",
      "Software Engineer (Senior)",
      "Data Scientist (Junior)",
      "Data Scientist (Senior)",
      "UI/UX Designer (Junior)",
      "UI/UX Designer (Senior)",
      "Product Manager (Junior)",
      "Product Manager (Senior)",
      "DevOps Engineer (Junior)",
      "DevOps Engineer (Senior)",
    ],
    datasets: [
      {
        data: [100, 200, 80, 150, 120, 180, 90, 160, 110, 190],
        backgroundColor: [
          "rgba(75, 192, 192, 0.8)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(153, 102, 255, 0.4)",
        ],
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

  return <PolarArea data={data} options={options} />;
};

export default JobPostingsPolarChart;
