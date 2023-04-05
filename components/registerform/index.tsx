import React from "react";
import Link from "next/link";

function RegisterForm() {
  const styles = {};
  return (
    <>
      <form className="flex flex-col items-center">
        <span>First Name</span>
        <input type="text" className="login-input"></input>
        <span>Last Name</span>
        <input type="text" className="login-input"></input>
        <span>Email</span>
        <input type="text" className="login-input"></input>
        <span>Password</span>
        <input type="text" className="login-input"></input>
        <span>Confirm Password</span>
        <input type="text" className="login-input"></input>
        <div>
          <button className="submit-button">Submit</button>
          <button className="submit-button">Already a user?</button>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
