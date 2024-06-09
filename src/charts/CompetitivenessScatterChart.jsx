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
                backgroundColor: "rgb(109, 101, 82)"
            },
            {
                label: "Data Scientist",
                data: [
                    {
                        x: 500,
                        y: 5
                    },
                ],
                backgroundColor: "rgb(143, 139, 102)"
            },
            {
                label: "UI/UX Designer",
                data: [
                    {
                        x: 200,
                        y: 7
                    },
                ],
                backgroundColor: "rgb(217, 80, 48)"
            },
            {
                label: "Product Manager",
                data: [
                    {
                        x: 250,
                        y: 10
                    },
                ],
                backgroundColor: "rgb(89, 35, 33)"
            },
            {
                label: "DevOps Engineer",
                data: [
                    {
                        x: 300,
                        y: 2
                    }
                ],
                backgroundColor: "rgb(45, 87, 44)"
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
                title: {
                    display: true,
                    text: "Average Amount of Applicants",
                    font: {
                        size: 16
                    },
                    padding: 30
                }
            },
            y: {
                display: true,
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
            title: {
                display: true,
                text: "Average Amount of Experience Required vs. Average Amount of Applicants, by Profession",
                font: {
                    size: 18,
                },
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