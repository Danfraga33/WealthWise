import React from 'react';

const PostData = () => {
	async function submitHandler(event) {
		event.preventDefault();

		const enteredTicker = tickerInputRef.current.value;
		const enteredName = nameInputRef.current.value;
		const enteredPositionSize = positionSizeInputRef.current.value;
		const enteredavgPurchasePrice = avgPurchasePriceInputRef.current.value;
		const enteredvalueAtPurchase = valueAtPurchaseInputRef.current.value;
		const enteredLastPrice = lastPriceInputRef.current.value;
		const enteredMarketValue = marketValueInputRef.current.value;

		const currentValue = enteredPositionSize * enteredLastPrice;
		const initialValue = enteredPositionSize * enteredavgPurchasePrice;
		const performance = ((currentValue - initialValue) / initialValue) * 100;

		//Form
		const stock = {
			summary: {
				ticker: enteredTicker,
				name: enteredName,
			},
			positionSize: enteredPositionSize,
			avgPurchasePrice: enteredavgPurchasePrice,
			valueAtPurchase: enteredvalueAtPurchase,
			lastPrice: enteredLastPrice,
			marketValue: enteredMarketValue,
			performance: performance,
		};
		console.log(stock);
		//HTTP REQUESTS
		try {
			const response = await fetch('/api/addStocks', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(stock),
			});

			if (response.ok) {
				// window.location.reload();
				// router.push('/Portfolio');
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
	return <div>PostData</div>;
};

export default PostData;
