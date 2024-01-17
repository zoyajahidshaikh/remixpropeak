import mongoose, { Document } from "mongoose";

// Define the database model
interface INotification extends Document {
  notification: string;
  shownotifications: any[]; // Update the type as needed
  toDate: string;
  fromDate: string;
  isDeleted: boolean;
  hidenotifications: any[]; // Update the type as needed
  projectId: string;
  // userIds: any[]; // Uncomment and update the type as needed
}

const NotificationSchema = new mongoose.Schema({
  notification: {
    type: String,
  },
  shownotifications: {
    type: [mongoose.Schema.Types.Mixed], // Update the type as needed
    default: [],
  },
  toDate: {
    type: String,
  },
  fromDate: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
  },
  hidenotifications: {
    type: [mongoose.Schema.Types.Mixed], // Update the type as needed
    default: [],
  },
  projectId: {
    type: String,
  },
  // userIds: {
  //   type: [mongoose.Schema.Types.Mixed], // Uncomment and update the type as needed
  //   default: [],
  // },
}, {
  collection: 'notification',
  versionKey: false,
});

const Notification = mongoose.model<INotification>('notification', NotificationSchema);

export default Notification;
