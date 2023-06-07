import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Header from "./components/Header/Header.js";
import Content from "./components/Content/Content.js";
import Footer from "./components/Footer/Footer.js";
import Login from "./pages/Login/Login.js";
import ErrorPage from "./pages/ErrorPage/ErrorPage.js";
import Search from "./pages/Search/Search.js";
import AuthContext from "./context/authContext.js";
import Summary from "./pages/Summary/Summary.js";
import Navbar from "./components/Header/Navbar/Navbar.js";
import Register from "./pages/Register/Register.js";
import axiosInstance from "./services/config.js";
import "./App.scss";

function App() {
  const [pictures, setPictures] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const content = (
    <Home>
      
      <Header>
        <Navbar />
      </Header>
      <Content pictures={pictures} />
      <Footer />
    </Home>
  );

  const getPicture = async () => {
    await axiosInstance.get("/pictures").then((response) => {
      setPictures(response.data.records);
    });
  };

  useEffect(() => {
    getPicture();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        login: () => setIsAuthenticated(true),
        logout: () => setIsAuthenticated(false),
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={content} className="container-lg" />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/search/:term"
            element={<Search pictures={pictures} />}
          />
          <Route path="/bag" element={<Summary pictures={pictures} />} />
          <Route path="/picture-shop" element={<Navigate to="/" />} />
          <Route end path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
