import React, { Fragment } from 'react';
import { Avatar } from '@mui/material';
import { useSession } from 'next-auth/react';
import Login from './Login/Login';

const Header = () => {
	const sessionData = useSession();
	const session = sessionData.data;
	return (
		<Fragment>
			<div className="flex justify-between px-4 pt-4">
				<Login />
				<h2>Macro-Dashboard</h2>
				<div className="flex justify-center items-center gap-2">
					<h2>Welcome Back, Daniel</h2>
					<Avatar alt={session?.user?.name} src={session?.user?.image} />
				</div>
			</div>
		</Fragment>
	);
};

export default Header;
