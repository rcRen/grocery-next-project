import Product from '../../../model/Product';
import Category from '../../../model/Category';
import { connectDB } from '../../../util/mongo';

export default async (req, res) => {
  if (req.method.toLowerCase() === 'post') {
    try {
      await connectDB();
      const { slug } = req.query;
      const { page } = req.body;
      const itemsPerPage = process.env.ITEMS_PER_PAGE;
      const category = await Category.where({ slug }).findOne();

      if (category) {
        const displayProducts = await Product.find({ category: category._id })
          .skip(Math.max(page - 1, 0) * itemsPerPage)
          .limit(itemsPerPage);

        const count = await Product.countDocuments({ category: category._id });
        res.status(200).json({
          category: category,
          totalPage: Math.round(count / itemsPerPage),
          displayProducts,
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  }
};
