import React, { useEffect } from 'react';

const AdvantageAPI = () => {
	const fetchPolygonData = async () => {
		const apiKey = process.env.POLY_API_KEY;
		const url = `https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?apiKey=${apiKey}`;

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

	useEffect(() => {
		fetchPolygonData(); // Fetch data when the component mounts
	}, []); // Empty dependency array means it runs once

	return <div>Fetching Polygon Data...</div>;
};

export default AdvantageAPI;
