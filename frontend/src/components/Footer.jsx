import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Clock, Facebook, Linkedin, Youtube,
  Shield, Home, Monitor, Brain, Gift, Award, CheckCircle
} from 'lucide-react';
import { mockData } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div>
                <span className="text-xl font-bold">Godeloup</span>
                <span className="text-sm text-blue-400 block leading-none">Domotique</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              {mockData.company.description}
            </p>
            <div className="flex space-x-4">
              <a 
                href={mockData.contact.socialMedia.facebook} 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={mockData.contact.socialMedia.linkedin} 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={mockData.contact.socialMedia.youtube} 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Nos Services</h3>
            <ul className="space-y-2">
              {mockData.services.map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/services/${service.id}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/limova" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Limova IA
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-400" />
                <div className="text-sm text-gray-300">
                  <div>{mockData.contact.address}</div>
                  <div className="text-xs text-gray-400 mt-1">
                    Zone d'intervention: {mockData.contact.interventionZone}
                  </div>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <a 
                  href={`tel:${mockData.contact.phone}`}
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {mockData.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a 
                  href={`mailto:${mockData.contact.email}`}
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {mockData.contact.email}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-0.5 text-blue-400" />
                <div className="text-sm text-gray-300">
                  {mockData.contact.hours}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Godeloup Domotique. Tous droits réservés.
            </p>
            <p className="text-xs text-gray-500">
              Artisan installateur certifié • Intervention Grand Ouest • Solutions sur-mesure
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;