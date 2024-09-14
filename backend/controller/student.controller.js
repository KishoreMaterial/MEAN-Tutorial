const express = require('express');
const pe = require('parse-error')

const User = require('../models/userModel')

const getDetails = async (req, res) => {
  const data = await User.find({})
  //   .then((data) => {
  //     return [null,data];
  //   }).catch(err => {
  //     return [err, null]
  //   })
  // // console.log("data: ", data);
  
  // if (err) {
  //   res.statusCode = 422;
  //   return res.json({success:false,err:err.message})
  // }

  // send_data = { success: true };
  // send_data = Object.assign(data, send_data);
  // console.log("sen data value: ",send_data,res.statusCode);
  
  return res.json(data)
    

}

// to = function(promise) {
//   return promise
//   .then((data) => {
//     return [null, data]
//   }).catch((err) => {
//     [pe(err),null]
//   });
// }

module.exports.userDetails = getDetails;


const addDetails = async (req, res) => {
  // console.log("req: ",req.body);
  
  const data = await User.create({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    address: req.body.address,
    degree: req.body.degree
  });

  data.save().then(() => {
    res.statusCode = 200;
    return res.json({success:true})
  }).catch((err) => {
    return res.json({success:false,error:err.message})
  })
}

module.exports.addDetails = addDetails

const editDetails = async (req, res) => {
  // const data = await User.updateOne().where({ id: req.body.id });
  const data = await User.updateOne({ id: req.params.id }, {
    $set: {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      address: req.body.address,
      degree: req.body.degree
  }});
  data.save().then(() => {
    console.log("DATA UPDATED SUCCESSFULLY");
    return res.json({success:true})
  }).catch((err) => {
    console.log("SOMETING WENT WRONG IN UPDATION: ",err.message);
    return res.json({success:false})
  })
}

module.exports.editDetails = editDetails;