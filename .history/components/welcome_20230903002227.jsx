import React from 'react';

const Welcome = () => {
	return (
		<div>
			<h1>Welcome to Your Dashboard</h1>
			<p>You need to be logged in to access the dashboard.</p>
			<Link href="/login">
				<a>Log In</a>
			</Link>
		</div>
	);
};

export default Welcome;
