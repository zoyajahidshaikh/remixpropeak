import mongoose, { Document } from 'mongoose';

// Define the database model
interface ICategory extends Document {
  sequence: number;
  title: string;
  displayName: string;
  show: boolean;
}

const CategorySchema = new mongoose.Schema({
  sequence: {
    type: Number,
    required: true,  
  },
  title: {
    type: String,
    required: true,  
  },
  displayName: {
    type: String,
    required: true,  
  },
  show: {
    type: Boolean,
    required: true,  
  },
}, { versionKey: false });

const Category = mongoose.model<ICategory>('category', CategorySchema);

export default Category;
