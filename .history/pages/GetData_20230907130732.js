import React, { useState } from 'react';

export default function GetData({ onDataFetched }) {
	const [data, setData] = useState([]);
	async function dataRetrieve() {
		try {
			const response = await fetch('/api/getStocks', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const fetchedData = await response.json();
			setData(fetchedData);
			console.log(data);
			onDataFetched(data);
		} catch (error) {
			console.error(error);
		}
	}
	return <button onClick={dataRetrieve}>Get Data</button>;
}
