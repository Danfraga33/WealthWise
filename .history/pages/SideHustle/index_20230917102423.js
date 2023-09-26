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
				<div>
					<div className="grid grid-cols-4 grid-row-4">
						<div className="col-span-3 row-span-1">1</div>
						<div>2</div>
						<div>3</div>
						<div>4</div>
					</div>
				</div>

				{/* <div className="p-4 md:min-h-screen">
					<div className="md:grid md:grid-cols-3 md:gap-7">
						<div className="col-span-2 ">
							<div className="md:p-8 md:bg-gray-500 rounded-lg">
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
							<div className="mt-3 md:row-span-3 sm:w-full">
								<BarChartComponent />
							</div>
						</div>
						<div className="grid gap-2 sm:max-w-full">
							<div className="ml-2 h-full col-span-1 row-span-1">
								<Products />
							</div>
							<div className="ml-2 row-span-1">
								<DonutChartComponent />
							</div>
						</div>
					</div>
				</div> */}
				{/* <Map /> */}
			</SideBar>
		</>
	);
};

export default index;
