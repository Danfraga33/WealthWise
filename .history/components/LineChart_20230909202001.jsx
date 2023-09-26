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
		setChartData({
			labels: [
				'Jan 2000',
				'Jul 2000',
				'Jan 2001',
				'Jul 2001',
				'Jan 2002',
				'Jul 2002',
				'Jan 2003',
				'Jul 2003',
				'Jan 2004',
				'Jul 2004',
				'Jan 2005',
				'Jul 2005',
				'Jan 2006',
				'Jul 2006',
				'Jan 2007',
				'Jul 2007',
				'Jan 2008',
				'Jul 2008',
				'Jan 2009',
				'Jul 2009',
				'Jan 2010',
				'Jul 2010',
				'Jan 2011',
				'Jul 2011',
				'Jan 2012',
				'Jul 2012',
				'Jan 2013',
				'Jul 2013',
				'Jan 2014',
				'Jul 2014',
				'Jan 2015',
				'Jul 2015',
				'Jan 2016',
				'Jul 2016',
				'Jan 2017',
				'Jul 2017',
				'Jan 2018',
				'Jul 2018',
				'Jan 2019',
				'Jul 2019',
				'Jan 2020',
				'Jul 2020',
				'Jan 2021',
				'Jul 2021',
				'Jan 2022',
				'Jul 2022',
				'Jan 2023',
				'Jul 2023',
				'Jan 2024',
				'Jul 2024',
				'Jan 2025',
				'Jul 2025',
			],

			datasets: [
				{
					label: 'Current Portfolio Performance',
					data: [{18127}, 22201, 19490, 17938, 24182, 17842, 22475],
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
