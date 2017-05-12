var userModel = require('../models/users.js');
var bcrypt = require('bcrypt');

module.exports = {

    register: function (req, res) {

        var userName = req.body['userName'];
        var userEmail = req.body['userEmail'];
        var userPassword = req.body['userPassword'];

        userModel.findUser(userEmail, function (data) {
            if (data){
                res.status(200);
                res.end("Not OK");
            }
        });

        bcrypt.hash(userPassword, 10, function (err, hash) {
            if (!err) {
                var userPassword = hash;
                if (userName && userEmail && userPassword) {
                    userModel.newUser(userName, userEmail, userPassword);
                    res.status(200);
                    res.end("OK")
                }
                else {
                    res.status(200);
                    res.end("Not OK");
                }
            }
        });
    },

    login: function (req, response) {

        var userEmail = req.body['userEmail'];
        var userPassword = req.body['userPassword'];

        userModel.findUser(userEmail, function (data) {
            if (data) {
                bcrypt.compare(userPassword, data.userPassword, function (err, res)
                {
                    //req.session.userId = data._id;
                    response.send(data);
                });
            }
            else {
                response.end("Email or password is wrong.");
            }
        });
    },

    checkAuth : function(req, res) {
        req.session.userId;
    }

};
