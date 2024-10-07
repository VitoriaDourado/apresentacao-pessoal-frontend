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
        <h2 className="text-6xl font-bold text-blue-800 mb-10 text-center">Formação Acadêmica</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-8 max-w-xs">
            {formations.map((formation) => (
              <div key={formation.id} className="bg-white shadow-lg rounded-lg p-6 w-full">
                <h3 className="text-xl font-semibold text-gray-800">{formation.degree}</h3>
                <p className="text-gray-600">{formation.institution}</p>
                <p className="text-gray-500 italic">{formation.period}</p>
                <p className="mt-4 text-gray-700">{formation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicFormation;
