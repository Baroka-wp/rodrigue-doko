import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function Hero() {
  const whatsappLink = `https://wa.me/22996031498`;

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-1">
                Post-doctorant
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Dr. Rodrigue CHABI DOCO
              </h1>
              <p className="text-xl text-gray-600">
                Chimie Physique & Théorique • Université d'Abomey-Calavi
              </p>
            </div>

            <div className="space-y-3 text-gray-600">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-5 h-5 text-blue-600" />
                <span>+229 96031498</span>
              </a>
              <a 
                href="mailto:rodrigue.chabidoco@uac.bj"
                className="flex items-center gap-3 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5 text-blue-600" />
                <span>rodrigue.chabidoco@uac.bj</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Cotonou, Bénin</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-lg transform translate-x-3 translate-y-3"></div>
            <div className="relative rounded-lg shadow-xl overflow-hidden">
              <LiteYouTubeEmbed 
                id="f5x788mjQlU"
                title="Ma thèse en 180 secondes - Dr. CHABI DOCO"
                poster="maxresdefault"
                webp
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}