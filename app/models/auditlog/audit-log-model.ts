import mongoose, { Document } from 'mongoose';

// Define the database model
interface IAuditLogs extends Document {
  name: string;
  projectId: string;
  tableName: string;
  fieldName: string;
  oldValue: string;
  newValue: string;
  updatedBy: string;
  updatedOn: string;
}

const AuditLogsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  
  },
  projectId: {
    type: String,
    required: true,  
  },
  tableName: {
    type: String,
    required: true,  
  },
  fieldName: {
    type: String,
    required: true,  
  },
  oldValue: {
    type: String,
    required: true,  
  },
  newValue: {
    type: String,
    required: true,  
  },
  updatedBy: {
    type: String,
    required: true,  
  },
  updatedOn: {
    type: String,
    required: true,  
  },
}, {
  versionKey: false,
});

const AuditLogs = mongoose.model<IAuditLogs>('auditlogs', AuditLogsSchema);

export default AuditLogs;
