import React from 'react';

const LoginPage = () => {

  return (
    <div>
      <label htmlFor="">Login:
        <input type="text" />
      </label>
      <br />
      <label htmlFor="">Password:
        <input type="password" />
      </label>
      <br />
      <button>Log in</button>
    </div>
  );
}

export default LoginPage;