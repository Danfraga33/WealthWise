import React from 'react';

const AdvantageAPI = async () => {
	const url =
		'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=demo';
	const response = await fetch(url);

	return <div>AdvantageAPI</div>;
};

export default AdvantageAPI;
