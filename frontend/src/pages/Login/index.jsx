import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import { Context } from '../../context/UserContext';

export const Login = () => {
  const handleChange = () => {};

  return (
    <>
      <h1>Sign in to app</h1>
      <form>
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
