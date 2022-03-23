const mongoose =require("mongoose");
// mongoose.set('useNewUrlParser',true);
// mongoose.set('useUnifiedTopology',true);

class Database{

    constructor(){
        this.connect();
    }

    connect(){
            mongoose.connect("mongodb+srv://test:1234567890@wetweecluster.nbhlp.mongodb.net/StudentDetails?retryWrites=true&w=majority")
            .then(()=>{
               console.log("database connection successfull");
            })
             .catch((err)=>{
               console.log("database connection error"+ err);
            })
    }
}
module.exports= new Database();