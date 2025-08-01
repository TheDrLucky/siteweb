import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, Building, Mail, Phone, Globe } from 'lucide-react';

const MentionsLegalesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Accueil</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Mentions légales</span>
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
            Mentions légales
          </h1>
          <p className="text-lg text-gray-600">
            Informations légales concernant le site Godeloup Domotique
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            
            {/* Éditeur du site */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Éditeur du site</h2>
                    <p className="text-gray-600">Informations sur l'entreprise</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Identification</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Raison sociale :</strong> Godeloup Domotique</p>
                      <p><strong>Forme juridique :</strong> [À compléter]</p>
                      <p><strong>SIRET :</strong> [À compléter]</p>
                      <p><strong>TVA Intracommunautaire :</strong> [À compléter]</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Adresse</h3>
                    <div className="space-y-2 text-gray-700">
                      <p>[Adresse complète]</p>
                      <p>35500 Vitré</p>
                      <p>France</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact</h2>
                    <p className="text-gray-600">Moyens de nous joindre</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Coordonnées</h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>[Téléphone]</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>[Email de contact]</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Directeur de publication</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Nom :</strong> [Nom du dirigeant]</p>
                      <p><strong>Qualité :</strong> Gérant</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hébergement */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Hébergement</h2>
                    <p className="text-gray-600">Informations sur l'hébergeur du site</p>
                  </div>
                </div>

                <div className="text-gray-700 space-y-2">
                  <p><strong>Hébergeur :</strong> [Nom de l'hébergeur]</p>
                  <p><strong>Adresse :</strong> [Adresse de l'hébergeur]</p>
                  <p><strong>Téléphone :</strong> [Téléphone de l'hébergeur]</p>
                </div>
              </CardContent>
            </Card>

            {/* Propriété intellectuelle */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Propriété intellectuelle</h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                    Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                  </p>
                  
                  <p>
                    La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite 
                    sauf autorisation expresse du directeur de la publication.
                  </p>
                  
                  <p>
                    Les marques citées sur ce site sont déposées par les sociétés qui en sont propriétaires.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Responsabilité */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsabilité</h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, 
                    mais peut toutefois contenir des inexactitudes ou des omissions.
                  </p>
                  
                  <p>
                    Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, 
                    à l'adresse [email], en décrivant le problème de la manière la plus précise possible.
                  </p>
                  
                  <p>
                    Godeloup Domotique ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur, 
                    lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées, 
                    soit de l'apparition d'un bug ou d'une incompatibilité.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Liens hypertextes */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Liens hypertextes</h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    Les sites internet peuvent proposer des liens vers d'autres sites internet ou d'autres ressources disponibles sur Internet. 
                    Godeloup Domotique ne dispose d'aucun moyen pour contrôler les sites en connexion avec ses sites internet.
                  </p>
                  
                  <p>
                    Godeloup Domotique ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. 
                    Elle ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Droit applicable */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Droit applicable et attribution de juridiction</h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    Tout litige en relation avec l'utilisation du site est soumis au droit français. 
                    Il est fait attribution exclusive de juridiction aux tribunaux compétents de Rennes.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Modification */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Modification des mentions légales</h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    Godeloup Domotique se réserve le droit de modifier les présentes mentions légales à tout moment. 
                    L'utilisateur s'engage donc à les consulter de manière régulière.
                  </p>
                  
                  <p><strong>Date de dernière mise à jour :</strong> [Date à compléter]</p>
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
            Des questions sur nos mentions légales ?
          </h2>
          <p className="text-gray-600 mb-6">
            N'hésitez pas à nous contacter pour toute demande d'information.
          </p>
          <Button asChild>
            <Link to="/contact">
              Nous contacter
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MentionsLegalesPage;