const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
  carmodel: String,
  owner: String,
  features: String,
  imagecar: String,
  description: String,
  startDate: String,
  endDate: String,
  email: String,
  status: {
    type: String,
    enum: ['Available', 'Not Available'],
    default: 'Available'
  },
  priceperday: Number
},
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const User = mongoose.model('Car', carSchema);
module.exports = User;
