import React, { useEffect, useState } from 'react';
import dotenv from 'dotenv';
dotenv.config();

export default async function YahooFinance() {
	const url =
		'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=AU';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'e9fa5c1e9emshbaa329f12260eacp1dad05jsn7872cda1885d',
			'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
		},
	};

	useEffect(() => {
		async function getYahooData() {
			try {
				const response = await fetch(url, options);
				const result = await response.text();
				console.log(result);
			} catch (error) {
				console.error(error);
			}
		}
	}, []);
}

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
// 						console.log(stock.T);
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

// export default AdvantageAPI;
