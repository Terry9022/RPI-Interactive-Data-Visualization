import { PolarArea } from "react-chartjs-2";
import { Chart } from "chart.js";
import { useRef } from "react";

Chart.register();

const SalariesPolarAreaChart = () => {
    var applicantsData = [800,500,200,250,300]
    var experienceData = [6,5,7,10,2]
    var dataState = "applicants"

    const chartRef = useRef(null)

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
                data: applicantsData,
                backgroundColor: [
                    "rgb(109, 101, 82)",
                    "rgb(143, 139, 102)",
                    "rgb(217, 80, 48)",
                    "rgb(89, 35, 33)",
                    "rgb(45, 87, 44)"
                ]
            }
        ],
    };

    function toggleChartData() {
        if(dataState == "applicants") {
            dataState = "experience"
            chartRef.current.data.datasets[0].data = experienceData
            chartRef.current.options.plugins.title.text = "Average Amount of Experience (Years) Required by Profession"
            document.getElementById("togglePolarAreaChartData").innerHTML = "Compare Amount of Applicants"
            chartRef.current.update()
        }
        else if(dataState == "experience") {
            dataState = "applicants"
            chartRef.current.data.datasets[0].data = applicantsData
            chartRef.current.options.plugins.title.text = "Average Amount of Applicants by Profession"
            document.getElementById("togglePolarAreaChartData").innerHTML = "Compare Amount of Experience Required"
            chartRef.current.update()
        }
    }

    const options = {
        responsive: true,
        elements: {
            point: {
                radius: 10
            }
        },
        scales: {
            r: {
                pointLabels: {
                    display: true,
                    centerPointLabels: true,
                    font: {
                        size: 18
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: "Average Amount of Applicants by Profession",
                font: {
                    size: 18,
                },
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        if(dataState == "applicants") return " Average applicants: " + context.parsed.r;
                        else return " Average experience required: " + context.parsed.r + " years";
                    }
                }
            }
        }
    };

    return <div>
        <div style={{width: "75%",marginLeft:"15%"}}>
            <PolarArea data={data} options={options} ref={chartRef}/>
        </div>
        <div style={{width: "50%", marginLeft: "27.5%",marginTop: "-7.5%"}}>
          <button style={{width: "100%"}} id="togglePolarAreaChartData" className="bg-blue-500 rounded text-white p-2 m-5 hover:bg-blue-600" onClick={toggleChartData}>Compare Amount of Experience Required</button>
        </div>
    </div>;
};

export default SalariesPolarAreaChart;