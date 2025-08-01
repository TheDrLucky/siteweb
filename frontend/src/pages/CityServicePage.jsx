import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Phone, MapPin, CheckCircle, ArrowRight, Star, 
  Home, Shield, Monitor, Brain, Clock, Award
} from 'lucide-react';
import { citiesData, servicesForSEO } from '../data/cities';
import { servicesData } from '../data/mockServices';
import { mockData } from '../data/mock';

const CityServicePage = () => {
  const { city, service } = useParams();
  
  const cityInfo = citiesData[city];
  const serviceInfo = servicesForSEO[service];
  const detailedServiceInfo = servicesData[service];
  
  if (!cityInfo || !serviceInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Page non trouvée</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = {
    Home,
    Shield, 
    Monitor,
    Brain
  }[serviceInfo.icon] || Home;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-white">
              <MapPin className="w-4 h-4 mr-2" />
              {cityInfo.name} ({cityInfo.codePostal}) • Expert local depuis 2015
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {serviceInfo.name} à {cityInfo.name}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {detailedServiceInfo?.description || serviceInfo.shortDescription}
              <br />
              <span className="text-lg text-gray-500 mt-2 block">
                {cityInfo.specialText}
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Devis gratuit à {cityInfo.name}
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

      {/* Service détaillé */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {serviceInfo.name}
                  </h2>
                  <p className="text-gray-600">{serviceInfo.shortDescription}</p>
                </div>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>{detailedServiceInfo?.fullDescription || detailedServiceInfo?.description}</p>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Pourquoi choisir nos solutions à {cityInfo.name} ?
                  </h3>
                  {serviceInfo.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Installation à {cityInfo.name}
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-gray-900">Intervention locale</div>
                        <div className="text-sm text-gray-600">Basés à Vitré, intervention rapide</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-gray-900">Disponibilité</div>
                        <div className="text-sm text-gray-600">Lun-Ven: 8h-18h, Sam: 9h-12h</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-gray-900">Certifications</div>
                        <div className="text-sm text-gray-600">Ajax, Control4, Grundig Security</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <Button asChild className="w-full">
                      <Link to="/contact">
                        <Phone className="w-4 h-4 mr-2" />
                        Demander un devis
                      </Link>
                    </Button>
                    <p className="text-sm text-gray-500">
                      Devis gratuit • Installation soignée • SAV inclus
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fonctionnalités détaillées */}
      {detailedServiceInfo?.features && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nos solutions {serviceInfo.name.toLowerCase()} à {cityInfo.name}
              </h2>
              <p className="text-lg text-gray-600">
                Des équipements de qualité professionnelle pour votre domicile ou entreprise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {detailedServiceInfo.features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-gray-700 leading-relaxed">{feature}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Zones d'intervention */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Zones d'intervention à {cityInfo.name}
            </h2>
            <p className="text-lg text-gray-600">
              Nous intervenons sur l'ensemble de la commune et ses alentours.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cityInfo.zones.map((zone, index) => (
              <Card key={index} className="text-center border-0 shadow-md">
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900">{zone}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Autres services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos autres services à {cityInfo.name}
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez l'ensemble de nos solutions connectées.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(servicesForSEO)
              .filter(([key]) => key !== service)
              .map(([key, otherService]) => {
                const OtherIconComponent = {
                  Home,
                  Shield,
                  Monitor,
                  Brain
                }[otherService.icon] || Home;
                
                return (
                  <Card key={key} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <OtherIconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {otherService.name}
                      </h3>
                      
                      <p className="text-gray-600 mb-6">
                        {otherService.shortDescription}
                      </p>
                      
                      <Button asChild variant="outline" className="w-full">
                        <Link to={`/${city}-${otherService.slug}`}>
                          En savoir plus
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt pour votre projet {serviceInfo.name.toLowerCase()} à {cityInfo.name} ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé. 
            Notre équipe d'experts vous accompagne de A à Z dans votre projet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-3">
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Devis gratuit
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
              <a href={`tel:${mockData.contact.phone}`}>
                {mockData.contact.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityServicePage;