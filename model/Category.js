import mongoose from 'mongoose';

const Category = new mongoose.Schema(
  {
    sequence: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
    },
    id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Category || mongoose.model('Category', Category);
