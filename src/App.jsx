import { Component } from "react";
import Header from "./componenets/headerFolder/Header.jsx";
import Menu from "./componenets/menu/Menu.jsx";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
      </div>
    );
  }
}
