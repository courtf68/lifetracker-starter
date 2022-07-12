import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
//import { authContextProvider, useAuthContext } from "./auth";
import LandingPage from "./components/Landing/LandingPage";
import LoginForm from "./components/Login/LoginForm";
import LoginPage from "./components/Login/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/Register/RegisterPage";
import RegisterForm from "./components/Register/RegisterForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={
            <>
              <LoginForm />
              <LoginPage />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <RegisterForm />
              <RegisterPage />
            </>
          }
        />
        <Route path="/nutrition" element={<LandingPage />} />
      </Routes>

      <>
        <Navbar />
        <Container
          maxWidth={false}
          sx={{ backgroundColor: "LavenderBlush", flexGrow: 0 }}
        >
          my container
        </Container>
      </>
    </BrowserRouter>

    /* //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>Hello Vite + React!</p>
    //       <p>
    //         <button type="button" onClick={() => setCount((count) => count + 1)}>
    //           count is: {count}
    //         </button>
    //       </p>
    //       <p>
    //         Edit <code>App.jsx</code> and save to test HMR updates.
    //       </p>
    //       <p>
    //         <a
    //           className="App-link"
    //           href="https://reactjs.org"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Learn React
    //         </a>
    //         {" | "}
    //         <a
    //           className="App-link"
    //           href="https://vitejs.dev/guide/features.html"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Vite Docs
    //         </a>
    //       </p>
    //     </header>
    //   </div>
    // ); */
  );
}

export default App;
