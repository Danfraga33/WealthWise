import mongoose from 'mongoose';
import Form from '@/components/Form';
import Head from 'next/head';

async function createStock(data) {
	//Connects to DB
	const client = await mongoose.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	try {
		//Colletion
		const db = client.db();
		const stocksCollection = db.collection('stocks');

		// {DB --> COLLECTION --> DATA}
		//Inserts document
		const result = await stocksCollection.insertOne(data);

		console.log(result);

		// DB

		// Collection

		// Data
	} catch (error) {
		console.error(`Error:`, error);
	} finally {
		client.close();
	}

	return (
		<>
			<Head>
				<title>Add A New Stock</title>
			</Head>
			<Form addStock={createStock} />
		</>
	);
}
