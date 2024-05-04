import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt="" className='about-img'/>
      </div>

      <div className='about-right'>
        <h2>Sobre nós</h2>
        <p>O abandono de cães e gatos na cidade do Recife, em Pernambuco, é um problema alarmente que clama por atenção e ação imediata! </p> 
        <p>Nas ruas da cidade, é comum encontrar animais desamparados, perdidos e famintos, vagando em busca de um abrigo e comida, esses seres inocentes, que deveriam receber amor e cuidado, são vitmas da negligência humana e da falta de politicas eficazes de controle e proteção animal. </p>
        <p>É preciso incentivar a adoção responsável e o cuidado com os animais de estimação, promovendo uma cultura de respeito e compaixão pelos seres vivos que compartilham conosco o espaço urbano. </p>
        <p>Logo, levando em consideração tais pontos, o "E.I.T.A! Recife", programa que identifica desafios da cidade do Recife e cria um ambiente propício para realizar conexões capazes de implementar soluções inovadoras para a problemática, trouxe o tema - Como podemos reduzir o abandono de cães e gatos na cidade do Recife, identificando e registrando cada um deles de forma escalável e mudando a cultura da população no trato desses animais? - e visando tal desafio, nosso time trouxe uma inovadora solução. </p>
        <p>Visamos objetivar uma plataforma chamada "SOSanimals" que visa oferecer as funções de cadastro do animal em questão, assim como disponibiliza também para o usuário a opção de notificar o desaparecimento de seu pet, em atribuição, uma das partes mais importantes do nosso app é a oportunidade de realizar a adoção de algum animal cadastrado ou informado no nosso sistema, contendo também outras funcionalidades que serão expostas ao discorrer de sua utilização.</p>
        
        <h3>Nossa Equipe:</h3>
        <h3>Giovanna Laranjeira                        01606692 </h3>
        <h3>Henrique Márcio Silva da Hora              01371100 </h3>
        <h3>Matheus Artur da Silva Santos              01573682 </h3>
      </div>
    </div>
  )
}

export default About
