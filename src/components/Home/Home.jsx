
import React,{ Component } from 'react';
import './home.css'

export default class Home extends Component{

    render(){
        return(
            <section className='home'>
                <div className='home-conteudo'>
                    <h2>Home</h2>
                    <p>    This site is intended for people with normal everyday problems. Many
                        times in life we ​​go through moments of difficulties and we find ourselves
                        for whatever reason, because it is not important, what has really meant
                        or that should stay in our minds and hearts is that there is a solution in it. But stop
                        this is reality, you will need to understand in what real situation
                        you are currently holding your time and deciding to seek help, because
                        all things cooperate for your good as long as there is love within you, because as already
                         said the great philosopher of antiquity the sage "While breathing still has a way".
                         So stay with us on this quest for the
                        self understanding. My name is Daniel Seara, and I am more dependent on this drug than
                        is called life, be an addict too, learn to live with a good heart for yourself
                        and to the world. 
                     
                    </p>
                    <p>     Este site é destinado a  pessoas com problemas normais do cotideano. Muitas
                        vezes na vida passamos por momentos de dificuldades e nós encontramos sozinhos 
                        seja por qual motivo for, pois não é importante, o que realmente tem siguinificado
                        ou que deva ficar em nossas mentes e corações é que nele existe solução. Mas para 
                        isso ser realidade, será preciso que entenda em qual real situação se 
                        encontra neste momento que esteja prendendo o seu tempo e decidir procurar ajuda, pois 
                        todas as coisas coperam para o seu bem enquanto existir amor dentro de te, pois como já
                         disse o grande filósofo da antiguidade o sábio "Enquanto respirar ainda tem jeito". 
                         Por isso continue conosco nesta busca para o 
                        auto intendimento. Meu nome é Daniel Seara, e sou mais um dependente dessa droga que 
                        se chama vida, seja mais um vicíado também, aprenda a viver de bom coração para si mesmo
                        e para o mundo. 
                          
                    </p>
                 </div>
                <img src={require('./img/depressao.jpg')} alt='Estado de depressão'/>
            </section>
        );
    }
}

