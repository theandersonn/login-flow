import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/UserContext';
import Input from '../../components/Input';
import Message from '../../components/Message';

export const Register = () => {
  const [user, setUser] = useState({});
  const { register } = useContext(Context);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(user);
  };

  return (
    <section>
      <Message />
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
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
        <input type="submit" value="Sign up" />

        <p>Do you have an account?</p>
        <Link to="/login">Sign in</Link>
      </form>
    </section>
  );
};
