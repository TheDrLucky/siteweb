import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Phone, MapPin, CheckCircle, Star, ArrowRight, 
  Zap, Shield, Smartphone, Leaf, Settings, Award,
  Calendar, Euro, Truck, Users, Clock, Home
} from 'lucide-react';
import { mockData } from '../data/mock';
import { topologieData } from '../data/topologies';

const RobotTondeusePage = () => {
  const robotModels = [
    {
      id: "mammotion-luba",
      brand: "Mammotion",
      model: "LUBA AWD",
      subtitle: "Navigation RTK ultra-précise",
      price: "2 490",
      originalPrice: "2 890",
      image: "/robots/mammotion-luba.jpg",
      features: [
        "Navigation RTK sans câble périmètrique",
        "Transmission intégrale AWD",
        "Tonte multi-zones intelligente",
        "Pentes jusqu'à 75% (38°)",
        "Application smartphone complète",
        "Antivol GPS intégré"
      ],
      specs: {
        surface: "Jusqu'à 5 000 m²",
        pente: "75% (38°)",
        largeur: "40 cm",
        hauteur: "20-70 mm",
        autonomie: "4h30",
        etanche: "IPX6"
      },
      advantages: [
        "Précision centimétrique RTK",
        "Aucun câble à enterrer",
        "Gestion zones complexes",
        "Installation rapide"
      ],
      category: "premium"
    },
    {
      id: "hooki-m1",
      brand: "Hooki",
      model: "M1 Pro",
      subtitle: "Intelligence artificielle avancée",
      price: "1 890",
      originalPrice: "2 190",
      image: "/robots/hooki-m1.jpg",
      features: [
        "IA de reconnaissance d'obstacles",
        "Cartographie LIDAR intelligente",
        "Auto-apprentissage du terrain",
        "Détection pluie automatique",
        "Planification optimisée",
        "Maintenance prédictive"
      ],
      specs: {
        surface: "Jusqu'à 3 000 m²",
        pente: "50% (27°)",
        largeur: "35 cm",
        hauteur: "20-60 mm",
        autonomie: "3h45",
        etanche: "IPX5"
      },
      advantages: [
        "IA auto-apprenante",
        "Installation simplifiée",
        "Maintenance intuitive",
        "Évolutif par mises à jour"
      ],
      category: "intelligent"
    },
    {
      id: "mammotion-yuka",
      brand: "Mammotion",
      model: "YUKA",
      subtitle: "Solution économique fiable",
      price: "1 290",
      image: "/robots/mammotion-yuka.jpg",
      features: [
        "Navigation visuelle avancée",
        "Installation sans câble",
        "Gestion multi-zones",
        "Programmation flexible",
        "Retour base automatique",
        "Protection anti-vol"
      ],
      specs: {
        surface: "Jusqu'à 1 500 m²",
        pente: "45% (24°)",
        largeur: "30 cm",
        hauteur: "20-55 mm",
        autonomie: "2h30",
        etanche: "IPX4"
      },
      advantages: [
        "Excellent rapport qualité/prix",
        "Installation facile",
        "Fiabilité éprouvée",
        "SAV local"
      ],
      category: "essentiel"
    }
  ];

  const services = [
    {
      title: "Visite technique gratuite",
      description: "Analyse de votre terrain et recommandations personnalisées",
      icon: Home,
      included: true
    },
    {
      title: "Installation clé en main",
      description: "Mise en service complète avec paramétrage optimal",
      icon: Settings,
      included: true
    },
    {
      title: "Formation utilisateur",
      description: "Prise en main complète et conseils d'utilisation",
      icon: Users,
      included: true
    },
    {
      title: "Garantie étendue",
      description: "2 ans pièces et main d'œuvre + SAV local",
      icon: Shield,
      included: true
    },
    {
      title: "Maintenance annuelle",
      description: "Révision préventive et hivernage inclus",
      icon: Calendar,
      price: "150€/an"
    },
    {
      title: "Réparation express",
      description: "Intervention sous 48h en cas de panne",
      icon: Zap,
      price: "Sur devis"
    }
  ];

  const zones = topologieData.zones.codesPostaux.slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* SEO Breadcrumb */}
      <div className="bg-gray-50 py-3 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Accueil</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-blue-600">Services</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Robot Tondeuse</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-white border-green-300 text-green-700">
              <Leaf className="w-4 h-4 mr-2" />
              Robot Tondeuse • Installation • Vitré et 30 km
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Robot Tondeuse Nouvelle Génération
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              <strong>Mammotion LUBA • Hooki M1 • Installation professionnelle</strong><br />
              Fini la corvée de tonte ! Nos robots tondeuses intelligents s'occupent de votre gazon 
              pendant que vous profitez de votre temps libre.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="px-8 py-3 bg-green-600 hover:bg-green-700">
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-sm text-gray-600">
              <div className="flex items-center justify-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Sans câble</span>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Installation incluse</span>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Garantie 2 ans</span>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>SAV local</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos modèles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos robots tondeuses sélectionnés
            </h2>
            <p className="text-lg text-gray-600">
              Mammotion et Hooki : les marques les plus innovantes pour tous les budgets et tous les terrains.
            </p>
          </div>

          <div className="space-y-12">
            {robotModels.map((robot, index) => (
              <Card key={robot.id} className="overflow-hidden border-0 shadow-xl">
                <CardContent className="p-0">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Robot Image/Info */}
                    <div className={`p-12 bg-gradient-to-br from-gray-50 to-white ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="text-center">
                        {robot.category === 'premium' && (
                          <Badge className="mb-4 bg-yellow-500 text-white">
                            <Star className="w-3 h-3 mr-1" />
                            Haut de gamme
                          </Badge>
                        )}
                        {robot.category === 'intelligent' && (
                          <Badge className="mb-4 bg-purple-500 text-white">
                            <Zap className="w-3 h-3 mr-1" />
                            IA Avancée
                          </Badge>
                        )}
                        {robot.category === 'essentiel' && (
                          <Badge className="mb-4 bg-blue-500 text-white">
                            <Award className="w-3 h-3 mr-1" />
                            Meilleur rapport qualité/prix
                          </Badge>
                        )}

                        <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <div className="text-4xl">🤖</div>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {robot.brand} {robot.model}
                        </h3>
                        <p className="text-gray-600 mb-6">{robot.subtitle}</p>

                        <div className="flex items-center justify-center space-x-4 mb-6">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-green-600">
                              {robot.price}€
                            </div>
                            {robot.originalPrice && (
                              <div className="text-lg text-gray-500 line-through">
                                {robot.originalPrice}€
                              </div>
                            )}
                          </div>
                        </div>

                        <Button className="bg-green-600 hover:bg-green-700 mb-4">
                          <Phone className="w-4 h-4 mr-2" />
                          Demander un devis
                        </Button>
                      </div>
                    </div>

                    {/* Features & Specs */}
                    <div className={`p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="font-bold text-gray-900 mb-4 text-lg">Fonctionnalités :</h4>
                        <div className="space-y-3">
                          {robot.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Specs */}
                      <div className="mb-8">
                        <h4 className="font-bold text-gray-900 mb-4 text-lg">Caractéristiques techniques :</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {Object.entries(robot.specs).map(([key, value]) => {
                            const labels = {
                              surface: "Surface max",
                              pente: "Pente max", 
                              largeur: "Largeur coupe",
                              hauteur: "Hauteur coupe",
                              autonomie: "Autonomie",
                              etanche: "Étanchéité"
                            };
                            return (
                              <div key={key} className="bg-gray-50 p-3 rounded-lg">
                                <div className="text-sm font-medium text-gray-900">{labels[key]}</div>
                                <div className="text-sm text-gray-600">{value}</div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Advantages */}
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-3">Pourquoi choisir ce modèle ?</h4>
                        <div className="space-y-2">
                          {robot.advantages.map((advantage, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                              <span className="text-sm text-green-800">{advantage}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services inclus */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Installation clé en main incluse
            </h2>
            <p className="text-lg text-gray-600">
              Avec Godeloup Domotique, votre robot tondeuse est installé, paramétré et vous êtes formé à son utilisation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                    service.included ? 'bg-green-100' : 'bg-blue-100'
                  }`}>
                    <service.icon className={`w-8 h-8 ${
                      service.included ? 'text-green-600' : 'text-blue-600'
                    }`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>

                  {service.included ? (
                    <Badge className="bg-green-600 text-white">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Inclus
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="border-blue-300 text-blue-600">
                      <Euro className="w-3 h-3 mr-1" />
                      {service.price}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Installation robot tondeuse Vitré et environs
            </h2>
            <p className="text-lg text-gray-600">
              <MapPin className="w-5 h-5 inline mr-1" />
              Intervention dans un rayon de 30 km autour de Vitré
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {zones.map((zone, index) => (
              <Card key={index} className="text-center border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="font-bold text-green-600 text-lg mb-2">{zone.code}</div>
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

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 mb-4">
              <Truck className="w-4 h-4 inline mr-1" />
              Livraison et installation gratuite • <Clock className="w-4 h-4 inline mr-1" />
              Rendez-vous sous 48h
            </p>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir un robot tondeuse */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Pourquoi passer au robot tondeuse ?
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Gain de temps considérable",
                    description: "Plus jamais de corvée de tonte ! Votre robot travaille pendant que vous profitez de votre temps libre."
                  },
                  {
                    title: "Gazon toujours parfait",
                    description: "Tonte fréquente et mulching naturel pour un gazon dense, vert et en pleine santé."
                  },
                  {
                    title: "Écologique et silencieux",
                    description: "Électrique, autonome et silencieux. Fonctionne même la nuit sans déranger le voisinage."
                  },
                  {
                    title: "Sécurité maximale", 
                    description: "Capteurs anti-collision, détection de soulèvement, code PIN et GPS antivol intégré."
                  },
                  {
                    title: "Installation sans câble",
                    description: "Nos modèles nouvelle génération ne nécessitent aucun câble périmètrique à enterrer."
                  },
                  {
                    title: "Contrôle smartphone",
                    description: "Pilotage à distance, programmation flexible et suivi en temps réel via application."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Card className="border-0 shadow-xl bg-white">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-4xl">🏡</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Calcul de rentabilité
                  </h3>
                  <div className="space-y-4 text-left">
                    <div className="border-b pb-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tonte manuelle (2h/semaine)</span>
                        <span className="font-medium">40h/an</span>
                      </div>
                    </div>
                    <div className="border-b pb-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Temps valorisé (25€/h)</span>
                        <span className="font-medium">1 000€/an</span>
                      </div>
                    </div>
                    <div className="border-b pb-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Économie carburant</span>
                        <span className="font-medium">150€/an</span>
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="flex justify-between text-lg font-bold text-green-600">
                        <span>Bénéfice annuel :</span>
                        <span>1 150€</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    <strong>ROI :</strong> Rentabilisé en moins de 2 ans !
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à vous libérer de la corvée de tonte ?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Nos experts analysent votre terrain gratuitement et vous conseillent le robot tondeuse 
            le mieux adapté. Installation clé en main et formation incluses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-3">
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Demander une visite gratuite
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-green-600">
              <a href={`tel:${mockData.contact.phone}`}>
                <Phone className="w-5 h-5 mr-2" />
                {mockData.contact.phone}
              </a>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">48h</div>
              <div className="text-green-100 text-sm">Délai de visite</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">2 ans</div>
              <div className="text-green-100 text-sm">Garantie totale</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-green-100 text-sm">Satisfaction clients</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RobotTondeusePage;