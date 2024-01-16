import mongoose, { Document } from 'mongoose';

interface IAccessRight extends Document {
  userId: string;
  projectId: string;
  entitlementId: string;
  group: string;
  createdBy: string;
  createdOn: Date;
  isDeleted: boolean;
}

const AccessRightSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  projectId: {
    type: String,
    required: true,
  },
  entitlementId: {
    type: String,
    required: true,
  },
  group: {
    type: String,
  },
  createdBy: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
}, { versionKey: false });

const AccessRight = mongoose.model<IAccessRight>('accessright', AccessRightSchema);

export default AccessRight;
