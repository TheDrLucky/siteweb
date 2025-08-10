import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ClipboardList, Lightbulb, Wrench, CheckCircle } from 'lucide-react';
import { mockData } from '../data/mock';

const EtudePage = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-purple-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Demande d'étude technique gratuite</h1>
          <p className="text-gray-600 max-w-3xl">
            Bénéficiez d'une analyse technique gratuite de votre besoin. Nous cadrons votre projet (diagnostic, faisabilité, premières recommandations)
            avant chiffrage détaillé.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link to="/contact">Démarrer l'étude</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-green-600 hover:bg-green-700">
              <Link to="/visite-gratuite">Planifier une visite</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/devis-gratuit">Obtenir directement un devis</Link>
            </Button>
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
                  <h2 className="text-xl font-semibold mb-4">Ce que comprend l'étude</h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2"><ClipboardList className="w-5 h-5 text-purple-600 mt-0.5" /> Recueil de besoins et contraintes (pièces, usages, budget)</li>
                    <li className="flex items-start gap-2"><Lightbulb className="w-5 h-5 text-purple-600 mt-0.5" /> Recommandations d'architecture et de matériels</li>
                    <li className="flex items-start gap-2"><Wrench className="w-5 h-5 text-purple-600 mt-0.5" /> Pré‑dimensionnement de l'installation et planning indicatif</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-purple-600 mt-0.5" /> Étapes suivantes jusqu'à la mise en service</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Domaines couverts</h2>
                  <p className="text-gray-700">Domotique (éclairage, chauffage, volets, scénarios), Sécurité (alarmes Ajax, vidéosurveillance Grundig), Informatique (réseau, Wi‑Fi, sauvegarde), IA (assistants & automatisations), Robot tondeuse.</p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Contact rapide</h3>
                  <div className="text-sm text-gray-700 space-y-2">
                    <div>Tél: <a className="text-blue-600" href={`tel:${mockData.contact.phone}`}>{mockData.contact.phone}</a></div>
                    <div>E‑mail: <a className="text-blue-600" href={`mailto:${mockData.contact.email}`}>{mockData.contact.email}</a></div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Vous avez déjà un projet cadré ?</h3>
                  <p className="text-sm text-gray-600">Passez directement à la demande de devis.</p>
                  <Button asChild className="w-full mt-4">
                    <Link to="/devis-gratuit">Demander un devis</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EtudePage;