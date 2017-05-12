var articleModel = require('../models/articles.js');

module.exports = {

    createArticle: function (req, res) {

        var title = req.body['articleTitle'];
        var content = req.body['articleContent'];
        var user = req.body['userName'];

        articleModel.newArticle(title, content, user);
        res.status(200);
        res.end("OK");
    }
};
