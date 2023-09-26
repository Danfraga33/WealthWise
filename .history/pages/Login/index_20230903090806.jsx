import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';

const LoginPage = () => {
	const sessionData = useSession();
	const session = sessionData.data;
	return (
		<>
			{session && (
				<div>
					<h1>Login Page</h1>
					<button onClick={() => signIn('google')}>Sign in with Google</button>
				</div>
			)}
		</>
	);
};

export default LoginPage;
