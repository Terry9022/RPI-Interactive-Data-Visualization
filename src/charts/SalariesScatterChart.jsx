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
                        x: 180000,
                        y: 100000
                    },
                ],
                backgroundColor: "rgb(109, 101, 82)"
            },
            {
                label: "Data Scientist",
                data: [
                    {
                        x: 175000,
                        y: 120000
                    },
                ],
                backgroundColor: "rgb(143, 139, 102)"
            },
            {
                label: "UI/UX Designer",
                data: [
                    {
                        x: 120000,
                        y: 80000
                    },
                ],
                backgroundColor: "rgb(217, 80, 48)"
            },
            {
                label: "Product Manager",
                data: [
                    {
                        x: 200000,
                        y: 150000
                    },
                ],
                backgroundColor: "rgb(89, 35, 33)"
            },
            {
                label: "DevOps Engineer",
                data: [
                    {
                        x: 150000,
                        y: 130000
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
                    text: "Maximum Salary Amount ($/year)",
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
                text: "Average Salary vs. Maximum Salary, by Profession",
                font: {
                    size: 18,
                },
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return [" Maximum Salary: $" + context.parsed.x.toLocaleString() + "/year"," Average Salary: $" + context.parsed.y.toLocaleString() + "/year"];
                    }
                }
            }
        }
    };

    return <Scatter data={data} options={options} ref={chartRef}/>;
};

export default SalariesScatterChart;