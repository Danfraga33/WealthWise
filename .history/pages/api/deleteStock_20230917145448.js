import connectDB from '@/components/db.js';
import Stock from '@/models/stockModel';

connectDB();

export default async function handler(req, res) {
	if (req.method === 'DELETE') {
		const { id } = req.query;
	}
}
