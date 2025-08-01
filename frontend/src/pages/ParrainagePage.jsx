import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Gift, Users, Star, CheckCircle, Phone, ArrowRight,
  Euro, Heart, Award, MapPin, Handshake
} from 'lucide-react';
import { mockData } from '../data/mock';

const ParrainagePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-white border-green-300 text-green-700">
              <Gift className="w-4 h-4 mr-2" />
              Programme de parrainage Godeloup Domotique
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Parrainez et gagnez des bons d'achat !
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              <strong>Recommandez-nous à vos proches</strong> et recevez une carte-cadeau électronique pour chaque nouveau client. 
              Vos amis bénéficient aussi d'un avantage spécial !
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8 py-3 bg-green-600 hover:bg-green-700">
                <Link to="/contact">
                  <Gift className="w-5 h-5 mr-2" />
                  Parrainer maintenant
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${mockData.contact.phone}`}>
                  Poser une question
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comment fonctionne le parrainage ?
            </h2>
            <p className="text-lg text-gray-600">
              Un processus simple en 3 étapes pour vous et votre filleul.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Vous recommandez",
                description: "Parlez de nos services à un proche qui a un projet domotique, sécurité, informatique ou IA.",
                icon: Users,
                color: "bg-blue-500"
              },
              {
                step: "02", 
                title: "Votre filleul contacte",
                description: "Il nous contacte en mentionnant votre nom et signe un devis de minimum 500€ TTC.",
                icon: Handshake,
                color: "bg-green-500"
              },
              {
                step: "03",
                title: "Vous recevez votre bon",
                description: "Après installation, vous recevez votre carte-cadeau électronique et lui une remise spéciale !",
                icon: Gift,
                color: "bg-purple-500"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${item.color} text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl`}>
                    {item.step}
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Récompenses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vos récompenses selon le projet
            </h2>
            <p className="text-lg text-gray-600">
              Plus le projet de votre filleul est important, plus votre récompense est généreuse !
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Projet Standard",
                subtitle: "500€ à 1 999€ TTC",
                reward: "50€",
                filleulBonus: "5% de remise",
                description: "Installation domotique basique, petite sécurité, réseau simple",
                color: "border-blue-300 bg-blue-50",
                textColor: "text-blue-600"
              },
              {
                title: "Projet Premium",
                subtitle: "2 000€ à 4 999€ TTC", 
                reward: "100€",
                filleulBonus: "7% de remise",
                description: "Domotique complète, sécurité avancée, infrastructure IT",
                color: "border-green-300 bg-green-50",
                textColor: "text-green-600",
                popular: true
              },
              {
                title: "Projet Excellence",
                subtitle: "5 000€ et plus TTC",
                reward: "200€",
                filleulBonus: "10% de remise", 
                description: "Projet global, multi-technologies, entreprise ou grande installation",
                color: "border-purple-300 bg-purple-50",
                textColor: "text-purple-600"
              }
            ].map((offer, index) => (
              <Card key={index} className={`relative border-2 ${offer.color} hover:shadow-xl transition-all duration-300`}>
                {offer.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-600 text-white px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Le plus choisi
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{offer.title}</h3>
                  <p className="text-gray-600 mb-6">{offer.subtitle}</p>
                  
                  <div className="mb-6">
                    <div className={`text-4xl font-bold ${offer.textColor} mb-2`}>
                      <Euro className="w-8 h-8 inline mr-1" />
                      {offer.reward}
                    </div>
                    <p className="text-sm text-gray-500">Carte-cadeau pour vous</p>
                  </div>

                  <div className="mb-6 p-4 bg-white rounded-lg">
                    <div className={`text-2xl font-bold ${offer.textColor} mb-1`}>
                      {offer.filleulBonus}
                    </div>
                    <p className="text-sm text-gray-600">Remise pour votre filleul</p>
                  </div>

                  <p className="text-sm text-gray-600 mb-6">{offer.description}</p>

                  <div className="space-y-2">
                    {[
                      "Carte-cadeau valable 2 ans",
                      "Utilisable sur tous nos services",
                      "Cumulable avec autres offres"
                    ].map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages clients parrainage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ils ont parrainé et recommandent
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez l'expérience de nos clients parrains dans le Grand Ouest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Michel P.",
                location: "Vitré",
                project: "A parrainé son voisin pour domotique",
                reward: "100€",
                content: "J'ai recommandé Godeloup à mon voisin qui voulait automatiser sa maison. Installation parfaite, et j'ai reçu ma carte-cadeau de 100€ que j'ai utilisée pour ajouter des détecteurs. Win-win !",
                rating: 5
              },
              {
                name: "Sarah L.",
                location: "Châteaubourg", 
                project: "A parrainé ses parents pour sécurité",
                reward: "50€",
                content: "Mes parents cherchaient un système de sécurité. Godeloup a fait une installation Ajax parfaite chez eux, ils ont eu 5% de remise et moi mon bon d'achat. Je recommande !",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="border-t pt-4 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">
                        <MapPin className="w-3 h-3 inline mr-1" />
                        {testimonial.location}
                      </p>
                      <p className="text-xs text-gray-500">{testimonial.project}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{testimonial.reward}</div>
                      <div className="text-xs text-gray-500">reçus</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Parrainage valable dans tout le Grand Ouest
          </h2>
          <p className="text-gray-600 mb-8">
            Votre filleul doit être dans notre zone d'intervention (Vitré + 30 km)
          </p>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {["35500", "35370", "35220", "35340", "35450", "35680"].map((code, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-sm">
                <div className="font-bold text-blue-600">{code}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à parrainer un proche ?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Contactez-nous pour démarrer le parrainage. Nous vous accompagnons dans la démarche 
            et nous occupons de tout avec votre filleul.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-3">
              <Link to="/contact">
                <Gift className="w-5 h-5 mr-2" />
                Démarrer un parrainage
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-green-600">
              <a href={`tel:${mockData.contact.phone}`}>
                <Phone className="w-5 h-5 mr-2" />
                Appeler maintenant
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParrainagePage;