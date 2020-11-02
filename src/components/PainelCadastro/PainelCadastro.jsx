import React,{ Component } from 'react';
import './styles.css'

import Formulario from '../Formulário/Formulario';



export default class PainelCadastro extends Component{
        constructor(props){
            super(props)
            this.state={
                nome: props.nome,
                cpf: props.cpf,
                cep:props.cep
            }
            console.log(this.state.nome,this.state. cpf,this.state.cep);
        }

     render ( ){
         return (
             <section>
                 <div className='quadro' >
                   <ul style={{border: '1px solid #000'}}>
                        <th>Formulario Cadastro</th>
         <li>Nome: {this.props.name}</li>
         <li>Email:</li>
                            <li>Estado:</li>
                            <li>Cidade:</li>
                            <li>Rua:</li>
                   </ul>
                 </div>
             </section>
         )
     }

} 