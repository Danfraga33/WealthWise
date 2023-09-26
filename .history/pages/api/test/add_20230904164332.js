import connectMongo from '@/utilties/connectMongo';
import Stock from '@/models/testmodels';
/**
 *
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} req
 */

export default function addTest(req, res) {
	const { ticker, name } = req.body;
   console.log("CONNECTING TO MONGO")
    await connectMongo()
   console.log("CONNECTED TO MONGO")
}
