import { Card, List, ListItem, Title } from '@tremor/react';

const randomProductData = [
	{
		Product: 'Smart Fitness Tracker',
		Sales: 1500,
	},
	{
		Product: 'Wireless Noise-Canceling Headphones',
		Sales: 2200,
	},
	{
		Product: 'Bamboo Charcoal Air Purifiers',
		Sales: 1800,
	},
	{
		Product: 'Handcrafted Leather Wallets',
		Sales: 900,
	},
	{
		Product: 'Organic Matcha Green Tea',
		Sales: 1300,
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
