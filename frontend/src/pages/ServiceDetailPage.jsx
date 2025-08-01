import React, { useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { 
  Home, Shield, Monitor, Brain, 
  CheckCircle, Phone, ArrowLeft,
  Clock, Award, Users, Scissors
} from 'lucide-react';
import { servicesData } from '../data/mockServices';
import { mockData } from '../data/mock';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const location = useLocation();
  
  // Redirection robot-tondeuse vers domotique
  const isRobotTondeuse = location.pathname === '/robot-tondeuse' || serviceId === 'robot-tondeuse';
  const actualServiceId = isRobotTondeuse ? 'domotique' : serviceId;
  
  const service = servicesData[actualServiceId];
  const mockService = mockData.services.find(s => s.id === actualServiceId);

  useEffect(() => {
    if (isRobotTondeuse) {
      // Scroll vers la section robot tondeuse après le chargement
      setTimeout(() => {
        const robotSection = document.getElementById('robot-tondeuse-section');
        if (robotSection) {
          robotSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, [isRobotTondeuse]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service non trouvé</h1>
          <Button asChild>
            <Link to="/services">Retour aux services</Link>
          </Button>
        </div>
      </div>
    );
  }

  const getServiceIcon = (iconName) => {
    const icons = { Home, Shield, Monitor, Brain };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent className="w-16 h-16" /> : <Home className="w-16 h-16" />;
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
      blue: 'from-blue-50 via-blue-25 to-white',
      red: 'from-red-50 via-red-25 to-white',
      green: 'from-green-50 via-green-25 to-white',
      purple: 'from-purple-50 via-purple-25 to-white'
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
            <Link to="/services" className="hover:text-blue-600">Services</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${getServiceBgGradient(service.color)} py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <Button asChild variant="ghost" className="mb-6 -ml-4">
                <Link to="/services">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour aux services
                </Link>
              </Button>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {service.title}
              </h1>
              
              <p className="text-2xl font-medium text-gray-600 mb-6">
                {service.subtitle}
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="px-8">
                  <Link to="/contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Devis gratuit
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={`tel:${mockData.contact.phone}`}>
                    Appeler maintenant
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className={`w-32 h-32 rounded-3xl border-4 flex items-center justify-center ${getServiceColorClasses(service.color)}`}>
                {getServiceIcon(service.icon)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Nos prestations détaillées
              </h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Vos avantages
              </h2>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-gray-700 font-medium">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre processus d'intervention
            </h2>
            <p className="text-lg text-gray-600">
              Une méthode éprouvée pour garantir le succès de votre projet {service.title.toLowerCase()}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Consultation",
                description: "Analyse de vos besoins spécifiques et visite technique gratuite sur site."
              },
              {
                icon: Award,
                title: "Installation", 
                description: "Mise en œuvre professionnelle par nos techniciens certifiés avec matériel de qualité."
              },
              {
                icon: Clock,
                title: "Suivi",
                description: "Formation complète, mise en service et contrat de maintenance personnalisé."
              }
            ].map((step, index) => (
              <Card key={index} className="text-center border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial specific to service */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {mockData.testimonials
            .filter(t => t.content.toLowerCase().includes(service.title.toLowerCase().split(' ')[0]))
            .slice(0, 1)
            .map((testimonial) => (
            <Card key={testimonial.id} className="text-center border-0 shadow-lg">
              <CardContent className="p-12">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <CheckCircle key={i} className="w-6 h-6 text-yellow-400 fill-current mx-1" />
                  ))}
                </div>
                
                <blockquote className="text-xl text-gray-600 italic mb-8 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="border-t pt-6">
                  <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à démarrer votre projet {service.title.toLowerCase()} ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contactez nos experts pour une étude personnalisée et un devis gratuit. 
            Intervention rapide dans tout le Grand Ouest.
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

export default ServiceDetailPage;