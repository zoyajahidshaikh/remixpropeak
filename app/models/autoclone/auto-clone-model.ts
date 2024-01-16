import mongoose, { Document } from 'mongoose';

// Define the database model
interface IAutoClone extends Document {
  projectId: string;
  periodType: string;
  repeat: string;
  endOnDate: string;
  endAfterOccurances: string;
  endNever: string;
  monthlyType: string;
  day: string;
  repeatOnDateValue: string;
  monthRepeatOnDayValue: string;
  monthRepeatOnDayValueOccurances: string;
  startDate: string;
}

const AutoCloneSchema = new mongoose.Schema({
  projectId: {
    type: String,
    required: true,  
  },
  periodType: {
    type: String,
    required: true,  
  },
  repeat: {
    type: String,
    required: true,  
  },
  endOnDate: {
    type: String,
  },
  endAfterOccurances: {
    type: String,
  },
  endNever: {
    type: String,
  },
  monthlyType: {
    type: String,
  },
  day: {
    type: String,
  },
  repeatOnDateValue: {
    type: String,
  },
  monthRepeatOnDayValue: {
    type: String,
  },
  monthRepeatOnDayValueOccurances: {
    type: String,
  },
  startDate: {
    type: String,
    required: true,  
  },
}, {
  versionKey: false,
});

const AutoClone = mongoose.model<IAutoClone>('autoclone', AutoCloneSchema);

export default AutoClone;
