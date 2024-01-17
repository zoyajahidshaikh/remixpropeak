import mongoose, { Document, Schema } from "mongoose";

// Define the database model
interface IProjectStatus extends Document {
  displayName: string;
  title: string;
}

const ProjectStatusSchema = new mongoose.Schema<IProjectStatus>({
  displayName: {
    type: String,
  },
  title: {
    type: String,
  },
}, { collection: 'projectstatus', versionKey: false });

const ProjectStatus = mongoose.model<IProjectStatus>('projectstatus', ProjectStatusSchema);

export default ProjectStatus;
