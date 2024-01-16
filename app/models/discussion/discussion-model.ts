import mongoose, { Document, Schema, Types } from 'mongoose';

interface IReplyMessage {
  // Define the structure for reply messages if needed
  // Example: message: string;
}

interface IDiscussion extends Document {
  title: string;
  projectId: string;
  createdOn: Date;
  createdBy: string;
  isDeleted: boolean;
  replyMessages: Types.Array<IReplyMessage>;
}

const ReplyMessageSchema = new mongoose.Schema({
  // Define the schema for reply messages if needed
  // Example: message: { type: String, required: true },
}, { _id: false });

const DiscussionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,  
  },
  projectId: {
    type: String,
    required: true,  
  },
  createdOn: {
    type: Date,
    required: true,  
  },
  createdBy: {
    type: String,
    required: true,  
  },
  isDeleted: {
    type: Boolean,
    required: true,  
  },
  replyMessages: {
    type: [ReplyMessageSchema],
    default: [],
  },
}, { versionKey: false });

const Discussion = mongoose.model<IDiscussion>('discussion', DiscussionSchema);

export { Discussion, DiscussionSchema };
