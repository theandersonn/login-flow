import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Message from '../../components/Message';
import { Context } from '../../context/UserContext';

export const Login = () => {
  const [user, setUser] = useState({});
  const { login } = useContext(Context);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user);
  };

  return (
    <>
      <Message />
      <h1>Sign in to app</h1>
      <form onSubmit={handleSubmit}>
        <Input
          text="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          handleOnChange={handleChange}
        />

        <Input
          text="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          handleOnChange={handleChange}
        />

        <input type="submit" value="Sign in" />

        <p>New to App?</p>
        <Link to="/register">Create your app account</Link>
      </form>
    </>
  );
};
