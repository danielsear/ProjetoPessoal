import React, { Component } from 'react';
import BilheteMostra from '../BilheteMostra/BilheteMostra';
import './stylle.css';
import Addcard from '../Addcard/Addcard';


export default class AppBilhete extends Component {

    constructor(){
        super();
        this.state= {
            notas : []
        };
    }

    criarNota(titulo,texto){
      //  console.log(titulo,texto)
      const criarNovaNota={titulo, texto};
      const novoArrayNotas= [...this.state.notas,criarNovaNota];
      const novoEstado= {
          notas: novoArrayNotas
      } ;
      this.setState(novoEstado);
    }

    render(){
        return(
            <section className='AppBilhete'>
                <div className='AppBilhete-BilheteMostra'>
                    <BilheteMostra 
                    criarNota={this.criarNota.bind(this)} />
                </div>
                <div className='AppBilhete-CardBilhete'>
                    < Addcard notas={this.state.notas} />
                </div>  
            </section>
        );
    }
}