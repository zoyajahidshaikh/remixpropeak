import mongoose, { Document } from "mongoose";

// Define the database model
interface IMyNotification extends Document {
  userId: string;
  subject: string;
  url: string;
  read: boolean;
  createdOn: string;
  createdBy: string;
  modifiedOn: string;
  modifiedBy: string;
}

const MyNotificationSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  subject: {
    type: String,
  },
  url: {
    type: String,
  },
  read: {
    type: Boolean,
  },
  createdOn: {
    type: String,
  },
  createdBy: {
    type: String,
  },
  modifiedOn: {
    type: String,
  },
  modifiedBy: {
    type: String,
  },
}, { versionKey: false });

const MyNotification = mongoose.model<IMyNotification>('mynotification', MyNotificationSchema);

export default MyNotification;
