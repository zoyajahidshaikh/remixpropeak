// // models/category.ts

// import mongoose, { Schema, Document } from "mongoose";

// export interface CategoryDocument extends Document {
//   sequence: number;
//   title: string;
//   displayName: string;
//   show: boolean;
// }

// const CategorySchema = new Schema<CategoryDocument>({
//   sequence: {
//     type: Number,
//   },
//   title: {
//     type: String,
//   },
//   displayName: {
//     type: String,
//   },
//   show: {
//     type: Boolean,
//   },
// }, { versionKey: false });

// const Category = mongoose.model<CategoryDocument>('category', CategorySchema);

// export default Category;
