import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "Avancées récentes en modélisation moléculaire",
    date: "2024-03-15",
    excerpt: "Découvrez les dernières innovations en matière de modélisation moléculaire et leurs applications...",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80"
  },
  {
    title: "Impact de la chimie verte sur l'environnement",
    date: "2024-03-10",
    excerpt: "Analyse des dernières recherches sur l'impact des pratiques de chimie verte...",
    imageUrl: "https://images.unsplash.com/photo-1564325724739-bae0bd08762c?auto=format&fit=crop&q=80"
  }
];

export default function Blog() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Actualités de Recherche</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.date).toLocaleDateString('fr-FR')}
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-blue-600 font-medium flex items-center hover:text-blue-700">
                  Lire la suite <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}