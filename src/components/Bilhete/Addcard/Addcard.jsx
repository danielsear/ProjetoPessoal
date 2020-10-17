import React, { Component } from 'react';
import CardBilhete from '../CardBilhete/CardBilhete';
import './stylle.css';


export default class Addcard extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <ul className="Addcard" type='none'>
                 {this.props.notas.map((nota, index)=>{
                return(
                    <li key={`${index} ${nota.titulo}`}><CardBilhete titulo= {nota.titulo} 
                    texto= {nota.texto} /></li>
                );
            })}
            </ul>
        );
    }


}