const Router = require('express').Router;
const router = new Router();
const MemberController = require('../controllers/Member');
router.get('/:orgName/members',MemberController.getAllMembers);

module.exports = router;