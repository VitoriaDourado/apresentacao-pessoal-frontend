import React from "react";
import Perfil from '@assets/vitoria-user-img.jpeg';
import IconLinkedin from '@assets/linkedin.png';
import IconGithub from '@assets/github.png';
import CVEnglish from '@public/curriculos/Vitoria Dourado - Curriculo Englishh.pdf';
import CVPortugues from '@public/curriculos/VITÓRIA DOURADO DA SILVA -  Curriculo (1) (2) 1 (2).pdf';
import IconPTBR from '@assets/brasil.png';
import IconENUS from '@assets/reino-unido.png';
import '../App.css';

const Header: React.FC = () => {
  return(
      <header className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-purple-200 to-blue-300 animate-gradient-xy">
        <img src={Perfil} alt="Perfil de Vitória" className="w-52 h-72 rounded-full shadow-lg mb-4"/>
        <h1 className="text-4xl font-bold text-gray-800 mb-2 text-shadow hover:text-gray-600 fade-in underline">Vitória Dourado da Silva</h1>
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-shadow">Desenvolvedora Front-End</h1>
        <div className="flex gap-3 justify-center">
          <a href="https://www.linkedin.com/in/vitoriadourado/" target="_blank" rel="noopener noreferrer">
              <img src={IconLinkedin} className="w-8 h-8"/>
          </a>
          <a href="https://github.com/VitoriaDourado" target="_blank" rel="noopener noreferrer">
              <img src={IconGithub} className="w-8 h-8"/>
          </a>
          <a href={CVEnglish} target="_blank" rel="noopener noreferrer">
              <img src={IconENUS} className="w-9 h-9"/>
          </a>
          <a href={CVPortugues} target="_blank" rel="noopener noreferrer">
              <img src={IconPTBR} className="w-9 h-9"/>
          </a>
        </div>
      </header>
  )
}

export default Header;