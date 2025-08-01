import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Home, Shield, Monitor, Brain, 
  ArrowRight, Star, CheckCircle,
  Phone, Users, Award, MapPin,
  Briefcase, Building2, ShoppingBag, UtensilsCrossed, 
  Heart, Tent, Building
} from 'lucide-react';
import { mockData } from '../data/mock';
import { topologieData } from '../data/topologies';
import BoutiqueBlock from '../components/BoutiqueBlock';

const HomePage = () => {
  const getServiceIcon = (iconName) => {
    const icons = { Home, Shield, Monitor, Brain };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8" /> : <Home className="w-8 h-8" />;
  };

  const getServiceColorClasses = (color) => {
    const colorMap = {
      blue: 'text-blue-600 bg-blue-50 border-blue-200',
      red: 'text-red-600 bg-red-50 border-red-200',
      green: 'text-green-600 bg-green-50 border-green-200',
      purple: 'text-purple-600 bg-purple-50 border-purple-200'
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 px-4 py-1 bg-white">
              <MapPin className="w-3 h-3 mr-1" />
              Intervention dans le Grand Ouest
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {mockData.hero.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-600 font-medium mb-4">
              Entreprise de prestations technologiques • Grand Ouest
            </p>
            
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {mockData.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8 py-3">
                <Link to="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  {mockData.hero.ctaPrimary}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-3">
                <Link to="/topologies">
                  {mockData.hero.ctaSecondary}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Clients */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-500 mb-8">
            Ils nous font confiance
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {mockData.clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center h-12 w-24 grayscale hover:grayscale-0 transition-all duration-300">
                <span className="font-bold text-gray-400 text-lg">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solutions par typologie de site
            </h2>
            <p className="text-lg text-gray-600">
              Nous adaptons nos technologies à votre secteur d'activité. Particuliers, entreprises, 
              collectivités : chacun a ses spécificités dans le Grand Ouest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(topologieData.topologies).slice(0, 6).map((topology) => {
              const getTopologyIcon = (iconName) => {
                const icons = { 
                  Home, Briefcase, Building2, ShoppingBag, UtensilsCrossed, 
                  Heart, Tent, Building, Users 
                };
                const IconComponent = icons[iconName];
                return IconComponent ? <IconComponent className="w-8 h-8" /> : <Home className="w-8 h-8" />;
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
                <Card key={topology.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl border-2 flex items-center justify-center group-hover:scale-110 transition-transform ${getTopologyColorClasses(topology.color)}`}>
                      {getTopologyIcon(topology.icon)}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {topology.title}
                    </h3>
                    
                    <p className="text-sm text-gray-500 mb-4 font-medium">
                      {topology.subtitle}
                    </p>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                      {topology.description}
                    </p>

                    <Button asChild variant="outline" className="group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                      <Link to={`/topologies/${topology.id}`}>
                        Découvrir
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/topologies">
                Découvrir toutes nos solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Boutique Block */}
      <BoutiqueBlock 
        title="Nos solutions clé en main avec prix transparents"
        description="Découvrez nos packs et services d'installation avec tarifs clairs. Devis gratuit et conseils personnalisés inclus."
        showFeatured={true}
        maxItems={3}
      />

      {/* Robot Tondeuse Highlight Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 px-3 py-1 bg-white border-green-200 text-green-700">
                🤖 Solution robotique
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Robot Tondeuse Connecté
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Fini la corvée de tonte ! Nos robots tondeuses de dernière génération entretiennent 
                votre pelouse de façon autonome, sans intervention humaine.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Navigation RTK haute précision</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Tonte silencieuse et écologique</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Contrôle via smartphone</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Mulching naturel pour pelouse plus dense</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link to="/robot-tondeuse">
                    <span className="mr-2">🤖</span>
                    Découvrir nos robots tondeuses
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
                  <Link to="/contact">
                    Devis gratuit
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:pl-8">
              <Card className="p-8 bg-white border-0 shadow-xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">🤖</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Modèles disponibles
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900">Mammotion LUBA</h4>
                      <p className="text-sm text-gray-600">Navigation RTK - Jusqu'à 5000m²</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900">Hooki M1</h4>
                      <p className="text-sm text-gray-600">Intelligence IA - Jusqu'à 3000m²</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pourquoi choisir Godeloup Domotique ?
              </h2>
              
              <div className="space-y-4">
                {mockData.about.values_details.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t">
                <div className="flex flex-wrap gap-2">
                  {mockData.about.certifications.map((cert, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                      <Award className="w-3 h-3 mr-1" />
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-white border-blue-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Service personnalisé
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Chaque projet est unique. Nous vous accompagnons de l'étude 
                    à la maintenance, avec une approche artisanale et un suivi rigoureux.
                  </p>
                  <Button asChild>
                    <Link to="/about">
                      En savoir plus sur nous
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez les témoignages de nos clients satisfaits dans le Grand Ouest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à moderniser votre habitat ou entreprise ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Demandez votre devis gratuit et découvrez comment nos solutions 
            sur-mesure peuvent transformer votre quotidien.
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
                Appeler maintenant
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;