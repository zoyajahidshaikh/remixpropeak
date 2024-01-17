import mongoose, { Document } from 'mongoose';

// Define the database model
interface IUploadFile extends Document {
  isDeleted: boolean;
  filename: string;
  createdOn: Date;
  createdBy: string;
}

const UploadFileSchema = new mongoose.Schema<IUploadFile>({
  isDeleted: {
    type: Boolean
  },
  filename: {
    type: String
  },
  createdOn: {
    type: Date
  },
  createdBy: {
    type: String
  }
}, { versionKey: false });

const UploadFile = mongoose.model<IUploadFile>('uploadFile', UploadFileSchema);

export { UploadFile, UploadFileSchema };
