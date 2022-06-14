const Router = require('express').Router;
const CommentController = require('../controllers/Comment');
const router = Router();

router.get('/:orgName/comments', CommentController.findAll);


module.exports = router;