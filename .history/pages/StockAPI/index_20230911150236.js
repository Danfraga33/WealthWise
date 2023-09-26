import React, { useEffect, useState } from 'react';
import dotenv from 'dotenv';
import csvParser from 'csv-parser';
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

// function AllAlphaVantageData() {
// 	useEffect(() => {
// 		const fetchedAllData = async () => {
// 			const apiKey = 'SQJDDTC0SKKBCBNP';
// 			const url = `https://www.alphavantage.co/query?function=LISTING_STATUS&apikey=${apiKey}`;
// 			try {
// 				const response = await fetch(url);
// 				if (response.ok) {
// 					const fetchedData = await response.json();
// 					// console.log(fetchedData);
// 				} else {
// 					console.error('Error loading Page');
// 				}
// 			} catch (error) {
// 				console.log('Error: ', error);
// 			}
// 		};
// 		fetchedAllData();
// 	});
// }

// export default AllAlphaVantageData;
