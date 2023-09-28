import React from 'react';

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
			router.push('/Portfolio');
			return data;
			// console.log(data);
			// window.location.reload();
			// setFormData(initialFormData);
			// Task added successfully, you can redirect or perform other actions.
		} else {
			// Handle the response when there's an error.
			console.log('Failure');
		}
	} catch (error) {
		console.error('Error adding stock:', error);
		// Handle any network or other errors.
	}
}

export default PostData;
