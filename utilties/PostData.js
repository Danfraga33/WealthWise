import React from 'react';
import { useRouter } from 'next/router';

async function PostData(stock) {
	try {
		const response = await fetch('/api/addStocks', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(stock),
		});

		if (response.ok) {
			const data = await response.json();
			window.location.reload();

			return data;
			// setFormData(initialFormData);
			// Task added successfully, you can redirect or perform other actions.
		} else {
			// console.log('Failure');
		}
	} catch (error) {
		console.error('Error adding stock:', error);
	}
}

export default PostData;
