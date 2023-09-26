import React from 'react';
import SideBar from '@/components/SideBar';
import Header from '@/components/Header';

const Sidehustle = () => {
	return (
		<div>
			<SideBar>
				<Header />
				<div className="min-h-screen">Side Hustle</div>
			</SideBar>
		</div>
	);
};

export default Sidehustle;
