import mongoose from 'mongoose';

async function createStock(data) {
	const client = await mongoose.connect(process.env.MONGODB_URI, {
		//New updates within mongoDB included
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	if (req.method === 'POST') {
		const data = req.body;

		// {DB --> COLLECTION --> DATA}

		// DB

		// Collection
		const db = client.db();
		const stocksCollection = db.collection('stocks');

		// Data
		const result = await stocks.insertOne(data);
	}
}
