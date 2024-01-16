import mongoose, { Document } from 'mongoose';

interface ILeaves extends Document {
  leaveTypeId: string;
  type: string;
  maxinyear: string;
  financialyear: string;
  monthly: string;
  addeom: string;
  months: string;
  joinedInMId: string;
  maxaccumulation: string;
}

const LeavesSchema = new mongoose.Schema({
  leaveTypeId: { type: String },
  type: { type: String },
  maxinyear: { type: String },
  financialyear: { type: String },
  monthly: { type: String },
  addeom: { type: String },
  months: { type: String },
  joinedInMId: { type: String },
  maxaccumulation: { type: String },
});

const Leaves = mongoose.model<ILeaves>('leaves', LeavesSchema);

export default Leaves;
