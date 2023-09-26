import mongoose from 'mongoose';

async function createStock() {
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Connected Successfully');

		// res.status(201).json({ message: 'Data inserted successfully' });
	} catch (error) {
		console.error(`Error inserting data:`, error);

		// res.status(500).json({ message: 'Internal Server Error' });
	}
	// finally {
	// 	mongoose.connection.close();
	// }
}

export default connectMongo;
