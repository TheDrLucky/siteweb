import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const odooAgendaUrl = 'https://www.godeloupdomotique.ovh/appointment/13';

const VisiteGratuitePage = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-green-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Visite gratuite sur site</h1>
          <p className="text-gray-600 max-w-3xl">Programmez un rendez‑vous pour que nous venions évaluer votre besoin sur place. Réservation en ligne via notre agenda Odoo.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <a href={odooAgendaUrl} target="_blank" rel="noreferrer">Ouvrir l'agenda Odoo</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/devis-gratuit">Demander un devis</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Embedded agenda */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-0">
              <iframe
                title="Agenda Odoo"
                src={odooAgendaUrl}
                className="w-full"
                style={{ minHeight: '1200px', border: '0' }}
              />
            </CardContent>
          </Card>
          <div className="text-sm text-gray-500 mt-3">Si l'agenda intégré ne s'affiche pas correctement, cliquez sur le bouton « Ouvrir l'agenda Odoo » ci‑dessus.</div>
        </div>
      </section>
    </div>
  );
};

export default VisiteGratuitePage;