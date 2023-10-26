import React, { useState, useEffect, useRef, useContext } from 'react';
/* eslint-disable react/jsx-key */
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
import { CompoundContext } from '@/contextstore/DataContext';

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

const LineChart = ({ portfolioData, contextCtx }) => {
	if (!portfolioData) {
		return <div>Loading...</div>;
	} else if (portfolioData.length === 0) {
		return <div>Please add a stock</div>;
	}
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

	const ticker = portfolioData[1].ticker; //ONLY SELECTING THE FIRST

	const positions = [];
	portfolioData.map((stock) => {
		positions.push(stock.positionSize);
	});

	const position = portfolioData[0].positionSize;
	// Time Series Data (DATA)
	async function getTimeSeriesData(ticker) {
		// const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${ticker}&apikey=${VANTAGE_API}`;
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
				const labelsbefore = dates.slice(startIndex);

				const todaysDate = new Date(); // Assuming you have your latestDate object

				const year = todaysDate.getFullYear();
				const month = String(todaysDate.getMonth() + 1).padStart(2, '0'); // Month is
				const day = String(todaysDate.getDate()).padStart(2, '0');
				const formattedDate = `${year}-${month}-${day}`; // You need to implement a function

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

				const weeklyPricedDatesWithClose = weeklyPricedDates.map((dateObj) => {
					const result = {};
					for (const date in dateObj) {
						result[date] = dateObj[date]['4. close'];
					}
					return result;
				});

				//Extracting the closed price for each date for to multiply the holdings
				const updatedWeeklyPricedDatesWithClose = portfolioData.map(
					(stock, index) => {
						return {
							id: stock.id,
							ticker: stock.ticker,
							positionSize: stock.positionSize,
							...weeklyPricedDatesWithClose[index],
						};
					}
				);

				// // Example usage:
				const multipliedData = updatedWeeklyPricedDatesWithClose.map((item) => {
					const multipliedItem = { ...item }; // Create a copy of the item
					for (const key in multipliedItem) {
						if (!isNaN(multipliedItem[key]) && key !== 'positionSize') {
							multipliedItem[key] = (
								parseFloat(multipliedItem[key]) * multipliedItem.positionSize
							).toFixed(4);
						}
					}
					return multipliedItem;
				});

				//all looking good here. value it different for each date.
				// now to add and show on linechart
				// Problem: Dates for multipliedData is not align with labels. Solution: match dates.

				function calculateSum(data) {
					const sumByDate = {};

					// Loop through the data
					data.forEach((item) => {
						for (const key in item) {
							if (!isNaN(item[key]) && key !== 'positionSize') {
								if (!sumByDate[key]) {
									sumByDate[key] = 0;
								}
								sumByDate[key] += parseFloat(item[key]);
							}
						}
					});

					return sumByDate;
				}

				//NEEDS TO USE LABELSBEFORE DATES WHEN CALCULATING THE sumByDate
				const sumByDate = calculateSum(multipliedData);
				const chartValues = Object.values(sumByDate).reverse();
				const attempt = labelsbefore;

				// const dates = [F
				// 	'2023-08-25',
				// 	'2023-09-01',
				// 	'2023-09-08',
				// 	'2023-09-15',
				// 	'2023-09-18',
				// ];

				// Number of years to add

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

				const sma = calculateSMA(chartValues, 20);
				///////////////////////////////////////////////////

				const { initialAmount, targetAmount, ageDifference } = contextCtx;

				function calculateWeeklyGrowth(
					initialAmount,
					targetAmount,
					expectedTimeFrameInYears
				) {
					if (
						initialAmount <= 0 ||
						targetAmount <= initialAmount ||
						expectedTimeFrameInYears <= 0
					) {
						return [];
					}

					// Calculate the annual interest rate ed annually
					const expectedTimeFrameInWeeks = expectedTimeFrameInYears * 52; // Convert years to weeks
					const annualInterestRate =
						((targetAmount / initialAmount) ** (1 / expectedTimeFrameInYears) -
							1) *
						100;

					// Calculate weekly growth

					const weeklyInterestRate = annualInterestRate / 52;
					const growthData = [initialAmount];
					let currentAmount = initialAmount;

					for (let week = 1; week <= expectedTimeFrameInWeeks; week++) {
						currentAmount += currentAmount * (weeklyInterestRate / 100);
						growthData.push(currentAmount.toFixed(2)); // Round to 2 decimal places

						if (currentAmount >= targetAmount) {
							break; // Stop if the target amount is reached
						}
					}

					return growthData;
				}

				const growthData = calculateWeeklyGrowth(
					initialAmount,
					targetAmount,
					ageDifference
				);

				const startDate = new Date(); // Use your desired start date
				const labels = [];
				for (let i = 0; i < growthData.length; i++) {
					const date = new Date(startDate);
					date.setDate(startDate.getDate() + 7 * i); // Add 7 days (1 week) for each iteration
					const formattedDate = `${date.getFullYear()}-${String(
						date.getMonth() + 1
					).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
					labels.push(formattedDate);
				}

				///////////////////////////////////////////////////////

				const numberOfYearsToAdd = ageDifference;
				// Function to increase a date by one week (7 days)
				function increaseDateByOneWeek(dateString) {
					const date = new Date(dateString);
					date.setDate(date.getDate() + 7);
					return date.toISOString().split('T')[0]; // Format as "YYYY-MM-DD"
				}

				// Append weekly dates for the specified number of years
				for (let i = 0; i < numberOfYearsToAdd * 52; i++) {
					const lastDate = attempt[attempt.length - 1];
					const newDate = increaseDateByOneWeek(lastDate);
					attempt.push(newDate);
				}

				/////////////////////////
				setDates(dates);
				setLabels(labels);

				setChartData({
					labels: attempt,
					datasets: [
						{
							label: 'Current Portfolio Value',
							data: [...chartValues],
							borderColor: 'rgb(53, 162, 235)',
							backgroundColor: 'rgb(53, 162, 235, 0.4',
							type: 'line',
							pointRadius: 0,
						},
						{
							label: 'Goal Trendline',
							data: [...growthData],
							borderColor: 'rgb(255, 235, 48)',
							backgroundColor: 'rgb(53, 162, 235)',
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
		<div className="w-full md:col-span-2 relative lg:h-[7-vh] h-[70vh] m-auto p-4 border rounded-lg bg-white shadow-lg hidden md:block">
			<h1 className="flex justify-center w-100">Weekly Networth Tracker</h1>
			<Line
				data={chartData}
				options={chartOptions}
				className="hidden md:block"
			/>
		</div>
	);
};
export default LineChart;
