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
      min: 0,
      required: true,
    },
    brand: String,
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
    id: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    region: String,
    type: String,
    merchant: String,
  },
  { timestamps: true }
);

export default mongoose.models.Product || mongoose.model('Product', Product);
