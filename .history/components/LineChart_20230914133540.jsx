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
	const [labels, setLabels] = useState({});
	const ticker = portfolioData[0].ticker;
	const position = portfolioData[0].positionSize;
	const dateOfPurchase = portfolioData[0].dateOfPurchase;

	// Time Series Data
	async function getTimeSeriesData(ticker) {
		const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=full&apikey=demo`;

		try {
			const response = await fetch(url);

			if (response.ok) {
				const fetchedData = await response.json();
				const dailyClosePrices = fetchedData['Time Series (Daily)'];
				console.log(dailyClosePrices);

				setLabels(Object.keys(dailyClosePrices));
				labels.push('2035-01-01');
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
	// console.log(labels);

	useEffect(() => {
		getTimeSeriesData(ticker);

		// console.log(portfolioData[0].ticker);
	}, []);

	const mongoDBData = portfolioData;
	const initialAmountRef = useRef();
	const targetInputRef = useRef();
	const annualGrowthRateRef = useRef();

	const [initialAmount, setInitialAmount] = useState(1000000);
	const [targetAmount, setTargetAmount] = useState(5000000);
	const [annualGrowthRate, setAnnualGrowthRate] = useState(0.1);

	const [timeSeriesData, setTimeSeriesData] = useState([]);

	const totalValue = () =>
		portfolioData.reduce((sum, stock) => sum + stock.marketValue, 0);

	const [periodsToReachTarget, setPeriodsToReachTarget] = useState(0);

	// console.log(periodsToReachTarget);
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

	function handleTargetChange() {
		const newInitialAmount = parseFloat(initialAmountRef.current.value);
		const newTargetAmount = parseFloat(targetInputRef.current.value);
		const newGrowthRate = parseFloat(annualGrowthRateRef.current.value);

		setInitialAmount(newInitialAmount);
		setTargetAmount(newTargetAmount);
		setAnnualGrowthRate(newGrowthRate);

		setPeriodsToReachTarget(
			calculatePeriodsToReachTarget(
				newInitialAmount,
				newTargetAmount,
				newGrowthRate
			) * 2
		);
		console.log(periodsToReachTarget);
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
	});
	console.log(portfol);

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

		for (let i = 0; i < periodsToReachTarget; i++) {
			labels.push(`${months[currentSemiAMonthIndex]} ${currentYear}`);
			currentSemiAMonthIndex += 6;

			if (currentSemiAMonthIndex > 11) {
				currentSemiAMonthIndex = 0;
				currentYear++;
			}
		}
		setChartData({
			labels: labels,

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
	}, [periodsToReachTarget]);

	return (
		<>
			<div className="w-full md:col-span-2 relative lg:h-[7-vh] h-[70vh] m-auto p-4 border rounded-lg bg-white shadow-lg">
				<Line data={chartData} options={chartOptions} />
			</div>
		</>
	);
};

export default LineChart;
