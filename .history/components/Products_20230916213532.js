import { Card, List, ListItem, Title } from '@tremor/react';

const cities = [
	{
		product: 'Healthcare Erbology',
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
			{cities.map((item) => (
				<ListItem key={item.city}>
					<span>{item.city}</span>
					<span>{item.rating}</span>
				</ListItem>
			))}
		</List>
	</Card>
);

export default Products;
