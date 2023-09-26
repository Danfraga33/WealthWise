import connectDB from '@/components/db';
import Stock from '@/models/stockModel';

//Connect to DB
connectDB();

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			console.log('Connected to MongoDB');
			//Prepare Data
			const { ticker, name } = req.body;
			//Making Model of "Stock" schema
			const stock = new Stock({
				ticker,
				name,
			});

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
	else if (req.method === 'GET') {
		try {
			console.log('Connected to MongoDB');

			// Finding Data in Stock model/collection
			const stocks = await Stock.find();

			res.status(201).json(stocks);
		} catch (error) {
			res
				.status(500)
				.json({ error: 'Error retrieving data', message: error.message });
		}
	} else {
		res.status(405).json({ error: 'Method not allowed' });
	}
}
