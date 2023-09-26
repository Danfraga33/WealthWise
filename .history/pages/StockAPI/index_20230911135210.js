import React, { useEffect, useState } from 'react';
import dotenv from 'dotenv';
dotenv.config();

const AdvantageAPI = () => {
	useEffect(() => {
		const fetchPolygonData = async () => {
			const url =
				'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=ACN&apikey=SQJDDTC0SKKBCBNP';

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
