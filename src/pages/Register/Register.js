import React, { useState } from "react";
import axiosInstance from "../../services/config";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Header/Navbar/Navbar";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

const Register = () => {
  useWebsiteTitle("Zarejestruj się");
  const navigate = useNavigate();
  const [valid, setValid] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: ""
  });


  const submit = async (e) => {
    e.preventDefault();
    const res = await axiosInstance.post(
      "/Auth",
      {
        records: [
          {
            fields: {
              fldYWDNQU1c1QiJ3L: form.email,
              fldxWHbtqZUL05fKh: form.password,
            },
          },
        ],
      },
    );

    console.log(form.email);
  };


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
              onChange={e => setForm({...form, email: e.target.value})}
              value={form.email}
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
              value={form.password}
              onChange={e => setForm({...form, password: e.target.value})}
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
