import mongoose, { Document } from 'mongoose';

// Define the database model
interface IAppLevelAccessRightEntitlement extends Document {
  id: string;
  Group: string;
  EntitlementId: string;
  Value: boolean;
}

const AppLevelAccessRightEntitlementSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true, // Adjust as needed
  },
  Group: {
    type: String,
    required: true, // Adjust as needed
  },
  EntitlementId: {
    type: String,
    required: true, // Adjust as needed
  },
  Value: {
    type: Boolean,
    required: true, // Adjust as needed
  },
}, {
  versionKey: false,
});

const AppLevelAccessRightEntitlement = mongoose.model<IAppLevelAccessRightEntitlement>(
  'applevelaccessrightsentitlments',
  AppLevelAccessRightEntitlementSchema
);

export default AppLevelAccessRightEntitlement;
