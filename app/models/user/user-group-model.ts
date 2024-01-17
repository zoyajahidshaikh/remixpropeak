import mongoose, { Document, Types, Model, Schema } from 'mongoose';
import { GroupMembersSchema } from '../group-members/group-members-model'; 

// Define the database model
interface IUserGroup extends Document {
  groupId: string;
  groupName: string;
  groupMembers: Types.Array<typeof GroupMembersSchema>; // Assuming GroupMembersSchema is the correct type
}

const UserGroupSchema = new mongoose.Schema<IUserGroup>({
  groupId: {
    type: String
  },
  groupName: {
    type: String
  },
  groupMembers: [GroupMembersSchema]
}, { versionKey: false });

const UserGroups = mongoose.model<IUserGroup>('userGroup', UserGroupSchema);

export { UserGroups, UserGroupSchema };
