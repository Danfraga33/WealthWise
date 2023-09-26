import React from 'react';

const AdvantageAPI = () => {
	const url =
      'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=demo';
   
      try {
			const response = await fetch('/api/getStocks', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (response.ok) {
				const fetchedData = await response.json();
				console.log(fetchedData);
				setData(fetchedData);
				console.log(fetchedData);
				onDataFetched(fetchedData);
			}
		} catch (error) {
			console.error(error);
		}
	}
	return <button onClick={dataRetrieve}>Get Data</button>;
}
   
	return <div>AdvantageAPI</div>;
};

export default AdvantageAPI;
