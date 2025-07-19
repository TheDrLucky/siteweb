import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { 
  Home, Shield, Monitor, Brain,
  ArrowLeft, CheckCircle, Phone, Users, 
  Lightbulb, Target, Award, ArrowRight
} from 'lucide-react';
import { seoPages } from '../../data/mockSeo';
import { mockData } from '../../data/mock';

const BureauEtudesPage = ({ service }) => {
  const bureauData = seoPages[service]?.bureauEtudes;
  const solutions = seoPages[service]?.solutions || [];
  
  if (!bureauData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Bureau d'études non trouvé</h1>
          <Button asChild>
            <Link to="/services">Retour aux services</Link>
          </Button>
        </div>
      </div>
    );
  }

  const getServiceInfo = (serviceId) => {
    const serviceMap = {
      'domotique': {
        title: 'Domotique',
        icon: Home,
        color: 'blue',
        description: 'Conception de maisons intelligentes'
      },
      'securite': {
        title: 'Sécurité', 
        icon: Shield,
        color: 'red',
        description: 'Audit et protection personnalisée'
      },
      'informatique': {
        title: 'Informatique',
        icon: Monitor, 
        color: 'green',
        description: 'Infrastructure IT sur-mesure'
      },
      'ia': {
        title: 'Intelligence Artificielle',
        icon: Brain,
        color: 'purple', 
        description: 'Solutions IA métier'
      }
    };
    return serviceMap[serviceId] || serviceMap['domotique'];
  };

  const serviceInfo = getServiceInfo(service);
  const IconComponent = serviceInfo.icon;

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'text-blue-600 bg-blue-50 border-blue-200',
      red: 'text-red-600 bg-red-50 border-red-200', 
      green: 'text-green-600 bg-green-50 border-green-200',
      purple: 'text-purple-600 bg-purple-50 border-purple-200'
    };
    return colorMap[color] || colorMap.blue;
  };

  const getGradient = (color) => {
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
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Accueil</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-blue-600">Services</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{serviceInfo.title}</span>
            <span>/</span>
            <span className="text-gray-900 font-medium">Bureau d'études</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${getGradient(serviceInfo.color)} py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <Button asChild variant="ghost" className="mb-6 -ml-4">
                <Link to="/services">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour aux services
                </Link>
              </Button>

              <Badge variant="outline" className="mb-4">
                Bureau d'études spécialisé
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {bureauData.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {bureauData.description}
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                {serviceInfo.description} avec une approche technique rigoureuse 
                et une expertise reconnue dans le Grand Ouest depuis 2015.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="px-8">
                  <Link to="/contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Consultation gratuite
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
              <div className={`w-32 h-32 rounded-3xl border-4 flex items-center justify-center ${getColorClasses(serviceInfo.color)}`}>
                <IconComponent className="w-16 h-16" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre approche bureau d'études
            </h2>
            <p className="text-lg text-gray-600">
              Une méthodologie éprouvée pour concevoir des solutions {serviceInfo.title.toLowerCase()} 
              parfaitement adaptées à vos besoins et contraintes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Target,
                title: "Analyse des besoins",
                description: `Étude approfondie de vos besoins ${serviceInfo.title.toLowerCase()} avec visite technique sur site et analyse de l'existant.`
              },
              {
                icon: Lightbulb,
                title: "Conception sur-mesure", 
                description: `Dimensionnement précis et choix des technologies les mieux adaptées à votre projet ${serviceInfo.title.toLowerCase()}.`
              },
              {
                icon: Users,
                title: "Accompagnement complet",
                description: "Suivi de A à Z avec formation, mise en service et maintenance préventive incluses."
              }
            ].map((step, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${getColorClasses(serviceInfo.color)}`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos solutions {serviceInfo.title.toLowerCase()}
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez notre gamme complète de solutions techniques spécialisées.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(serviceInfo.color)} group-hover:scale-110 transition-transform`}>
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {solution.description}
                  </p>

                  <Button asChild variant="ghost" className="group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    <Link to={`/${service}/${solution.slug}`}>
                      En savoir plus
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Bureau */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pourquoi choisir notre bureau d'études ?
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Expertise technique reconnue",
                    description: `Plus de 10 ans d'expérience en ${serviceInfo.title.toLowerCase()} avec des centaines de projets réalisés.`
                  },
                  {
                    title: "Approche personnalisée", 
                    description: "Chaque étude est unique et prend en compte vos contraintes spécifiques et votre budget."
                  },
                  {
                    title: "Technologies de pointe",
                    description: "Veille technologique permanente pour vous proposer les solutions les plus innovantes."
                  },
                  {
                    title: "Garantie de performance",
                    description: "Engagement sur les résultats avec suivi post-installation et optimisations continues."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${getColorClasses(serviceInfo.color)}`}>
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${getColorClasses(serviceInfo.color)}`}>
                    <Award className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Étude gratuite
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Bénéficiez d'une première consultation gratuite avec 
                    visite technique et pré-dimensionnement de votre projet.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {[
                      "Visite technique gratuite",
                      "Étude de faisabilité", 
                      "Pré-dimensionnement",
                      "Devis détaillé"
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

      {/* CTA Section */}
      <section className={`py-20 bg-${serviceInfo.color}-600 text-white`} style={{backgroundColor: serviceInfo.color === 'blue' ? '#2563eb' : serviceInfo.color === 'red' ? '#dc2626' : serviceInfo.color === 'green' ? '#16a34a' : '#9333ea'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à démarrer votre projet {serviceInfo.title.toLowerCase()} ?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Contactez notre bureau d'études pour une consultation gratuite. 
            Expertise technique et accompagnement personnalisé garantis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-3">
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Consultation gratuite
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

export default BureauEtudesPage;