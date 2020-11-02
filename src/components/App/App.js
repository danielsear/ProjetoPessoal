import React, { Component } from "react";
import "./App.css";
import Cabecalho from "../Cabecalho/Cabecalho";
import Home from "../Home/Home";
import AppBilhete from "../Bilhete/AppBilhete/AppBilhete";
import Introducao from "../Introducao/Introducao";
import Formulario from "../Formulário/Formulario";
//import Perfil from '../Perfil/Perfil';
import Ajuda from "../Ajuda/Ajuda";
//import PainelCadastro from "../PainelCadastro/PainelCadastro";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <section>
          <Switch>
            <Route exact path="/">
              <Cabecalho />
            </Route>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route exact path="/Introducao">
              <Introducao />
            </Route>
            <Route exact path="/AppBilhete">
              <AppBilhete />
            </Route>
            <Route exact path="/Formulario">
              <Formulario />
            </Route>
            <Route exact path="/Ajuda">
              <Ajuda />
            </Route>
          </Switch>
        </section>
      </Router>
    );
  }
}
