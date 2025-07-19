import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Brain, MessageSquare, Zap, Shield, 
  ArrowRight, CheckCircle, ExternalLink,
  Bot, Settings, Users
} from 'lucide-react';
import { mockData } from '../data/mock';

const LimovaPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-white border-purple-300">
              <Brain className="w-3 h-3 mr-1" />
              Intelligence Artificielle Conversationnelle
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {mockData.limova.title}
            </h1>
            
            <p className="text-2xl font-medium text-purple-600 mb-4">
              {mockData.limova.subtitle}
            </p>
            
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {mockData.limova.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8 py-3 bg-purple-600 hover:bg-purple-700">
                <a href={mockData.limova.website} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Découvrir Limova.ai
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-3">
                <Link to="/contact">
                  Demander une démo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {mockData.limova.presentation.title}
            </h2>
            <p className="text-lg text-gray-600">
              Une technologie d'IA conversationnelle de pointe, adaptée aux besoins 
              spécifiques des entreprises françaises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.limova.presentation.features.map((feature, index) => {
              const icons = [MessageSquare, Settings, Zap, Brain];
              const IconComponent = icons[index];
              
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600 group-hover:scale-110 transition-all">
                      <IconComponent className="w-8 h-8 text-purple-600 group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Agents IA Spécialisés
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez nos assistants virtuels, chacun expert dans son domaine 
              pour vous offrir un support personnalisé et efficace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockData.limova.agents.map((agent, index) => {
              const agentIcons = [Users, Settings, Shield];
              const IconComponent = agentIcons[index];
              
              return (
                <Card key={agent.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-8 text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                      <IconComponent className="w-10 h-10 text-purple-600" />
                    </div>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{agent.name}</h3>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <p className="text-purple-600 font-medium">{agent.role}</p>
                    <Badge className="mt-2 bg-green-100 text-green-800 border-green-300">
                      {agent.status}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {agent.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900">Compétences :</h4>
                      {agent.capabilities.slice(0, 3).map((capability, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{capability}</span>
                        </div>
                      ))}
                    </div>

                    <Button asChild className="w-full group-hover:bg-purple-600">
                      <Link to={`/limova/agents/${agent.id}`}>
                        En savoir plus
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Intéressé par l'un de nos agents IA ? Testez-les dès maintenant !
            </p>
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link to="/contact">
                <Bot className="w-5 h-5 mr-2" />
                Demander une démonstration
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pourquoi intégrer l'IA Limova ?
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Amélioration de l'expérience client",
                    description: "Réponses instantanées 24h/24, réduction des temps d'attente et satisfaction client optimisée."
                  },
                  {
                    title: "Optimisation des coûts",
                    description: "Automatisation des tâches répétitives et réduction des coûts de support client."
                  },
                  {
                    title: "Montée en compétences",
                    description: "Vos équipes se concentrent sur les tâches à forte valeur ajoutée."
                  },
                  {
                    title: "Évolutivité garantie",
                    description: "L'IA apprend en continu et s'adapte aux spécificités de votre secteur."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Technologie française
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Limova est une solution 100% française, respectueuse du RGPD, 
                    avec des serveurs localisés en Europe pour garantir la sécurité 
                    de vos données.
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Shield className="w-4 h-4" />
                      <span>RGPD</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Zap className="w-4 h-4" />
                      <span>Temps réel</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à intégrer l'IA dans votre entreprise ?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Découvrez comment Limova peut transformer votre relation client et 
            optimiser vos processus métier. Démonstration gratuite personnalisée.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-3">
              <Link to="/contact">
                <Bot className="w-5 h-5 mr-2" />
                Demander une démo
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-purple-600">
              <a href={mockData.limova.website} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Site officiel Limova
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LimovaPage;