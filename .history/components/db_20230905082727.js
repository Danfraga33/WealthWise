import mongoose from 'mongoose';

async function connectDB() {
	try {
		await mongoose.connect('YOUR_MONGODB_URI', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('Error connecting to MongoDB:', error);
	}
}
