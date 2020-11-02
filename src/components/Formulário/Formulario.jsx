import React, { Component } from 'react';
import './stylle.css';
import PainelCadastro from '../PainelCadastro/PainelCadastro'




const calcularTotal= multiplicador => (resultado,numeroAtual)=> resultado + numeroAtual * multiplicador--;

const calcularDigito = (parteCpf, multiplicador) =>{
    const total = parteCpf.reduce(calcularTotal(multiplicador),0);
    const resto = total % 11;
    let digito= 11 - resto;
    if(resto > 9){
        digito = 0;
    }
    return digito;
};




export default class Formulario extends Component{

  constructor(props){
      super(props);
       this.state = {
            nome:'',
            senha:'',
            cpf:'',
            cep:'',
        }
    }
    
    
        handleChangeName(evento){
        this.setState({
            nome: evento.target.value,
        });
       // console.log(this.state.nome);
    }

    handleChangeSenha(evento){
        this.setState({
            senha: evento.target.value,
        });
       // console.log(this.state.senha);
    }

  
    handleChangeCpf(evento,adcionarErro = 'true'){
        this.setState({
            cpf: evento.target.value,
        });
       // console.log(this.state.cpf);
     
        
        
      const cpfNumeros = this.state.cpf.replace(/\D/g,"");
     // console.log(cpfNumeros);
      const primeironumerocpf= cpfNumeros.substr(0,9).split("");
     // console.log(primeironumerocpf);
      const primeiroDigitoVerificador= Number(cpfNumeros.charAt(9));
     // console.log(primeiroDigitoVerificador); 
      const CalculoPrimeiroDigito= calcularDigito(primeironumerocpf,10);
      //console.log(CalculoPrimeiroDigito);

      const segundonumerocpf= cpfNumeros.substr(0,10).split("");
      const segundoDigitoVerificador= Number(cpfNumeros.charAt(10));
      const CalculoSegundoDigito= calcularDigito(segundonumerocpf,11);
      //console.log(CalculoSegundoDigito);

      const input = document.getElementById('cpf');
      //console.log(input);
      const classeElementoErro= 'erro-validacao';
      const classeInputErro = "possui-erro-validacao" ;
      const elementoPai = input.parentNode;
     // console.log(elementoPai);
      const elementoErroExiste = elementoPai.querySelector(`.${classeElementoErro}`)
      const elementoErro = elementoErroExiste || document.createElement('div');
     

      if(!(primeiroDigitoVerificador === CalculoPrimeiroDigito 
        && segundoDigitoVerificador === CalculoSegundoDigito)){
        //console.log('true');

         if(adcionarErro === true){
                elementoErro.className =classeElementoErro;
                elementoErro.textContent= 'Cpf inválido';
                input.classList.add(classeInputErro);
                input.after(elementoErro);
                adcionarErro= 'true';
            }
        }

        else{
            elementoErro.remove();
            input.classList.remove(classeInputErro);
            adcionarErro= 'false';
        }
     
    }

    handleChangeEndereco(evento){
        this.setState({
            cep: evento.target.value,
        });
        const cepNumero = this.state.cep.replace(/\D/g,"");
       
        const url = `http://viacep.com.br/ws/${cepNumero}/json/`;
        const options = {
            method: "GET",
            mode: "cors",
            headers:{
                "content-type":"application/json;charset=utf-8"
            }
        };

        const input = document.getElementById('cep');
        const classeElementoErro= 'erro-validacao';
        const classeInputErro = "possui-erro-validacao" ;
        const elementoPai = input.parentNode;
        const elementoErroExiste = elementoPai.querySelector(`.${classeElementoErro}`);
        const elementoErro = elementoErroExiste || document.createElement('div');

        fetch(url, options).then(response => response.json()).then(data => {
            if(data.erro){
                elementoErro.className =classeElementoErro;
                elementoErro.textContent= 'Cep inválido';
                input.classList.add(classeInputErro);
                input.after(elementoErro);
                return;
            }
                const campoLogradouro = document.getElementById("logradouro");
                const campoCidade = document.getElementById("cidade");
                const campoEstado = document.getElementById("estado"); 
                campoLogradouro.value = data.logradouro;
                campoCidade.value = data.localidade;
                campoEstado.value = data.uf;
            return;
        });
       
    }

   

    render(){
        return(
            <section >
                <div className='Formulario' >
                <h2>Cadastro do Usuário</h2>
                <form className='Formulario-inicio'>
                    <hr className='divider' />
                    <h3>Informações de Acesso</h3>
                        <div className='Formulario-input' >
                            <label htmlFor='nome' className='Formulario-label' > Nome:</label>
                            <input type="text" value={this.state.nome} 
                            onChange={this.handleChangeName.bind(this)} 
                            name='nome' className='Formulario-input'placeholder='Nome Completo' />
                        </div>
                        <div className='Formulario-input'>
                            <label htmlFor='email' className='Formulario-label'> Email:</label>
                            <input type="email" placeholder='xxxx@xxx.xx' name='email'className='Formulario-input' />
                        </div>
                        <div className='Formulario-input'>
                            <label htmlFor='senha' className='Formulario-label'> Senha:</label>
                            <input value={this.state.senha} onChange={this.handleChangeSenha.bind(this)}
                            type="password" name='senha'
                             minLength='4'className='Formulario-input'
                             placeholder='Minímo de 4 character' />
                        </div>

                        <hr className='divider'/>
                        <h3>Informações Pessoais</h3>
                        <div className='Formulario-input'>
                            <label htmlFor='cpf' className='Formulario-label'> CPF:</label>
                            <input value={this.state.cpf} 
                            onChange={this.handleChangeCpf.bind(this)}
                            id='cpf' data-tipo='cpf' maxLength='12'
                             type="text" name='cpf' className='Formulario-input'
                             placeholder='xxxxx.xxx.xxx-xx'/>
                        </div>
                        <div className='Formulario-input'>
                            <label htmlFor='cep' className='Formulario-label'> CEP:</label>
                            <input type="text" name='cep' className='Formulario-input'
                             pattern='[\d]{5}-?[\d]{3}' placeholder='xxxxx-xxx'
                             id='cep'   value={this.state.cep} 
                             onChange={this.handleChangeEndereco.bind(this)} />
                        </div>
                         <div className='Formulario-input'>      
                            <label htmlFor='estado' className='Formulario-label'> Estado:</label>
                            <input id="estado" type="text" name='estado'className='Formulario-input'/>
                        </div>
                        <div className='Formulario-input'>
                            <label htmlFor='cidade' className='Formulario-label'> Cidade:</label>
                            <input id='cidade' type="text" name='cidade' className='Formulario-input'/>
                        </div>
                        <div className='Formulario-input'>
                            <label htmlFor='rua' className='Formulario-label'> Rua:</label>
                            <input  id='logradouro' type="text" name='rua'className='Formulario-input' />
                        </div>
                        <div className='Formulario-input'>
                            <button type='submit' className='Formulario-botao'>Cadastrar</button>
                        </div>
                    
                </form>
                </div>
                <PainelCadastro  cep={this.state.cep} nome={this.state.nome} cpf={this.state.cpf} />
            </section>
            
        );
    }
}
