import React, { useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";


function App() {
  const [boughtPicture, setBoughtPicture] = useState(false);
  const [pictures, setPictures] = useState([]);

  const api =
    "https://api.unsplash.com/search/photos/?query=nature&client_id=Igb2O9bvv--aTkQpflm0vddn4KFisZeUK8myMxOpWlA&";

  const getPicture = async () => {
    await axios.get(api).then((response) => {
      setPictures(response.data.results);
      console.log(response.data.results);
    });
  };

 
  useEffect(() => {
    getPicture();
  }, []);


  const buyPicture = () => {
    setBoughtPicture(!boughtPicture);
    console.log(boughtPicture)
  };

  return (
      <Home>
        <Header/>
        <Content buyPicture = {() => buyPicture()} pictures={pictures}/>
        <Footer />
      </Home>
  );
}

export default App;
