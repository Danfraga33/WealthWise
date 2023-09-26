import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	PointElement,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	LineElement,
	PointElement,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const LineChart = (props) => {
	console.log(props);
	const [chartData, setChartData] = useState({
		datasets: [],
	});

	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		const labels = [];
		const startTime = 'Jan 2000'; //This is the start time of the data
		const months = ['Jan', 'July'];
		let currentYear = parseInt(startTime.split(' ')[1]);
		let currentSemiAMonthIndex = months.indexOf(startTime.split(' ')[0]);

		for (let i = 0; i < 55; i++) {
			labels.push(`${months[currentSemiAMonthIndex]} ${currentYear}`);
			currentSemiAMonthIndex++;

			if (currentSemiAMonthIndex === 2) {
				currentSemiAMonthIndex = 0;
				currentYear++;
			}
		}
		setChartData({
			labels: labels,

			datasets: [
				{
					label: 'Current Portfolio Performance',
					data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
					borderColor: 'rgb(53, 162, 235)',
					backgroundColor: 'rgb(53, 162, 235, 0.4',
				},
				{
					label: 'Target Portfolio Performance',
					data: [
						1000000, 1100000, 1210000, 1331000, 1464100, 1610510, 1771561, 1948717,
						2143588, 2357946, 2593741, 2853115, 3138426, 3452268, 3797494, 4177243,
						4594967, 5054464]
					],
					borderColor: 'rgb(21, 12, 25)',
					backgroundColor: 'rgb(53, 162, 235, 0.4',
				},
				{
					label: 'S&P500',
					data: [
						1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400,
						2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500,
						3600, 3700, 3800, 3900, 4000, 4100, 4200, 4300, 4400, 4500, 4600,
						4700, 4800, 4900, 5000, 5100, 5200, 5300, 5400, 5500, 5600, 5700,
						5800, 5900, 6000, 6100, 6200,
					],
					borderColor: 'rgb(21, 12, 25)',
					backgroundColor: 'rgb(53, 162, 235, 0.4',
				},
			],
		});
		setChartOptions({
			plugins: {
				legend: {
					position: 'top',
				},
				title: {
					display: true,
				},
			},
			maintainAspectRatio: false,
			responsive: true,
		});
	}, [1]);

	return (
		<div className="w-full md:col-span-2 relative lg:h-[7-vh] h-[70vh] m-auto p-4 border rounded-lg bg-white">
			<Line data={chartData} options={chartOptions} />
		</div>
	);
};

export default LineChart;
