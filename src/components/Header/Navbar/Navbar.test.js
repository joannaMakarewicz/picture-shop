import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthContext from "../../../context/authContext";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  test("renders Log in if user is null", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const link = screen.getByText(/Log in/i);
    expect(link).toBeInTheDocument();
  });

  test("renders Log out if user is null", () => {
    render(
      <AuthContext.Provider
        value={{
          isAuthenticated: true,
          login: () => {},
          logout: () => {},
        }}
      >
        <Router>
          <Navbar />
        </Router>
      </AuthContext.Provider>
    );
    const link = screen.getByText(/Log out/i);
    expect(link).toBeInTheDocument();
  });
});
