const { Comment } = require("../models");

class Controller {
  static async findAll(req, res) {
    const orgName = req.params.orgName;
    try {
      const comments = await Comment.findAll({
        where: {
          orgName,
          softDeleted: false,
        },
        attributes: ["comment", "orgName"],
      });
      res.status(200).json(comments);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  static async postComment(req, res) {
    const { comment } = req.body;
    const orgName = req.params.orgName;
    try {
      const newComment = await Comment.create({
        comment,
        orgName,
        softDeleted: false,
      });
      res.status(201).json(newComment);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  static async softDeleteComments(req, res) {
    const orgName = req.params.orgName;
    try {
      const comments = await Comment.findAll({
        where: {
          orgName,
        },
      });
      if (comments.length > 0) {
        await Comment.update({ softDeleted: true }, {
          where: {
            orgName
          }
        })
        res.status(200).json({ message: "Comments deleted" });
      } else {
        res.status(404).json({ message: "Organisation not found" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = Controller;
