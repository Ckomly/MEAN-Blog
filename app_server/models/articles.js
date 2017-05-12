var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
    articleTitle: String,
    articleContent: String,
    userName: String
});

var articleModel = mongoose.model('articles', articleSchema);

module.exports = {
  newArticle: function (title, content, user) {

      var article = new articleModel({
          articleTitle: title,
          articleContent: content,
          userName: user
      });

      article.save(function (err) {
          console.log(err);
      })
  }

};
