import { Fragment, useState } from 'react';
import { Avatar } from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
	const sessionData = useSession();
	const session = sessionData.data;
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const router = useRouter();

	async function handleSignOut() {
		sessionStorage.clear();
		await signOut();
		router.push('/');
	}

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
		<header className="w-full  text-gray-700 bg-white shadow-sm body-font ">
			<div className="container items-center p-3 mx-auto md:flex-row flex justify-between ml-1">
				<a className="flex items-center  font-medium text-gray-900 title-font md:mb-0 ">
					<Image height={22} width={22} src="/search.svg" alt="logo" />
					<h1 className="flex justify-center items-center ml-1 text-xl ">
						WealthWave Navigator
					</h1>
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
							<button onClick={handleSignOut}>Sign Out</button>
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
