import mongoose, { Document } from "mongoose";

// Define the database model
interface IGroup extends Document {
  groupName: string;
  groupMembers: any[]; // Update the type as needed
  isDeleted: boolean;
}

const GroupSchema = new mongoose.Schema({
  groupName: {
    type: String,
    required: true, // Adjust as needed
  },
  groupMembers: {
    type: [mongoose.Schema.Types.Mixed], // Update the type as needed
    default: [],
  },
  isDeleted: {
    type: Boolean,
    default: false, // Adjust as needed
  },
}, {
  versionKey: false,
});

const Group = mongoose.model<IGroup>('group', GroupSchema);

export default Group;
