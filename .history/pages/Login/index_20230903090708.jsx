import { signIn } from 'next-auth/react';

const LoginPage = () => {
	return (
		{session && 
		<div>
			<h1>Login Page</h1>
			<button onClick={() => signIn('google')}>Sign in with Google</button>
		</div>
	}
	);
};

export default LoginPage;
