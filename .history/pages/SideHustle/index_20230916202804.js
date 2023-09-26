import React from 'react';
import SideBar from '@/components/SideBar';
import Header from '@/components/Header';
import ApexCharts from 'apexcharts';
import 

export default function Sidehustle() {
	class ApexChart extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				series: [
					{
						name: 'Net Profit',
						data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
					},
					{
						name: 'Revenue',
						data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
					},
					{
						name: 'Free Cash Flow',
						data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
					},
				],
				options: {
					chart: {
						type: 'bar',
						height: 350,
					},
					plotOptions: {
						bar: {
							horizontal: false,
							columnWidth: '55%',
							endingShape: 'rounded',
						},
					},
					dataLabels: {
						enabled: false,
					},
					stroke: {
						show: true,
						width: 2,
						colors: ['transparent'],
					},
					xaxis: {
						categories: [
							'Feb',
							'Mar',
							'Apr',
							'May',
							'Jun',
							'Jul',
							'Aug',
							'Sep',
							'Oct',
						],
					},
					yaxis: {
						title: {
							text: '$ (thousands)',
						},
					},
					fill: {
						opacity: 1,
					},
					tooltip: {
						y: {
							formatter: function (val) {
								return '$ ' + val + ' thousands';
							},
						},
					},
				},
			};
		}
	}
	return (
		<div>
			<SideBar>
				<Header />
				<div className="min-h-screen bg-gray-100 p-4 ">
					Side Hustle
					<div className="grid grid-cols-3 w-100 text-center">
						<div id="chart">
							<ReactApexChart
								options={this.state.options}
								series={this.state.series}
								type="bar"
								height={350}
							/>
						</div>
						<div>2</div>
						<div>3</div>
					</div>
				</div>
			</SideBar>
		</div>
	);
};

export default Sidehustle;
