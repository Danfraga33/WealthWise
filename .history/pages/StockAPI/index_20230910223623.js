import React from 'react';

const AdvantageAPI = async () => {
	const url =
		'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=e9fa5c1e9emshbaa329f12260eacp1dad05jsn7872cda1885d';  headers: {
			'X-RapidAPI-Key': 'e9fa5c1e9emshbaa329f12260eacp1dad05jsn7872cda1885d',
			'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
		 }

	try {
		const response = await fetch(url);

		if (response.ok) {
			const fetchedData = await response.json();
			console.log(fetchedData);
		}
	} catch (error) {
		console.error(error);
	}
};

export default AdvantageAPI;
