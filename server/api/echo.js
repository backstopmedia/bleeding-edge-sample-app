var router = require('express').Router({caseSensitive: true, strict: true});

router.get('/:word', function(req, res){
  res.send(req.params.word);
});

module.exports = router;