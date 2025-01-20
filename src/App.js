import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes/router";
// import i18n (needs to be bundled ;))
import "./i18n";
import LoginScreen from "./pages/authentication/Login";

const App = () => {
  // check if the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // check if the user is authenticated
    const token = sessionStorage.getItem("access_token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          routes.map((route, index) => (
            <Route key={index} path={route.url} element={route.component} />
          ))
        ) : (
          <Route path="*" element={<LoginScreen />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
