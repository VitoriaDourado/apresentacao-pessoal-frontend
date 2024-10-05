import React from "react";
import Foto from '@assets/vitoria-foto.png';

const AboutMe: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center my-20 px-4 md:px-10 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-16">
      <h2 className="text-6xl font-bold text-gray-900 mb-5 text-center tracking-wider">
        Sobre <span className="text-purple-600">.</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mt-10">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <p className="text-lg text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0">
            Olá, sou <span className="font-bold text-purple-600">Vitória Dourado da Silva</span>, uma desenvolvedora front-end que está sempre por dentro da tecnologia e inovação.
            Tenho sempre a vontade de aprender e aprimorar meu conhecimento em desenvolvimento de software. Gosto de desafios e estou sempre pronta para colaborar em equipe, 
            buscando explorar novas ideias que possam impactar positivamente!
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img 
            src={Foto} 
            alt="Vitória Dourado da Silva" 
            className=" w-80 object-cover rounded-full shadow-lg border-4 border-purple-300 transform hover:scale-105 transition-transform duration-300" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
