const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")
const bcrypt = require("bcrypt");
const User = require('../schemas/UserSchema');
 

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res, next) => {

    res.status(200).render("register");
})
  
router.post("/", async (req, res, next) => {
  
  var studentName =req.body.studentName;
  var studentEmail =req.body.studentEmail ;
  var studentID =req.body.studentID;
  var studentBatch =req.body.studentBatch;
  var studentBranch =req.body.studentBranch;
  var studentPassword = req.body.studentPassword;

  var payload = req.body;

  if(studentName && studentEmail && studentID && studentBatch && studentBranch && studentPassword){
    var user = await User.findOne({
      $or: [
          { studentEmail: studentEmail },
          { studentID: studentID }
      ]
  })
  .catch((error) => {
      console.log(error);
      payload.errorMessage = "Something went wrong.";
      res.status(200).render("register", payload);
  });

      

  if(user == null) {
    // No user found

    var data = req.body;

    data.studentPassword = await bcrypt.hash(studentPassword, 10);

    User.create(data)
    .then((user) => {
        req.session.user = user;
        return res.redirect("/")
    })
}
  else {
    // User found
    if (studentEmail == user.studentEmail) {
        payload.errorMessage = "Email already in use.";
    }
    else {
        payload.errorMessage = "Register ID already in use.";
    }
    res.status(200).render("register", payload);
  }

}
else {
    payload.errorMessage = "Make sure each field has a valid value.";
    res.status(200).render("register", payload);
}
})

module.exports = router;