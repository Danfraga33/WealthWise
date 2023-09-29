import LoginModal from '../LoginModal';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const Login = () => {
	const sessionData = useSession();
	const session = sessionData.data;
	const router = useRouter();

	async function handleSignout() {
		sessionStorage.clear();
		await signOut({ callbackUrl: '/' });
	}

	async function handleSignIn(e) {
		e.preventDefault();
		await signIn();
	}

	if (session) {
		return (
			<>
				<button onClick={handleSignout}>Sign out</button>
			</>
		);
	}
	return (
		<>
			{/* <LoginModal /> */}
			Not signed in <br />
			<button onClick={handleSignIn}>Sign in</button>
		</>
	);
};

export default Login;
