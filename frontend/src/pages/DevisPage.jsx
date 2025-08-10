import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { CheckCircle, ClipboardList, Wrench, Clock } from 'lucide-react';
import LeadForm from '../components/LeadForm';

const DevisPage = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-blue-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Demande de devis gratuit</h1>
          <p className="text-gray-600 max-w-3xl">
            Obtenez un chiffrage précis pour votre projet: Domotique, Sécurité (Ajax), Vidéosurveillance (Grundig), Informatique, IA, Robot tondeuse.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <a href="#form">Remplir le formulaire</a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-green-600 hover:bg-green-700">
              <Link to="/visite-gratuite">Visite sur site (Odoo)</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section id="form" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <LeadForm variant="devis" />
          </div>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Ce que contient votre devis</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5" /> Chiffrage détaillé matériel + pose</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5" /> Options et variantes selon budget</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5" /> Délais et planning indicatif</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5" /> Garantie, SAV et maintenance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Comment ça marche ?</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start gap-2"><ClipboardList className="w-5 h-5 text-blue-600 mt-0.5" /> 1. Vous décrivez votre besoin (5 minutes)</div>
                  <div className="flex items-start gap-2"><Wrench className="w-5 h-5 text-blue-600 mt-0.5" /> 2. Étude rapide par nos techniciens</div>
                  <div className="flex items-start gap-2"><Clock className="w-5 h-5 text-blue-600 mt-0.5" /> 3. Envoi du devis sous 24-48h</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevisPage;