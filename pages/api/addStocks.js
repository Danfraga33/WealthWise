import connectDB from '@/components/db';
import Stock from '../../models/stockModel';
import mongoose from 'mongoose';

//Connect to DB

export default async function handler(req, res) {
	if (req.method === 'POST') {
		connectDB();
		try {
			// const Stock = new mongoose.model('Stock', stockSchema);
			// console.log('Connected to MongoDB');
			//Prepare Data
			const {
				name,
				email,
				id,
				summary: { ticker, stockName },
				positionSize,
				avgPurchasePrice,
				valueAtPurchase,
				lastPrice,
				marketValue,
				performance,
				purchaseDate,
			} = req.body;
			// console.log(stockName);

			console.log('REQUEST_DATA:', req.body);

			const update = new Stock({
				name,
				email,
				id,
				summary: {
					ticker,
					stockName,
				},
				positionSize,
				avgPurchasePrice,
				valueAtPurchase,
				lastPrice,
				marketValue,
				performance,
				purchaseDate,
			});
			const filter = { id: id };
			const options = { upsert: true };

			console.log('Final Data Inputted:', update);

			const result = await Stock.findOneAndUpdate(filter, update, options, {
				new: true,
				useFindAndModify: false,
			});
			res.status(201).json(result);
		} catch (error) {
			res
				.status(500)
				.json({ error: 'Error adding task', message: error.message });
		}
	} else {
		res.status(405).json({ error: 'Method not allowed' });
	}
}
