import React, { useEffect, useState } from 'react';
import dotenv from 'dotenv';
dotenv.config();

// const AdvantageAPI = () => {
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
// export default AdvantageAPI;

async function fetchAlphaVantageData() {
	// Replace "demo" apikey with your own key from https://www.alphavantage.co/support/#api-key
	const apiKey = 'SQJDDTC0SKKBCBNP';

	const response = await request.get({
		uri: `https://www.alphavantage.co/query?function=LISTING_STATUS&apikey=SQJDDTC0SKKBCBNP`,
		json: false, // Parse JSON response manually
	});

	const stream = new StringStream();
	stream.end(response);

	return stream
		.CSVParse() // parse CSV output into row objects
		.toArray(); // Convert stream to an array of objects
}

function AllAlphaVantageData() {
	useEffect(() => {
		async function fetchData() {
			try {
				const data = await fetchAlphaVantageData();
				console.log('Data:', data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		}

		fetchData();
	}, []);

	return null; // This component doesn't render anything, so return null
}

export default AllAlphaVantageData;
