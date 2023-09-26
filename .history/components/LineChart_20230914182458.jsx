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
	const [userMarketValues, setUserMarketValues] = useState([]);
	// console.log(timeSeriesData);
	// console.log(userMarketValues);

	// Time Series Data (DATA)
	async function getTimeSeriesData(ticker) {
		// const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=full&apikey=demo`;
		const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=demo`;

		try {
			const response = await fetch(url);

			if (response.ok) {
				const fetchedData = await response.json();
				// console.log(fetchedData);
				const weeklyClosePrices = fetchedData['Weekly Time Series'];
				console.log(weeklyClosePrices);
				// const dailyClosePrices = fetchedData['Time Series (Daily)'];
				// console.log(dailyClosePrices);

				const userMarketValues = Object.keys(weeklyClosePrices).map((date) => {
					const closePrice = parseFloat(weeklyClosePrices[date]['4. close']);

					return closePrice;
				});
				userMarketValues.reverse();

				// console.log(userMarketValues);
				setUserMarketValues(userMarketValues);

				// Update state with fetched data
				setTimeSeriesData(fetchedData);
			}
		} catch (error) {
			console.error(error);
		}
	}

	// console.log(userMarketValues);
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
	const earliestDate = datesArr.reduce((previousDate, currentDate) => {
		if (currentDate < previousDate) {
			return currentDate;
		}
		return previousDate;
	});
	console.log(earliestDate);

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
	// function generateDatesArray(startDate, endDate) {
	// 	const dateArray = [];
	// 	const currentDate = new Date(startDate);
	// 	const finalDate = new Date(endDate);

	// 	while (currentDate <= finalDate) {
	// 		dateArray.push(new Date(currentDate));
	// 		currentDate.setDate(currentDate.getDate() + 1);
	// 	}

	// 	return dateArray;
	// }

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
	// console.log(xAxisLabels);
	///////////////////////////////////////////
	// DATA

	const data = {
		item1: { name: 'Apple', price: 1 },
		item2: { name: 'Banana', price: 0.5 },
		item3: { name: 'Cherry', price: 2 },
		item4: { name: 'Date', price: 1.5 },
		item5: { name: 'Fig', price: 2.2 },
	};
	function extractFromPoint(obj, startingKey) {
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

	const startingPoint = 'item3';
	const extractedData = extractFromPoint(userMarketValues, startingPoint);
	console.log(extractedData);

	const totalValue = () =>
		portfolioData.reduce((sum, stock) => sum + stock.marketValue, 0);

	const marketValueObject = {};

	for (let i = 0; i < xAxisLabels.length; i++) {
		marketValueObject[xAxisLabels[i]] = userMarketValues[i];
	}

	const netWorthValues = Object.values(marketValueObject);
	// console.log(marketValueObject);
	// console.log(netWorthValues);

	const marketValue = [];
	const values = Object.values(userMarketValues);
	// userMarketValues.map((value) => {
	// 	marketValue.pushObject.value);
	// });
	// console.log(typeof marketValue);
	// console.log(values);

	const [chartData, setChartData] = useState({
		datasets: [],
	});
	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		setChartData({
			labels: xAxisLabels,

			datasets: [
				{
					label: 'Current Portfolio Value',
					data: [...netWorthValues],
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
