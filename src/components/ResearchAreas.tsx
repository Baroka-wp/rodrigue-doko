import React from 'react';
import { FlaskConical, Microscope, Leaf, HeartPulse, Atom } from 'lucide-react';

const areas = [
  {
    icon: FlaskConical,
    title: "Stabilité et réactivité moléculaire",
    description: "Étude approfondie des molécules bioactives issues de substances naturelles ou synthétiques.",
    items: [
      "Analyse de stabilité chimique",
      "Mécanismes de réactivité",
      "Caractérisation moléculaire"
    ]
  },
  {
    icon: Microscope,
    title: "Modélisation moléculaire",
    description: "Application de techniques computationnelles avancées pour la prédiction et l'analyse des propriétés moléculaires.",
    items: [
      "Études QSAR/QSPR",
      "Docking moléculaire",
      "Modélisation spectroscopique"
    ]
  },
  {
    icon: Atom,
    title: "Propriétés antioxydantes",
    description: "Recherche approfondie sur les propriétés antioxydantes des molécules bioactives et leurs mécanismes d'action.",
    items: [
      "Étude des flavonoïdes",
      "Composés phénoliques",
      "Mécanismes antioxydants"
    ]
  },
  {
    icon: Leaf,
    title: "Chimie verte et durable",
    description: "Développement de solutions durables et respectueuses de l'environnement dans le domaine de la chimie.",
    items: [
      "Applications écologiques",
      "Chimie pour l'énergie",
      "Impact environnemental"
    ]
  },
  {
    icon: HeartPulse,
    title: "Conception de médicaments",
    description: "Étude des propriétés chimiques et biologiques pour le design de nouvelles molécules thérapeutiques.",
    items: [
      "Design moléculaire",
      "Études structure-activité",
      "Optimisation thérapeutique"
    ]
  }
];

export default function ResearchAreas() {
  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-1">
            Expertise
          </h2>
          <h3 className="text-3xl font-bold text-gray-900">
            Domaines de Recherche
          </h3>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Exploration des propriétés moléculaires et développement de solutions innovantes en chimie théorique et computationnelle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-t-xl"></div>
              <div className="flex items-center mb-6">
                <area.icon className="w-10 h-10 text-blue-600" />
                <h4 className="text-xl font-semibold text-gray-900 ml-4">{area.title}</h4>
              </div>
              <p className="text-gray-600 mb-6 min-h-[80px]">{area.description}</p>
              <ul className="space-y-3">
                {area.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}