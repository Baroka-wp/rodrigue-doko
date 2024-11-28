import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Target, FlaskConical } from 'lucide-react';
import { projects } from '../components/Projects';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <h2>Projet non trouvé</h2>
        <Link to="/" className="text-blue-600">Retour à l'accueil</Link>
      </div>
    );
  }

  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Retour à l'accueil
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-6">
            <project.icon className="w-12 h-12 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
              <div className="flex items-center gap-2 mt-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600">{project.status}</span>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <p className="text-lg text-gray-800">{project.fullDescription}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Objectifs
                </h2>
                <ul className="space-y-2">
                  {project.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FlaskConical className="w-5 h-5 text-blue-600" />
                  Méthodologie
                </h2>
                <p className="text-gray-700">{project.methodology}</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Impact du projet</h2>
              <p className="text-gray-700">{project.impact}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}