import mongoose, { Document, Schema } from "mongoose";

// Define the database model
interface ISchedulerToken extends Document {
  ip: string;
  token: string;
  active: boolean;
}

const SchedulerTokenSchema = new mongoose.Schema<ISchedulerToken>({
  ip: {
    type: String,
  },
  token: {
    type: String,
  },
  active: {
    type: Boolean,
  },
}, {
  collection: 'schedulertokens',
  versionKey: false,
});

const SchedulerToken = mongoose.model<ISchedulerToken>('schedulerToken', SchedulerTokenSchema);

export { SchedulerToken, SchedulerTokenSchema };
