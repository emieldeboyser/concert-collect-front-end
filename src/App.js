import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes/router";
// import i18n (needs to be bundled ;))
import "./i18n";

const App = () => {
  // check if the user is authenticated
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.url} element={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
