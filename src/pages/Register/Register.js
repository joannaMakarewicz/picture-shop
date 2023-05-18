import React, { useEffect, useState } from "react";
import axiosInstance from "../../services/config";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Header/Navbar/Navbar";
import useAuth from "../../hooks/useAuth";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import { validateEmail } from "../../helpers/validations";

const Register = () => {
  useWebsiteTitle("Rejestracja");
  const [emails, setEmails] = useState([]);
  const [error, setError] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [valid, setValid] = useState(null);
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
      const res = await axiosInstance.get("/Auth");
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

    if (result === 0) {
      postNewUser();
    } else {
      setError(true)
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
            <div className="alert alert-danger">Jest już konto</div>
          ) : null}

          <div className="position-relative">
            <button
              type="submit"
              className="btn btn-primary position-absolute end-0"
              disabled={buttonDisabled}
            >
              Sign up
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Register;
