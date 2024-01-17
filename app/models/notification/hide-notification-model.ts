import mongoose, { Document } from "mongoose";

// Define the database model
interface IHideNotification extends Document {
  userId: string;
  // notificationId?: string; // Uncomment if needed
}

const HideNotificationSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  // notificationId: {
  //   type: String,
  // },
}, {
  collection: 'hidenotification',
  versionKey: false,
});

const HideNotification = mongoose.model<IHideNotification>('hidenotification', HideNotificationSchema);

export default HideNotification;
