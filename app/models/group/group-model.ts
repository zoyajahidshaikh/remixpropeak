import mongoose, { Document } from 'mongoose';

interface IGroup extends Document {
  groupName: string;
  groupMembers: any[]; // Update the type as needed
  isDeleted: boolean;
}

const GroupSchema = new mongoose.Schema({
  groupName: {
    type: String,
    required: true,  
  },
  groupMembers: {
    type: [mongoose.Schema.Types.Mixed], // Update the type as needed
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
