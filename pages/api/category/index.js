import Category from '../../../model/Category';
import { connectDB } from '../../../util/mongo';

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      await connectDB();
      const category = await Category.find();
      res.status(200).json(category);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  } else {
    throw new Error('We just provide GET method.');
  }
};
