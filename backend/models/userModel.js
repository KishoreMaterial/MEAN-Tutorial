const mongoose = require('mongoose');

// const addressSchema = new mongoose.Schema({
//   place: String,
//   city: String
// })

const userSchema = new mongoose.Schema({
  name: String,
  email:String,
  age: Number,
  address: String,
  degree: {
    type: String,
    uppercase:true
  }
  // address: addressSchema
});

const userModel = mongoose.model('student', userSchema);

module.exports = userModel;