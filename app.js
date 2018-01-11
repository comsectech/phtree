const express = require('express')
const app = express()
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

var Blog = mongoose.model('Blog' , blogSchema);


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/phone' , (req, res) => res.send('Phone Tree!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
