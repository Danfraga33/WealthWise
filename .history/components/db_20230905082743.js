import mongoose from 'mongoose';

async function connectDB() {
	try {
		await mongoose.connect(, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('Error connecting to MongoDB:', error);
	}
}
