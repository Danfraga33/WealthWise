import mongoose from 'mongoose';

//Make schema
const userSchema = new mongoose.Schema({
	ticker: String,
	name: String,
});
// Make User Model, using the userSchema.
const User = mongoose.model('User', userSchema);

async function dbConnect() {
	try {
		//Connecting to mongoDB
		await mongoose.connect(process.env.MONGODB_URI, {
			//New updates within mongoDB included
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Connected to MongoDB');
		//Catch error
	} catch (error) {
		console.error('Error:', error);
	}
}
