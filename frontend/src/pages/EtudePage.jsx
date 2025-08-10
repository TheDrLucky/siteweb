import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ClipboardList, Lightbulb, Wrench, CheckCircle, Clock } from 'lucide-react';
import LeadForm from '../components/LeadForm';

const EtudePage = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-purple-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Demande d'étude technique gratuite</h1>
          <p className="text-gray-600 max-w-3xl">
            Analyse technique de votre besoin: diagnostic, faisabilité, premières recommandations.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <a href="#form">Démarrer l'étude</a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-green-600 hover:bg-green-700">
              <Link to="/visite-gratuite">Planifier une visite (Odoo)</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section id="form" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <LeadForm variant="etude" />
          </div>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Ce que comprend l'étude</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2"><ClipboardList className="w-5 h-5 text-purple-600 mt-0.5" /> Recueil de besoins et contraintes</li>
                  <li className="flex items-start gap-2"><Lightbulb className="w-5 h-5 text-purple-600 mt-0.5" /> Recommandations d'architecture et matériels</li>
                  <li className="flex items-start gap-2"><Wrench className="w-5 h-5 text-purple-600 mt-0.5" /> Pré-dimensionnement et planning</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-purple-600 mt-0.5" /> Étapes suivantes jusqu'à la mise en service</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Processus</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start gap-2"><ClipboardList className="w-5 h-5 text-purple-600 mt-0.5" /> 1. Qualification de votre besoin</div>
                  <div className="flex items-start gap-2"><Lightbulb className="w-5 h-5 text-purple-600 mt-0.5" /> 2. Recommandations initiales</div>
                  <div className="flex items-start gap-2"><Clock className="w-5 h-5 text-purple-600 mt-0.5" /> 3. Devis détaillé sous 24-48h</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EtudePage;