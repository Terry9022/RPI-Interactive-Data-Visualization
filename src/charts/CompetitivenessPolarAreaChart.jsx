import { PolarArea } from "react-chartjs-2";
import { Chart } from "chart.js";
import { useRef } from "react";

Chart.register();

const SalariesPolarAreaChart = () => {
    var applicantsData = [800,500,300,250,200]
    var applicantsLabels = ["Software Engineer","Data Scientist","DevOps Engineer","Product Manager","UI/UX Designer"]
    var applicantsBgColors = ["rgba(75, 192, 192, 0.6)","rgba(255, 99, 132, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 206, 86, 0.6)","rgba(54, 162, 235, 0.6)"]
    var experienceData = [10,7,6,5,2]
    var experienceLabels = ["Product Manager","UI/UX Designer","Software Engineer","Data Scientist","DevOps Engineer"]
    var experienceBgColors = ["rgba(255, 206, 86, 0.6)","rgba(54, 162, 235, 0.6)","rgba(75, 192, 192, 0.6)","rgba(255, 99, 132, 0.6)","rgba(153, 102, 255, 0.6)"]
    var dataState = "applicants"

    const chartRef = useRef(null)

    const data = {
        labels: applicantsLabels,
        datasets: [
            {
                data: applicantsData,
                backgroundColor: applicantsBgColors
            }
        ],
    };

    function toggleChartData() {
        if(dataState == "applicants") {
            dataState = "experience"
            chartRef.current.data.labels = experienceLabels
            chartRef.current.data.datasets[0].data = experienceData
            chartRef.current.data.datasets[0].backgroundColor = experienceBgColors
            chartRef.current.options.plugins.title.text = "Average Amount of Experience (Years) Required by Profession"
            document.getElementById("togglePolarAreaChartData").innerHTML = "Compare Amount of Applicants"
            chartRef.current.update()
        }
        else if(dataState == "experience") {
            dataState = "applicants"
            chartRef.current.data.labels = applicantsLabels
            chartRef.current.data.datasets[0].data = applicantsData
            chartRef.current.data.datasets[0].backgroundColor = applicantsBgColors
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