import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../services/config";

import Navbar from "../../components/Header/Navbar/Navbar";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  useWebsiteTitle("Logowanie");
  const navigate = useNavigate();
  const [valid, setValid] = useState(null);
  const [auth, setAuth] = useAuth();
  const [form, setForm] = useState({
    email: {
      value: "",
    },
    password: {
      value: "",
    },
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.get("/Auth");
      res.data.records.forEach((el) => {
        if (
          el.fields.email.includes(form.email.value) ||
          el.fields.password.includes(form.password.value)
        ) {
          setValid(true);
          setAuth(true);
          navigate("/");
        } else {
          setValid(false);
        }
      });
    } catch (ex) {
      console.log(ex.response);
    }
  };

  const checkHandler = (value, fieldName) => {
    setForm({
      ...form,
      [fieldName]: {
        value: value,
      },
    });
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
              placeholder="Enter email"
              onChange={(e) => checkHandler(e.target.value, "email")}
              value={form.email.value}
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
              onChange={(e) => checkHandler(e.target.value, "password")}
              value={form.password.value}
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
