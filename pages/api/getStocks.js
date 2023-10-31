import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import connectDB from '@/components/db';
import Stock from '@/models/stockModel';

async function getHandler(req, res) {
	const { user } = await getSession(req, res);

	if (req.method === 'GET') {
		try {
			connectDB();
			const stocks = await Stock.find({ userId: user.sub });
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

export default withApiAuthRequired(getHandler);
