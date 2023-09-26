import LoginModal from '@/pages/LoginModal';
import { useSession, signIn, signOut } from 'next-auth/react';

const Login = () => {
	const sessionData = useSession();
	const session = sessionData.data;

	if (session) {
		return (
			<>
				<button onClick={() => signOut()}>Sign out</button>
			</>
		);
	}
	return (
		<>
			<LoginPage />
			{/* Not signed in <br />
			<button onClick={() => signIn()}>Sign in</button> */}
		</>
	);
};

export default Login;
