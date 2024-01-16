import mongoose, { Document } from 'mongoose';

interface ILeaveApplication extends Document {
  userId: string;
  userName: string;
  fromEmail: string;
  fromDate: string;
  toDate: string;
  workingDays: string;
  reason: string;
  leaveTypeId: string;
  leaveType: string;
  status: string;
  rejectionReason: string;
  leaveCategory: string;
  createdBy: string;
  createdOn: string;
  modifiedBy: string;
  modifiedOn: string;
  isDeleted: boolean;
  leaveWithoutApproval: boolean;
}

const LeaveApplicationSchema = new mongoose.Schema({
  userId: { type: String },
  userName: { type: String },
  fromEmail: { type: String },
  fromDate: { type: String },
  toDate: { type: String },
  workingDays: { type: String },
  reason: { type: String },
  leaveTypeId: { type: String },
  leaveType: { type: String },
  status: { type: String },
  rejectionReason: { type: String },
  leaveCategory: { type: String },
  createdBy: { type: String },
  createdOn: { type: String },
  modifiedBy: { type: String },
  modifiedOn: { type: String },
  isDeleted: { type: Boolean },
  leaveWithoutApproval: { type: Boolean },
}, { collection: 'leaveapplications', versionKey: true });

const LeaveApplication = mongoose.model<ILeaveApplication>('leaveapplications', LeaveApplicationSchema);

export default LeaveApplication;
