import connectDB from '@/components/db';
import Stock from '../../models/stockModel';
export default async function handler(req, res) {
	if (req.method === 'POST') {
		connectDB();
		try {
			// const Stock = new mongoose.model('Stock', stockSchema);
			// console.log('Connected to MongoDB');
			//Prepare Data
			const { name, email, userId, stockData } = req.body;
			// console.log(stockName);
			// console.log(stockData);
			const {
				ticker,
				stockName,
				purchaseDate,
				positionSize,
				avgPurchasePrice,
				valueAtPurchase,
				lastPrice,
				marketValue,
				performance,
			} = stockData;

			console.log('REQUEST_DATA:', req.body);

			const update = new Stock({
				name,
				email,
				userId,
				stockData: {
					ticker,
					stockName,
					purchaseDate,
					positionSize,
					avgPurchasePrice,
					valueAtPurchase,
					lastPrice,
					marketValue,
					performance,
				},
			});
			console.log('Final Data Inputted:', update);
			// const result = await Stock.save();
			const result = await update.save();
			console.log('RESULT:', result);

			// const filter = { userId: user.id };
			// const options = { upsert: true };
			// const result = await Stock.findOneAndUpdate(filter, update, options, {
			// 	new: true,
			// 	useFindAndModify: false,
			// });
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
