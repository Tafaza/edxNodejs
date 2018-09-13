var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) =>
{
  var thisPost = req.postStored.comments
  console.log(thisPost)
  res.send(thisPost)
})


router.post('/', function(req, res, next) {
 
  req.postStored.comments = req.body
  res.send(req.postStored.comments);
});


router.put('/:id', (req, res, next) =>
{
  req.postStored.comments[req.params.id] = req.body
  res.status(204).send(req.params.id);
  
})

router.put('/:id', (req, res, next) =>
{
  req.postStored.comments.splice(req.params.id, 1)
  res.send(req.params.id);
  
})

module.exports = router;
