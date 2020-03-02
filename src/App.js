import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./App.css";
import Navbar from "./comps/Navbar";
import Search from "./comps/Search";
function App() {
  return (
    <MuiThemeProvider>
      <div>
        <Navbar />
        <Search />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
