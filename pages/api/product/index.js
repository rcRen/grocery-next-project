import { connectDB } from '../../../util/mongo';
import Product from '../../../model/Product';

export default async (req, res) => {
  if (req.method === 'GET') {
    const { page, itemsPerPage } = req.query;
    try {
      await connectDB();
      const displayProducts = await Product.find()
        .skip(Math.max(page - 1, 0) * itemsPerPage)
        .limit(itemsPerPage);

      const count = await Product.countDocuments();

      res.status(200).json({ totalPage: Math.round(count / itemsPerPage), displayProducts });
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  } else {
    throw new Error('We just provide GET method.');
  }
};
