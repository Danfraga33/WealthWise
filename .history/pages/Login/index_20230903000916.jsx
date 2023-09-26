import React from 'react';
import { signIn } from 'next-auth/react';

const login = () => {
	return (
		<div>
			<div>
				<h1>Login Page</h1>
				<button onClick={() => signIn('google')}>Sign in with Google</button>
			</div>
		</div>
	);
};

export default login;
