const express = require("express");
const router = express.Router();

const {registerUser,loginUser,allUsers} = require("../controllers/user");

router.get('/',(req,res) => {
    res.status(200).send("Auth route!");
});


router.post('/register',registerUser);
router.post("/login",loginUser);
router.get('/all',allUsers);

module.exports =router;

/*
 {
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjYwMDk4NDJiOTBkNjA0ZTBjM2FkNTMiLCJpYXQiOjE3MTc1NzE2MzUsImV4cCI6MTcxODQzNTYzNX0.teTDYKOr9NL2qVXwMa_A4Dm5bWGQxWuPK7uygZjnRI0",
  "userId": "666009842b90d604e0c3ad53",
  "name": "Abhay Verma",
  "email": "abhay024@gmail.com",
  "mobile": "8303001459"
}
   [{
  


   }]
 */ 