import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, Shield, Eye, Lock, Database, Cookie } from 'lucide-react';

const PolitiqueConfidentialitePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Accueil</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Politique de confidentialité</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-6 -ml-4">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Link>
          </Button>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Politique de confidentialité
          </h1>
          <p className="text-lg text-gray-600">
            Protection de vos données personnelles - RGPD
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">

            {/* Introduction */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Engagement de confidentialité</h2>
                    <p className="text-gray-600">Notre approche de la protection des données</p>
                  </div>
                </div>

                <div className="text-gray-700 space-y-4">
                  <p>
                    Godeloup Domotique s'engage à protéger la confidentialité de vos données personnelles. 
                    Cette politique explique comment nous collectons, utilisons et protégeons vos informations 
                    conformément au Règlement Général sur la Protection des Données (RGPD).
                  </p>
                  
                  <p>
                    <strong>Responsable du traitement :</strong> Godeloup Domotique<br />
                    <strong>Contact DPO :</strong> [Email de contact pour les données personnelles]<br />
                    <strong>Dernière mise à jour :</strong> [Date]
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Données collectées */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Données que nous collectons</h2>
                    <p className="text-gray-600">Types d'informations recueillies</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Données d'identification</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Nom et prénom</li>
                      <li>Adresse postale</li>
                      <li>Numéro de téléphone</li>
                      <li>Adresse email</li>
                      <li>Informations sur votre projet (devis, installation)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Données techniques</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Adresse IP</li>
                      <li>Type de navigateur</li>
                      <li>Pages visitées sur notre site</li>
                      <li>Durée de visite</li>
                      <li>Données de géolocalisation (avec votre consentement)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Données de communication</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Historique des échanges (emails, appels)</li>
                      <li>Préférences de contact</li>
                      <li>Témoignages et avis clients (avec votre accord)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Finalités */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Utilisation de vos données</h2>
                    <p className="text-gray-600">Pourquoi nous collectons ces informations</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Exécution de nos services</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li>Traitement de vos demandes de devis</li>
                      <li>Planification et réalisation des installations</li>
                      <li>Service après-vente et maintenance</li>
                      <li>Facturation et suivi commercial</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Communication et marketing</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li>Envoi d'informations sur nos services (avec votre consentement)</li>
                      <li>Newsletter et actualités domotique</li>
                      <li>Invitations à des événements ou formations</li>
                      <li>Programme de parrainage</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Amélioration de nos services</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li>Analyse de l'utilisation de notre site web</li>
                      <li>Amélioration de nos processus internes</li>
                      <li>Développement de nouveaux services</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Obligations légales</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li>Respect des obligations comptables et fiscales</li>
                      <li>Conservation des documents contractuels</li>
                      <li>Réponse aux demandes des autorités compétentes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Base légale */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Base légale du traitement</h2>
                
                <div className="space-y-4 text-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">Exécution du contrat</h3>
                      <p className="text-sm text-blue-800">
                        Traitement nécessaire à l'exécution du contrat de prestation de services
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-900 mb-2">Consentement</h3>
                      <p className="text-sm text-green-800">
                        Communications marketing et newsletter (révocable à tout moment)
                      </p>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-900 mb-2">Intérêt légitime</h3>
                      <p className="text-sm text-purple-800">
                        Amélioration de nos services et prospection commerciale
                      </p>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-red-900 mb-2">Obligation légale</h3>
                      <p className="text-sm text-red-800">
                        Conservation des documents comptables et fiscaux
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conservation */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Durée de conservation</h2>
                
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full border border-gray-200 rounded-lg">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-gray-900">Type de données</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-900">Durée</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-900">Justification</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 text-gray-700">Données clients actifs</td>
                          <td className="px-4 py-3 text-gray-700">Durée de la relation + 3 ans</td>
                          <td className="px-4 py-3 text-gray-700">Service après-vente</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-700">Données de facturation</td>
                          <td className="px-4 py-3 text-gray-700">10 ans</td>
                          <td className="px-4 py-3 text-gray-700">Obligations comptables</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-700">Données de prospection</td>
                          <td className="px-4 py-3 text-gray-700">3 ans max</td>
                          <td className="px-4 py-3 text-gray-700">Recommandations CNIL</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-700">Données de navigation</td>
                          <td className="px-4 py-3 text-gray-700">13 mois max</td>
                          <td className="px-4 py-3 text-gray-700">Cookies et traceurs</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sécurité */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Lock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Sécurité des données</h2>
                    <p className="text-gray-600">Mesures de protection mises en place</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Mesures techniques</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Chiffrement des données sensibles</li>
                        <li>Connexions sécurisées (HTTPS/SSL)</li>
                        <li>Sauvegardes régulières et sécurisées</li>
                        <li>Pare-feu et antivirus</li>
                        <li>Mise à jour régulière des systèmes</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Mesures organisationnelles</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Accès limité aux données selon le besoin</li>
                        <li>Formation du personnel à la sécurité</li>
                        <li>Politique de mots de passe sécurisés</li>
                        <li>Procédures en cas d'incident</li>
                        <li>Contrats avec les sous-traitants</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Cookies et traceurs</h2>
                    <p className="text-gray-600">Utilisation des cookies sur notre site</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p>
                    Notre site utilise différents types de cookies pour améliorer votre expérience de navigation :
                  </p>

                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Cookies essentiels</h3>
                      <p className="text-sm">
                        Nécessaires au fonctionnement du site (session, sécurité). 
                        Ils ne nécessitent pas votre consentement.
                      </p>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Cookies de performance</h3>
                      <p className="text-sm">
                        Nous aident à comprendre l'utilisation du site (Google Analytics). 
                        Soumis à votre consentement.
                      </p>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Cookies marketing</h3>
                      <p className="text-sm">
                        Permettent de personnaliser les contenus et publicités. 
                        Nécessitent votre consentement explicite.
                      </p>
                    </div>
                  </div>

                  <p className="bg-blue-50 p-4 rounded-lg text-sm">
                    <strong>Gestion des cookies :</strong> Vous pouvez modifier vos préférences à tout moment 
                    via les paramètres de votre navigateur ou notre bandeau de consentement.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Droits */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Vos droits RGPD</h2>
                
                <div className="space-y-4 text-gray-700">
                  <p className="mb-6">
                    Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Droit d'accès",
                        description: "Connaître les données que nous détenons sur vous"
                      },
                      {
                        title: "Droit de rectification", 
                        description: "Corriger des données inexactes ou incomplètes"
                      },
                      {
                        title: "Droit à l'effacement",
                        description: "Demander la suppression de vos données"
                      },
                      {
                        title: "Droit d'opposition",
                        description: "Vous opposer au traitement de vos données"
                      },
                      {
                        title: "Droit à la portabilité",
                        description: "Récupérer vos données dans un format lisible"
                      },
                      {
                        title: "Droit de limitation",
                        description: "Limiter le traitement de vos données"
                      }
                    ].map((right, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">{right.title}</h3>
                        <p className="text-sm text-gray-600">{right.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg mt-6">
                    <h3 className="font-semibold text-blue-900 mb-3">Comment exercer vos droits ?</h3>
                    <p className="text-blue-800 text-sm mb-3">
                      Pour exercer vos droits, contactez-nous :
                    </p>
                    <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                      <li>Par email : [email de contact DPO]</li>
                      <li>Par courrier : [Adresse postale]</li>
                      <li>Joindre une pièce d'identité pour vérification</li>
                    </ul>
                    <p className="text-blue-800 text-sm mt-3">
                      <strong>Délai de réponse :</strong> 1 mois maximum (prolongeable de 2 mois si nécessaire)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Réclamation */}  
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Réclamation</h2>
                
                <div className="text-gray-700 space-y-4">
                  <p>
                    Si vous estimez que le traitement de vos données personnelles constitue une violation 
                    du règlement européen RGPD, vous avez la possibilité d'introduire une réclamation auprès de la CNIL.
                  </p>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-red-900 mb-2">Contact CNIL</h3>
                    <p className="text-red-800 text-sm">
                      <strong>Site web :</strong> <a href="https://www.cnil.fr" className="underline" target="_blank" rel="noopener noreferrer">www.cnil.fr</a><br />
                      <strong>Adresse :</strong> CNIL - 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07<br />
                      <strong>Téléphone :</strong> 01 53 73 22 22
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mise à jour */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Mise à jour de la politique</h2>
                
                <div className="text-gray-700 space-y-4">
                  <p>
                    Cette politique de confidentialité peut être amenée à évoluer pour s'adapter aux évolutions 
                    légales, réglementaires ou techniques. Nous vous informerons de toute modification importante.
                  </p>
                  
                  <p>
                    <strong>Version actuelle :</strong> 1.0<br />
                    <strong>Dernière mise à jour :</strong> [Date à compléter]<br />
                    <strong>Prochaine révision prévue :</strong> [Date + 1 an]
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Questions sur la protection de vos données ?
          </h2>
          <p className="text-gray-600 mb-6">
            Notre équipe est à votre disposition pour répondre à toutes vos questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/contact">
                Nous contacter
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/mentions-legales">
                Mentions légales
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PolitiqueConfidentialitePage;