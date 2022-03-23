const express = require('express');
const app= express(); //instance of express
const router = express.Router();
  
//type of template engine
app.set("view engine","pug");
app.set("views","views");

router.get("/",(req,res,next)=>{
    res.status(200).render("login");
})

module.exports = router;