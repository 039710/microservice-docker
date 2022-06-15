const Router = require('express').Router;
const CommentController = require('../controllers/Comment');
const router = Router();

router.get('/:orgName/comments', CommentController.findAll);
router.delete('/:orgName/comments', CommentController.softDeleteComments);
router.post("/:orgName/comments", CommentController.postComment);

module.exports = router;