import React from 'react';
import { Card, Title, Metric, Text } from '@tremor/react';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import BarChartComponent from '@/components/BarChartComponent';

const chartdata2 = [
	{
		name: 'Topic 1',
		'Group A': 890,
		'Group B': 338,
		'Group C': 538,
		'Group D': 396,
		'Group E': 138,
		'Group F': 436,
	},
	{
		name: 'Topic 2',
		'Group A': 289,
		'Group B': 233,
		'Group C': 253,
		'Group D': 333,
		'Group E': 133,
		'Group F': 533,
	},
];

const dataFormatter = (number) => {
	return '$ ' + Intl.NumberFormat('us').format(number).toString();
};

const index = () => {
	return (
		<>
			<SideBar>
				<Header />
				<div className="p-4">
					<div className="grid grid-cols-3">
						<div className="grid col-span-2">
							<div className="w-1/2">
								<div className="flex flex-col w-full gap-2 md:grid md:grid-cols-3">
									<Card
										className="max-w-xs mx-auto
                           "
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
							<div className="mt-3">
								<BarChartComponent />
							</div>
						</div>
					</div>
				</div>
			</SideBar>
		</>
	);
};

export default index;
