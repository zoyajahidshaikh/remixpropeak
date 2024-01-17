import mongoose, { Document } from 'mongoose';

// Define the database model
interface INotifyUser extends Document {
  name: string;
  userId: string;
  emailId: string;
}

const NotifyUserSchema = new mongoose.Schema<INotifyUser>({
  name: {
    type: String
  },
  userId: {
    type: String
  },
  emailId: {
    type: String
  }
}, { versionKey: false });

const NotifyUsers = mongoose.model<INotifyUser>('notifyUser', NotifyUserSchema);

export type { INotifyUser }; // Use 'export type' for re-exporting the type

export { NotifyUsers, NotifyUserSchema };
