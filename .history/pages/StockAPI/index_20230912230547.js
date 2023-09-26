import React, { useEffect, useState } from 'react';
import csvParser from 'csv-parser';
import { allStocks } from '@/data/allStocks';
import Form from '../Form';

const fetchAlphaData = async () => {
	const url =
		'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=S5EXI4C9NV70PN3A';
	try {
		const response = await fetch(url);
		if (response.ok) {
			const fetchedData = await response.json();
			return fetchedData;
		} else {
			console.error('Error fetching data');
		}
	} catch (error) {
		console.error(error);
	}
};

// Fetch data when the component mounts // Empty dependency array means it runs once
export default fetchAlphaData;
