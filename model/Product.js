import mongoose from 'mongoose';

const Product = new mongoose.Schema(
  {
    sequence: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      min: 0,
      required: true,
    },
    salePrice: {
      type: Number,
      required: true,
      min: 0,
    },
    unit: {
      type: Number,
      required: true,
    },
    measure: {
      type: Number,
      required: true,
    },
    measureUnit: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product || mongoose.model('Product', Product);
