import React from 'react';

const AdvantageAPI = async () => {
	const url = `https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?apiKey=${process.env.POLY_API_KEY}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'e9fa5c1e9emshbaa329f12260eacp1dad05jsn7872cda1885d',
			'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
		},
	};
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(url, options);
				const result = await response.json();
				setStockData(result); // Update state when data is fetched
			} catch (error) {
				console.error(error);
			}
		}
	}, []);
};
