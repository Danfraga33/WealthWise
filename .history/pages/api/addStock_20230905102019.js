import connectDB from '@/components/db';
import Stock from '@/models/stockModel';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			await mongoose.connect(
				'mongodb+srv://danfraga:macro123@cluster0.ja2qgj7.mongodb.net/?retryWrites=true&w=majority',
				{
					useNewUrlParser: true,
					useUnifiedTopology: true,
				}
			);
			console.log('Connected to MongoDB');
			const { ticker, name } = req.body;
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
}
