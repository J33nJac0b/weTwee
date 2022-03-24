const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  studentName: {type:String,required:true,trim:true},
  studentEmail: {type:String,required:true,trim:true,unique: true},
  studentID: {type:String,required:true,trim:true,unique: true},
  studentBatch: {type:String,required:true,trim:true},
  studentBranch: {type:String,required:true,trim:true},
  studentPassword: {type:String,required:true},
  profilePic: {type:String,default: "/images/profilePic.png "},
  
},{timestamps: true});

var User = mongoose.model('User',UserSchema);
module.exports = User;