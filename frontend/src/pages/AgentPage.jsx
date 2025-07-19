import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  ArrowLeft, CheckCircle, Bot, MessageSquare,
  Users, Settings, Shield, Phone, ExternalLink
} from 'lucide-react';
import { mockData } from '../data/mock';

const AgentPage = () => {
  const { agentId } = useParams();
  const agent = mockData.limova.agents.find(a => a.id === agentId);

  if (!agent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Agent non trouvé</h1>
          <Button asChild>
            <Link to="/limova">Retour à Limova IA</Link>
          </Button>
        </div>
      </div>
    );
  }

  const getAgentIcon = (agentId) => {
    const icons = {
      'lena': Users,
      'tech-expert': Settings,
      'security-advisor': Shield
    };
    return icons[agentId] || Bot;
  };

  const IconComponent = getAgentIcon(agentId);

  const getAgentColor = (agentId) => {
    const colors = {
      'lena': 'blue',
      'tech-expert': 'green',
      'security-advisor': 'red'
    };
    return colors[agentId] || 'purple';
  };

  const color = getAgentColor(agentId);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Accueil</Link>
            <span>/</span>
            <Link to="/limova" className="hover:text-blue-600">Limova IA</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{agent.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <Button asChild variant="ghost" className="mb-6 -ml-4">
                <Link to="/limova">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour à Limova IA
                </Link>
              </Button>
              
              <div className="flex items-center space-x-4 mb-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  {agent.name}
                </h1>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <Badge className="bg-green-100 text-green-800 border-green-300">
                    {agent.status}
                  </Badge>
                </div>
              </div>
              
              <p className="text-2xl font-medium text-purple-600 mb-6">
                {agent.role}
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {agent.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="px-8 bg-purple-600 hover:bg-purple-700">
                  <Link to="/contact">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Tester {agent.name}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Demander une démo
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="w-48 h-48 bg-white rounded-3xl shadow-xl flex items-center justify-center border-4 border-purple-100">
                <IconComponent className="w-24 h-24 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compétences de {agent.name}
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez tout ce que {agent.name} peut faire pour optimiser 
              votre activité et améliorer votre relation client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agent.capabilities.map((capability, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{capability}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cas d'usage concrets
            </h2>
            <p className="text-lg text-gray-600">
              Voici comment {agent.name} peut s'intégrer dans votre quotidien professionnel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Use cases based on agent type */}
            {agentId === 'lena' && (
              <>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Accueil client automatisé
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Léna accueille vos visiteurs web 24h/24, qualifie leurs besoins 
                      et les oriente vers les bonnes solutions ou les bons interlocuteurs.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800 italic">
                        "Bonjour ! Je suis Léna. Vous cherchez des informations sur 
                        la domotique ? Je peux vous aider à définir vos besoins et 
                        préparer un premier devis."
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Génération de devis
                    </h3>
                    <p className="text-gray-600 mb-4">
                      En quelques questions, Léna collecte les informations nécessaires 
                      et génère un pré-devis personnalisé pour votre projet.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-green-800 italic">
                        "D'après vos réponses, voici une estimation pour votre projet 
                        domotique. Souhaitez-vous qu'un technicien vous contacte ?"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {agentId === 'tech-expert' && (
              <>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Conseil technique approfondi
                    </h3>
                    <p className="text-gray-600 mb-4">
                      TechExpert analyse vos besoins techniques et propose les solutions 
                      les plus adaptées avec dimensionnement précis.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-green-800 italic">
                        "Pour votre maison de 120m², je recommande un système KNX avec 
                        3 zones de contrôle. Voici le détail du matériel nécessaire..."
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Diagnostic de panne
                    </h3>
                    <p className="text-gray-600 mb-4">
                      En cas de problème, TechExpert guide le diagnostic et propose 
                      des solutions de dépannage étape par étape.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800 italic">
                        "Décrivez-moi le problème précisément. Je vais vous guider 
                        pour identifier l'origine de la panne."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {agentId === 'security-advisor' && (
              <>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Audit de sécurité personnalisé
                    </h3>
                    <p className="text-gray-600 mb-4">
                      SecuriBot analyse votre environnement et identifie les 
                      vulnérabilités pour proposer un plan de sécurisation adapté.
                    </p>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-sm text-red-800 italic">
                        "J'ai identifié 3 points de vigilance dans votre configuration. 
                        Voici mes recommandations prioritaires..."
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Conseils prévention
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Formation et sensibilisation aux bonnes pratiques de sécurité 
                      adaptées à votre contexte professionnel ou personnel.
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-sm text-orange-800 italic">
                        "Voici 5 gestes simples pour améliorer votre sécurité au quotidien. 
                        Commençons par le plus important..."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Caractéristiques techniques
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Disponibilité 24h/24",
                    description: "Accès permanent à l'assistant, même en dehors des heures d'ouverture."
                  },
                  {
                    title: "Apprentissage continu", 
                    description: "L'IA s'améliore automatiquement grâce aux interactions avec vos clients."
                  },
                  {
                    title: "Intégration native",
                    description: "Compatible avec vos systèmes existants (CRM, site web, applications)."
                  },
                  {
                    title: "Données sécurisées",
                    description: "Hébergement français, conformité RGPD, chiffrement end-to-end."
                  }
                ].map((spec, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{spec.title}</h4>
                      <p className="text-gray-600">{spec.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bot className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Test gratuit 30 jours
                </h3>
                <p className="text-gray-600 mb-6">
                  Découvrez {agent.name} sans engagement. Installation rapide, 
                  configuration personnalisée et support inclus.
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                    <Link to="/contact">
                      Démarrer l'essai gratuit
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href={mockData.limova.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Documentation technique
                    </a>
                  </Button>
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
            Prêt à adopter {agent.name} ?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Découvrez dès maintenant comment {agent.name} peut transformer 
            votre relation client et optimiser vos processus métier.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-3">
              <Link to="/contact">
                <MessageSquare className="w-5 h-5 mr-2" />
                Tester maintenant
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-purple-600">
              <a href={`tel:${mockData.contact.phone}`}>
                <Phone className="w-5 h-5 mr-2" />
                Appeler un expert
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgentPage;