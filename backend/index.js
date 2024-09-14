const express = require('express')
const mongose = require("mongoose");
const User = require('./models/userModel');
const v1 = require('./Routes/v1');
var cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(cors());
// require('../global_functions');

// require('./global_functions')

const uri = "mongodb+srv://kishorekrish:GJ8osKW6K7e5KOc5@cluster0.9m3au.mongodb.net/StudentDatas";

console.log("inside index",bodyParser.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}));


mongose.connect(uri)
  .then(() => {
    console.log("connected successfully");
  }).catch(() => {
    console.log("not connected successfully");
  })

  //  FIRST METHOD TO SAVE OR ADD DATA

// const userData = new User({
//   name: "krish",
//   age: 43
// });

// userData.save().then(() => {
//   console.log("details addes successfully");
  
// })

//  SECOND METHOD TO SAVE OR ADD DATA

// const run = async () => {
//   try {
//     const newUser = await User.create({
//       name: "kishore",
//       age: 23,
//       address: {
//         place: "golden street",
//         city:"trichy"
//       }
//     });
//     console.log("data added successfully ",newUser);
    
//   } catch (err) {
//     console.error(err.message);
    
//   }
// }

// run();

app.use('/v1', v1);

app.listen(5001, () => {
  console.log("port listening successfully");
  
});