import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import Input from '../../components/Input';
import Message from '../../components/Message';

import './styles.css';

export const Register = () => {
  const [user, setUser] = useState({});
  const { handleRegister } = useContext(AuthContext);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(user);
  };

  return (
    <section className="section-register">
      <div className="wrapper-form-register">
        <form className="form-register" onSubmit={handleSubmit}>
          <Message />
          <h1>Sign Up</h1>

          <Input
            text="Name"
            type="text"
            name="name"
            placeholder="Your name"
            handleOnChange={handleChange}
          />
          <Input
            text="Email"
            type="email"
            name="email"
            placeholder="Your email address"
            handleOnChange={handleChange}
          />
          <Input
            text="Password"
            type="password"
            name="password"
            placeholder="Create a password"
            handleOnChange={handleChange}
          />
          <Input
            text="Password confirmation"
            type="password"
            name="confirmPassword"
            placeholder="Confirmation your password"
            handleOnChange={handleChange}
          />
          <input className="btn btn-primary" type="submit" value="Sign up" />

          <div className="box-haveanaccount">
            <p>Do you have an account?</p>
            <Link className="btn btn-secondary" to="/login">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};
