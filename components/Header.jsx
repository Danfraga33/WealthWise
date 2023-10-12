import { Fragment, useState } from 'react';
import { Avatar } from '@mui/material';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

const Header = () => {
	const { user } = useUser();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const router = useRouter();

	async function handleSignOut() {
		await signOut({ callbackUrl: '/' });
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
			<div className="container items-center p-3 mx-auto md:flex-row flex justify-between ml-1  ">
				<a className="flex items-center  font-medium text-gray-900 title-font md:mb-0  ">
					<Image
						height={22}
						width={22}
						src="/search.svg"
						alt="logo"
						className="hidden md:block"
					/>
					<h1 className="md:flex justify-center items-center ml-1 text-xl hidden">
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
					<h2>Welcome Back, {user?.nickname}</h2>

					<button onClick={toggleDropdown} type="button">
						<Avatar alt={user?.nickname} src={user?.picture} />
					</button>

					{isOpen && (
						<div className="absolute mt-12 p-2 bg-white border border-gray-300 rounded shadow-lg top-3 right-4">
							<Link href="/api/auth/logout">Sign Out</Link>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
