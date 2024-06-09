import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js";
import { useRef } from "react";

Chart.register();

const SalariesBarChart = () => {
    const chartRef = useRef(null)

    var averageData = [100000, 120000, 80000, 150000, 130000]
    var maximumData = [180000, 175000, 120000, 200000, 150000]
    var dataState = "average"

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
                data: averageData,
                backgroundColor: [
                    "rgb(109, 101, 82)",
                    "rgb(143, 139, 102)",
                    "rgb(217, 80, 48)",
                    "rgb(89, 35, 33)",
                    "rgb(45, 87, 44)"
                ],
                borderColor: [
                    "rgb(109, 101, 82)",
                    "rgb(143, 139, 102)",
                    "rgb(217, 80, 48)",
                    "rgb(89, 35, 33)",
                    "rgb(45, 87, 44)"
                ],
                borderWidth: 1
            }
        ],
    };

    function toggleChartData() {
        if(dataState == "average") {
            dataState = "maximum"
            chartRef.current.data.datasets[0].data = maximumData
            chartRef.current.options.plugins.title.text = "Salary Maximums by Profession"
            chartRef.current.options.scales.y.title.text = "Maximum Salary Amount ($/year)"
            document.getElementById("toggleBarChartData").innerHTML = "Compare Salary Averages"
            chartRef.current.update()
        }
        else if(dataState == "maximum") {
            dataState = "average"
            chartRef.current.data.datasets[0].data = averageData
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
                max: 200000,
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
            legend: {
                display: false
            },
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