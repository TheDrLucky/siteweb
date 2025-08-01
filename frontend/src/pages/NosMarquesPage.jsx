import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Shield, Home, Monitor, Award, CheckCircle, Phone, 
  ArrowLeft, Star, Zap, Users, Settings, Leaf
} from 'lucide-react';
import { mockData } from '../data/mock';

const NosMarquesPage = () => {
  const certifications = [
    {
      id: "ajax",
      brand: "Ajax Systems",
      subtitle: "Alarme sans fil nouvelle génération",
      description: "Leader européen de la sécurité sans fil. Nous sommes installateur certifié pour tous les niveaux Ajax : Baseline, Fibra et Superior.",
      icon: Shield,
      color: "red",
      certificationLevel: "Baseline • Fibra • Superior",
      specialites: [
        "Systèmes d'alarme sans fil",
        "Détecteurs ultra-précis",
        "Centrale Hub 2 longue portée",
        "Application Ajax mobile",
        "Télésurveillance professionnelle",
        "Installation certifiée"
      ],
      avantages: [
        "Technologie radio Jeweller™",
        "Autonomie batteries 7 ans",
        "Anti-sabotage avancé",
        "Notifications instantanées",
        "Design élégant et discret"
      ],
      garantie: "5 ans fabricant",
      formation: "Formation continue obligatoire",
      applications: ["Résidentiel", "Entreprise", "Magasin", "Bureau"],
      website: "https://ajax.systems"
    },
    {
      id: "control4",
      brand: "Control4",
      subtitle: "Domotique haut de gamme américaine",
      description: "Référence mondiale de la domotique premium. Intégrateur certifié pour des installations domotiques complètes et évolutives.",
      icon: Home,
      color: "blue",
      certificationLevel: "Intégrateur Certifié",
      specialites: [
        "Domotique résidentielle premium",
        "Contrôle centralisé multiroom",
        "Intégration audio/vidéo",
        "Éclairage intelligent",
        "Automation climatisation",
        "Sécurité intégrée"
      ],
      avantages: [
        "Interface utilisateur intuitive",
        "Compatibilité 13 000+ produits",
        "Évolutivité maximale",
        "Fiabilité professionnelle",
        "Support technique mondial"
      ],
      garantie: "3 ans fabricant",
      formation: "Certification annuelle",
      applications: ["Résidentiel haut de gamme", "Villa", "Maison secondaire"],
      website: "https://control4.com"
    }
  ];

  const fournisseurs = [
    {
      id: "grundig",
      brand: "Grundig Security",
      subtitle: "Vidéosurveillance professionnelle allemande",
      description: "Nous sommes fournisseur officiel Grundig pour la vidéosurveillance. Qualité allemande reconnue depuis 1945 pour la sécurité professionnelle.",
      icon: Monitor,
      color: "gray",
      status: "Fournisseur Officiel",
      specialites: [
        "Caméras IP 4K et 8K",
        "Enregistreurs NVR haute capacité",
        "Analyse vidéo intelligente",
        "Vision nocturne avancée",
        "Systèmes anti-vandalisme",
        "Solutions cloud sécurisées"
      ],
      avantages: [
        "Qualité d'image exceptionnelle",
        "Fiabilité industrielle",
        "Innovation technologique",
        "Cybersécurité renforcée",
        "SAV européen réactif"
      ],
      garantie: "3 ans fabricant",
      applications: ["Entreprise", "Magasin", "Restaurant", "Municipalité", "Camping"],
      gammes: [
        "Série Professional (IP)",
        "Série Enterprise (IA)",
        "Série Mobile (véhicules)",
        "Série Retail (commerce)"
      ]
    },
    {
      id: "mammotion",
      brand: "Mammotion",
      subtitle: "Robots tondeuses RTK révolutionnaires",
      description: "Partenaire exclusif Mammotion pour les robots tondeuses nouvelle génération. Navigation RTK ultra-précise sans câble périmètrique.",
      icon: Leaf,
      color: "green",
      status: "Partenaire Exclusif",
      specialites: [
        "Navigation RTK centimétrique",
        "Robots tondeuses LUBA AWD",
        "Installation sans câble",
        "Gestion multi-zones",
        "Application mobile complète",
        "Maintenance préventive"
      ],
      avantages: [
        "Précision GPS RTK",
        "Aucun câble à enterrer",
        "Terrain complexe jusqu'à 5000m²",
        "Pentes extrêmes 75%",
        "Intelligence artificielle"
      ],
      garantie: "2 ans fabricant + SAV local",
      applications: ["Résidentiel", "Camping", "Municipalité", "Entreprise"],
      gammes: [
        "LUBA AWD (premium)",
        "YUGA (milieu de gamme)",
        "Accessoires et pièces"
      ]
    },
    {
      id: "hooki",
      brand: "Hooki",
      subtitle: "IA robotique pour espaces verts",
      description: "Distribution Hooki pour robots tondeuses intelligents. Innovation française avec intelligence artificielle avancée.",
      icon: Zap,
      color: "purple",
      status: "Distributeur Agréé",
      specialites: [
        "Intelligence artificielle avancée",
        "Auto-apprentissage terrain",
        "Reconnaissance d'obstacles",
        "Cartographie LIDAR",
        "Maintenance prédictive",
        "Évolution continue"
      ],
      avantages: [
        "IA auto-apprenante",
        "Installation simplifiée",
        "Maintenance intuitive",
        "Mises à jour OTA",
        "Support français"
      ],
      garantie: "2 ans fabricant",
      applications: ["Résidentiel", "Bureau", "Petites surfaces"],
      gammes: [
        "M1 Pro (IA avancée)",
        "M1 Standard",
        "Accessoires connectés"
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      red: 'text-red-600 bg-red-50 border-red-200',
      blue: 'text-blue-600 bg-blue-50 border-blue-200',
      gray: 'text-gray-600 bg-gray-50 border-gray-200',
      green: 'text-green-600 bg-green-50 border-green-200',
      purple: 'text-purple-600 bg-purple-50 border-purple-200'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Accueil</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Nos marques et certifications</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-6 -ml-4">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Link>
          </Button>

          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Certifications • Partenariats • Fournisseurs officiels
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos marques et certifications
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              <strong>Partenaires de confiance</strong> sélectionnés pour leur excellence technologique. 
              Nos certifications garantissent des installations conformes et un SAV optimal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Découvrir nos solutions
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">
                  Nos domaines d'expertise
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications officielles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos certifications officielles
            </h2>
            <p className="text-lg text-gray-600">
              Installateur certifié et formé en permanence par les fabricants.
            </p>
          </div>

          <div className="space-y-12">
            {certifications.map((cert, index) => (
              <Card key={cert.id} className="overflow-hidden border-0 shadow-xl">
                <CardContent className="p-0">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Brand Header */}
                    <div className={`p-12 bg-gradient-to-br ${cert.color === 'red' ? 'from-red-50 to-white' : cert.color === 'blue' ? 'from-blue-50 to-white' : 'from-gray-50 to-white'} ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="text-center">
                        <div className={`w-20 h-20 rounded-2xl border-2 flex items-center justify-center mx-auto mb-6 ${getColorClasses(cert.color)}`}>
                          <cert.icon className="w-10 h-10" />
                        </div>

                        <Badge className={`mb-4 ${cert.color === 'red' ? 'bg-red-600' : cert.color === 'blue' ? 'bg-blue-600' : 'bg-gray-600'} text-white`}>
                          <Star className="w-3 h-3 mr-1" />
                          {cert.certificationLevel}
                        </Badge>

                        <h3 className="text-3xl font-bold text-gray-900 mb-3">
                          {cert.brand}
                        </h3>
                        <p className="text-lg text-gray-600 mb-6">{cert.subtitle}</p>
                        <p className="text-gray-700">{cert.description}</p>

                        <div className="mt-8 space-y-3">
                          <div className="flex items-center justify-center space-x-2 text-sm">
                            <Award className="w-4 h-4 text-yellow-600" />
                            <span className="font-medium">{cert.garantie}</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2 text-sm">
                            <Users className="w-4 h-4 text-blue-600" />
                            <span className="text-gray-600">{cert.formation}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className={`p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      {/* Spécialités */}
                      <div className="mb-8">
                        <h4 className="font-bold text-gray-900 mb-4 text-lg">Nos spécialités {cert.brand} :</h4>
                        <div className="space-y-3">
                          {cert.specialites.map((spec, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Avantages */}
                      <div className="mb-8">
                        <h4 className="font-bold text-gray-900 mb-4 text-lg">Avantages technologiques :</h4>
                        <div className="space-y-2">
                          {cert.avantages.map((avantage, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className={`w-2 h-2 rounded-full ${cert.color === 'red' ? 'bg-red-600' : cert.color === 'blue' ? 'bg-blue-600' : 'bg-gray-600'}`}></div>
                              <span className="text-sm text-gray-700">{avantage}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Applications */}
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-4">Applications :</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.applications.map((app, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {app}
                            </Badge>
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

      {/* Fournisseurs et partenaires */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos fournisseurs partenaires
            </h2>
            <p className="text-lg text-gray-600">
              Sélection rigoureuse de marques innovantes pour vous offrir le meilleur de la technologie.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {fournisseurs.map((fournisseur) => (
              <Card key={fournisseur.id} className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl border-2 flex items-center justify-center mx-auto mb-4 ${getColorClasses(fournisseur.color)}`}>
                      <fournisseur.icon className="w-8 h-8" />
                    </div>

                    <Badge className={`mb-3 ${
                      fournisseur.color === 'gray' ? 'bg-gray-600' : 
                      fournisseur.color === 'green' ? 'bg-green-600' : 
                      fournisseur.color === 'purple' ? 'bg-purple-600' : 'bg-blue-600'
                    } text-white`}>
                      {fournisseur.status}
                    </Badge>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {fournisseur.brand}
                    </h3>
                    <p className="text-gray-600 mb-4">{fournisseur.subtitle}</p>
                    <p className="text-sm text-gray-700">{fournisseur.description}</p>
                  </div>

                  {/* Spécialités */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Spécialités :</h4>
                    <div className="space-y-2">
                      {fournisseur.specialites.map((spec, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Avantages */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Avantages clés :</h4>
                    <div className="space-y-1">
                      {fournisseur.avantages.map((avantage, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <div className={`w-2 h-2 rounded-full ${
                            fournisseur.color === 'gray' ? 'bg-gray-600' : 
                            fournisseur.color === 'green' ? 'bg-green-600' : 
                            fournisseur.color === 'purple' ? 'bg-purple-600' : 'bg-blue-600'
                          }`}></div>
                          <span className="text-gray-700">{avantage}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Gammes */}
                    {fournisseur.gammes && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Gammes disponibles :</h4>
                        <div className="flex flex-wrap gap-2">
                          {fournisseur.gammes.map((gamme, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {gamme}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Applications */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Applications :</h4>
                      <div className="flex flex-wrap gap-2">
                        {fournisseur.applications.map((app, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Garantie */}
                    <div className="pt-4 border-t">
                      <div className="flex items-center space-x-2 text-sm">
                        <Shield className="w-4 h-4 text-blue-600" />
                        <span className="font-medium text-gray-900">{fournisseur.garantie}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi ces marques */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi ces marques ?
            </h2>
            <p className="text-lg text-gray-600">
              Sélection rigoureuse basée sur l'innovation, la fiabilité et le service après-vente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation technologique",
                description: "Leaders dans leur domaine avec R&D constante",
                icon: Zap
              },
              {
                title: "Fiabilité éprouvée", 
                description: "Retours clients positifs et durabilité testée",
                icon: Shield
              },
              {
                title: "Formation continue",
                description: "Certification et mise à jour permanente",
                icon: Users
              },
              {
                title: "SAV réactif",
                description: "Support technique et pièces détachées garantis",
                icon: Settings
              }
            ].map((critere, index) => (
              <Card key={index} className="text-center border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <critere.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{critere.title}</h3>
                  <p className="text-sm text-gray-600">{critere.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Une question sur nos marques ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Nos experts vous conseillent gratuitement pour choisir la marque et le produit 
            les mieux adaptés à votre projet et votre budget.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-3">
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Conseil gratuit
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

export default NosMarquesPage;