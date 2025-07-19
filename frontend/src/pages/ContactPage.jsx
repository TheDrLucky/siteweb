import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { 
  Phone, Mail, MapPin, Clock, Send,
  CheckCircle, Users, Wrench, Award
} from 'lucide-react';
import { mockData } from '../data/mock';
import { useToast } from '../hooks/use-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    subject: '',
    message: '',
    urgency: 'normal'
  });

  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log('Form data:', formData);
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      subject: '',
      message: '',
      urgency: 'normal'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contactez nos experts
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Une question ? Un projet ? Notre équipe vous accompagne pour trouver 
              les solutions technologiques adaptées à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center space-x-2 text-blue-600">
                <Phone className="w-5 h-5" />
                <span className="font-medium">{mockData.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-600">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Réponse sous 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Demande de devis gratuit
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Téléphone *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company">Entreprise (optionnel)</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <Label htmlFor="service">Service concerné *</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Sélectionnez un service</option>
                        {mockData.services.map(service => (
                          <option key={service.id} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                        <option value="limova">Intelligence Artificielle (Limova)</option>
                        <option value="autre">Autre / Conseil général</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="urgency">Degré d'urgence</Label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="normal">Normal (réponse sous 24-48h)</option>
                        <option value="urgent">Urgent (réponse dans la journée)</option>
                        <option value="emergency">Urgence (dépannage immédiat)</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="subject">Sujet de votre demande *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="Ex: Devis domotique pour maison 120m²"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Décrivez votre projet *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Décrivez-nous votre projet, vos besoins, votre budget approximatif..."
                        className="mt-2"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="w-5 h-5 mr-2" />
                      Envoyer ma demande
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Stats */}
            <div className="space-y-8">
              {/* Contact Info */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Nos coordonnées
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Adresse</p>
                        <p className="text-sm text-gray-600">{mockData.contact.address}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          Zone d'intervention: {mockData.contact.interventionZone}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Téléphone</p>
                        <a 
                          href={`tel:${mockData.contact.phone}`}
                          className="text-sm text-blue-600 hover:underline"
                        >
                          {mockData.contact.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <a 
                          href={`mailto:${mockData.contact.email}`}
                          className="text-sm text-blue-600 hover:underline"
                        >
                          {mockData.contact.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Horaires</p>
                        <p className="text-sm text-gray-600">{mockData.contact.hours}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Our Commitments */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Nos engagements
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      { icon: CheckCircle, title: "Devis gratuit", desc: "Étude personnalisée sans engagement" },
                      { icon: Users, title: "Conseil expert", desc: "Accompagnement par des professionnels" },
                      { icon: Wrench, title: "Installation soignée", desc: "Mise en œuvre par techniciens certifiés" },
                      { icon: Award, title: "Garantie qualité", desc: "SAV réactif et maintenance incluse" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{item.title}</p>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="border-0 shadow-lg bg-red-50">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-red-900 mb-4">
                    Dépannage urgence
                  </h3>
                  <p className="text-red-700 mb-6">
                    Problème critique ? Intervention d'urgence 24h/24 pour nos clients.
                  </p>
                  <Button asChild className="bg-red-600 hover:bg-red-700">
                    <a href={`tel:${mockData.contact.phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Appel urgence
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;