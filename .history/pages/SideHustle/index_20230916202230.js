import React from 'react';
import SideBar from '@/components/SideBar';
import Header from '@/components/Header';

const Sidehustle = () => {
	return (
		<div>
			<SideBar>
				<Header />
				<div className="min-h-screen bg-gray-100 p-4 ">
					<div className="grid grid-cols-3">
						<div>1</div>
						<div>2</div>
						<div>3</div>
					</div>
					Side Hustle
				</div>
			</SideBar>
		</div>
	);
};

export default Sidehustle;
