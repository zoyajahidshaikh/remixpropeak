import mongoose, { Document, Schema } from 'mongoose';

interface IMessage {
  content: string;
  // Add other properties as needed
}

interface IUploadFile {
  fileUrl: string;
  // Add other properties as needed
}

interface ISubTask {
  title: string;
  completed: boolean;
  // Add other properties as needed
}

interface ITask extends Document {
  userId: string;
  title: string;
  description: string;
  completed: boolean;
  category: string;
  tag: string;
  status: string;
  storyPoint: number;
  startDate: Date;
  endDate: Date;
  depId: string;
  taskType: string;
  priority: string;
  createdOn: string;
  modifiedOn: string;
  createdBy: string;
  modifiedBy: string;
  isDeleted: boolean;
  sequence: string;
  messages: IMessage[];
  uploadFiles: IUploadFile[];
  subtasks: ISubTask[];
  dateOfCompletion: string;
  subtaskId: string;
}

const MessageSchema = new Schema<IMessage>({
  content: String,
  // Add other properties as needed
});

const UploadFileSchema = new Schema<IUploadFile>({
  fileUrl: String,
  // Add other properties as needed
});

const SubTaskSchema = new Schema<ISubTask>({
  title: String,
  completed: Boolean,
  // Add other properties as needed
});

const TaskSchema = new mongoose.Schema<ITask>({
  // ... other fields
  messages: [MessageSchema],
  uploadFiles: [UploadFileSchema],
  subtasks: [SubTaskSchema],
  // ... other fields
}, { versionKey: false });

const Task = mongoose.model<ITask>('task', TaskSchema);

export { Task };
