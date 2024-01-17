import mongoose from 'mongoose';

// Define the database model
const TaskPrioritySchema = new mongoose.Schema({
  priority: {
    type: String
  },
  displayName: {
    type: String
  },
}, { collection: 'taskpriorities', versionKey: false });

const TaskPriority = mongoose.model('taskPriority', TaskPrioritySchema);

export default TaskPriority;
