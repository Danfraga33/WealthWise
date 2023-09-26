import mongoose from 'mongoose';

const connectMongo = await mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

export default connectMongo;
