var userModel = require('../models/users.js');


module.exports = {
  usersReadAll: function(req, res){
    userModel.findAllUsers(function(data) {
      if(data)
      {
        res.send(data);
      }
      else {
        res.send('did not find anything.');
      }
      res.end();
    })
  },

  usersReadOne: function(req, res){
    var userName = req.params.userData;

    userModel.findProfil(userName, function (data) {
      if(data)
      {
        res.send(data);
      }
      else {
        res.send('did not find anything.');
      }
      res.end();
    });
  },

  usersUpdateOne: function(req, res){
    console.log("Update"  + req.params.userid);
    res.end();
  },

  usersDeleteOne: function(req, res){
    console.log("Delete"  + req.params.userid);
    res.end();
  }
}
