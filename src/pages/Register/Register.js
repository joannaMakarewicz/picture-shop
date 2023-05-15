import React, { useState } from "react";
import axiosInstance from "../../services/config";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Header/Navbar/Navbar";
import useAuth from "../../hooks/useAuth";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

const Register = () => {
  useWebsiteTitle("Zarejestruj się");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [valid, setValid] = useState(null);
  const [form, setForm] = useState({
    email: {
      value: "",
      // error: "",
      // showError: false,
      // rules: ["required"],
    },
    password: {
      value: "",
      // error: "",
      // showError: false,
      // rules: ["required"],
    },
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("/Auth", {
        records: [
          {
            fields: {
              fldYWDNQU1c1QiJ3L: form.email.value,
              fldxWHbtqZUL05fKh: form.password.value,
            },
          },
        ],
      });
      console.log(res.data);
      setAuth(true, res.data)
      navigate("/");
    } catch (ex) {
      console.log(ex.response);
    }
  };

  const changeHandler = (value, fieldName) => {
    setForm({
      ...form,
      [fieldName]: {
        value: value,
      },
    });
  };

  if(auth) {
    navigate("/")
  }

  return (
    <div className="container text-light">
      <Navbar />
      <section className="pt-3">
        <h1>Register</h1>

        {valid === false ? (
          <>
            <p className="alert alert-danger">Niepoprawne dane rejestracji</p>
          </>
        ) : null}

        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              onChange={(e) => changeHandler(e.target.value, "email")}
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
              id="password"
              placeholder="Password"
              value={form.password.value}
              onChange={(e) => changeHandler(e.target.value, "password")}
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

export default Register;
