import mongoose, { Document, Schema } from "mongoose";

// Define the database model
interface ISubTask extends Document {
  taskId: string;
  title: string;
  completed: boolean;
  edit: boolean;
  dateOfCompletion: Date;
  isDeleted: boolean;
  hiddenUsrId: string;
  storyPoint: number;
  subtaskHiddenDepId: string;
  sequence: number;
}

const SubTaskSchema = new mongoose.Schema<ISubTask>({
  taskId: {
    type: String,
  },
  title: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
  edit: {
    type: Boolean,
  },
  dateOfCompletion: {
    type: Date,
  },
  isDeleted: {
    type: Boolean,
  },
  hiddenUsrId: {
    type: String,
  },
  storyPoint: {
    type: Number,
  },
  subtaskHiddenDepId: {
    type: String,
  },
  sequence: {
    type: Number,
  },
}, {
  versionKey: false,
});

const SubTask = mongoose.model<ISubTask>('subTask', SubTaskSchema);

export { SubTask, SubTaskSchema };
