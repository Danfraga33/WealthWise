import { Card, Title, LineChart } from '@tremor/react';

const chartdata = [
	{ year: 2015, 'Revenue Growth': 89.57, 'Customer Growth': 85.24 },
	{ year: 2016, 'Revenue Growth': 110.18, 'Customer Growth': 115.89 },
	{ year: 2017, 'Revenue Growth': 102.43, 'Customer Growth': 109.72 },
	{ year: 2018, 'Revenue Growth': 93.76, 'Customer Growth': 74.51 },
	{ year: 2019, 'Revenue Growth': 98.35, 'Customer Growth': 102.43 },
	{ year: 2020, 'Revenue Growth': 82.21, 'Customer Growth': 64.77 },
	{ year: 2021, 'Revenue Growth': 79.94, 'Customer Growth': 85.62 },
	{ year: 2022, 'Revenue Growth': 311.29, 'Customer Growth': 69.81 },
	{ year: 2023, 'Revenue Growth': 218.56, 'Customer Growth': 99.12 },
];

const dataFormatter = (number) =>
	`${Intl.NumberFormat('us').format(number).toString()}%`;

const LineChartComponent = () => (
	<Card>
		<Title>Export/Import Growth Rates (1970 to 2021)</Title>
		<LineChart
			className="mt-6"
			data={chartdata}
			index="year"
			categories={['Revenue Growth', 'Customer Growth']}
			colors={['emerald', 'gray']}
			valueFormatter={dataFormatter}
			yAxisWidth={40}
		/>
	</Card>
);

export default LineChartComponent;
