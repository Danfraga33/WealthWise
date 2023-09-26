import React from 'react';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import BarChartComponent from '@/components/BarChartComponent';
import Products from '@/components/Products';
import DonutChartComponent from '@/components/PieChart';
import SalesStats from '@/components/SalesStats';
import LineChartComponent from '@/components/LineCharts';

const dataFormatter = (number) => {
	return '$ ' + Intl.NumberFormat('us').format(number).toString();
};

const index = () => {
	return (
		<>
			<SideBar>
				<Header />
				<div className="p-4">
					<div className="md:md:grid md:grid-cols-4 md:grid-row-4 md:gap-8">
						<div className="md:col-span-3 md:row-span-1">
							<SalesStats />
						</div>
						<div className=" md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-5">
							<Products />
						</div>
						<div className="md:col-start-1 md:col-end-4 md:row-span-3">
							<BarChartComponent />
						</div>
						<div className="col-start-4 col-end-5 row-start-4 row-end-5">
							<DonutChartComponent />
						</div>
					</div>
					<div className="mt-8">
						<LineChartComponent />
					</div>
				</div>
			</SideBar>
		</>
	);
};

export default index;
