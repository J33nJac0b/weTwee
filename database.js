const mongoose = require("mongoose");

class Database{
  constructor(){
    this.connect();
  }
  connect(){
    mongoose.connect("mongodb+srv://jeenjacob:2255@twitterclonecluster.iba1x.mongodb.net/TwitterCloneDB?retryWrites=true&w=majority")   
    .then(() => {
        console.log("connection successful");
    })
    .catch((err)=> {
       console.log("connection not successful"+err);
   }) 
  }
}

module.exports = new Database();