import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function App() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="sm">my container</Container>
    </div>

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
