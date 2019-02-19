const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fistName: String,
  middleName: String,
  dateOfBirthMonth: String,
  dateOfBirthDay: String,
  dateOfBirthYear: String,
  advanceNotice: String,
  state: String,
  username: String,
  password: String,
  status: {
    type: String,
    enum: ['Pending Confirmation', 'Active'],
    default: 'Pending Confirmation'
  },
  confirmationCode: String,
  email: String,
},
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const User = mongoose.model('User', userSchema);
module.exports = User;
