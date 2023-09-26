import connectDB from '@/components/db.js';
import Stock from '@/models/stockModel';

connectDB();

export default async function handler(req, res) {
	if (req.method === 'DELETE') {
		const { id } = req.query;

		try {
			await Stock.findByIdAndRemove(id);
			res.statis(200).json({ success: true, message: 'Item deleted' });
		} catch (error) {
			console.error('Error Deleting Item:', error);
			res
				.status(500)
				.json({ success: false, message: 'Internal server error' });
		}
	}
}
