import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Login = () => {
  const { addUser, state } = useContext(AppContext);
  const API = 'http://localhost:3001/api/';
  const [form, setValues] = useState({});
  const [showPassword, setView] = useState(false);
  const history = useHistory();

  const handleInput = (e) => {
    e.preventDefault();
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(state);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.user_email || !form.user_password) {
      console.log('Add data');
    } else {
      addUser(form);
      history.push('/');
    }
  };

  const handleShowPassword = (event) => {
    console.log(showPassword);
    if (showPassword) {
      event.target.previousSibling.type = 'text';
    } else {
      event.target.previousSibling.type = 'password';
    }
    setView(!showPassword);
  };

  return (
    <>
      <div className="CurrentRoute">
        <form className="Form" onSubmit={handleSubmit}>
          <input
            className="Form-input"
            type="email"
            name="user_email"
            onChange={handleInput}
            placeholder="e-mail"
            required
          />
          <div className="Form-password-container">
            <input
              className="Form-input"
              type="password"
              name="user_password"
              onChange={handleInput}
              placeholder="Password"
              required
            />
            <span className="eye" onClick={handleShowPassword}>
              O
            </span>
          </div>
          <button type="submit" className="long button">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
