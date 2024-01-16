import mongoose, { Document } from 'mongoose';

interface ILeaveType extends Document {
  id: string;
  leaveType: string;
  isActive: string;
}

const LeaveTypeSchema = new mongoose.Schema({
  id: { type: String },
  leaveType: { type: String },
  isActive: { type: String },
}, { collection: 'leavetype', versionKey: false });

const LeaveType = mongoose.model<ILeaveType>('leavetype', LeaveTypeSchema);

export default LeaveType;
