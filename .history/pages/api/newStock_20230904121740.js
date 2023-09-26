import mongoose from 'mongoose';

async function createStock(data) {
	const client = await mongoose.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	// {DB --> COLLECTION --> DATA}

	// DB

	// Collection
	const db = client.db();
	const stocksCollection = db.collection('stocks');

	// Data
	const result = await stocks.insertOne(data);
}
