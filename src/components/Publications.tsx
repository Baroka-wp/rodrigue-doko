import React, { useState } from 'react';
import { BookOpen, Calendar, ExternalLink, Search } from 'lucide-react';

const publications = [
  {
    title: "Theoretical Study of Antioxidant Properties of Three Flavonoids Isomers",
    journal: "American Journal of Scientific and Industrial Research",
    year: 2016,
    abstract: "Étude théorique des propriétés antioxydantes de la kaempférol, de la lutéoline et de la fisétine.",
    keywords: ["flavonoids", "antioxidant", "theoretical study"]
  },
  {
    title: "Comparative Study of Antioxidant Properties",
    journal: "Journal of Chemical and Pharmaceutical Research",
    year: 2017,
    abstract: "Comparaison des propriétés antioxydantes de l'acide ascorbique, du Trolox et du BHT.",
    keywords: ["antioxidant", "comparative study", "ascorbic acid"]
  },
  {
    title: "DFT Study of Chemical Reactivity of Free Radicals",
    journal: "World Scientific News",
    year: 2017,
    abstract: "Étude par théorie de la fonctionnelle de la densité (DFT) de la réactivité des radicaux ABTS°+ et DPPH°.",
    keywords: ["DFT", "free radicals", "chemical reactivity"]
  },
  {
    title: "Quantum Chemical Studies of Hydrazone Derivatives",
    journal: "Computational Chemistry",
    year: 2018,
    abstract: "Étude théorique sur des dérivés d'hydrazone.",
    keywords: ["quantum chemistry", "hydrazone", "derivatives"]
  },
  {
    title: "Physico-Chemical Modeling of Myricetin Complexes by Zinc II Ions",
    journal: "Journal of Science",
    year: 2019,
    abstract: "Modélisation physico-chimique des complexes de la myricétine avec des ions zinc.",
    keywords: ["myricetin", "zinc ions", "modeling"]
  },
  {
    title: "QSPR/QSAR Modelling of Antioxidant Properties of Flavonoids",
    journal: "International Research Journal of Pure & Applied Chemistry",
    year: 2021,
    abstract: "Modélisation des propriétés antioxydantes de certains flavonoïdes.",
    keywords: ["QSPR", "QSAR", "flavonoids"]
  },
  {
    title: "Quantum Chemical Prediction of Redox Potential",
    journal: "Journal of Chemical and Pharmaceutical Research",
    year: 2021,
    abstract: "Prédiction des potentiels redox appliquée aux dérivés phénoliques.",
    keywords: ["quantum chemistry", "redox potential", "phenolic derivatives"]
  },
  {
    title: "COVID-19: Disinfection of Surfaces with Chlorine Water",
    journal: "World Journal of Pharmaceutical Research",
    year: 2022,
    abstract: "Étude sur l'efficacité de l'eau chlorée pour désinfecter les surfaces pendant la pandémie.",
    keywords: ["COVID-19", "chlorine water", "disinfection"]
  },
  {
    title: "Physicochemical Modeling of Myricetin Complexes by Zinc II Ions",
    journal: "Journal of Research in Chemistry",
    year: 2023,
    abstract: "Étude approfondie sur les complexes de myricétine.",
    keywords: ["myricetin", "zinc ions", "complexes"]
  },
  {
    title: "Theoretical Study of Reactivity of Urea, Thiourea, and Hydroxylated Derivatives",
    journal: "International Journal of Chemical Research and Development",
    year: 2023,
    abstract: "Étude théorique sur la réactivité de l'urée, de la thiourée et de leurs dérivés hydroxylés.",
    keywords: ["urea", "thiourea", "reactivity"]
  }
];

export default function Publications() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');

  const years = Array.from(new Set(publications.map(pub => pub.year))).sort((a, b) => b - a);

  const filteredPublications = publications
    .filter(pub => 
      (selectedYear === 'all' || pub.year === selectedYear) &&
      (pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       pub.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
       pub.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase())))
    )
    .sort((a, b) => b.year - a.year);

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-1">
            Recherche
          </h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Publications Scientifiques
          </h3>
          <p className="text-lg text-gray-600">
            {publications.length} publications dans des revues internationales
          </p>
        </div>

        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher par titre, résumé ou mot-clé..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">Toutes les années</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div className="space-y-6">
          {filteredPublications.map((pub, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {pub.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {pub.abstract}
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{pub.journal} • {pub.year}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {pub.keywords.map((keyword, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-blue-50 text-blue-600 rounded-full"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}