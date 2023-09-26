import React, { useState, useEffect, useRef } from 'react';
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
	const [timeSeriesData, setTimeSeriesData] = useState([]);
	// Time Series Data (DATA)
	async function getTimeSeriesData(ticker) {
		const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=full&apikey=demo`;

		try {
			const response = await fetch(url);

			if (response.ok) {
				const fetchedData = await response.json();
				const dailyClosePrices = fetchedData['Time Series (Daily)'];
				// console.log(dailyClosePrices);

				const userMarketValues = Object.keys(dailyClosePrices).map((date) => {
					const closePrice = parseFloat(dailyClosePrices[date]['4. close']);
					return closePrice * position;
				});
				// console.log(userMarketValues);

				// Update state with fetched data
				setTimeSeriesData(fetchedData);
			}
		} catch (error) {
			console.error(error);
		}
	}

	// PORTFOLIODATA IS DATA FROM MONGODB
	const ticker = portfolioData[0].ticker;
	const position = portfolioData[0].positionSize;
	const dateOfPurchase = portfolioData[0].dateOfPurchase;

	//COMBINING DATA
	useEffect(() => {
		getTimeSeriesData(ticker);
	}, []);

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
	});

	const originalDate = dates[0];
	const date = new Date(originalDate);

	// Add 10 years to the date
	date.setFullYear(date.getFullYear() + 20);

	// Convert the updated date back to the 'YYYY-MM-DD' format
	const updatedDate = `${date.getFullYear()}-${String(
		date.getMonth() + 1
	).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

	dates.push(updatedDate);

	function generateDatesArray(startDate, endDate) {
		const dateArray = [];
		const currentDate = new Date(startDate);
		const finalDate = new Date(endDate);

		while (currentDate <= finalDate) {
			dateArray.push(new Date(currentDate));
			currentDate.setDate(currentDate.getDate() + 1);
		}

		return dateArray;
	}

	const startDate = dates[0];
	const endDate = dates[1];
	const dateArray = generateDatesArray(startDate, endDate);

	const dateStringArray = dateArray.map((date) => {
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		return `${year}-${month}-${day}`;
	});

	// console.log(dateStringArray);
	///////////////////////////////////////////
	const totalValue = () =>
		portfolioData.reduce((sum, stock) => sum + stock.marketValue, 0);

	function convertDate(inputDate) {
		const date = new Date(inputDate);
		const monthNames = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];

		const month = monthNames[date.getMonth()];
		const year = date.getFullYear();

		return `${month} ${year}`;
	}

	const earliestDateConverted = convertDate(earliestDate);

	// const periodsToReachTarget =
	// 	calculatePeriodsToReachTarget(
	// 		initialAmount,
	// 		targetAmount,
	// 		annualGrowthRate
	// 	) * 2;

	// console.log(
	// 	`It will take ${periodsToReachTarget} years to reach ${targetAmount} from ${initialAmount} with an annual growth rate of ${
	// 		annualGrowthRate * 100
	// 	}%.`
	// );

	const [chartData, setChartData] = useState({
		datasets: [],
	});

	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		//GOAL
		const labels = [];
		const startTime = earliestDateConverted;
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];

		let currentYear = parseInt(startTime.split(' ')[1]);
		let currentSemiAMonthIndex = months.indexOf(startTime.split(' ')[0]);

		for (let i = 0; i < 10; i++) {
			labels.push(`${months[currentSemiAMonthIndex]} ${currentYear}`);
			currentSemiAMonthIndex += 6;

			if (currentSemiAMonthIndex > 11) {
				currentSemiAMonthIndex = 0;
				currentYear++;
			}
		}
		setChartData({
			labels: dateStringArray,

			datasets: [
				{
					label: 'Current Portfolio Value',
					data: [
						// Need to make an array and store it in the users db, of the below.
						// Initial Amount, stock price 1 week after * holdings, 1 week after,
					],
					borderColor: 'rgb(53, 162, 235)',
					backgroundColor: 'rgb(53, 162, 235, 0.4',
				},
				{
					label: 'Target Portfolio Performance',
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
	}, [10]);

	return (
		<>
			<div className="w-full md:col-span-2 relative lg:h-[7-vh] h-[70vh] m-auto p-4 border rounded-lg bg-white shadow-lg">
				<Line data={chartData} options={chartOptions} />
			</div>
		</>
	);
};

export default LineChart;
