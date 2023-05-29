import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../services/config";

import Navbar from "../../components/Header/Navbar/Navbar";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import useAuth from "../../hooks/useAuth";
import { validateEmail } from "../../helpers/validations";
import LoadingButton from "../../components/LoadingButton/LoadingButton";

const Login = () => {
  useWebsiteTitle("Logowanie");
  const navigate = useNavigate();
  const [loading, setLoading]=useState();
  const [valid, setValid] = useState(null);
  const [auth, setAuth] = useAuth();
  const [error, setError] = useState (null)
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
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
    setLoading(true);
    try {
      const res = await axiosInstance.get("/auth");
      res.data.records.forEach((el) => {
        if (
          el.fields.email.includes(form.email.value) &&
          el.fields.password.includes(form.password.value)
        ) {
          setAuth(true);
          navigate("/");
        } else {
          setError(true)
          setLoading(false);
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

  useEffect(() => {
    if (validateEmail(form.email.value)) {
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Niepoprawny adres e-mail" });
    }
  }, [form.email.value]);

  useEffect(() => {
    if (form.password.value.length >= 4 || !form.password.value) {
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Wymagane min. 4 znaki" });
    }
  }, [form.password.value]);

  const buttonDisabled = Object.values(errors).filter((x) => x).length;

  return (
    <div className="container-lg text-light">
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
              id="exampleInputEmail1"
              placeholder="Enter email"
              onChange={(e) => checkHandler(e.target.value, "email")}
              value={form.email.value}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.email}</div>
            <div className="valid-feedback">Wszystko gra!</div>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className={`form-control mb-3 ${
                errors.password ? "is-invalid" : ""
              }`}
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e) => checkHandler(e.target.value, "password")}
              value={form.password.value}
            />
            <div className="invalid-feedback">{errors.password}</div>
            <div className="valid-feedback">Wszystko gra!</div>
          </div>

          {error ? <div className="alert alert-danger">Niepoprawne dane logowania</div> : null}

          <div className="position-relative">
            <LoadingButton
              type="submit"
              className="btn btn-primary position-absolute end-0"
              disabled={buttonDisabled}
              loading={loading}
            >
              Sign in
            </LoadingButton>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
