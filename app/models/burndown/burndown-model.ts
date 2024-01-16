import mongoose, { Document } from 'mongoose';

// Define the database model
interface IBurndown extends Document {
  projectId: string;
  date: Date;
  todo: number;
  inprogress: number;
  completed: number;
  todoStoryPoint: number;
  inprogressStoryPoint: number;
  completedStoryPoint: number;
  isDeleted: boolean;
}

const BurndownSchema = new mongoose.Schema({
  projectId: {
    type: String,
    required: true,  
  },
  date: {
    type: Date,
    required: true,  
  },
  todo: {
    type: Number,
    required: true,  
  },
  inprogress: {
    type: Number,
    required: true,  
  },
  completed: {
    type: Number,
    required: true,  
  },
  todoStoryPoint: {
    type: Number,
    required: true,  
  },
  inprogressStoryPoint: {
    type: Number,
    required: true,  
  },
  completedStoryPoint: {
    type: Number,
    required: true,  
  },
  isDeleted: {
    type: Boolean,
    required: true,  
  },
}, { collection: 'burndown', versionKey: false });

const Burndown = mongoose.model<IBurndown>('burndown', BurndownSchema);

export default Burndown;
