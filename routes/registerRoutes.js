const express = require('express');
const { parse } = require('path');
const app= express(); //instance of express
const router = express.Router();
const bodyParser= require("body-parser");


  
//type of template engine
app.set("view engine","pug");
app.set("views","views");

app.use(bodyParser.urlencoded({extended:false})); //setting up the body parser


router.get("/",(req,res,next)=>{ 
    res.status(200).render("register");
})
router.post("/",(req,res,next)=>{ 
    //var studentName = req.body.studentName.trim();
    var studentName = req.body.studentName;
    var studentID = req.body.studentID;
    var studentBatch = req.body.studentBatch;
    var studentBranch = req.body.studentBranch;
    var studentEmail = req.body.studenEmail;
    var studentPassword = req.body.studentPassword;



    var payload = req.body;
    
    if ( studentName && studentID && studentBatch && studentBranch && studentEmail && studentPassword){

    }

    else{
        payload.errorMessage = "Make sure each field has a valid value.";
        res.status(200).render("register",payload);
    }
   
})

module.exports = router;