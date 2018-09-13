var express = require('express');
var router = express.Router();

/* GET posts listing. */
router.get('/', function(req, res, next) {
  console.log(req.store.posts)
  res.send(req.store.posts);
});

/* POST posts listing. */
router.post('/', function(req, res, next) {
  req.store.posts = req.body
  res.send(req.store.posts);
});

/* PUT post */
router.put('/:id', function(req, res, next) {
  req.store.posts[req.params.id] = req.body
  res.send(req.params.id);
});


/* DELETE post */
router.delete('/:id', function(req, res, next) {
  req.store.posts.splice(req.params.id, 1)
  res.send(req.params.id);
});

module.exports = router;


