import React from 'react';
import { Card, Metric, Text } from '@tremor/react';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';

const index = () => {
	return (
		<>
			<SideBar>
				<Header />
				<div className="p-4">
					<div className="sm:w-full md:w-1/3">
						<div className="flex flex-col gap-2 md:grid md:grid-cols-3">
							<Card
								className="max-w-xs mx-auto"
								decoration="top"
								decorationColor="indigo"
							>
								<Text>Sales</Text>
								<Metric>$ 34,743</Metric>
							</Card>
							<Card
								className="max-w-xs mx-auto"
								decoration="top"
								decorationColor="indigo"
							>
								<Text>Expenses</Text>
								<Metric>$ 34,743</Metric>
							</Card>
							<Card
								className="max-w-xs mx-auto"
								decoration="top"
								decorationColor="indigo"
							>
								<Text>Profit</Text>
								<Metric>$ 34,743</Metric>
							</Card>
						</div>
					</div>
				</div>
			</SideBar>
		</>
	);
};

export default index;
