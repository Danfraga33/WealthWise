import connectDB from '@/components/db';
import Stock from '@/models/stockModel';

export default async function getHandler(req, res) {
	if (req.method === 'GET') {
		try {
			connectDB();
			console.log('Connected to MongoDB');

			// Finding Data in Stock model/collection
			const stocks = await Stock.find();

			res.status(200).json(stocks);
		} catch (error) {
			res
				.status(500)
				.json({ error: 'Error retrieving data', message: error.message });
		}
	} else {
		res.status(405).json({ error: 'Method not allowed' });
	}
}
