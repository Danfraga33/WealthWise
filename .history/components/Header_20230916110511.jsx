import { Avatar } from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
	const sessionData = useSession();
	const session = sessionData.data;

	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const StyledInputBase = styled(InputBase)(({ theme }) => ({
		color: 'inherit',
		'& .MuiInputBase-input': {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)})`,
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				width: '12ch',
				'&:focus': {
					width: '20ch',
				},
			},
		},
	}));

	return (
		<Fragment>
			<div className="flex justify-between px-4 pt-4">
				<h2>Macro-Dashboard</h2>
				<div className="flex justify-center items-center gap-2">
					<h2>Welcome Back, {session?.user?.name}</h2>
					<button onClick={toggleDropdown} type="button">
						<Avatar alt={session?.user?.name} src={session?.user?.image} />
					</button>

					{isOpen && (
						<div className="absolute mt-12 p-2 bg-white border border-gray-300 rounded shadow-lg top-3 right-4">
							<button onClick={() => signOut()}>Sign Out</button>
						</div>
					)}
				</div>
			</div>
		</Fragment>
	);
};

export default Header;
