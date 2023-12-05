import Product from '../../../model/product';
import { connectDB } from '../../../util/mongo';

export default async (req, res) => {
  if (req.method.toLowerCase() === 'get') {
    const { id } = req.query;
    try {
      await connectDB();
      const product = await Product.findOne({ id });
      res.status(200).json({ product });
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  } else {
    throw new Error('We just provide Get method');
  }
};
