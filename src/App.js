import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Search from "./pages/Search/Search";
import AuthContext from "./context/authContext";
import Summary from "./pages/Summary/Summary";
import Navbar from "./components/Header/Navbar/Navbar";
import Register from "./pages/Register/Register";
import axiosInstance from "./services/config";

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
