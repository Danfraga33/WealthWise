import React from 'react';

const AdvantageAPI = async () => {
	const url =
		'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=demo';
	try{const response = await fetch(url);
	console.log(response)

	return <div>AdvantageAPI</div>;
};

export default AdvantageAPI;
