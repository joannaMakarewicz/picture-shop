import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Header/Navbar/Navbar";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

const Login = () => {
  useWebsiteTitle("Strona logowania");
  const navigate = useNavigate();
  const [valid, setValid] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    console.log("zalogowany");
    navigate("/");
  };
  return (
    <div className="container text-light">
      <Navbar />
      <section className="pt-3">
        <h1>Login</h1>

        {valid === false ? (
          <>
            <p className="alert alert-danger">Niepoprawne dane logowania</p>
          </>
        ) : null}

        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
