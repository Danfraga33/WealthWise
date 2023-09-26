import React, { useRef } from 'react';
import { Modal, Box, Typography } from '@mui/material';

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
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();
	function submitHandler(event) {
		event.preventDefault();

		const enteredTitle = titleInputRef.current.value;
		const enteredImage = imageInputRef.current.value;
		const enteredAddress = addressInputRef.current.value;
		const enteredDescription = descriptionInputRef.current.value;

		const currentValue = enteredPositionSize * enteredLastPrice;
		const initialValue = enteredPositionSize * enteredavgPurchasePrice;
		const performance = ((currentValue - initialValue) / initialValue) * 100;

		const stock = {
			ticker: enteredTicker,
			name: enteredName,
			positionSize: enteredPositionSize,
			avgPurchasePrice: enteredavgPurchasePrice,
			valueAtPurchase: enteredvalueAtPurchase,
			lastPrice: enteredLastPrice,
			marketValue: currentValue,
			performance: performance,
		};

		props.onAddMeetup(meetupData);
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
								className="bg-gwhite rounded-lg ml-1"
								ref={titleInputRef}
							/>
						</div>
						<div className="bg-gray-200 rounded-lg p-1">
							<label htmlFor="image">Name: </label>
							<input
								type="url"
								required
								id="image"
								className="bg-gwhite rounded-lg ml-1"
								ref={imageInputRef}
							/>
						</div>
						<div className="bg-gray-200 rounded-lg p-1">
							<label htmlFor="address">Position Size: </label>
							<input
								type="text"
								required
								id="address"
								className="ml-1 bg-gwhite rounded-lg"
								ref={addressInputRef}
							/>
						</div>
						<div className="bg-gray-200 rounded-lg p-1">
							<label htmlFor="description">Avg Purchase Price: </label>
							<input
								type="text"
								required
								id="address"
								className="ml-1 bg-gwhite rounded-lg"
								ref={addressInputRef}
							/>
						</div>
						<div className="bg-gray-200 rounded-lg p-1">
							<label htmlFor="description">Value @ Purchase: </label>
							<input
								type="text"
								required
								id="address"
								className="ml-1 bg-gwhite rounded-lg"
								ref={addressInputRef}
							/>
						</div>
						<div className="bg-gray-200 rounded-lg p-1">
							<label htmlFor="description">Last Price: </label>
							<input
								type="text"
								required
								id="address"
								className="ml-1 bg-gwhite rounded-lg"
								ref={addressInputRef}
							/>
						</div>
						<div className="bg-gray-200 rounded-lg p-1">
							<label htmlFor="description">Market Value: </label>
							<input
								type="text"
								required
								id="address"
								className="ml-1 bg-gwhite rounded-lg"
								ref={addressInputRef}
							/>
						</div>
						<div className="bg-gray-200 rounded-lg p-1">
							<button>Submit</button>
						</div>
					</form>
				</Box>
			</Modal>
		</>
		// <form className={classes.form} onSubmit={submitHandler}>
		// 	<div className={classes.control}>
		// 		<label htmlFor="title">Meetup Title</label>
		// 		<input type="text" required id="title" ref={titleInputRef} />
		// 	</div>
		// 	<div className={classes.control}>
		// 		<label htmlFor="image">Meetup Image</label>
		// 		<input type="url" required id="image" ref={imageInputRef} />
		// 	</div>
		// 	<div className={classes.control}>
		// 		<label htmlFor="address">Address</label>
		// 		<input type="text" required id="address" ref={addressInputRef} />
		// 	</div>
		// 	<div className={classes.control}>
		// 		<label htmlFor="description">Description</label>
		// 		<textarea
		// 			id="description"
		// 			required
		// 			rows="5"
		// 			ref={descriptionInputRef}
		// 		></textarea>
		// 	</div>
		// 	<div className={classes.actions}>
		// 		<button>Add Meetup</button>
		// 	</div>
		// </form>
	);
};

export default Form;
