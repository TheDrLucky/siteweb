import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Phone, MapPin, Calendar, Users, Award, CheckCircle, 
  ArrowRight, Target, Heart, Zap, Shield, Home, Monitor, Brain
} from 'lucide-react';
import { mockData } from '../data/mock';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-white">
              <MapPin className="w-4 h-4 mr-2" />
              Vitré, Bretagne • Depuis 2015
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {mockData.company.tagline}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {mockData.company.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Rencontrons-nous
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">
                  Découvrir nos services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Notre mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Notre mission
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Notre mission est de transformer votre habitat et vos espaces de travail en environnements intelligents, 
                  sécurisés et efficaces. Nous croyons que la technologie doit servir l'humain et simplifier le quotidien, 
                  tout en respectant vos besoins spécifiques et votre budget.
                </p>
                <p>{mockData.company.specialties}</p>
                <p>{mockData.company.approach}</p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2015</div>
                  <div className="text-sm text-gray-600">Année de création</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-sm text-gray-600">Années d'expérience</div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Notre expertise
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Solutions technologiques complètes pour tous vos besoins, 
                    de la maison connectée aux infrastructures d'entreprise.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Home, label: "Domotique" },
                      { icon: Shield, label: "Sécurité" },
                      { icon: Monitor, label: "Informatique" },
                      { icon: Brain, label: "IA" }
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <item.icon className="w-6 h-6 text-gray-600" />
                        </div>
                        <div className="text-sm font-medium text-gray-900">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos valeurs
            </h2>
            <p className="text-lg text-gray-600">
              Nos valeurs s'articulent autour de l'excellence technique, du service personnalisé et de la proximité. 
              Nous privilégions une approche artisanale où chaque installation est réalisée avec soin, dans le respect 
              des normes et avec un souci constant de la qualité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Expertise Technique",
                description: "Une équipe de spécialistes certifiés dans tous nos domaines d'intervention.",
                color: "blue"
              },
              {
                icon: Heart,
                title: "Service Personnalisé",
                description: "Chaque projet est unique, nous adaptons nos solutions à vos besoins spécifiques.",
                color: "red"
              },
              {
                icon: Zap,
                title: "Qualité Artisanale",
                description: "Installations soignées et finitions impeccables, dans le respect des normes.",
                color: "yellow"
              },
              {
                icon: Users,
                title: "Proximité Régionale",
                description: "Basés en Bretagne, nous intervenons rapidement dans tout le Grand Ouest.",
                color: "green"
              }
            ].map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                    value.color === 'red' ? 'bg-red-100' : 
                    value.color === 'blue' ? 'bg-blue-100' : 
                    value.color === 'yellow' ? 'bg-yellow-100' : 'bg-green-100'
                  }`}>
                    <value.icon className={`w-8 h-8 ${
                      value.color === 'red' ? 'text-red-600' : 
                      value.color === 'blue' ? 'text-blue-600' : 
                      value.color === 'yellow' ? 'text-yellow-600' : 'text-green-600'
                    }`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Une présence locale, un service complet
            </h2>
            <p className="text-lg text-gray-600">
              Quel que soit votre projet, Godeloup Domotique vous accompagne de A à Z.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Grand Ouest • Intervention rapide
              </h3>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Basée en Ille-et-Vilaine</strong>, nous intervenons rapidement sur tout le Grand Ouest 
                  (Bretagne, Pays de la Loire, Normandie) pour une étude sur site, une installation ou un dépannage.
                </p>
                
                <p>
                  Nous accordons une grande importance au <strong>service après-vente, à la maintenance et à la formation</strong> : 
                  une fois votre installation en place, vous n'êtes jamais livrés à vous-mêmes.
                </p>
                
                <p>
                  Nous vous formons à l'utilisation des équipements et restons disponibles en cas de question 
                  ou d'évolution de vos besoins.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  "Interlocuteur unique pour tous vos projets",
                  "Installations certifiées (Ajax, Control4, etc.)",
                  "Finitions soignées et normes respectées",
                  "Formation et SAV inclus"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Pourquoi choisir Godeloup Domotique ?
                  </h3>
                  
                  <div className="space-y-6">
                    {[
                      {
                        title: "Expertise multi-domaines",
                        description: "Domotique, sécurité, informatique et IA – nous orchestrons tous ces domaines pour que tout communique parfaitement."
                      },
                      {
                        title: "Approche artisanale",
                        description: "Chaque système est installé dans les règles de l'art par nos spécialistes certifiés."
                      },
                      {
                        title: "Proximité garantie",
                        description: "Une équipe proche de vous, disponible pour vos questions et évolutions futures."
                      }
                    ].map((item, index) => (
                      <div key={index} className="text-left">
                        <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button asChild className="w-full">
                      <Link to="/contact">
                        <Phone className="w-4 h-4 mr-2" />
                        Parlons de votre projet
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vous avez une idée ou un besoin précis ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour en discuter. Nous vous proposerons une solution sur-mesure et un devis gratuit. 
            Avec Godeloup Domotique, simplifiez-vous la vie grâce à la technologie !
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

export default AboutPage;