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
