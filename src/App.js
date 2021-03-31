import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import ProductList from "./Component/ProductList";
import Cart from "./Component/Cart";
import Details from "./Component/Details";
import Default from "./Component/Default";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/cart" component={Cart} />
          <Route path="/details" component={Details} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}
