const User = require('../models/User');

module.exports = class UserController {
  static async register(req, res) {
    res.send('hello world');
  }  
}