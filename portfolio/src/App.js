import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      // used BrowerRouter to route to all of my components
      <BrowserRouter>
        <div>
          <div class="nav">
            <Nav />
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
