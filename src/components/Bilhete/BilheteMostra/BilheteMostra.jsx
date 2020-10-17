import React, { Component } from 'react';
import './stylle.css'

export default class BilheteMostra extends Component {

    constructor(props){
         super(props);
        this.titulo= '';
        this.texto= '';
    }

    handlerTitulo(evento){
       // console.log(evento.target.value);
       this.titulo = evento.target.value;
       // console.log(this.titulo);
    }
    handlerTexto(evento){
        console.log(evento.target.value);
        this.texto= evento.target.value;
    }

    criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo,this.texto);
    }


    render(){
        return(
           <form className='bilhete' onSubmit={this.criarNota.bind(this)}>
               <div className='bilhete-titulo'><h2>Bilhetes para a Vida</h2>
               <p>Deixe um bilete de esperança </p>
                <p> para quem precisa.</p>
               </div>
               <input className='bilhete-items' type="text" placeholder='Titulo do bilhete'
                onChange={this.handlerTitulo.bind(this)} />
              
               <textarea className="bilhete-items" id="" cols="60" rows="10"
                onChange={this.handlerTexto.bind(this)}
               placeholder='Escreva seu bilhete'></textarea>
             
               <button className='bilhete-items bilhete-button' type='submit'
                >Criar Nota</button>
           </form>
        );
    }
}