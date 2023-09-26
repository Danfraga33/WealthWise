import connectMongo from '@/utilties/connectMongo';
import Stock from '@/models/stockModel';

export default async function handler(req, res) {
	if (req === 'POST') {
		try {
			const mongoURI = 'mongodb+srv://danfraga:macro123@cluster0.ja2qgj7.mongodb.net/?retryWrites=true&w=majority'
			const client = mongoose.connect(mongoURI,   useNewUrlParser: true,
				useUnifiedTopology: true,)
			
		} catch (error) {
			res.status(500).json({ error: 'Error adding task' });
		}
	} else {
		res.status(405).json({ error: 'Method not allowed' });
	}
}
