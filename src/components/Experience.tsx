import React, { useState } from "react";

interface ExperienceProps {
  experiences: {
    id: number;
    image: string;
    title: string;
    description: string;
  }[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  const toggleExperience = (id: number) => {
    setSelectedExperience(selectedExperience === id ? null : id);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  return (
    <section className="flex flex-col items-center justify-center my-20 px-4 md:px-10 bg-gray-100 py-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-600 mb-10 text-center">Experiências</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {experiences.map((experience) => (
          <div 
            key={experience.id} 
            className="relative group bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => toggleExperience(experience.id)}
          >
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
