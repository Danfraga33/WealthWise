import mongoose from 'mongoose';

async function createStock(data) {
	const client = await mongoose.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	const db = client.db();
	const stocksCollection = db.collection('stocks');

	// {DB --> COLLECTION --> DATA}

	// DB

	// Collection

	// Data
	const result = await stocks.insertOne(data);
}
