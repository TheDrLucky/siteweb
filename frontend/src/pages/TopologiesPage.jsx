import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Home, Briefcase, Building2, ShoppingBag, UtensilsCrossed, 
  Heart, Tent, Building, Users, ArrowRight, Phone, MapPin, CheckCircle
} from 'lucide-react';
import { topologieData } from '../data/topologies';
import { mockData } from '../data/mock';

const TopologiesPage = () => {
  const getTopologyIcon = (iconName) => {
    const icons = { 
      Home, Briefcase, Building2, ShoppingBag, UtensilsCrossed, 
      Heart, Tent, Building, Users 
    };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent className="w-12 h-12" /> : <Home className="w-12 h-12" />;
  };

  const getTopologyColorClasses = (color) => {
    const colorMap = {
      blue: 'text-blue-600 bg-blue-50 border-blue-200',
      green: 'text-green-600 bg-green-50 border-green-200',
      purple: 'text-purple-600 bg-purple-50 border-purple-200',
      orange: 'text-orange-600 bg-orange-50 border-orange-200',
      red: 'text-red-600 bg-red-50 border-red-200',
      pink: 'text-pink-600 bg-pink-50 border-pink-200',
      teal: 'text-teal-600 bg-teal-50 border-teal-200',
      slate: 'text-slate-600 bg-slate-50 border-slate-200',
      indigo: 'text-indigo-600 bg-indigo-50 border-indigo-200'
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-white">
              <MapPin className="w-4 h-4 mr-2" />
              {topologieData.zones.principal.slogan}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos solutions par typologie de site
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              <strong>Nous intervenons sur tout type de site</strong> et adaptons les solutions à vos besoins. 
              Depuis Vitré, nous équipons particuliers, entreprises et collectivités dans un rayon de 30 km.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Devis gratuit sur site
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${mockData.contact.phone}`}>
                  Conseil d'expert
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Zone d'intervention - Vitré et 30 km autour
            </h2>
            <p className="text-gray-600">
              Intervention rapide dans {topologieData.zones.codesPostaux.length} codes postaux autour de Vitré
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {topologieData.zones.codesPostaux.map((zone, index) => (
              <Card key={index} className="text-center border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="font-bold text-blue-600 text-lg mb-2">{zone.code}</div>
                  <div className="text-xs text-gray-600 space-y-1">
                    {zone.communes.slice(0, 2).map((commune, idx) => (
                      <div key={idx}>{commune}</div>
                    ))}
                    {zone.communes.length > 2 && (
                      <div className="text-gray-400">+{zone.communes.length - 2} autres</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Topologies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choisissez votre typologie
            </h2>
            <p className="text-lg text-gray-600">
              Solutions personnalisées selon votre secteur d'activité et vos besoins spécifiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(topologieData.topologies).map((topology) => (
              <Card key={topology.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  {/* Header */}
                  <div className={`p-6 ${getTopologyColorClasses(topology.color)} bg-opacity-20`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl border-2 flex items-center justify-center ${getTopologyColorClasses(topology.color)}`}>
                        {getTopologyIcon(topology.icon)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {topology.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {topology.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {topology.description}
                    </p>

                    {/* Solutions preview */}
                    <div className="space-y-4 mb-6">
                      <h4 className="font-semibold text-gray-900">Nos interventions :</h4>
                      {topology.solutions.map((solution, index) => (
                        <div key={index} className="space-y-2">
                          <div className="font-medium text-gray-800 text-sm">{solution.category}</div>
                          {solution.services.slice(0, 3).map((service, idx) => (
                            <div key={idx} className="flex items-start space-x-2 text-xs">
                              <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{service}</span>
                            </div>
                          ))}
                          {solution.services.length > 3 && (
                            <p className="text-xs text-gray-500 pl-5">
                              + {solution.services.length - 3} autres services
                            </p>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Avantages */}
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm">Vos bénéfices :</h4>
                      <div className="space-y-2">
                        {topology.avantages.slice(0, 3).map((avantage, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-xs text-gray-600">{avantage}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Exemples */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm">Références locales :</h4>
                      <div className="space-y-1">
                        {topology.exemples.slice(0, 2).map((exemple, index) => (
                          <div key={index} className="text-xs text-gray-600 bg-blue-50 px-3 py-1 rounded">
                            {exemple}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="space-y-2">
                      <Button asChild className="w-full group-hover:bg-blue-600 transition-colors">
                        <Link to={`/topologies/${topology.id}`}>
                          Découvrir nos solutions {topology.title.toLowerCase()}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild className="w-full">
                        <Link to="/contact">
                          <Phone className="w-4 h-4 mr-2" />
                          Devis gratuit
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre méthode d'intervention sur site
            </h2>
            <p className="text-lg text-gray-600">
              Un processus éprouvé adapté à chaque typologie pour garantir la réussite de votre projet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Visite technique gratuite",
                description: "Analyse de votre site et besoins spécifiques selon votre typologie"
              },
              {
                step: "02", 
                title: "Étude personnalisée",
                description: "Conception sur-mesure avec matériel adapté à votre secteur"
              },
              {
                step: "03",
                title: "Installation professionnelle",
                description: "Mise en œuvre par nos techniciens certifiés et formés"
              },
              {
                step: "04",
                title: "Formation & maintenance",
                description: "Formation complète et contrat de maintenance personnalisé"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Votre projet dans votre secteur nous intéresse !
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Que vous soyez particulier, professionnel ou collectivité, nous avons une solution 
            adaptée à votre typologie. Devis gratuit et visite sur site.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-3">
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Demander une visite gratuite
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
              <a href={`tel:${mockData.contact.phone}`}>
                Appeler maintenant
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopologiesPage;