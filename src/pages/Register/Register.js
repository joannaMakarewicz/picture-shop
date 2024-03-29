import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../services/config";
import useAuth from "../../hooks/useAuth";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import { validateEmail } from "../../helpers/validations";
import LoadingButton from "../../components/LoadingButton/LoadingButton";
import Header from "../../components/Header/Header";
import "../Register/Register.scss";

const Register = () => {
  useWebsiteTitle("Sign up");
  const [emails, setEmails] = useState([]);
  const [error, setError] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [valid, setValid] = useState(null);
  const [loading, setLoading] = useState();
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

  const takeEmails = async () => {
    try {
      const res = await axiosInstance.get("/auth");
      setEmails(res.data.records);
    } catch (ex) {
      console.log(ex.response);
    }
  };

  useEffect(() => {
    takeEmails();
  }, []);

  function checkFunction(el) {
    return el.fields.email === form.email.value;
  }

  const result = Object.values(emails).filter(checkFunction).length;

  const postNewUser = async () => {
    try {
      const res = await axiosInstance.post("/Auth", {
        records: [
          {
            fields: {
              email: form.email.value,
              password: form.password.value,
            },
          },
        ],
      });
      setAuth(true, res.data);
      navigate("/");
    } catch (ex) {
      console.log(ex.response);
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(form.email.value.length === 0) {
      setError(true)
      setLoading(false);
    }else{
      if (result === 0) {
        postNewUser();
      } else {
        setError(true);
        setLoading(false);
      }
    }
    
  };

  const changeHandler = (value, fieldName) => {
    setError(false);
    setForm({
      ...form,
      [fieldName]: {
        value: value,
      },
    });
  };

  if (auth) {
    navigate("/");
  }

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
    <div className="register container-lg text-light">
      <Header />
      <section className="pt-3">
        <h1>Register</h1>

        {valid === false ? (
          <>
            <p className="alert alert-danger">Niepoprawne dane rejestracji</p>
          </>
        ) : null}

        <form onSubmit={submit}>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              id="email"
              placeholder="Enter email"
              onChange={(e) => changeHandler(e.target.value, "email")}
              value={form.email.value}
            />
            <div className="invalid-feedback">{errors.email}</div>
            <div className="valid-feedback">Wszystko gra!</div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className={`form-control mb-3 ${
                errors.password ? "is-invalid" : ""
              }`}
              id="password"
              placeholder="Password"
              value={form.password.value}
              onChange={(e) => changeHandler(e.target.value, "password")}
            />
            <div className="invalid-feedback">{errors.password}</div>
            <div className="valid-feedback">Wszystko gra!</div>
          </div>

          {error ? (
            <div className="alert alert-danger">Account exists or check data</div>
          ) : null}

          <div className="position-relative">
            <LoadingButton
              type="submit"
              className="btn btn-success position-absolute end-0"
              disabled={buttonDisabled}
              loading={loading}
            >
              Sign up
            </LoadingButton>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Register;
