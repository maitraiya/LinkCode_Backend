const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const ContactUs = require("../models/contact");

exports.user_submit = async (req, res, next) => {

  console.log(req.body);
  //res.status(200).json({ msg: "user_signup works" })
  //req.body.lastName !== '' ||
  if(req.body.firstName !== '' ||  req.body.email !== '' || req.body.subject !== '')
  {
    const ContactUsData = new ContactUs({
      _id: new mongoose.Types.ObjectId(),
      firstName: req.body.firstName,
      //lastName: req.body.lastName,
      email: req.body.email,
      subject: req.body.subject,
    });
    console.log(ContactUsData)
    const savingData = await ContactUsData.save();
    if(savingData)
    {
      
      return res.status(201).json({
        message : "Contact saved"
      });
    }
    else
    {
      return res.status(500).json({
        error : "Contact not saved"
      }); 
    }

  }
  else{
    return res.status(500).json({
      error : "Please enter details properly"
    }); 
    
  }
  

};

// exports.user_login = (req, res, next) => {
//   res.status(200).json({ msg: "user_login works" })
// };

exports.user_delete = (req, res, next) => {
  res.status(200).json({ msg: "user_delete works" })

};
