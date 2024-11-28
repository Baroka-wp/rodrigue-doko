import React from 'react';
import { FlaskConical, Users, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const projects = [
  {
    id: 'antioxidants',
    title: "Modélisation des antioxydants naturels",
    status: "En cours",
    description: "Étude comparative des propriétés antioxydantes de composés naturels via des méthodes de chimie computationnelle.",
    icon: FlaskConical,
    fullDescription: `Notre projet de recherche se concentre sur l'étude approfondie des propriétés antioxydantes des composés naturels, utilisant des méthodes avancées de chimie computationnelle. Cette approche nous permet de comprendre les mécanismes moléculaires sous-jacents et d'optimiser leur efficacité.`,
    objectives: [
      "Identifier les mécanismes d'action antioxydante",
      "Optimiser les structures moléculaires",
      "Prédire l'efficacité antioxydante"
    ],
    methodology: "Utilisation de méthodes DFT et de modélisation moléculaire avancée",
    impact: "Développement de nouveaux antioxydants plus efficaces pour des applications en santé et en industrie"
  },
  {
    id: 'qsar',
    title: "Collaboration internationale QSAR",
    status: "En cours",
    description: "Développement de nouveaux modèles QSAR pour la prédiction de l'activité biologique.",
    icon: Users,
    fullDescription: `Projet collaboratif international visant à développer des modèles QSAR innovants pour prédire l'activité biologique des molécules. Cette approche permet d'accélérer la découverte de nouveaux composés actifs.`,
    objectives: [
      "Développer des modèles prédictifs robustes",
      "Valider les modèles sur des cas réels",
      "Établir des collaborations internationales"
    ],
    methodology: "Analyse statistique avancée et apprentissage automatique",
    impact: "Réduction des coûts et du temps de développement de nouveaux médicaments"
  },
  {
    id: 'green-chemistry',
    title: "Chimie verte appliquée",
    status: "Planifié",
    description: "Application des principes de chimie verte dans la synthèse de nouveaux composés.",
    icon: Target,
    fullDescription: `Initiative visant à intégrer les principes de la chimie verte dans la synthèse de nouveaux composés, en minimisant l'impact environnemental tout en maximisant l'efficacité des processus.`,
    objectives: [
      "Réduire l'impact environnemental",
      "Optimiser les rendements de synthèse",
      "Développer des processus durables"
    ],
    methodology: "Approche systématique basée sur les 12 principes de la chimie verte",
    impact: "Contribution à la durabilité environnementale dans l'industrie chimique"
  }
];

export default function Projects() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Projets en Cours</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <project.icon className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-sm text-blue-600">{project.status}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Link 
                to={`/projects/${project.id}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}