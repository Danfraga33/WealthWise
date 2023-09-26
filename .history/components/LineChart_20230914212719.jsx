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
	const [newRange, setNewRange] = useState([]);
	const [currentNetWorth, setCurrentNetWorth] = useState([]);

	// console.log(dates);
	// console.log(labels);
	// Time Series Data (DATA)
	async function getTimeSeriesData(ticker) {
		// const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=full&apikey=demo`;
		const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=demo`;

		try {
			const response = await fetch(url);

			if (response.ok) {
				const fetchedData = await response.json();
				setTimeSeriesData(fetchedData);
				// console.log(fetchedData);
				const weeklyPricesObject = fetchedData['Weekly Time Series'];
				// Convert the object into an array of key-value pairs
				const keyValueArray = Object.entries(weeklyPricesObject);

				// Reverse the array
				const reversedArray = keyValueArray.reverse();

				// Convert the reversed array back into an object
				const weeklyClosePrices = Object.fromEntries(reversedArray);
				// const reversed = weeklyPricesObject.reverse();
				// console.log(weeklyClosePrices);

				// console.log(weeklyPricesObject);
				// const dailyClosePrices = fetchedData['Time Series (Daily)'];
				// console.log(dailyClosePrices);

				const userMarketValues = Object.keys(weeklyClosePrices).map((date) => {
					const closePrice = parseFloat(weeklyClosePrices[date]['4. close']);

					return closePrice;
				});

				// console.log(userMarketValues);
				const dates = Object.keys(weeklyClosePrices);
				setDates(Object.keys(weeklyClosePrices));
				setUserMarketValues(userMarketValues);
			}
		} catch (error) {
			console.error(error);
		}
	}
	// PORTFOLIODATA IS DATA FROM MONGODB
	const ticker = portfolioData[0].ticker; //ONLY SELECTING THE FIRST
	const position = portfolioData[0].positionSize;
	const dateOfPurchase = portfolioData[0].dateOfPurchase;

	// USING TICKER FROM PORTFOLIO ON GETTIMESERIESDATA FUNCTION TO GET ALL PRICES AND DATES FOR THAT SPECIFIC TICKER
	useEffect(() => {
		getTimeSeriesData(ticker);
	}, []);

	///////////////////////////////////////////////////////////////////
	// LABELS

	const datesArr = [];
	// 1. Push all dates to datesArr all dates
	portfolioData.forEach((stock) => datesArr.push(stock.dateOfPurchase));

	// 2. Find earliest Date
	const earliestDate = portfolioData[0].dateOfPurchase;

	// 3. Create a date 20 Years in the future
	const originalDate = datesArr[0];
	const date = new Date(originalDate);

	// Add 20 years to the date
	date.setFullYear(date.getFullYear() + 20);

	// Convert the updated date back to the 'YYYY-MM-DD' format
	const updatedDate = `${date.getFullYear()}-${String(
		date.getMonth() + 1
	).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

	// PUSH LATEST DATE TO ARRAY TO SHOW FIRST AND LAST DATE
	datesArr.push(updatedDate);

	// 4. Generate Daily Dates between the first and last date.
	function generateWeeklyDatesArray(startDate, endDate) {
		const dateArray = [];
		const currentDate = new Date(startDate);
		const finalDate = new Date(endDate);

		while (currentDate <= finalDate) {
			dateArray.push(new Date(currentDate));
			currentDate.setDate(currentDate.getDate() + 7); // Increment by 7 days for weekly dates
		}

		return dateArray;
	}

	const startDate = datesArr[0];
	const endDate = datesArr[1];
	const dateArray = generateWeeklyDatesArray(startDate, endDate);

	const dateStringArray = dateArray.map((date) => {
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		return `${year}-${month}-${day}`;
	});

	const xAxisLabels = dateStringArray;
	///////////////////////////////////////////
	// DATA
	// CHANGE LABELS

	function extractFromPointToEnd(obj, startingKey) {
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

		return subset;
	}

	// GETTING STARTING POINT
	// FROM ENTIRE ARRAY OF LABELS, FIND THE DATE AND SLICE FROM THERE. DATE MOST LIKELY IS NOT ON A FRIDAY, THEREFORE WOULD NEED A FUNCTION TO FIND NEAREST FRIDAY.

	//1. FIND EARLIEST DATE OF PURCHASE
	const earliestDate101 = portfolioData[0].dateOfPurchase;

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
	const earliestFriday = findNearestFriday(earliestDate101);
	// console.log(dates);
	const starting = findNearestFriday(earliestFriday);

	// 3. FIND THE INDEX OF THE EARLIEST DATE IN THE DATES ARRAY.
	// Find the index of the earliestDate in the dates array
	const startIndex = dates.indexOf(starting);

	// Check if the earliestDate exists in the dates array
	useEffect(() => {
		if (startIndex !== -1) {
			// Use slice to create a new array starting from startIndex to the end
			const newRange = dates.slice(startIndex);
			setLabels(newRange);

			// console.log(newRange);
		} else {
			console.log('Earliest date not found in the array.');
		}
	}, [dates, starting]);

	const startingPoint = starting;
	const extractedData = extractFromPointToEnd(dates, startingPoint);
	// console.log(dates);
	// console.log(extractedData);
	// const tester = Object.entries(extractedData);
	// console.log(tester);
	// console.log(userMarketValues);
	//Correct so far

	//////////////////////////////////////////////////////////
	////// NETWORTH
	const marketValueObject = {};

	for (let i = 0; i < xAxisLabels.length; i++) {
		marketValueObject[xAxisLabels[i]] = userMarketValues[i];
	}

	const netWorthValues = Object.values(marketValueObject);

	const marketValue = [];
	const values = Object.values(userMarketValues);
	const netWorth = userMarketValues.map((price) => {
		const currentNetWorth = (price * position).toFixed(2);
		// setCurrentNetWorth(currentNetWorth);
		return currentNetWorth;
	});
	console.log(userMarketValues);

	// console.log(netWorth);
	// console.log(position);
	// console.log(userMarketValues);

	const [chartData, setChartData] = useState({
		datasets: [],
	});
	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		setChartData({
			labels: labels,

			datasets: [
				{
					label: 'Current Portfolio Value',
					data: [...netWorth],
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
	}, [userMarketValues]);

	return (
		<>
			<div className="w-full md:col-span-2 relative lg:h-[7-vh] h-[70vh] m-auto p-4 border rounded-lg bg-white shadow-lg">
				<Line data={chartData} options={chartOptions} />
			</div>
		</>
	);
};

export default LineChart;
