import mongoose, { Document } from "mongoose";

// Define the database model
interface IMessage extends Document {
  title: string;
  isDeleted: boolean;
  createdOn: Date;
  createdBy: string;
}

const MessageSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
  },
  createdOn: {
    type: Date,
  },
  createdBy: {
    type: String,
  },
}, { versionKey: false });

const Message = mongoose.model<IMessage>('message', MessageSchema);

export default Message;
