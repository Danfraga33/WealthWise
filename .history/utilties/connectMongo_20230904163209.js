import mongoose from 'mongoose';

export const connectMongo = await mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
