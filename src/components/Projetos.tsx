import React from 'react';

interface ProjetoProps {
  projetos: {
    title: string;
    image: string;
    githubLink: string;
  }[];
}

const Projeto: React.FC<ProjetoProps> = ({ projetos }) => {
  return (
    <div className="flex flex-col items-center pb-20 px-4 sm:px-6 md:px-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-300 mb-10 text-center">
        Projetos
      </h2>
      <div className="w-full flex justify-center"> 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-7xl mx-auto">
          {projetos.map((projeto, index) => (
            <a 
              key={index} 
              href={projeto.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-lg hover:shadow-xl hover:from-green-500 hover:to-blue-600 transition-shadow duration-300 w-full max-w-sm"
            >
              <img 
                src={projeto.image} 
                alt={projeto.title} 
                className="w-full h-auto object-cover rounded-lg mb-4 aspect-w-16 aspect-h-9"
              />
              <h3 className="text-2xl font-bold text-white mb-2">{projeto.title}</h3>
              <div className="text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-full transition-colors duration-300 text-center">
                Ver no GitHub
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projeto;
