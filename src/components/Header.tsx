import React from "react";
import '../App.css';

interface HeaderProps {
  perfilImg: string;
  nome: string;
  subtitulo: string;
  linkedinUrl: string;
  githubUrl: string;
  cvEnglishUrl: string;
  cvPortugueseUrl: string;
  iconLinkedin: string;
  iconGithub: string;
  iconPTBR: string;
  iconENUS: string;
}

const Header: React.FC<HeaderProps> = ({ perfilImg, nome, subtitulo, linkedinUrl, githubUrl, cvEnglishUrl, cvPortugueseUrl, iconLinkedin, iconGithub, iconPTBR, iconENUS }) => {
  return (
    <header className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-purple-200 to-blue-300 animate-gradient-xy">
      <img src={perfilImg} alt={`Perfil de ${nome}`} className="w-52 h-72 rounded-full shadow-lg mb-4"/>
      <h1 className="text-4xl font-bold text-gray-800 mb-2 text-shadow hover:text-gray-600 fade-in underline">
        {nome}
      </h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-2 text-shadow">
        {subtitulo}
      </h2>
      <div className="flex gap-3 justify-center">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <img src={iconLinkedin} className="w-8 h-8" alt="LinkedIn Icon"/>
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <img src={iconGithub} className="w-8 h-8" alt="GitHub Icon"/>
        </a>
        <a href={cvEnglishUrl} target="_blank" rel="noopener noreferrer">
          <img src={iconENUS} className="w-9 h-9" alt="English CV"/>
        </a>
        <a href={cvPortugueseUrl} target="_blank" rel="noopener noreferrer">
          <img src={iconPTBR} className="w-9 h-9" alt="Portuguese CV"/>
        </a>
      </div>
    </header>
  );
};

export default Header;
