import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Home, Shield, Monitor, Brain, 
  ArrowRight, CheckCircle, Phone, MapPin,
  Briefcase, Building2, ShoppingBag, UtensilsCrossed, 
  Heart, Tent, Building, Users, Award
} from 'lucide-react';
import { mockData } from '../data/mock';
import { topologieData } from '../data/topologies';

const ServicesPage = () => {
  const services = [
    {
      id: "domotique",
      title: "Domotique",
      subtitle: "Maison et bâtiment connectés",
      description: "Solutions d'automatisation et de contrôle intelligent pour tous types de bâtiments. De la maison individuelle aux grands complexes.",
      icon: "Home",
      color: "blue",
      technologies: [
        "Éclairage intelligent et automatisation",
        "Gestion chauffage et climatisation",
        "Volets roulants et stores automatiques", 
        "Arrosage automatique et jardins connectés",
        "Robots tondeuses nouvelle génération (Mammotion, Hooki)",
        "Scénarios personnalisés selon usage",
        "Contrôle d'accès et interphonie",
        "Audio/vidéo multiroom",
        "Gestion énergétique avancée"
      ],
      applications: [
        "Résidentiel : Maisons connectées + robots tondeuses",
        "Bureau : Automatisation espaces de travail",
        "Entreprise : Gestion technique bâtiment",
        "Magasin : Éclairage et ambiance",
        "Restaurant : Ambiance et confort client",
        "Résidence Senior : Confort adapté",
        "Camping : Gestion automatisée + entretien espaces verts",
        "Municipalité : Bâtiments publics + parcs connectés"
      ]
    },
    {
      id: "securite", 
      title: "Sécurité",
      subtitle: "Protection Ajax Systems & Grundig Security",
      description: "Partenaire officiel Ajax Systems et Grundig Security. Solutions de sécurité certifiées de la protection domestique aux installations industrielles haute sécurité.",
      icon: "Shield",
      color: "red",
      technologies: [
        "🛡️ Alarmes Ajax Systems (Baseline, Fibra, Superior)",
        "🎥 Vidéosurveillance Grundig Security haute définition",
        "🔐 Contrôle d'accès professionnel (badges, biométrie)",
        "📱 Applications mobiles Ajax et supervision à distance",
        "🚨 Télésurveillance et intervention rapide",
        "🔥 Détection incendie, gaz, inondation connectée",
        "🚪 Interphones vidéo et portiers automatiques",
        "⚡ Systèmes anti-sabotage et anti-brouillage",
        "📞 Centres de télésurveillance certifiés APSAD"
      ],
      applications: [
        "Résidentiel : Ajax Hub + caméras Grundig résidentielles",
        "Bureau : Contrôle d'accès + Ajax Fibra professionnelle", 
        "Entreprise : Ajax Superior + Grundig IP industrielle",
        "Magasin : Anti-vol + Grundig analytics comportementales",
        "Restaurant : Ajax discret + Grundig cuisines HACCP",
        "Résidence Senior : Ajax médical + Grundig bienveillance",
        "Camping : Ajax périmétrique + Grundig surveillance piscines", 
        "Municipalité : Ajax bâtiments publics + Grundig espaces urbains"
      ]
    },
    {
      id: "informatique",
      title: "Informatique", 
      subtitle: "Infrastructure IT professionnelle",
      description: "Solutions informatiques complètes pour entreprises et collectivités. Réseaux, serveurs, sécurité des données.",
      icon: "Monitor",
      color: "green",
      technologies: [
        "Réseaux informatiques professionnels",
        "Wi-Fi entreprise haute performance",
        "Serveurs NAS et stockage sécurisé",
        "Sécurité informatique et firewall",
        "Solutions cloud et télétravail",
        "Supervision et monitoring IT",
        "Sauvegarde automatisée des données",
        "Support et maintenance préventive"
      ],
      applications: [
        "Bureau : Infrastructure complète",
        "Entreprise : IT industrielle",
        "Magasin : Systèmes de caisse connectés",
        "Restaurant : Wi-Fi client et gestion",
        "Résidence Senior : IT médicalisée",
        "Camping : Wi-Fi et gestion clients",
        "Municipalité : IT publique",
        "Communauté : Solutions mutualisées"
      ]
    },
    {
      id: "ia",
      title: "Intelligence Artificielle",
      subtitle: "Godeloup Domotique IA - Solutions conversationnelles",
      description: "Notre gamme complète de solutions d'intelligence artificielle conversationnelle. Chatbots, assistants virtuels et automatisation intelligente développés en interne.",
      icon: "Brain", 
      color: "purple",
      technologies: [
        "Godeloup Domotique IA - Chatbots intelligents",
        "Assistants virtuels métier personnalisés",
        "IA conversationnelle en marque blanche",
        "Automatisation des processus intelligents",
        "Analyse prédictive et données",
        "Intégration CRM et outils métier",
        "Formation continue de l'IA",
        "Support client automatisé 24h/24"
      ],
      applications: [
        "Bureau : Assistant métier intelligent",
        "Entreprise : Automatisation processus",
        "Magasin : Accueil client automatisé", 
        "Restaurant : Réservation et commande IA",
        "Résidence Senior : Assistance personnalisée",
        "Camping : Information et réservation",
        "Municipalité : Services citoyens IA",
        "Communauté : Assistance intercommunale"
      ]
    }
  ];

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
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-white">
              <MapPin className="w-4 h-4 mr-2" />
              Vitré et 30 km autour
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos 4 domaines d'expertise
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              <strong>Technologies complètes</strong> que nous maîtrisons et adaptons à tous types de sites. 
              De la maison individuelle aux grands projets d'entreprise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/topologies">
                  Voir par typologie de site
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Devis gratuit
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={service.id} className="overflow-hidden border-0 shadow-xl">
                <CardContent className="p-0">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Service Header */}
                    <div className={`p-12 bg-gradient-to-br ${getServiceBgGradient(service.color)} ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="flex items-start space-x-6">
                        <div className={`flex-shrink-0 w-20 h-20 rounded-2xl border-2 flex items-center justify-center ${getServiceColorClasses(service.color)}`}>
                          {getServiceIcon(service.icon)}
                        </div>
                        
                        <div className="flex-1">
                          <h2 className="text-3xl font-bold text-gray-900 mb-3">
                            {service.title}
                          </h2>
                          <p className="text-lg font-medium text-gray-600 mb-4">
                            {service.subtitle}
                          </p>
                          <p className="text-gray-600 leading-relaxed mb-6">
                            {service.description}
                          </p>
                          
                          <Button asChild>
                            <Link to={`/services/${service.id}`}>
                              Détails {service.title}
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Technologies & Applications */}
                    <div className={`p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      {/* Technologies */}
                      <div className="mb-8">
                        <h3 className="font-bold text-gray-900 mb-4 text-lg">Technologies maîtrisées :</h3>
                        <div className="space-y-3">
                          {service.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Applications */}
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-4">Applications par secteur :</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.applications.map((app, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                              <span className="text-sm text-gray-600">{app}</span>
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

      {/* Certifications Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos certifications et partenariats
            </h2>
            <p className="text-xl text-blue-100">
              Des qualifications officielles qui garantissent la qualité de nos prestations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">Ajax Systems</h3>
                <p className="text-sm text-gray-600 mb-4">Installateur certifié officiel</p>
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2">Baseline</Badge>
                  <Badge variant="outline" className="mr-2">Fibra</Badge>
                  <Badge variant="outline">Superior</Badge>
                </div>
                <p className="text-xs text-gray-500 mt-4">Formation et certification continue</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">Control4</h3>
                <p className="text-sm text-gray-600 mb-4">Intégrateur certifié domotique</p>
                <Badge variant="outline">Domotique Premium</Badge>
                <p className="text-xs text-gray-500 mt-4">Solutions haut de gamme</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-blue-100 mb-4">
              Ces certifications officielles vous garantissent une installation conforme et un service professionnel.
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link to="/parrainage">
                Découvrir notre programme de parrainage
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cross-links to Topologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comment appliquons-nous ces technologies ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Découvrez comment nous adaptons nos 4 domaines d'expertise à votre secteur d'activité.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Object.values(topologieData.topologies).slice(0, 8).map((topology) => {
              const getTopologyIcon = (iconName) => {
                const icons = { 
                  Home, Briefcase, Building2, ShoppingBag, UtensilsCrossed, 
                  Heart, Tent, Building, Users 
                };
                const IconComponent = icons[iconName];
                return IconComponent ? <IconComponent className="w-6 h-6" /> : <Home className="w-6 h-6" />;
              };

              return (
                <Card key={topology.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      {getTopologyIcon(topology.icon)}
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                      {topology.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-3">{topology.subtitle}</p>
                    <Button variant="ghost" size="sm" asChild className="text-xs">
                      <Link to={`/topologies/${topology.id}`}>
                        Voir solutions
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
                Voir toutes les typologies
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Robot Tondeuse Dedicated Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden border-0 shadow-xl">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-12 bg-gradient-to-br from-green-600 to-green-700 text-white">
                  <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                    🤖 Solution robotique autonome
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Robot Tondeuse Connecté
                  </h2>
                  <p className="text-lg text-green-100 mb-8 leading-relaxed">
                    <strong>Spécialité Godeloup Domotique :</strong> robots tondeuses de dernière génération 
                    avec navigation RTK et intelligence artificielle. Fini la corvée de tonte !
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-200" />
                      <span className="text-green-100">Navigation RTK haute précision</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-200" />
                      <span className="text-green-100">Tonte autonome 24h/24 et 7j/7</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-200" />
                      <span className="text-green-100">Mulching naturel pour pelouse plus dense</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-200" />
                      <span className="text-green-100">Contrôle à distance via smartphone</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="bg-white text-green-600 hover:bg-green-50">
                      <Link to="/robot-tondeuse">
                        <span className="mr-2">🤖</span>
                        Découvrir nos robots
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                      <Link to="/contact">
                        Devis gratuit
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="p-12 bg-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">
                    Modèles disponibles
                  </h3>
                  
                  <div className="space-y-6">
                    <Card className="border-2 border-green-100 hover:border-green-200 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">🤖</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-gray-900 mb-2">Mammotion LUBA</h4>
                            <p className="text-gray-600 mb-3">Navigation RTK professionnelle jusqu'à 5000m²</p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="secondary" className="text-xs">Sans câble</Badge>
                              <Badge variant="secondary" className="text-xs">Précision cm</Badge>
                              <Badge variant="secondary" className="text-xs">Grandes surfaces</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-green-100 hover:border-green-200 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">🤖</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-gray-900 mb-2">Hooki M1</h4>
                            <p className="text-gray-600 mb-3">Intelligence artificielle embarquée jusqu'à 3000m²</p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="secondary" className="text-xs">IA adaptive</Badge>
                              <Badge variant="secondary" className="text-xs">Installation simple</Badge>
                              <Badge variant="secondary" className="text-xs">Résidentiel</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-8 p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800 text-center">
                      <strong>Installation et configuration incluses</strong><br />
                      Formation à l'utilisation • SAV local garanti
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Une question sur nos technologies ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Nos experts vous conseillent gratuitement pour choisir les technologies 
            les mieux adaptées à votre secteur et vos besoins.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-3">
              <Link to="/devis-gratuit">
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