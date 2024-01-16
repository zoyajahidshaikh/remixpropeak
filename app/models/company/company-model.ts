import mongoose, { Document } from 'mongoose';

// Define the database model
interface ICompany extends Document {
  companyName: string;
  companyCode: string;
  country: string;
  address: string;
  contact: string;
  isDeleted: boolean;
}

const CompanySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,  
  },
  companyCode: {
    type: String,
    required: true,  
  },
  country: {
    type: String,
    required: true,  
  },
  address: {
    type: String,
    required: true,  
  },
  contact: {
    type: String,
    required: true,  
  },
  isDeleted: {
    type: Boolean,
    required: true,  
  },
}, { collection: 'company', versionKey: false });

const Company = mongoose.model<ICompany>('company', CompanySchema);

export default Company;
