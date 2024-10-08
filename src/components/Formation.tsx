import React from "react";

interface AcademicFormationProps {
  formations: {
    id: number;
    institution: string;
    degree: string;
    period: string;
    description: string;
  }[];
}

const AcademicFormation: React.FC<AcademicFormationProps> = ({ formations }) => {
  return (
    <section className="my-20 px-4 md:px-10 bg-blue-100 py-16 flex justify-center items-center">
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 mb-10 text-center">
          Formação Acadêmica
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-xs md:max-w-3xl lg:max-w-6xl">
            {formations.map((formation) => (
              <div key={formation.id} className="bg-white shadow-lg rounded-lg p-6 w-full">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{formation.degree}</h3>
                <p className="text-sm sm:text-base text-gray-600">{formation.institution}</p>
                <p className="text-sm text-gray-500 italic">{formation.period}</p>
                <p className="mt-4 text-sm sm:text-base text-gray-700">{formation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicFormation;
