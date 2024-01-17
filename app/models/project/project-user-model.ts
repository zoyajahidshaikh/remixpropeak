import mongoose, { Document, Schema } from "mongoose";

// Define the database model
interface IProjectUser extends Document {
  name: string;
  userId: string;
}

const ProjectUserSchema = new mongoose.Schema<IProjectUser>({
  name: {
    type: String,
  },
  userId: {
    type: String,
  },
}, { versionKey: false });

const ProjectUsers = mongoose.model<IProjectUser>('projectuser', ProjectUserSchema);

export { ProjectUsers, ProjectUserSchema };
