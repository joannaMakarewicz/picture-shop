import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
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
import Register from "./pages/Register/Register";
import axiosInstance from "./services/config";


function App() {

  const [pictures, setPictures] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const getPicture = async () => {
    await axiosInstance.get("/Pictures").then((response) => {
      setPictures(response.data.records);
    });
  };
  
  useEffect(() => {
    getPicture();
  }, []);



  return (
    <AuthContext.Provider value = {{
      isAuthenticated: isAuthenticated,
      login: () => setIsAuthenticated(true),
      logout: () => setIsAuthenticated(false)
      }}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home>
                <Header />
                <Content pictures={pictures}/>
                <Footer />
              </Home>
            }
          />
          <Route path="/zaloguj" element={<Login />} />
          <Route path="/zarejestruj" element={<Register />} />
          <Route path="/wyszukaj/:term" element={<Search pictures={pictures}/>} />
          <Route path="/koszyk" element={<Summary pictures={pictures}/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </AuthContext.Provider>

  );
}

export default App;
