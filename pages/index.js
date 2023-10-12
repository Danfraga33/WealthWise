import React from 'react';
import Hero from '@/components/Hero';
// import Navbar from '@/components/Navbar';
import NavbarCopy from '@/components/NavbarCopy';

const index = () => {
	return (
		<div>
			<NavbarCopy />
			<div className="body">
				<Hero />
			</div>
		</div>
	);
};

export default index;
