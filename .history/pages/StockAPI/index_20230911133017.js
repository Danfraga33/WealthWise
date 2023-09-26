import React, { useEffect, useState } from 'react';
import dotenv from 'dotenv';
dotenv.config();

// export default function YahooFinance() {
// 	const [data, setData] = useState(null);

// 	useEffect(() => {
// 		async function fetchData() {
// 			const url =
// 				'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=vas&region=AU';
// 			const options = {
// 				method: 'GET',
// 				headers: {
// 					'X-RapidAPI-Key':
// 						'e9fa5c1e9emshbaa329f12260eacp1dad05jsn7872cda1885d',
// 					'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
// 				},
// 			};

// 			try {
// 				const response = await fetch(url, options);
// 				if (response.ok) {
// 					const result = await response.json();
// 					setData(result);
// 					console.log(result);
// 				} else {
// 					console.error('Fetching Data Error');
// 				}
// 			} catch (error) {
// 				console.error(error);
// 			}
// 		}
// 		fetchData();
// 	}, []);

// 	// return (
// 	// 	<div>
// 	// 		<h1>Yahoo Data</h1>
// 	// 		{data ? <pre>{data}</pre> : <p>Loading...</p>}
// 	// 	</div>
// 	// );
// }

const AdvantageAPI = () => {
	// console.log(process.env);

	useEffect(() => {
		const fetchPolygonData = async () => {
			const url =
				'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=SQJDDTC0SKKBCBNP';
			// ('https://www.alphavantage.co/query?function=LISTING_STATUS&apikey=');
			const options = {
				method: 'GET',
			};

			try {
				const response = await fetch(url, options);
				if (response.ok) {
					const fetchedData = await response.json();
					const { results } = fetchedData;
					console.log(fetchedData);
				} else {
					console.error('Error fetching data');
				}
			} catch (error) {
				console.error(error);
			}
		};
		fetchPolygonData(); // Fetch data when the component mounts
	}, []); // Empty dependency array means it runs once

	return <div>Fetching Polygon Data...</div>;
};
// const AdvantageAPI = () => {
// 	// console.log(process.env);
// 	const apiKey = process.env.POLY_API_KEY;
// 	console.log(apiKey);
// 	useEffect(() => {
// 		const fetchPolygonData = async () => {
// 			const url = `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey=WsJDp42rPMioim4r9xtNIK3GLoRpi1z5`;

// 			try {
// 				const response = await fetch(url);
// 				if (response.ok) {
// 					const fetchedData = await response.json();
// 					const { results } = fetchedData;
// 					const tickers = results.forEach((stock) => {
// 						if (stock.T === 'AAPL') {
// 							console.log(stock);
// 						}
// 						console.log();
// 					});
// 				} else {
// 					console.error('Error fetching data');
// 				}
// 			} catch (error) {
// 				console.error(error);
// 			}
// 		};
// 		fetchPolygonData(); // Fetch data when the component mounts
// 	}, []); // Empty dependency array means it runs once

// 	return <div>Fetching Polygon Data...</div>;
// };

export default AdvantageAPI;
