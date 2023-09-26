import React from 'react';
import SideBar from '@/components/SideBar';
import Header from '@/components/Header';

const Sidehustle = () => {
	return (
		<div>
			<SideBar>
				<Header />
				<div className="min-h-screen bg-gray-100 p-4">Side Hustle</div>
			</SideBar>
		</div>
	);
};

export default Sidehustle;
