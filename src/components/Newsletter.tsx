import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Newsletter subscription:', email);
    setSubscribed(true);
    setEmail('');
  };

  return (
    <section className="bg-blue-900 text-white py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-12 h-12 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">Restez informé de nos recherches</h2>
        <p className="mb-8">Abonnez-vous à notre newsletter pour recevoir les dernières actualités et publications</p>
        
        {subscribed ? (
          <div className="flex items-center justify-center text-green-400">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span>Merci pour votre inscription!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-2 rounded-md text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                S'abonner
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}