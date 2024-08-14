var express = require('express');
var router = express.Router();

const userModel = require('./users')

/* GET home page. */
router.get('/', (req, res) => {
  console.log("hello")
  res.render("index")
});

router.post("/create",function(req,res){
  userModel.create({
    name:req.body.name,
    email:req.body.email,
    pno:req.body.pno,
    links:req.body.links,
    comments:req.body.comments,
  }).then(function(createdUser){
    res.send(createdUser);
  })
})

// router.get("/read",function(req,res){
//   userModel.find().then(function(allUsers){
//     res.send(allUsers)
//   })
// })


// router.get('/user', function(req, res){
//   res.render('user');
// })

module.exports = router;
