import React from 'react';
import { Card, Title, Metric, Text } from '@tremor/react';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import BarChartComponent from '@/components/BarChartComponent';
import Products from '@/components/Products';

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
							<div className="">
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
						<div className="ml-2 w-full">
							<Products />
						</div>
					</div>
				</div>
			</SideBar>
		</>
	);
};

export default index;
