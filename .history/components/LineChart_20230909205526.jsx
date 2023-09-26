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
	const initialAmount = 1000000; // 1 million
	const growthRate = 0.1; // 8.33% annual growth
	const goalAmount = 5000000;
	const periods = 55;

	const data = Array.from({ length: periods }, (_, i) => {
		return Math.round(
			(goalAmount - initialAmount) * Math.pow(1 + growthRate, i)
		);
	});
	console.log(data);
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
						1000000, 1050000, 1102500, 1157625, 1215506, 1276281, 1340094,
						1407109, 1477465, 1551338, 1628904, 1710349, 1795866, 1885659,
						1979942, 2078939, 2182886, 2292020, 2406621, 2526952, 2653290,
						2785954, 2925252, 3071515, 3225081, 3386335, 3555651, 3733433,
						3910105, 4105610, 4310891, 4526436, 4752758, 4990396, 5249916,
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
