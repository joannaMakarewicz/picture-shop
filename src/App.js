import React, { useState} from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";


function App() {
  const [boughtPicture, setBoughtPicture] = useState(false);

  const buyPicture = () => {
    setBoughtPicture(!boughtPicture);
    console.log(boughtPicture)
  };

  return (
    <div className="container">
      <Home>
        <Header />
        <Content buyPicture = {() => buyPicture()} />
        <Footer />
      </Home>
    </div>
  );
}

export default App;
