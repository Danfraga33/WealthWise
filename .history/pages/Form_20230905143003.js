import React, { useRef, useState } from 'react';
import { Modal, Box } from '@mui/material';
import { useRouter } from 'next/router';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3,
	borderRadius: '30px',
};

const Form = (props) => {
	const [formData, setFormData] = useState({ ticker: '', name: '' });
	// First Created to enable ref={tickerInputRef}
	const tickerInputRef = useRef();
	const nameInputRef = useRef();
	const positionSizeInputRef = useRef();
	const avgPurchasePriceInputRef = useRef();
	const valueAtPurchaseInputRef = useRef();
	const lastPriceInputRef = useRef();
	const marketValueInputRef = useRef();
	// const performanceInputRef = useRef();

	//Making Form
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
			ticker: enteredTicker,
			name: enteredName,
			positionSize: enteredPositionSize,
			avgPurchasePrice: enteredavgPurchasePrice,
			valueAtPurchase: enteredvalueAtPurchase,
			lastPrice: enteredLastPrice,
			marketValue: enteredMarketValue,
			performance: performance,
		};
		console.log(stock);

		setFormData(stock);

		try {
			const response = await fetch('/api/addStock', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(stock),
			});

			if (response.ok) {
				window.location.reload();
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

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<>
			<button onClick={handleOpen}>Add New</button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<form onSubmit={submitHandler}>
						<div className="bg-gray-200 rounded-lg p-1 mb-1">
							<label htmlFor="title">Ticker: </label>
							<input
								type="text"
								required
								id="title"
								className="bg-gwhite rounded-lg ml-1 text-center"
								ref={tickerInputRef}
							/>
						</div>
						<div className="bg-gray-200 rounded-lg p-1 mb-1">
							<label htmlFor="image">Name: </label>
							<input
								type="text"
								required
								id="image"
								className="bg-gwhite rounded-lg ml-1 text-center"
								ref={nameInputRef}
							/>
						</div>
						<div className="bg-gray-200 rounded-lg p-1 mb-1">
							<label htmlFor="address">Position Size: </label>
							<input
								type="number"
								required
								id="address"
								className="ml-1 bg-gwhite rounded-lg text-center"
								ref={positionSizeInputRef}
							/>
						</div>
						<div className="bg-gray-200 rounded-lg p-1 mb-1">
							<label htmlFor="description">Avg Purchase Price: </label>
							<input
								type="text"
								required
								id="address"
								className="ml-1 bg-gwhite rounded-lg text-center"
								ref={avgPurchasePriceInputRef}
							/>
						</div>
						<div className="bg-gray-200 rounded-lg p-1 mb-1">
							<label htmlFor="description">Value @ Purchase: </label>
							<input
								type="text"
								required
								id="address"
								className="ml-1 bg-gwhite rounded-lg text-center"
								ref={valueAtPurchaseInputRef}
							/>
						</div>
						<div className="bg-gray-200 rounded-lg p-1 mb-1">
							<label htmlFor="description">Last Price: </label>
							<input
								type="text"
								required
								id="address"
								className="ml-1 bg-gwhite rounded-lg text-center"
								ref={lastPriceInputRef}
							/>
						</div>
						<div className="bg-gray-200 rounded-lg p-1 mb-1">
							<label htmlFor="description">Market Value: </label>
							<input
								type="text"
								required
								id="address"
								className="ml-1 bg-gwhite rounded-lg text-center"
								ref={marketValueInputRef}
							/>
						</div>
						<div className="bg-gray-200 rounded-lg p-1 mb-1">
							<button>Submit</button>
						</div>
					</form>
				</Box>
			</Modal>
		</>
	);
};

export default Form;
