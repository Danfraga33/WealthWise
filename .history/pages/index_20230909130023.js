import { useSession } from 'next-auth/react';
import Dashboard from './Dashboard/index.jsx';

export default function Home() {
	const sessionData = useSession();
	const session = sessionData.data;

	async function getStaticProps() {
		connectDB();

		const portfolioData = await Stock.find().lean();
		//GETS DATA
		// console.log(portfolioData);
		//CORRECT DATA!
		return {
			props: {
				portfolioData: portfolioData.map((stock) => ({
					ticker: stock.summary.ticker,
					id: stock._id.toString(),
					positionSize: stock.positionSize,
					avgPurchasePrice: stock.avgPurchasePrice,
					valueAtPurchase: stock.valueAtPurchase,
					lastPrice: stock.lastPrice,
					marketValue: stock.marketValue,
				})),
			},
			revalidate: 60,
		};
	}

	return <Dashboard />;
}
