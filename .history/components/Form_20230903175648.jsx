import React from 'react';

const Form = () => {
	return (
		<>
			<Button onClick={handleOpen}>Open modal</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Text in a modal
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
					</Typography>
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
