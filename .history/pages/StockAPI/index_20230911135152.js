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

// export default PolyGon;
///////////////////////////////////

const AdvantageAPI = () => {
	useEffect(() => {
		const fetchPolygonData = async () => {
			const url =
				'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=SQJDDTC0SKKBCBNP';

			try {
				const response = await fetch(url);
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
