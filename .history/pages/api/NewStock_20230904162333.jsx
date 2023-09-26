import mongoose from 'mongoose';
import Form from '@/components/Form';
import Head from 'next/head';

async function createStock(data) {
	// {DB --> COLLECTION --> DATA}
	//Connects to DB
	const client = await mongoose.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	try {
		//Colletion
		const db = client.db();
		const stocksCollection = db.collection('stocks');

		console.log('Connected Sucessefully');
		// res.status(201).json({ message: 'Data inserted successfully' });
	} catch (error) {
		console.error(`Error inserting data:`, error);

		res.status(500).json({ message: 'Internal Server Error' });
	} finally {
		mongoose.connection.close();
	}
}
