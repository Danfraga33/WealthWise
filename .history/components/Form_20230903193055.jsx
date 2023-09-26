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
   borderRadius: 50%
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

		const meetupData = {
			title: enteredTitle,
			image: enteredImage,
			address: enteredAddress,
			description: enteredDescription,
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
			<button onClick={handleOpen}>Open modal</button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<form onSubmit={submitHandler}>
						{' '}
						<div>
							<label htmlFor="title">Ticker</label>
							<input type="text" required id="title" ref={titleInputRef} />{' '}
						</div>{' '}
						<div>
							<label htmlFor="image">Meetup Image</label>
							<input type="url" required id="image" ref={imageInputRef} />{' '}
						</div>{' '}
						<div>
							<label htmlFor="address">Address</label>{' '}
							<input type="text" required id="address" ref={addressInputRef} />{' '}
						</div>{' '}
						<div>
							<label htmlFor="description">Description</label>
							<textarea
								id="description"
								required
								rows="5"
								ref={descriptionInputRef}
							></textarea>
						</div>
						<div>
							<button>Add Meetup</button>
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
