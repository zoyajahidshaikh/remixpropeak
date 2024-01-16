import mongoose, { Document, Schema } from 'mongoose';

interface IAppLevelAccessRight extends Document {
  userId: string;
  entitlementId: string;
  group: string;
  access: boolean;
  createdBy: string;
  createdOn: Date;
  isDeleted: boolean;
}

const AppLevelAccessRightSchema: Schema<IAppLevelAccessRight> = new mongoose.Schema({
  userId: {
    type: String,
  },
  entitlementId: {
    type: String,
  },
  group: {
    type: String,
  },
  access: {
    type: Boolean,
  },
  createdBy: {
    type: String,
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

const AppLevelAccessRight = mongoose.model<IAppLevelAccessRight>('applevelaccessrights', AppLevelAccessRightSchema);

export default AppLevelAccessRight;
