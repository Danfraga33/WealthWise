import { Schema } from 'mongoose';

const stockSchema = new mongoose.Schema({
	ticker: String,
	name: String,
});

const Stock = mongoose.model('Stock', stockSchema);
