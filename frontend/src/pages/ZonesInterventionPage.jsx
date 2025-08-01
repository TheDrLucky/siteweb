import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  MapPin, Phone, ArrowRight, Home, Shield, Monitor, Brain,
  Clock, Award, CheckCircle
} from 'lucide-react';
import { citiesData, servicesForSEO } from '../data/cities';
import { mockData } from '../data/mock';

const ZonesInterventionPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-white">
              <MapPin className="w-4 h-4 mr-2" />
              Grand Ouest • Intervention locale depuis Vitré
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos zones d'intervention
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Découvrez nos services domotique, sécurité, informatique et intelligence artificielle 
              dans les principales villes du Grand Ouest. Une expertise locale pour vos projets connectés.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Devis gratuit
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${mockData.contact.phone}`}>
                  {mockData.contact.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos 4 domaines d'expertise
            </h2>
            <p className="text-lg text-gray-600">
              Des solutions complètes pour tous vos besoins technologiques.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(servicesForSEO).map(([key, service]) => {
              const IconComponent = {
                Home,
                Shield,
                Monitor,
                Brain
              }[service.icon] || Home;
              
              return (
                <Card key={key} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-4">
                      {service.shortDescription}
                    </p>
                    
                    <div className="text-xs text-gray-500">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center justify-center space-x-1 mb-1">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos villes d'intervention
            </h2>
            <p className="text-lg text-gray-600">
              Basés à Vitré, nous intervenons dans un rayon de 50 km pour vous offrir 
              un service de proximité et une réactivité maximale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(citiesData).map(([cityKey, city]) => (
              <Card key={cityKey} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  {/* City Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{city.name}</h3>
                        <p className="text-blue-100 text-sm">
                          <MapPin className="w-4 h-4 inline mr-1" />
                          {city.codePostal}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          4 services
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Services Grid */}
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {Object.entries(servicesForSEO).map(([serviceKey, service]) => {
                        const IconComponent = {
                          Home,
                          Shield,
                          Monitor,
                          Brain
                        }[service.icon] || Home;
                        
                        return (
                          <Link
                            key={serviceKey}
                            to={`/${cityKey}-${serviceKey}`}
                            className="group"
                          >
                            <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200">
                              <div className="w-8 h-8 bg-gray-100 group-hover:bg-blue-100 rounded-lg flex items-center justify-center">
                                <IconComponent className="w-4 h-4 text-gray-600 group-hover:text-blue-600" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-gray-900 group-hover:text-blue-900 truncate">
                                  {service.name}
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* City Description */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {city.description}
                    </p>

                    {/* Zones */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Zones couvertes :</h4>
                      <div className="flex flex-wrap gap-1">
                        {city.zones.slice(0, 3).map((zone, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {zone}
                          </Badge>
                        ))}
                        {city.zones.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{city.zones.length - 3} zones
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button asChild className="w-full" variant="outline">
                      <Link to={`/${cityKey}-domotique`}>
                        <MapPin className="w-4 h-4 mr-2" />
                        Voir nos services à {city.name}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pourquoi choisir notre expertise locale ?
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Proximité garantie",
                    description: "Basés à Vitré, nous intervenons rapidement dans toute la région pour vos urgences et maintenance."
                  },
                  {
                    icon: Clock,
                    title: "Réactivité optimale",
                    description: "Délais d'intervention courts grâce à notre implantation locale et notre connaissance du terrain."
                  },
                  {
                    icon: Award,
                    title: "Expertise certifiée",
                    description: "Équipe formée et certifiée Ajax, Control4, partenaire Grundig Security pour un service professionnel."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Besoin d'un devis ?
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center space-x-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Déplacement gratuit pour devis</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Étude personnalisée de vos besoins</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Conseils d'experts inclus</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button asChild className="w-full" size="lg">
                      <Link to="/contact">
                        <Phone className="w-5 h-5 mr-2" />
                        Demander un devis gratuit
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full" size="lg">
                      <a href={`tel:${mockData.contact.phone}`}>
                        Appeler : {mockData.contact.phone}
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à moderniser votre habitat ou entreprise ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour découvrir comment nos solutions connectées 
            peuvent transformer votre quotidien dans le Grand Ouest.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-3">
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Prendre rendez-vous
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/about">
                En savoir plus sur nous
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZonesInterventionPage;