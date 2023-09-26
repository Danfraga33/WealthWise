import React from 'react';

const url = 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e9fa5c1e9emshbaa329f12260eacp1dad05jsn7872cda1885d',
		'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com',
	},
};

export default async function stockAPI() {
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}
