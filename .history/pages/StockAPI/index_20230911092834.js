import React, { useEffect } from 'react';

const AdvantageAPI = () => {
	useEffect(() => {
		const apiKey = process.env.POLY_API_KEY;
		console.log(apiKey);
		// const fetchPolygonData = async () => {
			// const url = `https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?apiKey=WsJDp42rPMioim4r9xtNIK3GLoRpi1z5`;
			// try {
			// 	const response = await fetch(url);
			// 	if (response.ok) {
			// 		const fetchedData = await response.json();
			// 		console.log(fetchedData);
			// 	} else {
			// 		console.error('Error fetching data');
			// 	}
			// } catch (error) {
			// 	console.error(error);
			// }
		// };

	// 	fetchPolygonData(); // Fetch data when the component mounts
	// }, []); // Empty dependency array means it runs once

	return <div>Fetching Polygon Data...</div>;
};

export default AdvantageAPI;
