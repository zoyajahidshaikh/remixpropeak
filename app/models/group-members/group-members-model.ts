import mongoose, { Document } from 'mongoose';

interface IGroupMember extends Document {
  id: string;
  name: string;
}

const GroupMembersSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
}, { versionKey: false });

const GroupMembers = mongoose.model<IGroupMember>('groupmember', GroupMembersSchema);

export { GroupMembers, GroupMembersSchema };
