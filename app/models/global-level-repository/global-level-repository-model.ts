import mongoose, { Document } from 'mongoose';

interface IUploadRepositoryFile extends Document {
  title: string;
  fileName: string;
  description: string;
  path: string;
  createdOn: Date;
  isDeleted: boolean;
  createdBy: string;
}

const UploadGlobalRepositoryFileSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,  
  },
  fileName: {
    type: String,
    required: true,  
  },
  description: {
    type: String,
    required: false,  
  },
  path: {
    type: String,
    required: true,  
  },
  createdOn: {
    type: Date,
    required: true,  
  },
  isDeleted: {
    type: Boolean,
    required: true,  
  },
  createdBy: {
    type: String,
    required: true,  
  },
}, { versionKey: false });

const UploadRepositoryFile = mongoose.model<IUploadRepositoryFile>('UploadRepositoryFile', UploadGlobalRepositoryFileSchema);

export default UploadRepositoryFile;
