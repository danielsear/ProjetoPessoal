import React, { Component } from 'react';
import './App.css';
import Cabecalho from '../Cabecalho/Cabecalho';
import Home from '../Home/Home';
import AppBilhete from '../Bilhete/AppBilhete/AppBilhete';
import Introducao from '../Introducao/Introducao';
import Formulario from '../Formulário/Formulario';
//import Perfil from '../Perfil/Perfil';
import Ajuda from '../Ajuda/Ajuda';

export default class App extends Component{
 
  render(){
  return (
      <section>
              <Cabecalho />
              <Home/>
              <Introducao />
              <AppBilhete/>
              <Formulario/>
              <Ajuda />
      </section>
  
  );
  }
}


