const mongoose = require("mongoose");

class Database{
  constructor(){
    this.connect();
  }
  connect(){
    mongoose.connect("mongodb+srv://test:1234567890@wetweecluster.nbhlp.mongodb.net/StudentDetails?retryWrites=true&w=majority")   .then(() => {
        console.log("connection successful");
    })
    .catch((err)=> {
       console.log("connection not successful"+err);
   }) 
  }
}

module.exports = new Database();