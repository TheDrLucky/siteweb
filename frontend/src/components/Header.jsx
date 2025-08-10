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
    return &lt;IconComponent className="w-4 h-4" /&gt;;
  };

  return (
    &lt;header className="bg-white shadow-sm border-b sticky top-0 z-50"&gt;
      &lt;div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"&gt;
        &lt;div className="flex items-center justify-between h-16"&gt;
          {/* Logo */}
          &lt;Link to="/" className="flex items-center space-x-2"&gt;
            &lt;div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center"&gt;
              &lt;span className="text-white font-bold text-xl"&gt;G&lt;/span&gt;
            &lt;/div&gt;
            &lt;div className="hidden sm:block"&gt;
              &lt;span className="text-xl font-bold text-gray-900"&gt;Godeloup&lt;/span&gt;
              &lt;span className="text-sm text-blue-600 block leading-none"&gt;Domotique&lt;/span&gt;
            &lt;/div&gt;
          &lt;/Link&gt;

          {/* Desktop Navigation */}
          &lt;nav className="hidden md:block"&gt;
            &lt;NavigationMenu&gt;
              &lt;NavigationMenuList className="flex space-x-1"&gt;
                &lt;NavigationMenuLink asChild&gt;
                  &lt;Link 
                    to="/" 
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-blue-600 hover:bg-blue-50 ${
                      isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                    }`}
                  &gt;
                    Accueil
                  &lt;/Link&gt;
                &lt;/NavigationMenuLink&gt;

                &lt;NavigationMenuItem&gt;
                  &lt;NavigationMenuTrigger 
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-blue-600 hover:bg-blue-50 ${
                      isActive('/services') ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                    }`}
                  &gt;
                    Nos Services
                  &lt;/NavigationMenuTrigger&gt;
                  &lt;NavigationMenuContent&gt;
                    &lt;div className="w-72 p-4"&gt;
                      &lt;div className="space-y-3"&gt;
                        &lt;Link
                          to="/services"
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                        &gt;
                          &lt;div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center"&gt;
                            &lt;Monitor className="w-4 h-4 text-blue-600" /&gt;
                          &lt;/div&gt;
                          &lt;div&gt;
                            &lt;div className="font-medium text-gray-900"&gt;Tous nos services&lt;/div&gt;
                            &lt;div className="text-sm text-gray-500"&gt;Vue d'ensemble complète&lt;/div&gt;
                          &lt;/div&gt;
                        &lt;/Link&gt;
                        &lt;Link
                          to="/robot-tondeuse"
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 transition-colors"
                        &gt;
                          &lt;div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center"&gt;
                            &lt;span className="text-green-600 text-lg"&gt;🤖&lt;/span&gt;
                          &lt;/div&gt;
                          &lt;div&gt;
                            &lt;div className="font-medium text-gray-900"&gt;Robot Tondeuse&lt;/div&gt;
                            &lt;div className="text-sm text-gray-500"&gt;Entretien automatique pelouse&lt;/div&gt;
                          &lt;/div&gt;
                        &lt;/Link&gt;
                        &lt;Link
                          to="/services/domotique"
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                        &gt;
                          &lt;div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center"&gt;
                            &lt;Home className="w-4 h-4 text-blue-600" /&gt;
                          &lt;/div&gt;
                          &lt;div&gt;
                            &lt;div className="font-medium text-gray-900"&gt;Domotique&lt;/div&gt;
                            &lt;div className="text-sm text-gray-500"&gt;Maison connectée&lt;/div&gt;
                          &lt;/div&gt;
                        &lt;/Link&gt;
                        &lt;Link
                          to="/services/securite"
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-50 transition-colors"
                        &gt;
                          &lt;div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center"&gt;
                            &lt;Shield className="w-4 h-4 text-red-600" /&gt;
                          &lt;/div&gt;
                          &lt;div&gt;
                            &lt;div className="font-medium text-gray-900"&gt;Sécurité&lt;/div&gt;
                            &lt;div className="text-sm text-gray-500"&gt;Alarmes &amp; vidéosurveillance&lt;/div&gt;
                          &lt;/div&gt;
                        &lt;/Link&gt;
                      &lt;/div&gt;
                    &lt;/div&gt;
                  &lt;/NavigationMenuContent&gt;
                &lt;/NavigationMenuItem&gt;

                &lt;NavigationMenuLink asChild&gt;
                  &lt;Link 
                    to="/zones-intervention" 
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-blue-600 hover:bg-blue-50 ${
                      isActive('/zones-intervention') ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                    }`}
                  &gt;
                    Zones d'intervention
                  &lt;/Link&gt;
                &lt;/NavigationMenuLink&gt;

                &lt;NavigationMenuLink asChild&gt;
                  &lt;Link 
                    to="/topologies" 
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-blue-600 hover:bg-blue-50 ${
                      isActive('/topologies') ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                    }`}
                  &gt;
                    Nos Solutions
                  &lt;/Link&gt;
                &lt;/NavigationMenuLink&gt;

                &lt;NavigationMenuLink asChild&gt;
                  &lt;Link 
                    to="/boutique" 
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-blue-600 hover:bg-blue-50 ${
                      isActive('/boutique') ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                    }`}
                  &gt;
                    &lt;ShoppingCart className="w-4 h-4 mr-1 inline" /&gt;
                    Boutique
                  &lt;/Link&gt;
                &lt;/NavigationMenuLink&gt;

                &lt;NavigationMenuLink asChild&gt;
                  &lt;Link 
                    to="/about" 
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-blue-600 hover:bg-blue-50 ${
                      isActive('/about') ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                    }`}
                  &gt;
                    À propos
                  &lt;/Link&gt;
                &lt;/NavigationMenuLink&gt;

                &lt;NavigationMenuLink asChild&gt;
                  &lt;Link 
                    to="/blog" 
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-blue-600 hover:bg-blue-50 ${
                      isActive('/blog') ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                    }`}
                  &gt;
                    Blog
                  &lt;/Link&gt;
                &lt;/NavigationMenuLink&gt;
              &lt;/NavigationMenuList&gt;
            &lt;/NavigationMenu&gt;
          &lt;/nav&gt;

          {/* Contact Info &amp; CTA */}
          &lt;div className="hidden lg:flex items-center space-x-4"&gt;
            &lt;div className="flex items-center space-x-2 text-sm text-gray-600"&gt;
              &lt;Phone className="w-4 h-4" /&gt;
              &lt;span&gt;{mockData.contact.phone}&lt;/span&gt;
            &lt;/div&gt;
            &lt;div className="flex items-center space-x-2"&gt;
              &lt;Button asChild&gt;
                &lt;Link to="/devis-gratuit"&gt;Devis gratuit&lt;/Link&gt;
              &lt;/Button&gt;
              &lt;Button asChild variant="outline"&gt;
                &lt;Link to="/visite-gratuite"&gt;Visite sur site&lt;/Link&gt;
              &lt;/Button&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          {/* Mobile menu button */}
          &lt;button
            onClick={() =&gt; setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50"
          &gt;
            {isMobileMenuOpen ? &lt;X className="w-6 h-6" /&gt; : &lt;Menu className="w-6 h-6" /&gt;}
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      {/* Mobile menu */}
      {isMobileMenuOpen &amp;&amp; (
        &lt;div className="md:hidden bg-white border-t"&gt;
          &lt;div className="px-2 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto"&gt;
            &lt;Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
              onClick={() =&gt; setIsMobileMenuOpen(false)}
            &gt;
              Accueil
            &lt;/Link&gt;

            {/* Services Link */}
            &lt;Link
              to="/services"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/services') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
              onClick={() =&gt; setIsMobileMenuOpen(false)}
            &gt;
              Nos Services
            &lt;/Link&gt;

            {/* Zones d'intervention Link */}
            &lt;Link
              to="/zones-intervention"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/zones-intervention') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
              onClick={() =&gt; setIsMobileMenuOpen(false)}
            &gt;
              Zones d'intervention
            &lt;/Link&gt;

            {/* Topologies Link */}
            &lt;Link
              to="/topologies"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/topologies') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
              onClick={() =&gt; setIsMobileMenuOpen(false)}
            &gt;
              Nos Solutions
            &lt;/Link&gt;

            &lt;Link
              to="/boutique"
              className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/boutique') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
              onClick={() =&gt; setIsMobileMenuOpen(false)}
            &gt;
              &lt;ShoppingCart className="w-4 h-4 mr-2" /&gt;
              Boutique
            &lt;/Link&gt;

            &lt;Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/about') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
              onClick={() =&gt; setIsMobileMenuOpen(false)}
            &gt;
              À propos
            &lt;/Link&gt;

            &lt;Link
              to="/blog"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/blog') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
              onClick={() =&gt; setIsMobileMenuOpen(false)}
            &gt;
              Blog
            &lt;/Link&gt;

            &lt;div className="pt-4 border-t"&gt;
              &lt;div className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600"&gt;
                &lt;Phone className="w-4 h-4" /&gt;
                &lt;span&gt;{mockData.contact.phone}&lt;/span&gt;
              &lt;/div&gt;
              &lt;div className="flex gap-2 mx-3 mt-2"&gt;
                &lt;Link
                  to="/devis-gratuit"
                  className="flex-1"
                  onClick={() =&gt; setIsMobileMenuOpen(false)}
                &gt;
                  &lt;Button className="w-full"&gt;Devis gratuit&lt;/Button&gt;
                &lt;/Link&gt;
                &lt;Link
                  to="/visite-gratuite"
                  className="flex-1"
                  onClick={() =&gt; setIsMobileMenuOpen(false)}
                &gt;
                  &lt;Button variant="outline" className="w-full"&gt;Visite sur site&lt;/Button&gt;
                &lt;/Link&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      )}
    &lt;/header&gt;
  );
};

export default Header;