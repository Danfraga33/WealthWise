import { useSession, signIn, signOut } from 'next-auth/react';

const index = () => {
	const sessionData = useSession();

	const session = sessionData.data;
	return <div>index</div>;
};

export default index;
