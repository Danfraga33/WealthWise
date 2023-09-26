import React, { useEffect } from 'react';
import dotenv from 'dotenv';
dotenv.config();

const AdvantageAPI = () => {
	// console.log(process.env);
	const apiKey = process.env.POLY_API_KEY;
	console.log(apiKey);
	useEffect(() => {
		const fetchPolygonData = async () => {
			const url = `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey=WsJDp42rPMioim4r9xtNIK3GLoRpi1z5`;

			try {
				const response = await fetch(url);
				if (response.ok) {
					const fetchedData = await response.json();
					const { results } = fetchedData;
					const tickers = results.forEach((stock) => {
						return stock.T;
					});
					console.log(tickers);
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

export default AdvantageAPI;
