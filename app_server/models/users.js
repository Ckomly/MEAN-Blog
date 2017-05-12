var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/meanDB');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: String,
    userEmail: String,
    userPassword: String
});

var userModel = mongoose.model('user', userSchema);

module.exports = {

    newUser: function (name, email, password) {

        var user = new userModel({
            userName: name,
            userEmail: email,
            userPassword: password
        });

        user.save(function (err) {
            console.log(err);
        })
    },

    findUser: function (email, callback) {
        userModel.findOne({userEmail: email}, function (err, user) {
            callback(user);
        })
    }

};
