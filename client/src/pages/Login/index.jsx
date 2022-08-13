import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import Input from '../../components/Input';
import Message from '../../components/Message';

import './styles.css';

export const Login = () => {
  const [user, setUser] = useState({});
  const { handleLogin } = useAuth();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user);
  };

  return (
    <section className="section-login">
      <div className="wrapper-form-login">
        <form className="form-login" onSubmit={handleSubmit}>
          <Message />
          <h1>Sign In</h1>

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

          <input className="btn btn-primary" type="submit" value="Sign in" />

          <div className="box-newtoapp">
            <p>New to App?</p>
            <Link className="btn btn-secondary" to="/register">
              Create your app account
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};
