import mongoose, { Document } from 'mongoose';

interface IUserRole extends Document {
  role: string;
  displayName: string;
}

const UserRoleSchema = new mongoose.Schema<IUserRole>({
  role: {
    type: String,
  },
  displayName: {
    type: String,
  },
}, {
  versionKey: false,
});

const UserRoles = mongoose.model<IUserRole>('userRoles', UserRoleSchema);

export default UserRoles;
