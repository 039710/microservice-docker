const {Member} = require('../models/index');
class Controller{
  static async getAllMembers(req, res){
    const orgName = req.params.orgName;
    try{
      const members = await Member.findAll({
        where: {
          orgName: orgName
        },
        order : [["followers", "DESC"]]
      })
      res.status(200).json({
        members
      })
    }
    catch(err){
      console.log(err)
      res.status(500).json({
        message: 'Internal Server Error',
        error: err
      })
    }
  }  
}

module.exports = Controller;