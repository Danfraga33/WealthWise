import React, { Fragment } from 'react';
import { Avatar } from '@mui/material';
import { useSession } from 'next-auth/react';

const Header = () => {
	return (
		<Fragment>
			<div className="flex justify-between px-4 pt-4">
				<h2>Macro-Dashboard</h2>
				<div>
					<h2>Welcome Back, Daniel</h2>
					<Avatar alt={session.user.name} src={session.user.image} />
				</div>
			</div>
		</Fragment>
	);
};

export default Header;
