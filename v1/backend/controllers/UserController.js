const User = require('../models/User');

module.exports = class UserController {
  static async register(req, res) {
    const { name, email, password, confirmPassword } = req.body;

    // validations
    if (!name) {
      res.status(422).json({ message: 'O nome é obrigatório' });
      return;
    }

    if (!email) {
      res.status(422).json({ message: 'O email é obrigatório.' });
      return;
    }

    if (!password) {
      res.status(422).json({ message: 'A senha é obrigatória.' });
      return;
    }

    if (!confirmPassword) {
      res.status(422).json({ message: 'A confirmação de senha é obrigatória.' });
      return;
    }

    if (password !== confirmPassword) {
      res.status(422).json({ message: 'A senha e a confirmação de senha precisam ser iguais.' });
      return;
    }

    // check if user exists
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      res.status(422).json({ message: 'Por favorm utilize outro e-mail.' });
      return;
    }
  }  
}