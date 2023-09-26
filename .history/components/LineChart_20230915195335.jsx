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
	const [timeSeriesData, setTimeSeriesData] = useState();
	const [userMarketValues, setUserMarketValues] = useState([]);
	const [dates, setDates] = useState([]);
	const [labels, setLabels] = useState([]);
	// const [isLoading, setIsLoading] = useState(true);
	const [chartData, setChartData] = useState({
		datasets: [],
	});
	const [chartOptions, setChartOptions] = useState({});

	// Time Series Data (DATA)
	async function getTimeSeriesData(ticker) {
		const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=demo`;

		try {
			const response = await fetch(url);

			if (response.ok) {
				const fetchedData = await response.json();
				const weeklyPricesObject = fetchedData['Weekly Time Series'];
				// Convert the object into an array of key-value pairs
				const keyValueArray = Object.entries(weeklyPricesObject);

				// Reverse the array
				const reversedArray = keyValueArray.reverse();
				// Convert the reversed array back into an object
				const weeklyClosePrices = Object.fromEntries(reversedArray);

				setTimeSeriesData(weeklyClosePrices);

				const dates = Object.keys(weeklyClosePrices);

				const earliestDate101 = portfolioData[0].dateOfPurchase;
				const earliestFriday = findNearestFriday(earliestDate101);
				const starting = findNearestFriday(earliestFriday);
				const startIndex = dates.indexOf(starting);
				const labels = dates.slice(startIndex);
				const startingPoint = starting;

				// const extractedData = extractFromPointToEnd(dates, startingPoint);

				//Correct so far for labels

				//////////////////////////////////////////////////////////
				////// NETWORTH
				const random = extractFromPointToEnd(weeklyClosePrices, startingPoint);
				console.log({
					startingPoint,
					random,
					weekly: fetchedData['Weekly Time Series'],
				});
				const userMarketValues1 = Object.keys(random).map((date) => {
					const closePrice1 = parseFloat(random[date]['4. close']);
					const networth = closePrice1 * position;

					return networth;
				});
				console.log(timeSeriesData);
				///////////////////////////////////////////////////
				// MOVING AVERAGE
				function calculateSMA(data, period) {
					const sma = [];
					for (let i = 0; i < data.length; i++) {
						if (i < period - 1) {
							sma.push(null); // Not enough data points for SMA yet
						} else {
							const sum = data
								.slice(i - period + 1, i + 1)
								.reduce((acc, val) => acc + val, 0);
							const average = sum / period;
							sma.push(average);
						}
					}
					return sma;
				}

				const movingAveragePeriod = 20; // Adjust the period as needed

				const movingAverageData = calculateSMA(
					userMarketValues1,
					movingAveragePeriod
				);

				setDates(dates);
				setLabels(labels);
				setChartData({
					labels: labels,
					datasets: [
						{
							label: 'Current Portfolio Value',
							data: [...userMarketValues1],
							borderColor: 'rgb(53, 162, 235)',
							backgroundColor: 'rgb(53, 162, 235, 0.4',
							type: 'line',
						},
						{
							label: 'Target Portfolio Performance',
							data: [],
							borderColor: 'rgb(21, 12, 25)',
							backgroundColor: 'rgb(53, 162, 235, 0.4',
							type: 'line',
						},
						{
							label: `SMA ${movingAveragePeriod}`,
							data: movingAverageData,
							borderColor: 'rgb(255, 0, 0)',
							backgroundColor: 'rgb(255, 0, 0, 0.4)',
							type: 'line',
						},
					],
				});

				// setIsLoading(false);
			}
		} catch (error) {
			console.error(error);
			// setIsLoading(false);
		}
	}
	// PORTFOLIODATA IS DATA FROM MONGODB
	const ticker = portfolioData[0].ticker; //ONLY SELECTING THE FIRST
	const position = portfolioData[0].positionSize;

	useEffect(() => {
		async function fetchData() {
			try {
				// Call getTimeSeriesData with the specified ticker
				await getTimeSeriesData(ticker);
			} catch (error) {
				console.error(error);
				// setIsLoading(false);
			}
		}
		fetchData();
	}, [ticker]);

	// USING TICKER FsROM PORTFOLIO ON GETTIMESERIESDATA FUNCTION TO GET ALL PRICES AND DATES FOR THAT SPECIFIC TICKER
	///////////////////////////////////////////////////////////////////
	// DATA LABELS
	// CHANGE LABELS TO FIT INVESTMENT

	// GETTING STARTING POINT
	// FROM ENTIRE ARRAY OF LABELS, FIND THE DATE AND SLICE FROM THERE. DATE MOST LIKELY IS NOT ON A FRIDAY, THEREFORE WOULD NEED A FUNCTION TO FIND NEAREST FRIDAY.

	//1. FIND EARLIEST DATE OF PURCHASE

	// 2. DATE IS ON A WEDNESDAY, LETS FIND THE FRIDAY (END OF WEEK)
	function findNearestFriday(inputDate) {
		const date = new Date(inputDate);

		// Find the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
		const currentDay = date.getDay();

		// Calculate the number of days to add to reach the nearest Friday
		let daysToAdd = 5 - currentDay;

		// If the current day is after Friday (e.g., Saturday or Sunday), add days to reach the next Friday
		if (daysToAdd < 0) {
			daysToAdd += 7;
		}

		// Add the calculated number of days to the date
		date.setDate(date.getDate() + daysToAdd);

		// Format the result as 'YYYY-MM-DD'
		const formattedDate = date.toISOString().split('T')[0];

		return formattedDate;
	}

	// 3. FIND THE INDEX OF THE EARLIEST DATE IN THE DATES ARRAY.
	// Find the index of the earliestDate in the dates array

	// const startIndex = dates.indexOf(starting);
	// console.log(startIndex);
	// console.log(labels);
	// Check if the earliestDate exists in the dates array
	// useEffect(() => {
	// 	if (startIndex !== -1) {
	// 		// Use slice to create a new array starting from startIndex to the end
	// 		const newRange = dates.slice(startIndex);
	// 		console.log('FOUND DATE');
	// 		setLabels(newRange);
	// 	} else {
	// 		console.log('Earliest date not found in the array.');
	// 	}
	// }, [dates]);

	function extractFromPointToEnd(obj, startingKey) {
		console.log({ obj, startingKey });

		const subset = {};
		let foundStartingKey = false;

		for (const key in obj) {
			if (foundStartingKey) {
				subset[key] = obj[key];
			}
			if (key === startingKey) {
				foundStartingKey = true;
			}
		}

		console.log({ obj, startingKey });
		return subset;
	}

	// useEffect(() => {
	// 	setChartData({
	// 		labels: labels,

	// 		datasets: [
	// 			{
	// 				label: 'Current Portfolio Value',
	// 				data: [...userMarketValues1],
	// 				borderColor: 'rgb(53, 162, 235)',
	// 				backgroundColor: 'rgb(53, 162, 235, 0.4',
	// 				type: 'line',
	// 			},
	// 			{
	// 				label: 'Target Portfolio Performance',
	// 				data: [],
	// 				borderColor: 'rgb(21, 12, 25)',
	// 				backgroundColor: 'rgb(53, 162, 235, 0.4',
	// 				type: 'line',
	// 			},
	// 		],
	// 	});
	// 	setChartOptions({
	// 		plugins: {
	// 			legend: {
	// 				position: 'top',
	// 			},
	// 			title: {
	// 				display: true,
	// 			},
	// 		},
	// 		maintainAspectRatio: false,
	// 		responsive: true,
	// 	});
	// }, [userMarketValues]);

	function calculateSMA(data, period) {
		const sma = [];
		for (let i = 0; i < data.length; i++) {
			if (i < period - 1) {
				sma.push(null); // Not enough data points for SMA yet
			} else {
				const sum = data
					.slice(i - period + 1, i + 1)
					.reduce((acc, val) => acc + val, 0);
				const average = sum / period;
				sma.push(average);
			}
		}
		return sma;
	}

	return (
		<>
			<div className="w-full md:col-span-2 relative lg:h-[7-vh] h-[70vh] m-auto p-4 border rounded-lg bg-white shadow-lg">
				<Line data={chartData} options={chartOptions} />
			</div>
		</>
	);
};

export default LineChart;
