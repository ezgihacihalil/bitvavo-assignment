import React, { useState } from 'react';
import history from '../../helpers/history';

import './index.scss';

const EMAIL = 'email@test.com';
const PASSWORD = 'test123';

const LoginForm: React.FC = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const { username, password } = inputs;

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as typeof e.target & {
      name: string;
      value: string;
    }

    setInputs((values) => ({ ...values, [target.name]: target.value }));
  }

  function login(username: string, password: string) {
    setError(false);
    if (username === EMAIL && password === PASSWORD) {
      localStorage.setItem('user', JSON.stringify({ username: EMAIL, password: PASSWORD }));
      history.push('/');
    }
    else {
      setError(true);
    }
  }

  function handleSubmit(e: React.SyntheticEvent) {
    console.log(username, password)
    e.preventDefault();

    setSubmitted(true);
    if (username && password) {
      login(username, password);
    }
  }

  return (
    <div className="container-login">
      <div className="wrap-login">
        <form className="login-form validate-form" onSubmit={handleSubmit}>
          <span className="login-form-title">Login</span>

          <div className="wrap-input validate-input">
            <input className="input" type="text" placeholder="Email" name="username" value={username} onChange={handleChange} />
            {submitted && !username && <div className="alert-validate">Username is required</div>}
          </div>

          <div className="wrap-input validate-input">
            <input className="input" type="password" placeholder="Password" name="password" value={password} onChange={handleChange} />
            {submitted && !password && <div className="alert-validate">Password is required</div>}
          </div>

          <div className="container-login-form-btn">
            <button className="login-form-btn">Login</button>
          </div>
          {error && <span className="alert-validate">Your credentials are wrong!</span>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;