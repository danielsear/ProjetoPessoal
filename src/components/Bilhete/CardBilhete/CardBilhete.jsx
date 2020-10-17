import React, { Component } from 'react';
import './stylle.css'

export default class CardBilhete extends Component {


    render(){
        return(
            <section className='CardBilhete'>
                <header className='CardBilhete-titulo'>
                    <h3>{this.props.titulo}</h3>    
                </header>  
                <p className='CardBilhete-texto'>{this.props.texto}</p>
            </section>
        );
    }
}