import React from 'react';

const url =
	'https://latest-stock-price.p.rapidapi.com/price?Indices=%3CREQUIRED%3E';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e9fa5c1e9emshbaa329f12260eacp1dad05jsn7872cda1885d',
		'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com',
	},
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
