import mongoose from 'mongoose';

async function createStock (data) {
	const client = await mongoose.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	try {
		const db = client.db();
		const stocksCollection = db.collection('stocks');

		// {DB --> COLLECTION --> DATA}
		const result = await stocks.insertOne(data);

		console.log(result)

		// DB

		// Collection

		// Data
	} catch (error {
		console.error(`Error:`, error)
	})
}