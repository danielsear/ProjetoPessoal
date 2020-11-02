
import React,{ Component } from 'react';
import './cabecalho.css';
import { Link} from "react-router-dom";


export default class Cabecalho extends Component {

    render(){
        return(
            <section className='cabecalho'>
                 <Link to='/Ajuda' className='cabecalho-conteudo_link cabecalho-conteudo_link_ajuda'
                 >Ajuda</Link>
                 <div className='cabecalho-conteudo'>
                    <Link to='/Home' className='cabecalho-conteudo_link'>Home</Link>
                    <Link to='/Introducao' className='cabecalho-conteudo_link'>Introdução</Link>
                    <Link to='/AppBilhete' className='cabecalho-conteudo_link'>Bilhete</Link>
                    <Link to='/Formulario' className='cabecalho-conteudo_link'>Formulário</Link>
                    <Link to='' className='cabecalho-conteudo_link'>Perfil</Link>
                 </div>
                 <h1 className='cabecalho-titulo'>Meu App Contra o suicídio</h1>
            </section>
        );
    }
}