import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Home, Shield, Monitor, Brain, 
  ArrowRight, CheckCircle, Phone
} from 'lucide-react';
import { mockData } from '../data/mock';
import BoutiqueBlock from '../components/BoutiqueBlock';

const ServicesPage = () => {
  const getServiceIcon = (iconName) => {
    const icons = { Home, Shield, Monitor, Brain };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent className="w-12 h-12" /> : <Home className="w-12 h-12" />;
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

  const getServiceBgGradient = (color) => {
    const gradients = {
      blue: 'from-blue-50 to-white',
      red: 'from-red-50 to-white',
      green: 'from-green-50 to-white',
      purple: 'from-purple-50 to-white'
    };
    return gradients[color] || gradients.blue;
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos prestations technologiques
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              <strong>Entreprise d'installation et de maintenance</strong> - Solutions technologiques complètes 
              pour particuliers et professionnels. Approche artisanale et personnalisée depuis la Bretagne.
            </p>
            <Badge variant="outline" className="px-4 py-2 bg-white">
              4 domaines d'expertise • Installation • Maintenance • Grand Ouest
            </Badge>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mockData.services.map((service, index) => (
              <Card key={service.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`bg-gradient-to-br ${getServiceBgGradient(service.color)} p-8`}>
                  <div className="flex items-start space-x-6">
                    <div className={`flex-shrink-0 w-20 h-20 rounded-2xl border-2 flex items-center justify-center ${getServiceColorClasses(service.color)}`}>
                      {getServiceIcon(service.icon)}
                    </div>
                    
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h2>
                      <p className="text-lg font-medium text-gray-600 mb-4">
                        {service.subtitle}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="font-bold text-gray-900 mb-4">Nos prestations :</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Vos bénéfices :</h4>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="flex-1">
                      <Link to={`/services/${service.id}`}>
                        Découvrir en détail
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <Link to="/contact">
                        <Phone className="w-4 h-4 mr-2" />
                        Devis gratuit
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre méthode d'intervention
            </h2>
            <p className="text-lg text-gray-600">
              Un processus éprouvé pour garantir la réussite de votre projet technologique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Étude gratuite",
                description: "Analyse de vos besoins et visite technique sur site"
              },
              {
                step: "02", 
                title: "Devis détaillé",
                description: "Proposition personnalisée avec matériel et installation"
              },
              {
                step: "03",
                title: "Installation",
                description: "Mise en œuvre soignée par nos techniciens certifiés"
              },
              {
                step: "04",
                title: "Suivi & SAV",
                description: "Formation, maintenance et support technique inclus"
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
            Une question sur nos services ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Nos experts vous conseillent gratuitement pour choisir les solutions 
            les mieux adaptées à vos besoins et votre budget.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-3">
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Demander un devis
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

export default ServicesPage;