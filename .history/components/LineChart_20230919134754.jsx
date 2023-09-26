import React, { useState, useEffect, useRef, useContext } from 'react';
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
				// console.log(weeklyPricedDatesWithClose);

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
				// console.log(updatedWeeklyPricedDatesWithClose);

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
				// console.log(multipliedData);

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

				const sumByDate = calculateSum(multipliedData);
				const chartValues = Object.values(sumByDate);

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

				const sma = calculateSMA(chartValues, 104);
				///////////////////////////////////////////////////

				const { initialAmount, targetAmount, ageDifference } = contextCtx;
				function calculateWeeklyGrowth(
					initialAmount,
					targetAmount,
					expectedTimeFrame
				) {
					if (
						initialAmount <= 0 ||
						targetAmount <= initialAmount ||
						expectedTimeFrame <= 0
					) {
						return [];
					}

					// Calculate the annual interest rate compounded annually
					const annualInterestRate =
						((targetAmount / initialAmount) ** (1 / (expectedTimeFrame / 52)) -
							1) *
						100;

					// Calculate weekly growth
					const weeklyInterestRate = annualInterestRate / 52;
					const growthData = [initialAmount];
					let currentAmount = initialAmount;

					for (let week = 1; week <= expectedTimeFrame; week++) {
						currentAmount += currentAmount * (weeklyInterestRate / 100);
						growthData.push(currentAmount.toFixed(2)); // Round to 2 decimal places
					}

					return growthData;
				}

				// Example usage:
				const dad = 1000; // Initial amount in dollars
				const mom = 1500; // Target amount in dollars
				const expectedTimeFrame = 52; // Expected time frame in weeks

				const growthData = calculateWeeklyGrowth(dad, mom, expectedTimeFrame);
				console.log(growthData);

				/////////////////////////
				setDates(dates);
				setLabels(labels);
				setChartData({
					labels: labels,
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
							data: [],
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
		<div className="w-full md:col-span-2 relative lg:h-[7-vh] h-[70vh] m-auto p-4 border rounded-lg bg-white shadow-lg ">
			<h1 className="flex justify-center w-100">Weekly Networth Tracker</h1>
			<Line data={chartData} options={chartOptions} className="hidden" />
		</div>
	);
};
export default LineChart;
