import React from "react";
import LoginForm from "../Components/LoginForm";
import Nav from "../Components/Nav";
import '../Login.css';

export default function Login() {
  return (
    <div className="login">
      <Nav />
      <LoginForm />
    </div>
  )
}
