import React from "react";
import Header from "./../layout/header";
import LoginButton from "../auth/login";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <button>
        <a href="/concert">Concerts</a>
        <LoginButton />
      </button>
    </div>
  );
};

export default Home;
