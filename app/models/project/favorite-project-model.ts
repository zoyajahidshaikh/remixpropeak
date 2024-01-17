import mongoose, { Document } from "mongoose";

// Define the database model
interface IFavoriteProject extends Document {
  userId: string;
  projectId: string;
}

const FavoriteProjectSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  projectId: {
    type: String,
  },
}, {
  versionKey: false,
});

const FavoriteProject = mongoose.model<IFavoriteProject>('favoriteproject', FavoriteProjectSchema);

export default FavoriteProject;
