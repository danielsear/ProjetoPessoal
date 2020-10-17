
import React,{ Component } from 'react';
import './cabecalho.css';


export default class Cabecalho extends Component {

    render(){
        return(
            <section className='cabecalho'>
                 <a href="" className='cabecalho-conteudo_link cabecalho-conteudo_link_ajuda'
                 >Ajuda</a>
                 <div className='cabecalho-conteudo'>
                    <a href="" className='cabecalho-conteudo_link'>Home</a>
                    <a href="" className='cabecalho-conteudo_link'>Introdução</a>
                    <a href="" className='cabecalho-conteudo_link'>Bilhete</a>
                    <a href="" className='cabecalho-conteudo_link'>Formulário</a>
                    <a href="" className='cabecalho-conteudo_link'>Perfil</a>
                 </div>
                 <h1 className='cabecalho-titulo'>Meu App Contra o suicídio</h1>
            </section>
        );
    }
}