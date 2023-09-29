import mongoose from 'mongoose';

export default async function connectDB() {
	try {
		await mongoose.connect(process.env.MONGODB_URI2, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('Error connecting to MongoDB:', error);
	}
}
