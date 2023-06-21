var express = require('express');
var router = express.Router();

var pgp = require("pg-promise")(/*options*/);
var db = pgp(process.env.DATABASE_URL);

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.any('SELECT * FROM users')
    .then(function(data) {
      res.send(data);
    }).catch(function(error) {
      res.send('Error')
    });
});

/* Create a user. */
router.post('/', function (req, res) {
  db.none('INSERT INTO users(id, name) VALUES($1, $2)', [3, 'John Smith']);

  res.send('POST request accepted')
})

module.exports = router;
