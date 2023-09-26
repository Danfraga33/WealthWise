import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	ticker: String,
	name: String,
});

const user = mongoose.model('User', userSchema);

async function dbConnect() {}
