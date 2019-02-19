const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
  stateNumber: String,
  plateNumber: String,
  selectlongest: String,
  selectshortest: String,
  VIN: String,
  location: String,
  carmodel: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  features: [{type: String }],
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
