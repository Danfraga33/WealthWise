import mongoose from 'mongoose';

async function connectDB() {
	try {
		await mongoose.connect(
			'mongodb+srv://danfraga:macro123@cluster0.ja2qgj7.mongodb.net/?retryWrites=true&w=majority',
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);
		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('Error connecting to MongoDB:', error);
	}
}
