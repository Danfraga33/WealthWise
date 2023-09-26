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
import Link from 'next/link';

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

const LineChart = ({ portfolioData }) => {
	// console.log(portfolioData);
	const totalValue = () =>
		portfolioData.reduce((sum, stock) => sum + stock.marketValue, 0);

	function calculatePeriodsToReachTarget(
		initialAmount,
		targetAmount,
		annualGrowthRate
	) {
		let periods = 0;
		let currentAmount = initialAmount;

		while (currentAmount < targetAmount) {
			currentAmount += currentAmount * annualGrowthRate;
			periods++;
		}

		return periods;
	}
	const dates = [];

	const datesData = portfolioData.map((data) => {
		return data;
	});
	datesData.forEach((stock) => dates.push(stock.dateOfPurchase));

	//FIND EARLIEST DATE
	const earliestDate = dates.reduce((previousDate, currentDate) => {
		if (currentDate < previousDate) {
		  return currentDate;
		}
		return previousDate;
	console.log(earliestDate);
	// console.log(dates);

	const initialAmount = 1000000;
	const targetAmount = 5000000;
	const annualGrowthRate = 0.1;

	const periodsToReachTarget =
		calculatePeriodsToReachTarget(
			initialAmount,
			targetAmount,
			annualGrowthRate
		) * 2;

	// console.log(
	// 	`It will take ${periodsToReachTarget} years to reach ${targetAmount} from ${initialAmount} with an annual growth rate of ${
	// 		annualGrowthRate * 100
	// 	}%.`
	// );

	// console.log(`Your Value is: ${totalValue()}`);

	const [chartData, setChartData] = useState({
		datasets: [],
	});

	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		//GOAL
		const labels = [];
		const startTime = 'Jan 2000';
		const months = ['Jan', 'July'];
		let currentYear = parseInt(startTime.split(' ')[1]);
		let currentSemiAMonthIndex = months.indexOf(startTime.split(' ')[0]);

		for (let i = 0; i < periodsToReachTarget; i++) {
			labels.push(`${months[currentSemiAMonthIndex]} ${currentYear}`);
			currentSemiAMonthIndex++;

			if (currentSemiAMonthIndex > 1) {
				currentSemiAMonthIndex = 0;
				currentYear++;
			}
		}
		setChartData({
			labels: labels,

			datasets: [
				{
					label: 'Current Portfolio Value',
					data: [],
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
					label: 'Dummy Trend',
					data: [],
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
	}, []);

	return (
		<>
			<div className="w-full md:col-span-2 relative lg:h-[7-vh] h-[70vh] m-auto p-4 border rounded-lg bg-white shadow-lg">
				<div className="grid grid-cols-3 gap-">
					<div className="md:flex md:flex-col text-center">
						<label htmlFor="initial">Initial Amount: </label>
						<div>
							<span>$</span>
							<input
								id="initial"
								type="number"
								placeholder="Starting Amount"
								className="text-center border p-1 outline-none rounded-md"
							/>
						</div>
					</div>
					<div className="md:flex md:flex-col text-center">
						<label htmlFor="targetAmount">Target Amount: </label>
						<div>
							<span>$</span>
							<input
								id="targetAmount"
								type="number"
								placeholder="$2000000"
								className="text-center border p-1 outline-none rounded-md"
							/>
						</div>
						<Link href="/questionnaire">
							<button className="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white italic font-semibold rounded-md shadow-md text-sm mt-1">
								Need Help ?
							</button>
						</Link>
					</div>
					<div className="md:flex md:flex-col text-center">
						<label htmlFor="expectedReturn">Expected Return: </label>
						<div>
							<input
								id="expectedReturn"
								type="number"
								placeholder="10%"
								className="text-center border p-1 outline-none rounded-md"
							/>
							<span>%</span>
						</div>
					</div>
				</div>
				<Line data={chartData} options={chartOptions} />
			</div>
		</>
	);
};

export default LineChart;
