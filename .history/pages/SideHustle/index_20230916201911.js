import React from 'react';
import SideBar from '@/components/SideBar';
import Header from '@/components/Header';

const Sidehustle = () => {
	return (
		<div>
			<SideBar>
				<Header />
				<div className="p-1">Side Hustle</div>
			</SideBar>
		</div>
	);
};

export default Sidehustle;
