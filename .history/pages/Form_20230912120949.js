import React, { useRef, useState } from 'react';
import { Modal, Box } from '@mui/material';
import PostData from './PostData';
import { Toaster, toast } from 'sonner';
import { allStocks } from '@/data/allStocks';

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

const Form = () => {
	const [suggestions, setSuggestions] = useState();
	function dropDown(e) {
		const typedTicker = e.target.value;
		const foundStock = allStocks.filter((stock) =>
			stock.ticker.includes(typedTicker.toUpperCase())
		);
		setSuggestions(foundStock);

		foundStock.length > 0
			? console.log('FOUND STOCK')
			: console.log('NOT FOUND');
		console.log(foundStock || null);
	}
	// First Created to enable ref={tickerInputRef}
	const tickerInputRef = useRef();
	const nameInputRef = useRef();
	const positionSizeInputRef = useRef();
	const avgPurchasePriceInputRef = useRef();
	const valueAtPurchaseInputRef = useRef();
	const lastPriceInputRef = useRef();
	const marketValueInputRef = useRef();
	const watchlistInputRef = useRef();
	// const performanceInputRef = useRef();

	const [isWatchlistChecked, setIsWatchListChecked] = useState(false);

	function handleCheckBoxChange(e) {
		setIsWatchListChecked(e.target.checked);
	}

	//Making Form
	async function submitHandler(event) {
		event.preventDefault();

		const enteredTicker = tickerInputRef.current.value;
		const enteredName = nameInputRef.current.value;
		const enteredPositionSize = positionSizeInputRef.current.value;
		const enteredavgPurchasePrice = avgPurchasePriceInputRef.current.value;
		const enteredLastPrice = lastPriceInputRef.current.value;
		// const enteredValueatPurchase = valueAtPurchaseInputRef.current.value;

		const currentValue = enteredPositionSize * enteredLastPrice;
		const initialValue = enteredPositionSize * enteredavgPurchasePrice;
		const marketValue = enteredLastPrice * enteredPositionSize;
		const performance = ((currentValue - initialValue) / initialValue) * 100;

		// console.log(isWatchlistChecked);
		// console.log('enteredPositionSize:', typeof enteredPositionSize); //String
		// console.log('enteredLastPrice:', typeof enteredLastPrice); //String
		// console.log('marketValue:', marketValue);

		//Form
		const stock = {
			summary: {
				ticker: enteredTicker,
				name: enteredName,
			},
			positionSize: Number(enteredPositionSize),
			avgPurchasePrice: Number(enteredavgPurchasePrice),
			valueAtPurchase: Number(initialValue),
			lastPrice: Number(enteredLastPrice),
			marketValue: Number(marketValue),
			watchlist: Number(isWatchlistChecked),
			performance: Number(performance),
		};
		console.log('stock:', stock);

		//HTTP REQUESTS
		const response = await PostData(stock);
		if (response) {
			console.log('Success', response);
		}
	}

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
		// console.log(isWatchlistChecked);
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
						<div
							className="
					flex	bg-gray-200 rounded-lg p-1 mb-1"
						>
							<label htmlFor="title">Ticker: </label>
							<input
								onChange={dropDown}
								type="text"
								required
								id="ticker"
								className="bg-gwhite rounded-lg ml-1 text-center relative"
								ref={tickerInputRef}
							/>

							<svg
								className="w-2 h-2 ml-2"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 10 6"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m1 1 4 4 4-4"
								/>
							</svg>
						</div>
						<div className="bg-gray-200 rounded-lg p-1 mb-1">
							<label htmlFor="image">Name: </label>
							<input
								type="text"
								required
								id="name"
								className="bg-gwhite rounded-lg ml-1 text-center"
								ref={nameInputRef}
							/>
						</div>
						{!isWatchlistChecked ? (
							<>
								<div className="bg-gray-200 rounded-lg p-1 mb-1">
									<label htmlFor="address">Position Size: </label>
									<input
										type="number"
										required
										id="positionSize"
										className="ml-1 bg-gwhite rounded-lg text-center"
										ref={positionSizeInputRef}
									/>
								</div>

								<div className="bg-gray-200 rounded-lg p-1 mb-1">
									<label htmlFor="description">Avg Purchase Price: </label>
									<input
										type="number"
										required
										id="avgPurchasePrice"
										className="ml-1 bg-gwhite rounded-lg text-center"
										ref={avgPurchasePriceInputRef}
									/>
								</div>

								<div className="bg-gray-200 rounded-lg p-1 mb-1">
									<label htmlFor="description">Last Price: </label>
									<input
										type="number"
										required
										id="lastPrice"
										className="ml-1 bg-gwhite rounded-lg text-center"
										ref={lastPriceInputRef}
									/>
								</div>
							</>
						) : (
							<>
								<div className="bg-gray-200 rounded-lg p-1 mb-1">
									<label htmlFor="address">Position Size: </label>
									<input
										type="number"
										required
										id="positionSize"
										className="ml-1 bg-gwhite rounded-lg text-center"
										ref={positionSizeInputRef}
									/>
								</div>

								<div className="bg-gray-200 rounded-lg p-1 mb-1">
									<label htmlFor="description">Avg Purchase Price: </label>
									<input
										type="number"
										required
										id="avgPurchasePrice"
										className="ml-1 bg-gwhite rounded-lg text-center"
										ref={avgPurchasePriceInputRef}
									/>
								</div>

								<div className="bg-gray-200 rounded-lg p-1 mb-1">
									<label htmlFor="description">Last Price: </label>
									<input
										type="number"
										required
										id="lastPrice"
										className="ml-1 bg-gwhite rounded-lg text-center"
										ref={lastPriceInputRef}
									/>
								</div>
							</>
						)}
						<div className="bg-gray-200 rounded-lg p-1 mb-1">
							<label htmlFor="description">Watchlist: </label>
							<input
								type="checkbox"
								id="watchlist"
								className="ml-1 bg-gwhite rounded-lg text-center"
								ref={watchlistInputRef}
								onChange={handleCheckBoxChange}
							/>
						</div>

						<div className="bg-gray-200 rounded-lg p-1 mb-1">
							<button
								onClick={() =>
									toast.message('Success', {
										description: 'Stock has been added to Portfolio',
									})
								}
							>
								Add
							</button>
						</div>
					</form>
				</Box>
			</Modal>

			<Toaster
				expand={false}
				position="bottom-right"
				toastOptions={{
					style: {
						fontWeight: 'bolder',
						background: 'white',
						boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.7)',
					},
				}}
			/>
		</>
	);
};

export default Form;
