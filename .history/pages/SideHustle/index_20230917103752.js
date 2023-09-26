import React from 'react';
import { Card, Title, Metric, Text } from '@tremor/react';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import BarChartComponent from '@/components/BarChartComponent';
import Products from '@/components/Products';
import DonutChartComponent from '@/components/PieChart';
import Map from '@/components/Map';

const dataFormatter = (number) => {
	return '$ ' + Intl.NumberFormat('us').format(number).toString();
};

const index = () => {
	return (
		<>
			<SideBar>
				<Header />

				<div className="p-4 md:min-h-screen">
					<div className="md:grid md:grid-cols-3 md:gap-7">
						<div className="grid grid-rows-4 gap-6 col-span-2">
							<div className="md:p-8 md:bg-gray-500 rounded-lg row-span-1">
								<div className="mb-4">
									<h2 className="text-white text-xl">Today's Progress</h2>
								</div>
								<div className="flex flex-col md:w-full gap-6 md:grid md:grid-cols-3 ">
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
							<div className="mt-3 row-span-3">
								<BarChartComponent />
							</div>
						</div>
						<div className="grid grid-row-2">
							<div className="">
								<Products />
							</div>
							<div className="">
								<DonutChartComponent />
							</div>
						</div>
					</div>
				</div>
				{/* <Map /> */}
			</SideBar>
		</>
	);
};

export default index;
