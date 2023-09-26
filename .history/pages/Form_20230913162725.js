import React, { useRef, useState, useEffect } from 'react';
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
	const [suggestions, setSuggestions] = useState([]);
	const [individualStock, setIndividualStock] = useState(null);
	const [ticker, setTicker] = useState('');
	const [chosenStock, setChosenStock] = useState(null);

	useEffect(() => {
		//GETS ALL DATA
		const fetchAlphaData = async () => {
			const url = `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-09-12?adjusted=true&apiKey=WsJDp42rPMioim4r9xtNIK3GLoRpi1z5`;
			// const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=demo`;
			try {
				const response = await fetch(url);
				if (response.ok) {
					const fetchedData = await response.json();
					setIndividualStock(fetchedData);
					return fetchedData;
				} else {
					console.error('Error fetching data');
					return null;
				}
			} catch (error) {
				console.error(error);
				return null;
			}
		};
		fetchAlphaData();
	}, []);

	let targetObject = null;
	useEffect(() => {
		if (individualStock) {
			const results = individualStock.results;
			const chosenStock = (targetObject = results.find(
				(item) => item.T === ticker
			));
			setChosenStock(chosenStock);
		}
	}, [individualStock]);

	const handleStockSelection = (selectedStock) => {
		if (selectedStock) {
			//TICKER
			const ticker = selectedStock.ticker;

			const results = individualStock.results;
			const chosenStock = results.find((item) => item.T === ticker);
			lastPriceInputRef.current.value = chosenStock.c;
		}
		setSuggestions([]); // Clear suggestions
		setChosenStock(null);
	};

	function dropDown(e) {
		const typedTicker = e.target.value;
		const foundStock = allStocks.filter((stock) =>
			stock.ticker.includes(typedTicker.toUpperCase())
		);
		setSuggestions(foundStock);
		// console.log(suggestions.length);
		// foundStock.length > 0
		// 	? console.log('FOUND STOCK')
		// 	: console.log('NOT FOUND');
		// console.log(foundStock || null);
	}
	// First Created to enable ref={tickerInputRef}
	const tickerInputRef = useRef();
	const nameInputRef = useRef();
	const positionSizeInputRef = useRef();
	const avgPurchasePriceInputRef = useRef();
	const valueAtPurchaseInputRef = useRef();
	const lastPriceInputRef = useRef();
	const marketValueInputRef = useRef();
	const dateOfPurchaseRef = useRef();
	const newPurchaseInputRef = useRef();

	// const performanceInputRef = useRef();

	const [currentPurchase, setCurrentPurchase] = useState(false);

	function handleCheckBoxChange(e) {
		setCurrentPurchase(e.target.checked);
	}

	//Making Form
	async function submitHandler(event) {
		event.preventDefault();

		const enteredTicker = tickerInputRef.current.value;
		const enteredName = nameInputRef.current.value;
		const enteredPositionSize = positionSizeInputRef.current.value;
		const enteredavgPurchasePrice = avgPurchasePriceInputRef.current.value;
		const enteredLastPrice = lastPriceInputRef.current.value;
		const enteredDOP = dateOfPurchaseRef.current.value;
		// const enteredValueatPurchase = valueAtPurchaseInputRef.current.value;

		const initialValue = enteredPositionSize * enteredavgPurchasePrice;
		const marketValue = enteredLastPrice * enteredPositionSize;
		const performance = ((marketValue - initialValue) / initialValue) * 100;

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
			currentPurchase: Number(currentPurchase),
			performance: Number(performance),
			purchaseDate: new Date(enteredDOP).toISOString().split('T')[0],
		};

		console.log(typeof enteredDOP);
		// console.log('stock:', stock);

		//HTTP REQUESTS
		const response = await PostData(stock);
		if (response) {
			toast.message('Success', {
				description: 'Stock has been added to Portfolio',
			});
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
							{suggestions.length > 0 && (
								<div className="absolute bg-white border border-gray-300 mt-8 w-[90%] rounded-lg shadow-lg z-10 h-full overflow-hidden">
									<ul className="overflow-scroll">
										{suggestions.map((suggestion) => (
											<li
												key={suggestion.ticker}
												className="text-sm p-1  cursor-pointer hover:bg-gray-100"
												onClick={() => {
													tickerInputRef.current.value = suggestion.ticker;
													nameInputRef.current.value = suggestion.name;
													setTicker(suggestion.ticker);
													lastPriceInputRef.current.value;
													setChosenStock(null);
													handleStockSelection(suggestion);

													setSuggestions([]);
												}}
											>
												<div className="flex justify-between">
													<div className="flex flex-col">
														<div className="text">{suggestion.ticker}</div>
														<div className="text-xs">{suggestion.name}</div>
													</div>
													<p className="mr-2 text-xs">AUTOFILL</p>
												</div>
											</li>
										))}
									</ul>
								</div>
							)}
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
						{!currentPurchase ? (
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
									<label htmlFor="lastPrice">Last Price: </label>
									<input
										type="number"
										required
										id="lastPrice"
										className="ml-1 bg-gwhite rounded-lg text-center"
										ref={lastPriceInputRef}
										defaultValue={chosenStock ? chosenStock.c : ''}
										step="0.01"
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
									<label htmlFor="avgPurchasePrice">Avg Purchase Price: </label>
									<input
										type="number"
										required
										id="avgPurchasePrice"
										className="ml-1 bg-white rounded-lg text-center"
										ref={avgPurchasePriceInputRef}
										step="0.01"
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
							<label htmlFor="newPurchase">New Purchase: </label>
							<input
								type="checkbox"
								id="newPurchase"
								className="ml-1 bg-gwhite rounded-lg text-center"
								ref={newPurchaseInputRef}
								onChange={handleCheckBoxChange}
							/>
						</div>
						<div className="bg-gray-200 rounded-lg p-1 mb-1">
							<label htmlFor="date">Select a date:</label>
							<input
								type="date"
								id="date"
								name="date"
								className="ml-1 bg-gwhite rounded-lg text-center"
								ref={dateOfPurchaseRef}
							/>
						</div>

						<div className="bg-gray-200 rounded-lg p-1 mb-1">
							<button>Add</button>
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
