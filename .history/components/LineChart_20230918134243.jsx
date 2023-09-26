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
	const [allTimeSeriesData, setAllTimeSeriesData] = useState([]);
	const [userMarketValues, setUserMarketValues] = useState([]);
	const [networth, setNetworth] = useState();
	const [dates, setDates] = useState([]);
	const [labels, setLabels] = useState([]);
	const [fetchResults, setFetchResults] = useState([]);
	const [chartData, setChartData] = useState({
		datasets: [],
	});
	const [chartOptions, setChartOptions] = useState({});

	const tickers = [];
	portfolioData.map((stock) => {
		tickers.push(stock.ticker);
	});
	const ticker = portfolioData[0].ticker; //ONLY SELECTING THE FIRST
	const positions = [];
	portfolioData.map((stock) => {
		positions.push(stock.positionSize);
	});

	const position = portfolioData[0].positionSize;
	// console.log(position);

	// Time Series Data (DATA)
	async function getTimeSeriesData(ticker) {
		// const API = 'SQJDDTC0SKKBCBNP';
		// const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${ticker}&apikey=${API}`;
		const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${ticker}&apikey=demo`;

		try {
			const response = await fetch(url);

			if (response.ok) {
				const fetchedData = await response.json();

				const weeklyPricesObject = fetchedData['Weekly Time Series'];
				const keyValueArray = Object.entries(weeklyPricesObject);
				const reversedArray = keyValueArray.reverse();
				const weeklyClosePrices = Object.fromEntries(reversedArray);
				setAllTimeSeriesData((prevData) => [
					...prevData,
					{ ticker, data: weeklyClosePrices },
				]);

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

				//////////////// LABELS //////////////////////////
				////EARLIEST DATE
				const datesArr = [];
				//2. Map over all stocks, pushing dates into array
				portfolioData.map((stock) => {
					datesArr.push(stock.dateOfPurchase);
				});

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

				//3. finding the earliest date in the array
				function findEarliestDate(dates) {
					if (Array.isArray(dates) && dates.length > 0) {
						return dates.reduce((earliestDate, currentDate) =>
							currentDate < earliestDate ? currentDate : earliestDate
						);
					} else {
						return null;
					}
				}
				////ARRAY OF ALL FRIDAY DATES
				const allFridayDates = datesArr.map((date) => {
					const fridayDates = findNearestFriday(date);
					return fridayDates;
				});

				const earliestDate = findEarliestDate(allFridayDates);
				const dates = Object.keys(weeklyClosePrices);
				const startIndex = dates.indexOf(earliestDate);
				const labels = dates.slice(startIndex);

				const todaysDate = new Date(); // Assuming you have your latestDate object

				const year = todaysDate.getFullYear();
				const month = String(todaysDate.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so we add 1
				const day = String(todaysDate.getDate()).padStart(2, '0');

				const formattedDate = `${year}-${month}-${day}`; // You need to implement a function to find the latest date

				function createArrayOfDates(startDate, endDate) {
					const dateArray = [];
					let currentDate = new Date(startDate);

					while (currentDate <= todaysDate) {
						// Push the current date to the array
						dateArray.push(currentDate.toISOString().split('T')[0]);

						// Increment the current date by one day
						currentDate = new Date(currentDate);
						currentDate.setDate(currentDate.getDate() + 1);
					}

					return dateArray;
				}

				// Creates an array of dates from earliest to latest
				const allDates = createArrayOfDates(earliestDate, formattedDate); // Implement this function

				const resultData = [];
				allDates.forEach((date) => {
					// Check if there's a stock with a matching dateOfPurchase
					const matchingStock = portfolioData.find(
						(stock) => stock.dateOfPurchase === date
					);

					if (matchingStock) {
						// If a matching stock is found, add its data to the result
						resultData.push({
							date: date,
							value: matchingStock.marketValue, // You can adjust this to the value you want to use
						});
					} else {
						// If no matching stock earliestDateis found, add an entry with a value of 0
						resultData.push({
							date: date,
							value: 0,
						});
					}
				});

				///////////////PROBLEM
				/////////////////////THIS IS WHAT YOURE LOOKING FOR - NEED WEEKLYCLOSE FOR NEXT STOCK
				//////////////////////////////////////////////////////////
				////// NETWORTH (DATA)
				const weeklyPricedDates = allFridayDates.map((date) => {
					return extractFromPointToEnd(weeklyClosePrices, date);
				});
				// console.log(weeklyPricedDates);
				const weeklyPricedDatesWithClose = weeklyPricedDates.map((dateObj) => {
					const result = {};
					for (const date in dateObj) {
						result[date] = dateObj[date]['4. close'];
					}
					return result;
				});

				const updatedWeeklyPricedDatesWithClose =
					weeklyPricedDatesWithClose.map((dateObj) => {
						// Create a new object with the 'position' key added
						return {
							position: position,
							...dateObj,
						};
					});

				console.log(updatedWeeklyPricedDatesWithClose);

				const obj1 = weeklyPricedDatesWithClose[0];
				const obj2 = weeklyPricedDatesWithClose[1];
				// console.log(obj2);

				const obj3 = {};

				// Find the common keys between obj1 and obj2
				const commonKeys = Object.keys(obj1).filter((key) =>
					obj2.hasOwnProperty(key)
				);

				// Iterate through the keys and add values element-wise
				for (const key of Object.keys(obj1)) {
					if (commonKeys.includes(key)) {
						obj3[key] = (parseFloat(obj1[key]) + parseFloat(obj2[key])).toFixed(
							4
						);
					} else {
						obj3[key] = obj1[key];
					}
				}

				const values = Object.values(obj3);

				///////////////////////////////////////////////////////////////////////////////
				// MOVING AVERAGE

				function calculateSMA(data, period) {
					const sma = [];
					for (let i = period - 1; i < data.length; i++) {
						const sum = data
							.slice(i - period + 1, i + 1)
							.map((value) => parseFloat(value))
							.reduce((acc, val) => acc + val, 0);
						const average = sum / period;
						sma.push(average);
					}
					return sma;
				}

				const sma = calculateSMA(values, 52);

				///////////////////////////////////////////////////

				setDates(dates);
				setLabels(labels);
				setChartData({
					labels: labels,
					datasets: [
						{
							label: 'Current Portfolio Value',
							data: [...values],
							borderColor: 'rgb(53, 162, 235)',
							backgroundColor: 'rgb(53, 162, 235, 0.4',
							type: 'line',
							pointRadius: 0,
						},
						{
							label: 'SMA',
							data: [...sma],
							borderColor: 'rgb(255, 192, 192)',
							backgroundColor: 'rgb(53, 162, 235)',
							type: 'line',
							pointRadius: 0,
						},
					],
				});
			}
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		async function fetchData() {
			try {
				const fetchResults = await Promise.all(
					portfolioData.map(async (stock) => {
						const ticker = stock.ticker;
						await getTimeSeriesData(ticker);
					})
				);
			} catch (error) {
				console.error(error);
			}
		}
		fetchData();
	}, [portfolioData]);

	return (
		<>
			<div className="w-full md:col-span-2 relative lg:h-[7-vh] h-[70vh] m-auto p-4 border rounded-lg bg-white shadow-lg">
				<Line data={chartData} options={chartOptions} />
			</div>
		</>
	);
};
export default LineChart;
