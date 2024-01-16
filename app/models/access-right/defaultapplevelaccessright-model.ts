import mongoose, { Document } from 'mongoose';

// Define the database model
interface IDefaultAppLevelAccessRight extends Document {
  userRole: string;
  entitlement: string;
  group: string;
}

const DefaultAppLevelAccessRightSchema = new mongoose.Schema({
  userRole: {
    type: String,
    required: true, 
  },
  entitlement: {
    type: String,
    required: true, 
  },
  group: {
    type: String,
    required: true, 
  },
}, {
  versionKey: false,
});

const DefaultAppLevelAccessRight = mongoose.model<IDefaultAppLevelAccessRight>(
  'defaultapplevelaccessrights',
  DefaultAppLevelAccessRightSchema
);

export default DefaultAppLevelAccessRight;
