import mongoose from 'mongoose';

async function handler(req, res) {
	if (req.method === 'POST') {
		const data = req.body;

		// {DB --> COLLECTION --> DATA}

		// DB
		const client = await mongoose.connect(process.env.MONGODB_URI, {
			//New updates within mongoDB included
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		// Collection
		const db = client.db();
		const stocksCollection = db.collection('stocks');
	}

	// Data
}
