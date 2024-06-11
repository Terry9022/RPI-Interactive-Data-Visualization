import { Bar } from "react-chartjs-2";
import { useRef } from "react";
import { Chart, CategoryScale, BarElement } from "chart.js";

Chart.register(CategoryScale, BarElement);

const SalariesBarChart = () => {
    const chartRef = useRef(null)

    var averageData = [[80000,120000], [80000,100000], [60000,80000], [150000,200000], [75000,100000]]
    var maximumData = [[100000,180000], [120000,175000], [75000,120000], [200000,250000], [100000,150000]]
    var dataState = "average"

    const data = {
        labels: [
            "Junior Level",
            "Senior Level"
        ],
        datasets: [
            {
                label: "Software Engineer",
                data: averageData[0],
                backgroundColor: "rgba(75, 192, 192, 0.6)"
            },
            {
                label: "Data Scientist",
                data: averageData[1],
                backgroundColor: "rgba(255, 99, 132, 0.6)"
            },
            {
                label: "UI/UX Designer",
                data: averageData[2],
                backgroundColor: "rgba(54, 162, 235, 0.6)"
            },
            {
                label: "Product Manager",
                data: averageData[3],
                backgroundColor: "rgba(255, 206, 86, 0.6)"
            },
            {
                label: "DevOps Engineer",
                data: averageData[4],
                backgroundColor: "rgba(153, 102, 255, 0.6)"
            }
        ],
    };

    function toggleChartData() {
        if(dataState == "average") {
            dataState = "maximum"
            for (var i = 0; i < chartRef.current.data.datasets.length; i++) {
                chartRef.current.data.datasets[i].data = maximumData[i]
            }
            chartRef.current.options.plugins.title.text = "Salary Maximums by Profession"
            chartRef.current.options.scales.y.title.text = "Maximum Salary Amount ($/year)"
            document.getElementById("toggleBarChartData").innerHTML = "Compare Salary Averages"
            chartRef.current.update()
        }
        else if(dataState == "maximum") {
            dataState = "average"
            for (var i = 0; i < chartRef.current.data.datasets.length; i++) {
                chartRef.current.data.datasets[i].data = averageData[i]
            }
            chartRef.current.options.plugins.title.text = "Salary Averages by Profession"
            chartRef.current.options.scales.y.title.text = "Average Salary Amount ($/year)"
            document.getElementById("toggleBarChartData").innerHTML = "Compare Salary Maximums"
            chartRef.current.update()
        }
    }

    const options = {
        responsive: true,
        scales: {
            y: {
                display: true,
                max: 250000,
                title: {
                    display: true,
                    text: "Average Salary Amount ($/year)",
                    font: {
                        size: 16
                    },
                    padding: 30
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: "Salary Averages by Profession",
                font: {
                    size: 18,
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return " $" + context.parsed.y.toLocaleString() + "/year";
                    }
                }
            }
        }
    };

    return <div>
        <Bar data={data} options={options} ref={chartRef}/>
        <div style={{width: "50%", marginLeft: "30%"}}>
          <button style={{width: "100%"}} id="toggleBarChartData" className="bg-blue-500 rounded text-white p-2 m-5 hover:bg-blue-600" onClick={toggleChartData}>Compare Salary Maximums</button>
        </div>
    </div>;
};

export default SalariesBarChart;