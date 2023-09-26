import { Card, List, ListItem, Title } from '@tremor/react';

const randomProductData = [
	{
		product: 'Smart Fitness Tracker',
		sales: '2 open PR',
	},
	{
		product: 'Athens',
		sales: '2 open PR',
	},
	{
		product: 'Athens',
		sales: '2 open PR',
	},
	{
		product: 'Athens',
		sales: '2 open PR',
	},
	{
		product: 'Athens',
		sales: '2 open PR',
	},
];

const Products = () => (
	<Card className="max-w-xs">
		<Title>Weekly Product Sales</Title>
		<List>
			{randomProductData.map((item) => (
				<ListItem key={item.city}>
					<span>{item.product}</span>
					<span>{item.rating}</span>
				</ListItem>
			))}
		</List>
	</Card>
);

export default Products;
