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

// const PolyGon = () => {
// 	// console.log(process.env);

// 	useEffect(() => {
// 		const fetchPolygonData = async () => {
// 			const url =
// 				'https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/week/2005-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=WsJDp42rPMioim4r9xtNIK3GLoRpi1z5';
// 			// ('https://www.alphavantage.co/query?function=LISTING_STATUS&apikey=');
// 			const options = {
// 				method: 'GET',
// 			};

// 			try {
// 				const response = await fetch(url, options);
// 				if (response.ok) {
// 					const fetchedData = await response.json();
// 					const { results } = fetchedData;
// 					console.log(fetchedData);
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

// export default PolyGon;
///////////////////////////////////

const AdvantageAPI = () => {
	useEffect(() => {
		const fetchPolygonData = async () => {
			const url = 'https://api.marketstack.com/v1/tickers/aapl/';
			const params = {
				access_key: 'f6dd4dd812a298ca21850b169713d683',
			};

			try {
				const response = await fetch(`${url}?access_key=${access_key}`);
				if (response.ok) {
					const fetchedData = await response.json();
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
export default AdvantageAPI;
