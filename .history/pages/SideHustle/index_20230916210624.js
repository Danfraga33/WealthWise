import React from 'react';
import { Card, Metric, Text } from '@tremor/react';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';

const index = () => {
	return (
		<>
			<SideBar>
				<Header />
				<Card
					className="max-w-xs mx-auto"
					decoration="top"
					decorationColor="indigo"
				>
					{/* <Text>Sales</Text>
					<Metric>$ 34,743</Metric> */}
				</Card>
			</SideBar>
		</>
	);
};

export default index;
