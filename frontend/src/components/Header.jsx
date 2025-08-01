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

                <NavigationMenuLink asChild>
                  <Link 
                    to="/services" 
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-blue-600 hover:bg-blue-50 ${
                      isActive('/services') ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                    }`}
                  >
                    Nos Services
                  </Link>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                  <Link 
                    to="/zones-intervention" 
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-blue-600 hover:bg-blue-50 ${
                      isActive('/zones-intervention') ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                    }`}
                  >
                    Zones d'intervention
                  </Link>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                  <Link 
                    to="/topologies" 
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-blue-600 hover:bg-blue-50 ${
                      isActive('/topologies') ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                    }`}
                  >
                    Nos Solutions
                  </Link>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                  <Link 
                    to="/boutique" 
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-blue-600 hover:bg-blue-50 ${
                      isActive('/boutique') ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4 mr-1 inline" />
                    Boutique
                  </Link>
                </NavigationMenuLink>

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

            {/* Services Link */}
            <Link
              to="/services"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/services') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nos Services
            </Link>

            {/* Robot Tondeuse Link */}
            <Link
              to="/robot-tondeuse"
              className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/robot-tondeuse') ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              🤖 Robot Tondeuse
            </Link>

            {/* Topologies Link */}
            <Link
              to="/topologies"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/topologies') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nos Solutions
            </Link>

            <Link
              to="/boutique"
              className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/boutique') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Boutique
            </Link>

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