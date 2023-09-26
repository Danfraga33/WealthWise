import React, { useEffect, useState } from 'react';
import csvParser from 'csv-parser';
import { allStocks } from '@/data/allStocks';

// const IndividualData = () => {
// 	useEffect(() => {
// 		const fetchPolygonData = async () => {
// 			const url =
// 				'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=S5EXI4C9NV70PN3A';
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

const index = () => {
	console.log(allStocks);
	return <div>index</div>;
};

export default index;
// export default function AllData() {
// 	useEffect(() => {
// 		const fetchedAllData = async () => {
// 			const apiKey = 'SQJDDTC0SKKBCBNP';
// 			const url = `https://www.alphavantage.co/query?function=LISTING_STATUS&apikey=${apiKey}`;
// 			try {
// 				const response = await fetch(url);
// 				if (response.ok) {
// 					const fetchedData = await response.text();
// 					console.log(fetchedData);
// 				} else {
// 					console.error('Error loading Page');
// 				}
// 			} catch (error) {
// 				console.log('Error: ', error);
// 			}
// 		};
// 		fetchedAllData();
// 	}, []);
// }
