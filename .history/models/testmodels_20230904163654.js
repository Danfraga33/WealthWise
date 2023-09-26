import mongoose, { Schema, model, models } from 'mongoose';

const stockSchema = new mongoose.Schema({
	ticker: String,
	name: String,
});

const Stock = models.test || mongoose.model('Stock', stockSchema);

export 
