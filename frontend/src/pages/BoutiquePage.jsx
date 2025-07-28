import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  ShoppingCart, Home, Shield, Monitor, Brain,
  CheckCircle, Star, Package, Truck, Phone,
  ArrowRight, Filter, Search, Heart
} from 'lucide-react';
import { boutiqueData } from '../data/boutique';
import { mockData } from '../data/mock';

const BoutiquePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allProducts = [
    ...boutiqueData.packs,
    ...boutiqueData.services,
    ...boutiqueData.securiteServices
  ];

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getServiceIcon = (iconName) => {
    const icons = { Home, Shield, Monitor, Brain };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent className="w-5 h-5" /> : <Home className="w-5 h-5" />;
  };

  const getCategoryColor = (category) => {
    const colors = {
      domotique: 'bg-blue-50 text-blue-700 border-blue-200',
      securite: 'bg-red-50 text-red-700 border-red-200',
      informatique: 'bg-green-50 text-green-700 border-green-200',
      ia: 'bg-purple-50 text-purple-700 border-purple-200'
    };
    return colors[category] || colors.domotique;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-white">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Boutique en ligne - Prestations Godeloup Domotique
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Solutions & Tarifs
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Découvrez nos packs et services avec prix transparents. Installation professionnelle 
              et garantie incluses dans le Grand Ouest.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Devis personnalisé gratuit
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${mockData.contact.phone}`}>
                  Conseil d'expert
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un produit ou service..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory('all')}
              >
                <Filter className="w-4 h-4 mr-2" />
                Tous
              </Button>
              {Object.entries(boutiqueData.categories).map(([key, category]) => (
                <Button
                  key={key}
                  variant={selectedCategory === key ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(key)}
                >
                  {getServiceIcon(category.icon)}
                  <span className="ml-2">{category.title}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Pack */}
          {boutiqueData.packs.filter(pack => pack.featured).map((pack) => (
            <div key={pack.id} className="mb-16">
              <div className="text-center mb-8">
                <Badge className="bg-blue-600 text-white mb-4">
                  <Star className="w-4 h-4 mr-1" />
                  Pack Vedette
                </Badge>
                <h2 className="text-2xl font-bold text-gray-900">
                  Notre pack le plus populaire
                </h2>
              </div>

              <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image */}
                    <div className="bg-blue-600 flex items-center justify-center p-12">
                      <div className="text-center text-white">
                        <Package className="w-20 h-20 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-2">{pack.title}</h3>
                        <p className="text-blue-100">{pack.subtitle}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-3xl font-bold text-gray-900">{pack.price}€</span>
                            {pack.originalPrice && (
                              <span className="text-lg text-gray-500 line-through">{pack.originalPrice}€</span>
                            )}
                          </div>
                          <Badge className={getCategoryColor(pack.category)}>
                            {boutiqueData.categories[pack.category]?.title}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6">{pack.description}</p>

                      <div className="space-y-3 mb-8">
                        <h4 className="font-semibold text-gray-900">Inclus dans ce pack :</h4>
                        {pack.includes.slice(0, 4).map((item, index) => (
                          <div key={index} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                        {pack.includes.length > 4 && (
                          <p className="text-sm text-gray-500">+ {pack.includes.length - 4} autres inclusions</p>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="lg" className="flex-1">
                          <ShoppingCart className="w-5 h-5 mr-2" />
                          Commander ce pack
                        </Button>
                        <Button variant="outline" size="lg">
                          <Phone className="w-5 h-5 mr-2" />
                          Devis gratuit
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}

          {/* Products Grid */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tous nos services et solutions
            </h2>
            <p className="text-lg text-gray-600">
              {filteredProducts.length} {filteredProducts.length > 1 ? 'résultats' : 'résultat'}
              {selectedCategory !== 'all' && ` en ${boutiqueData.categories[selectedCategory]?.title}`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.filter(product => !product.featured).map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
                <CardContent className="p-0">
                  {/* Image/Icon Header */}
                  <div className={`h-32 flex items-center justify-center ${getCategoryColor(product.category)} bg-opacity-20`}>
                    <div className="text-center">
                      {getServiceIcon(boutiqueData.categories[product.category]?.icon)}
                      {product.premium && (
                        <Badge className="bg-yellow-500 text-white text-xs mt-2">
                          <Star className="w-3 h-3 mr-1" />
                          Premium
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={getCategoryColor(product.category)} variant="outline">
                        {boutiqueData.categories[product.category]?.title}
                      </Badge>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">{product.price}€</div>
                        {product.originalPrice && (
                          <div className="text-sm text-gray-500 line-through">{product.originalPrice}€</div>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm mb-3">
                      {product.subtitle}
                    </p>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {product.description}
                    </p>

                    {/* Key Includes */}
                    <div className="space-y-2 mb-6">
                      {product.includes.slice(0, 3).map((item, index) => (
                        <div key={index} className="flex items-start space-x-2 text-xs">
                          <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                      {product.includes.length > 3 && (
                        <p className="text-xs text-gray-500">+ {product.includes.length - 3} autres inclusions</p>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="space-y-2">
                      <Button size="sm" className="w-full group-hover:bg-blue-600 transition-colors">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Commander
                      </Button>
                      <Button variant="outline" size="sm" asChild className="w-full">
                        <Link to="/contact">
                          Demander un devis
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery & Warranty Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Livraison Grand Ouest
                </h3>
                <p className="text-gray-600 text-sm">
                  Livraison gratuite dès 500€ d'achat. Installation par nos techniciens certifiés.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Garantie Incluse
                </h3>
                <p className="text-gray-600 text-sm">
                  2 ans garantie matériel + 1 an garantie installation. Support technique inclus.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Conseil Gratuit
                </h3>
                <p className="text-gray-600 text-sm">
                  Consultation technique gratuite. Nos experts vous conseillent avant achat.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d'un devis personnalisé ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Nos experts analysent vos besoins et vous proposent la solution la plus adaptée 
            à votre budget et vos contraintes techniques.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-3">
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Devis gratuit sur mesure
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

export default BoutiquePage;