import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';

const SignUp = () => {
  const { addUser, state } = useContext(AppContext);
  const API = 'http://localhost:3001/api/users';
  // const API = 'https://cross-platform.herokuapp.com/api/users/sign-up';

  const [form, setValues] = useState({});
  const [showPassword, setView] = useState(false);
  const [showAlert, setAlert] = useState(false);
  const history = useHistory();

  const handleInput = (e) => {
    e.preventDefault();
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !form.user_lastname ||
      !form.user_name ||
      !form.user_email ||
      !form.user_password
    ) {
      console.log('Add data');
      setAlert(true);
    } else {
      setAlert(false);
      addUser(form);
      const data = {
        user_name: form.user_name,
        user_lastname: form.user_lastname,
        user_email: form.user_email,
        user_password: form.user_password,
      };
      console.log('Data', data);
      fetch(API, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => console.log(err));
      history.push('/login');
    }
  };

  useEffect(() => {
    setView(true);
    console.log(showPassword);
  }, []);

  const handleShowPassword = (event) => {
    if (showPassword) {
      event.target.previousSibling.type = 'text';
    } else {
      event.target.previousSibling.type = 'password';
    }
    setView(!showPassword);
    console.log(showPassword);
  };

  return (
    <>
      <div className="CurrentRoute">
        <form className="Form" onSubmit={handleSubmit}>
          <input
            className="Form-input"
            type="text"
            name="user_name"
            onChange={handleInput}
            placeholder="Name"

            // required
          />
          <input
            className="Form-input"
            type="text"
            name="user_lastname"
            onChange={handleInput}
            placeholder="Last Name
            "
            // required
          />
          <input
            className="Form-input"
            type="email"
            name="user_email"
            onChange={handleInput}
            placeholder="e-mail
            "
            // required
          />
          <div className="Form-password-container">
            <input
              className="Form-input"
              type="password"
              name="user_password"
              onChange={handleInput}
              placeholder="Password"

              // required
            />
            <span className="eye" onClick={handleShowPassword}>
              {showPassword === true && <i className="fas fa-eye" />}
              {showPassword === false && <i className="fas fa-eye-slash" />}
            </span>
          </div>
          {showAlert && (
            <div>
              <h2>Data required</h2>
            </div>
          )}
          <button type="submit" className="long button">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
