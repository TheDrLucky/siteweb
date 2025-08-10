import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { CheckCircle, Phone, Mail, MessageSquare } from 'lucide-react';
import { mockData } from '../data/mock';

const DevisPage = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-blue-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Demande de devis gratuit</h1>
          <p className="text-gray-600 max-w-3xl">
            Obtenez un chiffrage précis et rapide pour votre projet en domotique, sécurité, informatique, IA ou robot tondeuse.
            Nous vous recontactons par le canal de votre choix: SMS, WhatsApp, e‑mail ou téléphone.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/contact">Remplir le formulaire</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`tel:${mockData.contact.phone}`}>Nous appeler</a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-green-600 hover:bg-green-700">
              <Link to="/visite-gratuite">Prendre une visite sur site</Link>
            </Button>
          </div>
          <div className="text-sm text-gray-500 mt-2">Vous préférez une étude technique détaillée ?
            <Link to="/etude-gratuite" className="text-blue-600 hover:underline ml-1">Demander une étude gratuite</Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Ce que nous incluons dans votre devis</h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5" /> Chiffrage détaillé par lot (domotique, sécurité, informatique, IA, robot tondeuse)</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5" /> Matériels proposés (Ajax, Grundig, etc.) et prestations d'installation</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5" /> Délais d'intervention estimatifs</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5" /> Options et variantes possibles</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Vos préférences de contact</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                    <div className="flex items-center gap-2"><MessageSquare className="w-5 h-5 text-blue-600" /> SMS / WhatsApp</div>
                    <div className="flex items-center gap-2"><Mail className="w-5 h-5 text-blue-600" /> E‑mail</div>
                    <div className="flex items-center gap-2"><Phone className="w-5 h-5 text-blue-600" /> Téléphone</div>
                    <div className="text-sm text-gray-500">Nous respectons votre choix et le RGPD.</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Besoin d'une visite sur site ?</h3>
                  <p className="text-sm text-gray-600">Planifiez directement un créneau sur notre agenda en ligne.</p>
                  <Button asChild className="w-full mt-4 bg-green-600 hover:bg-green-700">
                    <Link to="/visite-gratuite">Réserver une visite</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Nous joindre</h3>
                  <div className="text-sm text-gray-700 space-y-2">
                    <div>Tél: <a className="text-blue-600" href={`tel:${mockData.contact.phone}`}>{mockData.contact.phone}</a></div>
                    <div>E‑mail: <a className="text-blue-600" href={`mailto:${mockData.contact.email}`}>{mockData.contact.email}</a></div>
                    <div>Adresse: {mockData.contact.address}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevisPage;