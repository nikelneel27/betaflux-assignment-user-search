// import Banner from "./components/Banner";
import Search from "./components/Search/Search";
import MainComponent from "./components/MainComponent";
import React, { Suspense } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Container } from "./AppStyles";

function App() {
  return (
    <Container className="App">
      <MainComponent></MainComponent>
    </Container>
  );
}

export default App;
