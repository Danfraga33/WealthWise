import Link from 'next/link';
import { Fragment, useState } from 'react';
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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import ChatIcon from '@mui/icons-material/Chat';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Image from 'next/image';

const Header = () => {
	const sessionData = useSession();
	const session = sessionData.data;
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const [isOpen, setIsOpen] = useState(false);

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
		<header class="w-full  text-gray-700 bg-white shadow body-font ">
			<div class="container items-start p-3 mx-auto md:flex-row flex justify-between">
				<a class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
					<Image height={50} width={50} src="/PragmaticF.svg" />
					<svg
						class="w-auto h-5 text-gray-900 fill-current"
						viewBox="0 0 202 69"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M57.44.672s6.656 1.872 6.656 5.72c0 0-1.56 2.6-3.744 6.552 8.424 1.248 16.744 1.248 23.816-1.976-1.352 7.904-12.688 8.008-26.208 6.136-7.696 13.624-19.656 36.192-19.656 42.848 0 .416.208.624.52.624 4.576 0 17.888-14.352 21.112-18.824 1.144-1.456 4.264.728 3.12 2.392C56.608 53.088 42.152 69 36.432 69c-4.472 0-8.216-5.928-8.216-10.4 0-6.552 11.752-28.08 20.28-42.952-9.984-1.664-20.176-3.64-27.976-3.848-13.936 0-16.64 3.536-17.576 6.032-.104.312-.52.52-.832.312-3.744-7.072-1.456-14.56 14.144-14.56 9.36 0 22.048 4.576 34.944 7.592C54.736 5.04 57.44.672 57.44.672zm46.124 41.08c1.144-1.456 4.264.728 3.016 2.392C100.236 53.088 85.78 69 80.06 69c-4.576 0-8.32-5.928-8.32-10.4v-.208C67.58 64.32 63.524 69 61.34 69c-4.472 0-8.944-4.992-8.944-11.856 0-10.608 15.704-33.072 24.96-33.072 4.992 0 7.384 2.392 8.528 4.576l2.6-4.576s6.656 1.976 6.656 5.824c0 0-13.312 24.336-13.312 30.056 0 .208 0 .624.52.624 4.472 0 17.888-14.352 21.216-18.824zm-40.56 18.72c2.184 0 11.752-13.312 17.368-22.048l4.16-7.488c-8.008-7.904-27.248 29.536-21.528 29.536zm57.564-38.168c-2.184 0-4.992-2.808-4.992-4.784 0-2.912 5.824-14.872 7.28-14.872 2.6 0 6.136 2.808 6.136 6.344 0 2.08-7.176 12.064-8.424 13.312zm-17.68 46.592c-4.472 0-8.216-5.928-8.216-10.4 0-6.656 16.744-34.528 16.744-34.528s6.552 1.976 6.552 5.824c0 0-13.312 24.336-13.312 30.056 0 .208.104.624.624.624 4.472 0 17.888-14.352 21.112-18.824 1.144-1.456 4.264.728 3.12 2.392-6.448 8.944-20.904 24.856-26.624 24.856zM147.244.672s6.656 1.872 6.656 5.72c0 0-25.792 43.784-25.792 53.56 0 .416.208.624.52.624 4.576 0 17.888-14.352 21.112-18.824 1.144-1.456 4.264.728 3.12 2.392C146.412 53.088 131.956 69 126.236 69c-4.472 0-8.216-5.928-8.216-10.4 0-10.4 29.224-57.928 29.224-57.928zM169.7 60.16c3.848-2.392 7.904-6.864 10.816-10.92 6.656-9.464 11.544-20.696 10.504-27.352-.312-3.432-.104-4.056 3.12-2.704 5.2 2.392 11.336 8.632 2.184 22.88-5.2 8.008-12.48 15.288-19.344 19.76-2.704 1.768-6.344 3.328-9.984 4.16-.52.416-1.04.728-1.456.936-1.872 1.352-4.264 2.08-7.592 2.08-14.664 0-16.848-12.272-16.848-16.016 0-2.392 3.224-4.68 4.784-3.744.208.104.312.416.312.624 0 2.808 1.872 13.104 9.984 13.104 7.904 0 3.432-18.304 2.288-27.144-1.456 2.288-3.432 4.992-5.616 8.32-2.6 3.744-5.72 1.456-4.784 0 5.824-8.424 9.152-13.832 11.856-18.616 1.248-2.08 3.328-3.328 6.448-3.328 2.704 0 5.824 3.016 6.864 4.784.312.52 0 1.04-.52 1.144a5.44 5.44 0 00-4.368 5.408c0 6.968 2.6 17.16 1.664 24.856l-.312 1.768z"
							fill-rule="nonzero"
						/>
					</svg>
				</a>
				{/* <nav class="flex items-center justify-center text-base md:ml-auto">
					<a href="#_" class="mr-5 font-medium hover:text-gray-900">
						Home
					</a>
					<a href="#_" class="mr-5 font-medium hover:text-gray-900">
						About
					</a>
					<a href="#_" class="font-medium hover:text-gray-900">
						Contact
					</a>
				</nav> */}
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
		</header>
		// <Box sx={{ flexGrow: 1 }}>
		// 	<AppBar position="static" sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
		// 		<Toolbar>
		// 			<Typography
		// 				variant="h6"
		// 				noWrap
		// 				component="div"
		// 				sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
		// 			>
		// 				Financial Freedom Dashboard
		// 			</Typography>

		// 			<h2>Welcome Back, {session?.user?.name}</h2>

		// 			<Fragment>
		// 				<Box
		// 					sx={{
		// 						display: 'flex',
		// 						alignItems: 'center',
		// 						textAlign: 'center',
		// 					}}
		// 				>
		// 					<Tooltip title="Account settings">
		// 						<IconButton
		// 							onClick={handleClick}
		// 							size="small"
		// 							sx={{ ml: 1 }}
		// 							aria-controls={open ? 'account-menu' : undefined}
		// 							aria-haspopup="true"
		// 							aria-expanded={open ? 'true' : undefined}
		// 						>
		// 							<Avatar
		// 								alt={session?.user?.name}
		// 								src={session?.user?.image}
		// 								sx={{ width: 35, height: 35 }}
		// 							>
		// 								{session?.user?.img}
		// 							</Avatar>
		// 						</IconButton>
		// 					</Tooltip>
		// 				</Box>
		// 				<Menu
		// 					anchorEl={anchorEl}
		// 					id="account-menu"
		// 					open={open}
		// 					onClose={handleClose}
		// 					onClick={handleClose}
		// 					PaperProps={{
		// 						elevation: 0,
		// 						sx: {
		// 							overflow: 'visible',
		// 							filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
		// 							mt: 1.5,
		// 							'& .MuiAvatar-root': {
		// 								width: 32,
		// 								height: 32,
		// 								ml: -0.5,
		// 								mr: 1,
		// 							},
		// 							'&:before': {
		// 								content: '""',
		// 								display: 'block',
		// 								position: 'absolute',
		// 								top: 0,
		// 								right: 14,
		// 								width: 10,
		// 								height: 10,
		// 								bgcolor: 'background.paper',
		// 								transform: 'translateY(-50%) rotate(45deg)',
		// 								zIndex: 0,
		// 							},
		// 						},
		// 					}}
		// 					transformOrigin={{ horizontal: 'right', vertical: 'top' }}
		// 					anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
		// 				>
		// 					<MenuItem onClick={handleClose}>
		// 						<Avatar /> Profile
		// 					</MenuItem>
		// 					<Divider />
		// 					<MenuItem onClick={handleClose}>
		// 						<Link href="/Settings">
		// 							<ListItemIcon>
		// 								<Settings fontSize="small" />
		// 							</ListItemIcon>
		// 							Settings
		// 						</Link>
		// 					</MenuItem>
		// 					<MenuItem onClick={handleClose}>
		// 						<Link href="/Settings">
		// 							<ListItemIcon>
		// 								<ChatIcon fontSize="small" />
		// 							</ListItemIcon>
		// 							Give Feedback
		// 						</Link>
		// 					</MenuItem>
		// 					<MenuItem onClick={handleClose}>
		// 						<ListItemIcon>
		// 							<Logout fontSize="small" />
		// 						</ListItemIcon>
		// 						<button onClick={() => signOut()}>Logout</button>
		// 					</MenuItem>
		// 				</Menu>
		// 			</Fragment>
		// 		</Toolbar>
		// 	</AppBar>
		// </Box>

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
