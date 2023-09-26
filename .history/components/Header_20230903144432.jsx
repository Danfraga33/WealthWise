import React, { useState, Fragment } from 'react';
import { Avatar } from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';
import Login from './Login/Login';

const Header = () => {
	const sessionData = useSession();
	const session = sessionData.data;

	const Dropdown = () => {
		const [isOpen, setIsOpen] = useState(false);
		const toggleDropdown = () => {
			setIsOpen(!isOpen);
	
	};

	return (
		<Fragment>
			<div className="flex justify-between px-4 pt-4">
				<h2>Macro-Dashboard</h2>
				<Login />
				<div className="flex justify-center items-center gap-2">
					<h2>Welcome Back, {session?.user?.name}</h2>
					<button onClick={toggleDropdown} type="button">
						<Avatar alt={session?.user?.name} src={session?.user?.image} />
					</button>

					{isOpen && <button onClick={() => signOut()}>Sign Out</button>}
				</div>
			</div>
		</Fragment>
	);
};

export default Header;
