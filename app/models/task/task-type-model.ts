import mongoose from 'mongoose';

// Define the database model
const TaskTypeSchema = new mongoose.Schema({
  displayName: {
    type: String
  },
  title: {
    type: String
  },
}, { versionKey: false });

const TaskType = mongoose.model('taskType', TaskTypeSchema);

export default TaskType;
