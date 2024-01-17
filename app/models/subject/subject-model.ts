import mongoose, { Document, Schema } from "mongoose";
import { DiscussionSchema } from "../discussion/discussion-model";

// Define the database model
interface ISubject extends Document {
  title: string;
  projectId: string;
  edit: boolean;
  isDeleted: boolean;
  createdOn: Date;
  createdBy: string;
  discussion: any; // You can update this type as needed
}

const SubjectSchema = new mongoose.Schema<ISubject>({
  title: {
    type: String,
    required: true,   
  },
  projectId: {
    type: String,
    required: true,   
  },
  edit: {
    type: Boolean,
    default: false, // Add default value if necessary
  },
  isDeleted: {
    type: Boolean,
    default: false, // Add default value if necessary
  },
  createdOn: {
    type: Date,
    default: Date.now, // Add default value if necessary
  },
  createdBy: {
    type: String,
    required: true,   
  },
  discussion: [DiscussionSchema],
}, {
  versionKey: false,
});

const Subject = mongoose.model<ISubject>('subject', SubjectSchema);

export { Subject };
