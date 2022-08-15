const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const createUserToken = require('../helpers/create-user-token');
const getToken = require('../helpers/get-token');
const getUserByToken = require('../helpers/get-user-by-token');

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
      res
        .status(422)
        .json({ message: 'A confirmação de senha é obrigatória.' });
      return;
    }

    if (password !== confirmPassword) {
      res.status(422).json({
        message: 'A senha e a confirmação de senha precisam ser iguais.',
      });
      return;
    }

    // check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(422).json({ message: 'Por favor utilize outro e-mail.' });
      return;
    }

    // create a password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // create a user
    const user = new User({
      name,
      email,
      password: passwordHash,
    });

    try {
      const newUser = await user.save();
      await createUserToken(newUser, req, res);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    if (!email) {
      res.status(422).json({ message: 'O email é obrigatório.' });
      return;
    }

    if (!password) {
      res.status(422).json({ message: 'A senha é obrigatória.' });
      return;
    }

    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      res
        .status(422)
        .json({ message: 'Não há usuário cadastrado com este email.' });
      return;
    }

    // check if password match with db password
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      res.status(422).json({ message: 'Senha inválida.' });
      return;
    }

    await createUserToken(user, req, res);
  }

  static async checkUser(req, res) {
    let currentUser;

    if (req.headers.authorization) {
      const token = getToken(req);
      const decoded = jwt.verify(token, 'nossosecret');
      currentUser = await User.findById(decoded.id).select('-password');
    } else {
      currentUser = null;
    }

    res.status(200).send(currentUser);
  }

  static async getUserById(req, res) {
    const { id } = req.params;
    const user = await User.findById(id).select('-password');

    if (!user) {
      res.status(422).json({ message: 'Usuário não encontrado.' });
      return;
    }

    res.status(200).json({ user });
  }

  static async editUser(req, res) {
    // check if user exists
    const token = getToken(req);
    const user = await getUserByToken(res, token);
    const { name, email, password, confirmPassword } = req.body;

    // validations
    if (!name) {
      res.status(422).json({ message: 'O nome é obrigatório' });
      return;
    }

    user.name = name;

    if (!email) {
      res.status(422).json({ message: 'O email é obrigatório' });
      return;
    }

    // check if email has already taken
    const userExists = await User.findOne({ email });
    if (user.email !== email && userExists) {
      res.status(422).json({ message: 'Por favor utilize outro email!' });
      return;
    }

    user.email = email;

    if (password !== confirmPassword) {
      res.status(422).json({ message: 'As senhas não conferem!' });
      return;
    }
    // eslint-disable-next-line eqeqeq
    if (password == confirmPassword && password != null) {
      // create a password
      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);
      user.password = passwordHash;
    }
    try {
      // returns user updated data
      await User.findOneAndUpdate(
        { _id: user._id },
        { $set: user },
        { new: true },
      );

      res.status(200).json({
        message: 'Usuário atualizado com sucesso!',
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
};
