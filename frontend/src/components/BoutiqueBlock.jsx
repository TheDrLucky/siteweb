import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  ShoppingCart, CheckCircle, Phone, ArrowRight, Star
} from 'lucide-react';
import { boutiqueData } from '../data/boutique';
import { mockData } from '../data/mock';

const BoutiqueBlock = ({ 
  category, 
  title = "Nos solutions clé en main", 
  description = "Découvrez nos packs et services avec prix transparents",
  showFeatured = true,
  maxItems = 3 
}) => {
  // Filter products by category
  let products = [];
  
  if (category) {
    products = [
      ...boutiqueData.packs.filter(pack => pack.category === category),
      ...boutiqueData.services.filter(service => service.category === category),
      ...(boutiqueData.securiteServices || []).filter(service => service.category === category)
    ];
  } else {
    products = [
      ...boutiqueData.packs,
      ...boutiqueData.services,
      ...(boutiqueData.securiteServices || [])
    ];
  }

  // Show featured first, then limit
  if (showFeatured) {
    products = products.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }
  
  products = products.slice(0, maxItems);

  const getCategoryColor = (productCategory) => {
    const colors = {
      domotique: 'bg-blue-50 text-blue-700 border-blue-200',
      securite: 'bg-red-50 text-red-700 border-red-200',
      informatique: 'bg-green-50 text-green-700 border-green-200',
      ia: 'bg-purple-50 text-purple-700 border-purple-200'
    };
    return colors[productCategory] || colors.domotique;
  };

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4 bg-blue-50 text-blue-700">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Boutique Godeloup Domotique
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          
          <p className="text-lg text-gray-600 mb-6">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link to="/boutique">
                Voir toute la boutique
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">
                <Phone className="w-4 h-4 mr-2" />
                Devis personnalisé
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                {/* Header with Price */}
                <div className={`p-6 ${product.featured ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' : 'bg-gray-50'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      className={product.featured ? 'bg-white text-blue-600' : getCategoryColor(product.category)} 
                      variant={product.featured ? 'default' : 'outline'}
                    >
                      {product.featured && <Star className="w-3 h-3 mr-1" />}
                      {boutiqueData.categories[product.category]?.title}
                    </Badge>
                    {product.premium && (
                      <Badge className="bg-yellow-500 text-white text-xs">
                        Premium
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-baseline space-x-2">
                    <span className={`text-3xl font-bold ${product.featured ? 'text-white' : 'text-gray-900'}`}>
                      {product.price}€
                    </span>
                    {product.originalPrice && (
                      <span className={`text-lg line-through ${product.featured ? 'text-blue-100' : 'text-gray-500'}`}>
                        {product.originalPrice}€
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm mb-3">
                    {product.subtitle}
                  </p>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900 text-sm">Inclus :</h4>
                    {product.includes.slice(0, 3).map((item, index) => (
                      <div key={index} className="flex items-start space-x-2 text-xs">
                        <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                    {product.includes.length > 3 && (
                      <p className="text-xs text-blue-600 font-medium">
                        + {product.includes.length - 3} autres inclusions
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <Button 
                      size="sm" 
                      className={`w-full transition-colors ${
                        product.featured 
                          ? 'bg-blue-600 hover:bg-blue-700' 
                          : 'group-hover:bg-blue-600'
                      }`}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Choisir cette solution
                    </Button>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link to="/contact">
                        <Phone className="w-4 h-4 mr-2" />
                        Devis gratuit
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA to boutique */}
        <div className="text-center mt-12">
          <Card className="border-0 shadow-md bg-gradient-to-r from-blue-50 to-white inline-block">
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                <strong>Plus de solutions disponibles</strong> avec prix détaillés et configurations sur mesure
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild>
                  <Link to="/boutique">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Voir toute la boutique
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href={`tel:${mockData.contact.phone}`}>
                    Conseil d'expert
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BoutiqueBlock;