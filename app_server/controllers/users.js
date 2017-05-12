



module.exports = {
  usersReadAll: function(req, res){
    console.log("ReadAll");
    res.end();
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
