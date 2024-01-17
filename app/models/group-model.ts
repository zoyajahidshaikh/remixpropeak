// models/group-model.ts

import mongoose, { Document } from 'mongoose';

// Define the database model
export interface IGroup extends Document {
  appLevelAccess: any; // Add this property
  groupName: string;
  groupMembers: any[]; // Update the type as needed
  isDeleted: boolean;
}

const GroupSchema = new mongoose.Schema({
  appLevelAccess: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  groupName: {
    type: String,
    required: true,
  },
  groupMembers: {
    type: [mongoose.Schema.Types.Mixed],
    default: [],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
}, {
  versionKey: false,
});

const Group = mongoose.model<IGroup>('group', GroupSchema);

export default Group;
