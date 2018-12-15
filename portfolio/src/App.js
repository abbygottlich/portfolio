import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div class="nav">
          <Route path="/" component={Home} />
          <Route path="/" component={About} />
          <Route path="/" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
