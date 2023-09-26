import React from 'react';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';

async function getStaticPaths() {
	connectDB();
	const res = await fetch('');
}

const ticker = () => {
	return (
		<SideBar>
			<Header />
			<div>
				<h1>Details Page</h1>
			</div>
		</SideBar>
	);
};

export default ticker;
