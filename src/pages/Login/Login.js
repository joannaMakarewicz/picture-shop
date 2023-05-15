import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


import Navbar from "../../components/Header/Navbar/Navbar";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  useWebsiteTitle("Logowanie");
  const navigate = useNavigate();
  const [valid, setValid] = useState(null);
  const [auth, setAuth] = useAuth();

  const submit = async e => {
    e.preventDefault();

  //   try {
  //     const res = await axiosInstance.post("/Auth", {
  //       records: [
  //         {
  //           fields: {
  //             fldYWDNQU1c1QiJ3L: form.email.value,
  //             fldxWHbtqZUL05fKh: form.password.value,
  //           },
  //         },
  //       ],
  //     });
  //     setAuth(true, res.data)
  //     navigate("/");
  //   } catch (ex) {
  //     console.log(ex.response);
  //   }
  // };


    console.log("zalogowany");
    setAuth(true);
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
