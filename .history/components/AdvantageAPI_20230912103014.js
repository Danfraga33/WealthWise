import React from 'react';

const AdvantageAPI = async () => {
	const url =
		'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=W9CVELHZSPZ1NS0G';

	try {
		const response = await fetch(url);

		if (response.ok) {
			console.log(response);
		}
	} catch (error) {
		console.error(error);
	}
};

export default AdvantageAPI;
