import React, { useState } from "react";
import Experiencia1 from '@assets/prefeitura-grupo.jpeg';
import Experiencia2 from '@assets/red-district.jpeg';
import Experiencia3 from '@assets/unifor-lider.jpeg';

const experiences = [
  {
    id: 1,
    image: Experiencia1,
    title: "Desenvolvedora de Jogos - Prefeitura de Fortaleza",
    description: "Atuei como desenvolvedora de jogos na prefeitura de Fortaleza durante 1 Ano e meio em que me tornei responsável pela pixel art e programação. O projeto GameLGPD foi eleito o segundo lugar da Serpro em Brasília. Após o projeto passei a trabalhar com .Net Core"
  },
  {
    id: 2,
    image: Experiencia2,
    title: "Desenvolvedora de Jogos - Red District Studio",
    description: "Auxiliei nas implementações do código junto com Seniors do projeto voluntário durante 3 meses."
  },

  {
    id: 3,
    image: Experiencia3,
    title: "Unifor - Líder de projeto Full-Stack",
    description: "Atualmente, sou bolsista na Unifor e líder de um projeto que envolve a criação de um site utilizando React.js e TypeScript. No projeto, também trabalhamos com PostgreSQL, Node.js e Insomnia para a integração do banco de dados. Além de realizar um estudo completo das tecnologias, também ensino e oriento minha equipe."
  }
];

const Experience: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  const toggleExperience = (id: number) => {
    setSelectedExperience(selectedExperience === id ? null : id);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  return (
    <section className="flex flex-col items-center justify-center my-20 px-4 md:px-10 bg-gray-100 py-16">
      <h2 className="text-6xl font-bold text-gray-800 mb-10 text-center">Experiências</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {experiences.map((experience) => (
          <div key={experience.id} className="relative group bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer" onClick={() => toggleExperience(experience.id)}>
            <img
              src={experience.image}
              alt={experience.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 transition-opacity group-hover:opacity-50"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white font-semibold text-lg z-10">
              {experience.title}
            </div>
          </div>
        ))}
      </div>
      {selectedExperience !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto transform transition-all duration-300 scale-105 hover:scale-100">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={closeModal}
            >
              ✖
            </button>
            <img
              src={experiences.find(exp => exp.id === selectedExperience)?.image}
              alt="Imagem ampliada"
              className="w-full h-auto mb-4 rounded-lg shadow-md"
            />
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              {experiences.find(exp => exp.id === selectedExperience)?.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {experiences.find(exp => exp.id === selectedExperience)?.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
