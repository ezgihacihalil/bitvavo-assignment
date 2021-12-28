import React, { useState } from 'react';

import './index.scss';

const EMAIL = 'email@test.com';
const PASSWORD = 'test123';

const LoginForm = () => {
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
    // <div className="form-container">
    //   <div className="form-title">
    //     <h3 className="title">Welcome</h3>
    //     <small className="sub-title">Please enter your credentials to continue</small>
    //   </div>
    //   <form className="form" name="form" onSubmit={handleSubmit}>
    //     <label htmlFor="username">
    //       Username
    //       <input type="text" name="username" value={username} onChange={handleChange} className="input" placeholder="Enter your username" id="username" />
    //     </label>
    //     {submitted && !username && <div className="invalid-feedback">Username is required</div>}
    //     <label htmlFor="password">
    //       Password
    //       <input type="password" name="password" value={password} onChange={handleChange} className="input" placeholder="Enter your password" id="password" />
    //     </label>
    //     {submitted && !password && <div className="invalid-feedback">Password is required</div>}
    //     {error && <span className="error-message">Your credentials are wrong!</span>}
    //     <button>Log In</button>
    //   </form>
    // </div>
    <div className="container-login">
      <div className="wrap-login">
        <form className="login-form validate-form" onSubmit={handleSubmit}>
          <span className="login-form-title">Login</span>

          <div className="wrap-input validate-input" name="username" value={username} onChange={handleChange}>
            <input className="input" type="text" name="email" placeholder="Email" />
            {submitted && !username && <div className="alert-validate">Username is required</div>}
          </div>

          <div className="wrap-input validate-input" data-validate="Password is required">
            <input className="input" type="password" placeholder="Password" name="password" value={password} onChange={handleChange} />
            {submitted && !password && <div className="alert-validate">Password is required</div>}
          </div>

          <div className="container-login-form-btn">
            <button className="login-form-btn">Login</button>
          </div>
        </form>
      </div>
      {error && <span className="alert-validate">Your credentials are wrong!</span>}
    </div>
  );
};

export default LoginForm;