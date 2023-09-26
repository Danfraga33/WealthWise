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

const LineChart = () => {
	const [chartData, setChartData] = useState({
		datasets: [],
	});

	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		setChartData({
			labels: [
				'2000',
				'2001',
				'2002',
				'2003',
				'2004',
				'2005',
				'2006',
				'2007',
				'2008',
				'2009',
				'2010',
				'2011',
				'2012',
				'2013',
				'2014',
				'2015',
				'2016',
				'2017',
				'2018',
				'2019',
				'2020',
				'2021',
				'2022',
			],

			datasets: [
				{
					label: 'Current Portfolio Performance',
					data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
					borderColor: 'rgb(53, 162, 235)',
					backgroundColor: 'rgb(53, 162, 235, 0.4',
				},
				{
					label: 'Target Portfolio Performance',
					data: [11127, 18000, 19490, 17938, 24182, 17842, 22475],
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
