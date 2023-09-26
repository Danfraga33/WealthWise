import connectDB from '@/components/db';
import Stock from '../../models/stockModel';

//Connect to DB
connectDB();

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			console.log('Connected to MongoDB');
			//Prepare Data
			// const {
			// 	summary: { ticker, name },
			// 	positionSize,
			// 	avgPurchasePrice,
			// 	valueAtPurchase,
			// 	lastPrice,
			// 	marketValue,
			// } = req.body;

			const {
				summary: { ticker, name },
				positionSize,
			} = req.body;

			console.log(req.body);
			// const {
			// 	summary: { ticker, name },
			// 	positionSize,
			// 	avgPurchasePrice,
			// 	valueAtPurchase,
			// 	lastPrice,
			// 	marketValue,
			// } = req.body;

			console.log(req.body);
			// console.log(ticker);
			console.log('req-body:', req.body);
			//Making Model of "Stock" schema
			const stock = new Stock({
				ticker,
				name,
			});
			console.log('stock:', stock);

			await stock.save();
			res.status(201).json(stock);
		} catch (error) {
			res
				.status(500)
				.json({ error: 'Error adding task', message: error.message });
		}
	} else {
		res.status(405).json({ error: 'Method not allowed' });
	}
}
