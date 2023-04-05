import React from "react";

function LoginForm() {
  return (
    <>
      <form className="flex flex-col items-center">
        <span>Email</span>
        <input type="text" className="login-input"></input>
        <span>Password</span>
        <input type="text" className="login-input"></input>
        <button className="submit-button">Submit</button>
      </form>
    </>
  );
}

export default LoginForm;
