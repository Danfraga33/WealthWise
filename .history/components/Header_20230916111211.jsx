import { useState } from 'react';
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
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [open, setOpen] = React.useState(false);

	const anchorRef = React.useRef < HTMLButtonElement > null;
	const sessionData = useSession();
	const session = sessionData.data;

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const Search = styled('div')(({ theme }) => ({
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	}));

	const SearchIconWrapper = styled('div')(({ theme }) => ({
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}));

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
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					>
						Macro-Dashboard
					</Typography>

					<h2 className="mr-1">Welcome Back, {session?.user?.name}</h2>
					<button onClick={toggleDropdown} type="button">
						<Avatar alt={session?.user?.name} src={session?.user?.image} />
					</button>
					{/* <IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="open drawer"
						sx={{ mr: 2 }}
					>
						<MenuIcon /> */}
					{/* </IconButton> */}
				</Toolbar>
			</AppBar>
		</Box>
		// <Fragment>
		// 	<div className="flex justify-between px-4 pt-4">
		// 		<h2>Macro-Dashboard</h2>
		// 		<div className="flex justify-center items-center gap-2">
		// 			<h2>Welcome Back, {session?.user?.name}</h2>
		// 			<button onClick={toggleDropdown} type="button">
		// 				<Avatar alt={session?.user?.name} src={session?.user?.image} />
		// 			</button>

		// 			{isOpen && (
		// 				<div className="absolute mt-12 p-2 bg-white border border-gray-300 rounded shadow-lg top-3 right-4">
		// 					<button onClick={() => signOut()}>Sign Out</button>
		// 				</div>
		// 			)}
		// 		</div>
		// 	</div>
		// </Fragment>
	);
};

export default Header;
