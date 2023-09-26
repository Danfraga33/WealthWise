import { useEffect } from 'react';

async function getTimeSeriesData(ticker) {
	const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${ticker}&apikey=demo`;

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
			//Find Nearest Friday to Date Day
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

			const earliestDate101 = portfolioData[0].dateOfPurchase;
			const earliestFriday = findNearestFriday(earliestDate101);
			const startingPoint = findNearestFriday(earliestFriday);
			const startIndex = dates.indexOf(startingPoint);
			//////////////// LABELS //////////////////////////
			const labels = dates.slice(startIndex);

			//Correct so far for labels

			//////////////////////////////////////////////////////////
			////// NETWORTH (DATA)
			// Need to extract only the weeklyClosePrices from the starting point
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
						sma.push(null);
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
						pointRadius: 0,
					},
					{
						label: `SMA ${movingAveragePeriod}`,
						data: movingAverageData,
						borderColor: 'rgba(255, 100, 100, 0.5)',
						backgroundColor: 'rgba(255, 100, 100, 0.9)',
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
			await getTimeSeriesData(ticker);
		} catch (error) {
			console.error(error);
		}
	}
	fetchData();
}, [ticker]);
