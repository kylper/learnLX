var express = require('express');
var router = express.Router();

var User = require('../models/users.js');

/* GET details of an individual user */
router.get('/:id/:element', function(req, res, next){
  var output = {};
  if (req.params.element.toLowerCase() === "badges"){
    // normally this will be output = {output from (mongodb) user.badge}
    output = { user: req.params.id , element: "Badges" };
  } else {
    output = { user: req.params.id , element: 'Not found!' };
    res.status(404);
  }
  res.json(output);
});

router.get('/:id', function(req, res, next){
  // will output everything about user in the future.
  var output = { username: req.params.id };
  if (req.params.id == 0 || !output) {
    res.status(404);
    output = { user: "Not found!" };
  };
  res.json(output);
});

/* GET list of users */
router.get('/', function(req, res, next){
  User.find({}, function(err, users) {
    var userMap = {};
    users.forEach(function(user) {
      userMap[user._id] = user;
    });
    res.send(userMap);
  });
});

/* POST new user */
router.post('/', function(req, res, next){
res.status(501);
  var newData = [ req.body.name, req.body.email, req.body.role ];

  var newUser = new User({
    name: newData[0],
    email: newData[1],
    role: newData[2]
  });

  newUser.save(function (err) {
    if (err) return handleError(err);
  });
  /* res.status(501);
  res.json({ message: 'Failed to create new user.' });
  res.status(200);
  res.json({ message: 'Success' }); */
});

/* PUT user elements - to update a user profile */
router.put('/:id', function(req, res, next){
  res.status(501);
  res.json({ message: 'Function under development.' });
});

/* DELETE user (self) - REQUIRED to be authenticated, maybe send an email verification */
router.delete('/:id', function(req, res, next){
  res.status(501);
  res.json({ message: 'Function under development.' });
});


module.exports = router;
