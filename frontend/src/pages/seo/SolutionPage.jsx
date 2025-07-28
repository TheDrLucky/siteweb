import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { 
  ArrowLeft, CheckCircle, Phone, Star,
  Award, Shield, Zap, Settings, ExternalLink,
  Home, Monitor, Brain, Lightbulb, Target
} from 'lucide-react';
import { seoPages } from '../../data/mockSeo';
import { mockData } from '../../data/mock';
import BoutiqueBlock from '../../components/BoutiqueBlock';

const SolutionPage = ({ service, solution }) => {
  const serviceData = seoPages[service];
  const solutionData = serviceData?.solutions?.find(s => s.slug === solution);
  
  if (!solutionData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Solution non trouvée</h1>
          <Button asChild>
            <Link to="/services">Retour aux services</Link>
          </Button>
        </div>
      </div>
    );
  }

  const getServiceInfo = (serviceId) => {
    const serviceMap = {
      'domotique': { title: 'Domotique', color: 'blue', icon: Home },
      'securite': { title: 'Sécurité', color: 'red', icon: Shield },
      'informatique': { title: 'Informatique', color: 'green', icon: Monitor },
      'ia': { title: 'Intelligence Artificielle', color: 'purple', icon: Brain }
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

  // Special content for Grundig Security
  const isGrundig = solution === 'grundig-securite';
  const isRobotTondeuse = solution === 'robot-tondeuse-connecte';

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
            <Link to={`/${service}/bureau-etudes-${service}`} className="hover:text-blue-600">
              {serviceInfo.title}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{solutionData.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${getGradient(serviceInfo.color)} py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <Button asChild variant="ghost" className="mb-6 -ml-4">
                <Link to={`/${service}/bureau-etudes-${service}`}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour {serviceInfo.title}
                </Link>
              </Button>

              <div className="flex items-center space-x-2 mb-4">
                <Badge variant="outline">{serviceInfo.title}</Badge>
                {isGrundig && <Badge className="bg-red-600">Revendeur Officiel</Badge>}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {solutionData.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {solutionData.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="px-8">
                  <Link to="/contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Devis gratuit
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={`tel:${mockData.contact.phone}`}>
                    Appeler un expert
                  </a>
                </Button>
              </div>

              {/* Keywords for SEO */}
              <div className="flex flex-wrap gap-2">
                {solutionData.keywords?.split(', ').slice(0, 5).map((keyword, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {keyword}
                  </Badge>
                ))}
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

      {/* Special Section for Grundig */}
      {isGrundig && solutionData.company && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  À propos de {solutionData.company.name}
                </h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-red-600 mb-1">{solutionData.company.founded}</div>
                      <div className="text-sm text-gray-600">Année de création</div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-red-600 mb-1">75+</div>
                      <div className="text-sm text-gray-600">Années d'expérience</div>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {solutionData.company.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Spécialité :</h4>
                    <p className="text-gray-600">{solutionData.company.speciality}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Certifications :</h4>
                    <div className="flex flex-wrap gap-2">
                      {solutionData.company.certifications.map((cert, index) => (
                        <Badge key={index} variant="outline" className="border-red-300 text-red-700">
                          <Award className="w-3 h-3 mr-1" />
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-red-50 to-white">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Revendeur Officiel Bretagne
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Godeloup Domotique est revendeur officiel Grundig Sécurité 
                      pour la Bretagne et le Grand Ouest. Formation technique, 
                      support et garantie constructeur inclus.
                    </p>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Formation certifiée</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Support technique</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Special Section for Security Financing */}
      {service === 'securite' && seoPages.securite.financing && (
        <section className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {seoPages.securite.financing.title}
              </h2>
              <p className="text-lg text-gray-600">
                {seoPages.securite.financing.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {seoPages.securite.financing.partners.map((partner, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                        <ExternalLink className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{partner.name}</h3>
                        <p className="text-gray-600">{partner.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Avantages :</h4>
                      {partner.advantages.map((advantage, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-700">{advantage}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button asChild className="w-full mt-6">
                      <Link to="/contact">Demander un financement</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Card className="border-0 shadow-md bg-white inline-block">
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    <strong>Financement jusqu'à 100%</strong> de votre projet sécurité
                  </p>
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Réponse rapide</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Taux préférentiels</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}
      {isRobotTondeuse && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Robots Tondeuses Nouvelle Génération
              </h2>
              <p className="text-lg text-gray-600">
                Découvrez les robots tondeuses les plus avancés avec navigation GPS, 
                tonte intelligente et contrôle smartphone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {/* Mammotion */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                      <Settings className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Mammotion LUBA</h3>
                      <p className="text-gray-600">Navigation RTK ultra-précise</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {[
                      "Navigation RTK sans câble périmètrique",
                      "Précision centimétrique GPS",
                      "Tonte en lignes droites professionnelle",
                      "Application smartphone avancée",
                      "Pentes jusqu'à 75% (37°)"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full">
                    <Link to="/contact">En savoir plus sur Mammotion</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Hooki */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <Zap className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Hooki M1</h3>
                      <p className="text-gray-600">Intelligence artificielle intégrée</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {[
                      "IA avancée pour optimisation automatique",
                      "Capteurs multi-directionnels",
                      "Adaptation aux conditions météo",
                      "Installation sans infrastructure",
                      "Maintenance prédictive"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-1" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">En savoir plus sur Hooki</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isRobotTondeuse ? 'Services inclus' : 'Nos produits et solutions'}
            </h2>
            <p className="text-lg text-gray-600">
              {isRobotTondeuse 
                ? 'Installation complète, formation et maintenance de vos robots tondeuses.'
                : 'Une gamme complète de produits professionnels sélectionnés pour leur qualité et performance.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionData.products?.map((product, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${getColorClasses(serviceInfo.color)}`}>
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{product}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 space-y-6">
              <p className="lead text-xl text-gray-600">
                {solutionData.content}
              </p>

              <p>
                Chez Godeloup Domotique, nous maîtrisons parfaitement les solutions {solutionData.title.toLowerCase()} 
                pour vous offrir un service d'excellence. Notre expertise technique et notre connaissance du marché 
                nous permettent de vous conseiller les meilleures solutions adaptées à vos besoins spécifiques.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Pourquoi choisir nos solutions ?
              </h3>

              <ul className="list-disc pl-6 space-y-2">
                <li>Installation professionnelle par techniciens certifiés</li>
                <li>Formation complète à l'utilisation</li>
                <li>Maintenance préventive et support technique</li>
                <li>Garantie fabricant + garantie installation</li>
                <li>Intervention rapide en cas de besoin</li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h4 className="font-bold text-gray-900 mb-3">Conseil d'expert :</h4>
                <p className="text-gray-700">
                  Chaque installation est unique. Nous étudions votre environnement, 
                  vos contraintes techniques et votre budget pour vous proposer la solution 
                  la plus adaptée. N'hésitez pas à nous contacter pour un conseil personnalisé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl text-gray-600 italic mb-8 leading-relaxed">
                "Installation {solutionData.title.toLowerCase()} parfaitement réalisée par l'équipe Godeloup. 
                Professionnalisme, écoute et suivi après-vente impeccables. Je recommande vivement !"
              </blockquote>
              
              <div>
                <p className="font-bold text-gray-900 text-lg">Client satisfait</p>
                <p className="text-gray-500">Particulier - Rennes</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 text-white`} style={{backgroundColor: serviceInfo.color === 'blue' ? '#2563eb' : serviceInfo.color === 'red' ? '#dc2626' : serviceInfo.color === 'green' ? '#16a34a' : '#9333ea'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Intéressé par nos solutions {solutionData.title.toLowerCase()} ?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Demandez votre devis gratuit et découvrez comment notre expertise peut 
            transformer votre projet. Consultation technique incluse.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-3">
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Devis gratuit
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-gray-900">
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

export default SolutionPage;