import React from "react";
import Header from "./../../layout/header";
import Feed from "./../../components/Feed";

const AllConcerts = () => {
  return (
    <div className="App">
      <Header />
      <body className="p-5 pt-10">
        <Feed />
      </body>
    </div>
  );
};

export default AllConcerts;
