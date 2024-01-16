import mongoose, { Document } from 'mongoose';

interface IEmailLogs extends Document {
  to: string;
  cc: string;
  subject: string;
  bodyText: string;
  createdBy: string;
  createdOn: Date;
}

const EmailLogsSchema = new mongoose.Schema({
  to: {
    type: String,
    required: true,  
  },
  cc: {
    type: String,
    required: false,  
  },
  subject: {
    type: String,
    required: true,  
  },
  bodyText: {
    type: String,
    required: true,  
  },
  createdBy: {
    type: String,
    required: true,  
  },
  createdOn: {
    type: Date,
    required: true,  
  },
}, { versionKey: false });

const EmailLogs = mongoose.model<IEmailLogs>('emaillog', EmailLogsSchema);

export default EmailLogs;
