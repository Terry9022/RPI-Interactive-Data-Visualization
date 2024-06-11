import { Scatter } from "react-chartjs-2";
import { Chart } from "chart.js";
import { useRef } from "react";

Chart.register();

const SalariesScatterChart = () => {
    const chartRef = useRef(null)

    const data = {
        datasets: [
            {
                label: "Software Engineer",
                data: [
                    {
                        x: 800,
                        y: 6
                    },
                ],
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                pointStyle: "circle"
            },
            {
                label: "Data Scientist",
                data: [
                    {
                        x: 500,
                        y: 5
                    },
                ],
                backgroundColor: "rgba(255, 99, 132, 0.6)",
                pointStyle: "rectRot"
            },
            {
                label: "UI/UX Designer",
                data: [
                    {
                        x: 200,
                        y: 7
                    },
                ],
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                pointStyle: "rect"
            },
            {
                label: "Product Manager",
                data: [
                    {
                        x: 250,
                        y: 10
                    },
                ],
                backgroundColor: "rgba(255, 206, 86, 0.6)",
                pointStyle: "rectRounded"
            },
            {
                label: "DevOps Engineer",
                data: [
                    {
                        x: 300,
                        y: 2
                    }
                ],
                backgroundColor: "rgba(153, 102, 255, 0.6)",
                pointStyle: "triangle"
            }
        ]
    };

    const options = {
        responsive: true,
        interaction: {
            mode: "dataset"
        },
        elements: {
            point: {
                radius: 10
            }
        },
        scales: {
            x: {
                display: true,
                min: 0,
                title: {
                    display: true,
                    text: "Average Amount of Applicants",
                    font: {
                        size: 14
                    },
                    padding: 30
                }
            },
            y: {
                display: true,
                min: 0,
                title: {
                    display: true,
                    text: "Average Amount of Experience Required (Years)",
                    font: {
                        size: 14
                    },
                    padding: 30
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true
                }
            },
            title: {
                display: true,
                text: "Average Amount of Experience Required vs. Average Amount of Applicants, by Profession",
                font: {
                    size: 14,
                },
                align: "end"
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return [" Average applicants: " + context.parsed.x.toLocaleString() + ""," Average experience required: " + context.parsed.y.toLocaleString() + " years"];
                    }
                }
            }
        }
    };

    return <Scatter data={data} options={options} ref={chartRef}/>;
};

export default SalariesScatterChart;