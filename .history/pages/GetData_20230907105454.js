import { fetchData } from 'next-auth/client/_utils';
import React, { useState } from 'react';

export default function GetData(onDataFetched) {
	const [data, setData] = useState([]);
	async function dataRetrieve() {
		try {
			const response = await fetch('/api/getStocks', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const data = await response.json();
			console.log(fetchData);
		} catch (error) {
			console.error(error);
		}
	}
	return <button onClick={dataRetrieve}>Get Data</button>;
}
