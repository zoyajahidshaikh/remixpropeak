import mongoose from 'mongoose';

// Define the database model
const TokenSchema = new mongoose.Schema({
  refreshToken: {
    type: String
  },
  token: {
    type: String
  },
  userId: {
    type: String
  },
  createdOn: {
    type: Number
  },
  updatedOn: {
    type: Number
  },
  maxAge: {
    type: Number // seconds
  }
}, { versionKey: false });

const Token = mongoose.model('token', TokenSchema);

export default Token;
