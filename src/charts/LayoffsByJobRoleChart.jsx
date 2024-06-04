import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ["Google", "Amazon", "Meta", "Netflix", "Apple"],
  datasets: [
    {
      label: "Software Engineer",
      data: [12, 10, 15, 8, 5],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
    },
    {
      label: "Data Scientist",
      data: [18, 15, 20, 12, 8],
      backgroundColor: "rgba(255, 99, 132, 0.6)",
    },
    {
      label: "UI/UX Designer",
      data: [15, 12, 18, 10, 6],
      backgroundColor: "rgba(54, 162, 235, 0.6)",
    },
    {
      label: "Product Manager",
      data: [10, 8, 12, 6, 4],
      backgroundColor: "rgba(255, 206, 86, 0.6)",
    },
    {
      label: "DevOps Engineer",
      data: [8, 6, 10, 5, 3],
      backgroundColor: "rgba(153, 102, 255, 0.6)",
    },
  ],
};

const options = {
  plugins: {
    title: {
      display: true,
      text: "Layoffs by Job Role in Big Tech Companies",
      font: {
        size: 18,
      },
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      title: {
        display: true,
        text: "Company",
      },
    },
    y: {
      stacked: true,
      title: {
        display: true,
        text: "Percentage",
      },
    },
  },
};

const LayoffsByJobRoleChart = () => {
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default LayoffsByJobRoleChart;
