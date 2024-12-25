import React, { useState } from "react";
import "./App.css";
import Feed from "./components/Feed";
import AddEntry from "./components/addEntry";
import Header from "./layout/header";

const App = () => {
  const [popup, setPopup] = useState(false);
  const addEntry = () => {
    setPopup(true);
  };

  return (
    <div className="App">
      <Header />
      <body className="px-36 pt-10">
        {!popup && <p onClick={addEntry}>Add entry</p>}
        {popup ? (
          <div className="flex items-center justify-center">
            <AddEntry onClose={() => setPopup(false)} />
          </div>
        ) : (
          <>
            <Feed />
          </>
        )}{" "}
      </body>
    </div>
  );
};

export default App;
