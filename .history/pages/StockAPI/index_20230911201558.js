import React, { useEffect, useState } from 'react';
import csvParser from 'csv-parser';
import * as csv from 'csvtojson';
import * as JSONToCSV from 'json2csv';
import Papa from 'papaparse';

dotenv.config();

//INDIVIDUALS
// const IndividualData = () => {
// 	useEffect(() => {
// 		const fetchPolygonData = async () => {
// 			const url =
// 				'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=SQJDDTC0SKKBCBNP';
// 			try {
// 				const response = await fetch(url);
// 				if (response.ok) {
// 					const fetchedData = await response.json();
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
// export default IndividualData;

//ALL DATA
export default function AllData() {
	const [jsonData, setJsonData] = useState([]);
	useEffect(() => {
		const fetchedAllData = async () => {
			const apiKey = 'SQJDDTC0SKKBCBNP';
			const url = `https://www.alphavantage.co/query?function=LISTING_STATUS&apikey=${apiKey}`;
			try {
				const response = await fetch(url);
				if (response.ok) {
					const csvText = await response.text();
					const results = [];
					const csvStream = csvParser();
					csvStream.on('data', (data) => results.push(data));
					csvStream.on('end', () => {
						// At this point, 'results' contains the JSON data
						setJsonData(results);
					});
					csvStream.write(csvText);
					csvStream.end();
					// console.log(results);
					// Papa.parse(res, {
					// 	complete: function (results) {
					// 		console.log('Finished:', results.data);
					// 	},
					// });
				} else {
					console.error('Error loading Page');
				}
			} catch (error) {
				console.log('Error: ', error);
			}
		};
		fetchedAllData();
	}, []);

	return (
		<div>
			<h1>AlphaVintage</h1>
			<pre>{JSON.stringify(jsonData, null, 2}</pre>
		</div>
	)
}
