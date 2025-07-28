import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';
import { Phone, Menu, X, ChevronDown, Home, Shield, Monitor, Brain, ShoppingCart } from 'lucide-react';
import { mockData } from '../data/mock';
import { seoPages } from '../data/mockSeo';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const getServiceIcon = (serviceId) => {
    const icons = {
      'domotique': Home,
      'securite': Shield, 
      'informatique': Monitor,
      'ia': Brain
    };
    const IconComponent = icons[serviceId] || Home;
    return <IconComponent className="w-4 h-4" />;
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-900">Godeloup</span>
              <span className="text-sm text-blue-600 block leading-none">Domotique</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-1">
                <NavigationMenuLink asChild>
                  <Link 
                    to="/" 
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-blue-600 hover:bg-blue-50 ${
                      isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                    }`}
                  >
                    Accueil
                  </Link>
                </NavigationMenuLink>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`px-4 py-2 text-sm font-medium transition-colors hover:text-blue-600 hover:bg-blue-50 ${
                    isActive('/services') || isActive('/domotique') || isActive('/securite') || isActive('/informatique') || isActive('/ia') ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                  }`}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-80 p-2">
                      {/* Domotique */}
                      <div className="mb-4">
                        <div className="flex items-center space-x-2 px-3 py-2 font-medium text-gray-900">
                          {getServiceIcon('domotique')}
                          <span>Domotique</span>
                        </div>
                        <div className="pl-6 space-y-1">
                          <NavigationMenuLink asChild>
                            <Link
                              to="/domotique/bureau-etudes-domotique"
                              className="block px-3 py-1 rounded-md text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                              Bureau d'études
                            </Link>
                          </NavigationMenuLink>
                          {seoPages.domotique.solutions.slice(0, 3).map((solution) => (
                            <NavigationMenuLink key={solution.slug} asChild>
                              <Link
                                to={`/domotique/${solution.slug}`}
                                className="block px-3 py-1 rounded-md text-xs text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                              >
                                {solution.title}
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>

                      {/* Sécurité */}
                      <div className="mb-4">
                        <div className="flex items-center space-x-2 px-3 py-2 font-medium text-gray-900">
                          {getServiceIcon('securite')}
                          <span>Sécurité</span>
                        </div>
                        <div className="pl-6 space-y-1">
                          <NavigationMenuLink asChild>
                            <Link
                              to="/securite/bureau-etudes-securite"
                              className="block px-3 py-1 rounded-md text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                              Bureau d'études
                            </Link>
                          </NavigationMenuLink>
                          {seoPages.securite.solutions.slice(0, 2).map((solution) => (
                            <NavigationMenuLink key={solution.slug} asChild>
                              <Link
                                to={`/securite/${solution.slug}`}
                                className="block px-3 py-1 rounded-md text-xs text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                              >
                                {solution.title}
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>

                      {/* Informatique & IA en ligne */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="flex items-center space-x-2 px-3 py-2 font-medium text-gray-900">
                            {getServiceIcon('informatique')}
                            <span>Informatique</span>
                          </div>
                          <div className="pl-6 space-y-1">
                            <NavigationMenuLink asChild>
                              <Link
                                to="/informatique/bureau-etudes-informatique"
                                className="block px-3 py-1 rounded-md text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                              >
                                Bureau d'études
                              </Link>
                            </NavigationMenuLink>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center space-x-2 px-3 py-2 font-medium text-gray-900">
                            {getServiceIcon('ia')}
                            <span>Intelligence IA</span>
                          </div>
                          <div className="pl-6 space-y-1">
                            <NavigationMenuLink asChild>
                              <Link
                                to="/ia/bureau-etudes-ia"
                                className="block px-3 py-1 rounded-md text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                              >
                                Bureau d'études
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link
                                to="/ia/limova-intelligence-artificielle"
                                className="block px-3 py-1 rounded-md text-xs text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                              >
                                Limova IA
                              </Link>
                            </NavigationMenuLink>
                          </div>
                        </div>
                      </div>

                      <NavigationMenuLink asChild>
                        <Link
                          to="/services"
                          className="block px-3 py-2 mt-4 pt-4 border-t text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                        >
                          Voir tous les services →
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuLink asChild>
                  <Link 
                    to="/about" 
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-blue-600 hover:bg-blue-50 ${
                      isActive('/about') ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                    }`}
                  >
                    À propos
                  </Link>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                  <Link 
                    to="/blog" 
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-blue-600 hover:bg-blue-50 ${
                      isActive('/blog') ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                    }`}
                  >
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>{mockData.contact.phone}</span>
            </div>
            <Button asChild>
              <Link to="/contact">Devis gratuit</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Accueil
            </Link>

            {/* Services Mobile */}
            <div className="space-y-1">
              <div className="px-3 py-2 text-base font-medium text-gray-700 flex items-center justify-between">
                Services
                <ChevronDown className="w-4 h-4" />
              </div>
              
              {/* Domotique Mobile */}
              <div className="pl-4 space-y-1">
                <div className="px-3 py-1 text-sm font-medium text-gray-800">🏠 Domotique</div>
                <Link
                  to="/domotique/bureau-etudes-domotique"
                  className="block px-6 py-1 rounded-md text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Bureau d'études
                </Link>
                {seoPages.domotique.solutions.slice(0, 2).map((solution) => (
                  <Link
                    key={solution.slug}
                    to={`/domotique/${solution.slug}`}
                    className="block px-6 py-1 rounded-md text-xs text-gray-500 hover:text-blue-600 hover:bg-blue-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {solution.title}
                  </Link>
                ))}
              </div>

              {/* Sécurité Mobile */}
              <div className="pl-4 space-y-1">
                <div className="px-3 py-1 text-sm font-medium text-gray-800">🛡️ Sécurité</div>
                <Link
                  to="/securite/bureau-etudes-securite"
                  className="block px-6 py-1 rounded-md text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Bureau d'études
                </Link>
                <Link
                  to="/securite/grundig-securite"
                  className="block px-6 py-1 rounded-md text-xs text-gray-500 hover:text-blue-600 hover:bg-blue-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Grundig Sécurité
                </Link>
              </div>

              {/* Informatique & IA Mobile */}
              <div className="pl-4 space-y-1">
                <div className="px-3 py-1 text-sm font-medium text-gray-800">💻 Informatique</div>
                <Link
                  to="/informatique/bureau-etudes-informatique"
                  className="block px-6 py-1 rounded-md text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Bureau d'études
                </Link>
              </div>

              <div className="pl-4 space-y-1">
                <div className="px-3 py-1 text-sm font-medium text-gray-800">🤖 Intelligence IA</div>
                <Link
                  to="/ia/bureau-etudes-ia"
                  className="block px-6 py-1 rounded-md text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Bureau d'études
                </Link>
                <Link
                  to="/ia/limova-intelligence-artificielle"
                  className="block px-6 py-1 rounded-md text-xs text-gray-500 hover:text-blue-600 hover:bg-blue-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Limova IA
                </Link>
              </div>
            </div>

            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/about') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              À propos
            </Link>

            <Link
              to="/blog"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/blog') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>

            <div className="pt-4 border-t">
              <div className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{mockData.contact.phone}</span>
              </div>
              <Link
                to="/contact"
                className="block mx-3 mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full">Devis gratuit</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;