import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Home, Briefcase, Building2, ShoppingBag, UtensilsCrossed, 
  Heart, Tent, Building, Users, ArrowLeft, CheckCircle, 
  Phone, Star, MapPin, Award
} from 'lucide-react';
import { topologieData } from '../data/topologies';
import { mockData } from '../data/mock';

const TopologyDetailPage = () => {
  const { topologyId } = useParams();
  const topology = topologieData.topologies[topologyId];

  if (!topology) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Topologie non trouvée</h1>
          <Button asChild>
            <Link to="/topologies">Retour aux topologies</Link>
          </Button>
        </div>
      </div>
    );
  }

  const getTopologyIcon = (iconName) => {
    const icons = { 
      Home, Briefcase, Building2, ShoppingBag, UtensilsCrossed, 
      Heart, Tent, Building, Users 
    };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent className="w-16 h-16" /> : <Home className="w-16 h-16" />;
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

  const getTopologyBgGradient = (color) => {
    const gradients = {
      blue: 'from-blue-50 to-white',
      green: 'from-green-50 to-white',
      purple: 'from-purple-50 to-white',
      orange: 'from-orange-50 to-white',
      red: 'from-red-50 to-white',
      pink: 'from-pink-50 to-white',
      teal: 'from-teal-50 to-white',
      slate: 'from-slate-50 to-white',
      indigo: 'from-indigo-50 to-white'
    };
    return gradients[color] || gradients.blue;
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Accueil</Link>
            <span>/</span>
            <Link to="/topologies" className="hover:text-blue-600">Topologies</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{topology.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${getTopologyBgGradient(topology.color)} py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <Button asChild variant="ghost" className="mb-6 -ml-4">
                <Link to="/topologies">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour aux topologies
                </Link>
              </Button>

              <Badge variant="outline" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                Vitré et 30 km autour
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Solutions {topology.title}
              </h1>
              
              <p className="text-2xl font-medium text-gray-600 mb-6">
                {topology.subtitle}
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {topology.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="px-8">
                  <Link to="/contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Visite gratuite sur site
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={`tel:${mockData.contact.phone}`}>
                    Conseil d'expert
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className={`w-32 h-32 rounded-3xl border-4 flex items-center justify-center ${getTopologyColorClasses(topology.color)}`}>
                {getTopologyIcon(topology.icon)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions détaillées */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos solutions spécialisées {topology.title.toLowerCase()}
            </h2>
            <p className="text-lg text-gray-600">
              Technologies et services adaptés spécifiquement à votre secteur d'activité.
            </p>
          </div>

          <div className="space-y-12">
            {topology.solutions.map((solution, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Header */}
                    <div className={`p-8 ${getTopologyColorClasses(topology.color)} bg-opacity-20 flex items-center justify-center lg:col-span-1`}>
                      <div className="text-center">
                        <div className={`w-16 h-16 rounded-2xl border-2 flex items-center justify-center mx-auto mb-4 ${getTopologyColorClasses(topology.color)}`}>
                          <CheckCircle className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {solution.category}
                        </h3>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="p-8 lg:col-span-2">
                      <h4 className="font-semibold text-gray-900 mb-6">Services inclus :</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {solution.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Pourquoi choisir nos solutions {topology.title.toLowerCase()} ?
              </h2>
              
              <div className="space-y-6">
                {topology.avantages.map((avantage, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${getTopologyColorClasses(topology.color)}`}>
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">{avantage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${getTopologyColorClasses(topology.color)}`}>
                    <Award className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Expertise {topology.title.toLowerCase()}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Plus de 10 ans d'expérience dans l'équipement de sites {topology.title.toLowerCase()}. 
                    Nous connaissons parfaitement vos contraintes et besoins spécifiques.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {[
                      "Visite technique gratuite",
                      "Étude personnalisée", 
                      "Installation certifiée",
                      "Formation incluse",
                      "Maintenance dédiée"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="w-full">
                    <Link to="/contact">
                      Demander une étude gratuite
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Références locales */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos références {topology.title.toLowerCase()} locales
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez quelques-unes de nos réalisations dans votre secteur près de Vitré.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topology.exemples.map((exemple, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-4 font-medium">
                    "{exemple}"
                  </p>
                  
                  <div className="text-sm text-gray-500">
                    Référence {topology.title.toLowerCase()} • Vitré et environs
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 text-white`} style={{backgroundColor: topology.color === 'blue' ? '#2563eb' : topology.color === 'green' ? '#16a34a' : topology.color === 'purple' ? '#9333ea' : topology.color === 'orange' ? '#ea580c' : topology.color === 'red' ? '#dc2626' : topology.color === 'pink' ? '#ec4899' : topology.color === 'teal' ? '#0d9488' : topology.color === 'slate' ? '#475569' : '#4f46e5'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à équiper votre site {topology.title.toLowerCase()} ?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Contactez nos experts spécialisés {topology.title.toLowerCase()} pour une visite gratuite 
            et une étude personnalisée. Intervention rapide depuis Vitré.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-3">
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Visite gratuite sur site
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-gray-900">
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

export default TopologyDetailPage;