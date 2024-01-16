import mongoose, { Document } from 'mongoose';

interface IHoliday extends Document {
    year: number;
    month: number;
    monthName: string;
    date: number;
    description: string;
    type: string;
    frequency: string;
    all: string;
    day: string;
    dayName: string;
    isActive: string;
  }

const HolidaySchema = new mongoose.Schema({
  year: { type: Number },
  month: { type: Number },
  monthName: { type: String },
  date: { type: Number },
  description: { type: String },
  type: { type: String },
  frequency: { type: String },
  all: { type: String },
  day: { type: String },
  dayName: { type: String },
  isActive: { type: String },
});

const Holiday = mongoose.model<IHoliday>('holidays', HolidaySchema);

export default Holiday;
