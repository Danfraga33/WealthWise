import mongoose from 'mongoose';
import Form from '@/components/Form';
import Head from 'next/head';

async function createStock(enteredStockData) {
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log(enteredStockData);
		console.log('Connected Sucessefully');

		// res.status(201).json({ message: 'Data inserted successfully' });
	} catch (error) {
		console.error(`Error inserting data:`, error);

		res.status(500).json({ message: 'Internal Server Error' });
	}
	// finally {
	// 	mongoose.connection.close();
	// }

	return <Form addStock={createStock} />;
}
createStock();
