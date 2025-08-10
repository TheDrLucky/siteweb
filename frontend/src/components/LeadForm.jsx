import React, { useMemo, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import { mockData } from '../data/mock';
import { CheckCircle, Clipboard, Mail, MessageSquare, Phone } from 'lucide-react';

const defaultState = {
  clientType: 'particulier',
  services: [],
  siteType: '',
  surface: '',
  pieces: [],
  description: '',
  address: '',
  city: '',
  postalCode: '',
  budget: '',
  timeline: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  contactPref: 'email',
  consent: false,
};

const PIECES = [
  'Salon', 'Cuisine', 'Chambre', 'Salle de bain', 'Bureau', 'Extérieur', 'Garage', 'Jardin'
];

const BUDGETS = [
  '< 1 000 €', '1 000 – 3 000 €', '3 000 – 8 000 €', '8 000 – 15 000 €', '> 15 000 €', 'À définir'
];

const TIMELINES = [
  'Dès que possible', 'Sous 1 mois', '1 à 3 mois', '3 à 6 mois', 'À définir'
];

function buildMessage(variant, data) {
  const title = variant === 'etude' ? 'Demande d\'étude technique' : 'Demande de devis';
  const services = data.services.length ? data.services.join(', ') : 'Non précisé';
  const pieces = data.pieces.length ? data.pieces.join(', ') : 'Non précisé';
  return (
    `${title}\n` +
    `Client: ${data.firstName} ${data.lastName}\n` +
    `Email: ${data.email}\n` +
    `Téléphone: ${data.phone}\n` +
    `Type: ${data.clientType}\n` +
    `Service(s): ${services}\n` +
    `Type de site: ${data.siteType || 'Non précisé'}\n` +
    `Surface: ${data.surface || 'Non précisée'} m²\n` +
    `Pièces: ${pieces}\n` +
    `Adresse d\'intervention: ${data.address || ''}, ${data.postalCode || ''} ${data.city || ''}\n` +
    `Budget: ${data.budget || 'Non précisé'}\n` +
    `Délai: ${data.timeline || 'Non précisé'}\n\n` +
    `Description du besoin:\n${data.description || '—'}\n`
  );
}

function encodeURIComponentRFC3986(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, c => '%' + c.charCodeAt(0).toString(16));
}

const LeadForm = ({ variant = 'devis' }) => {
  const { toast } = useToast();
  const [data, setData] = useState(defaultState);
  const isEtude = variant === 'etude';

  const availableServices = useMemo(() => {
    return mockData.services.map(s => s.title);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'services') {
      setData(prev => {
        const set = new Set(prev.services);
        if (checked) set.add(value); else set.delete(value);
        return { ...prev, services: Array.from(set) };
      });
      return;
    }
    if (name === 'pieces') {
      setData(prev => {
        const set = new Set(prev.pieces);
        if (checked) set.add(value); else set.delete(value);
        return { ...prev, pieces: Array.from(set) };
      });
      return;
    }
    if (type === 'checkbox') {
      setData(prev => ({ ...prev, [name]: checked }));
      return;
    }
    setData(prev => ({ ...prev, [name]: value }));
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({ title: 'Contenu copié', description: 'Votre demande a été copiée dans le presse-papiers.' });
    } catch (_) {
      // ignore
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!data.consent) {
      toast({ title: 'Consentement requis', description: 'Merci de valider la case RGPD pour continuer.' });
      return;
    }
    const msg = buildMessage(variant, data);
    const subject = isEtude ? 'Étude technique' : 'Devis';

    // Fallback: always copy to clipboard
    copyToClipboard(msg);

    switch (data.contactPref) {
      case 'email': {
        const mailto = `mailto:${mockData.contact.email}?subject=${encodeURIComponentRFC3986(subject)}&body=${encodeURIComponentRFC3986(msg)}`;
        window.location.href = mailto;
        break;
      }
      case 'whatsapp': {
        // Sans numéro spécifique: ouvre WhatsApp avec le texte, l\'utilisateur choisira le destinataire
        const wa = `https://wa.me/?text=${encodeURIComponentRFC3986(msg)}`;
        window.open(wa, '_blank');
        break;
      }
      case 'sms': {
        const sms = `sms:${mockData.contact.phone}?&body=${encodeURIComponentRFC3986(msg)}`;
        window.location.href = sms;
        break;
      }
      case 'telephone':
      default: {
        const tel = `tel:${mockData.contact.phone}`;
        window.location.href = tel;
        break;
      }
    }

    toast({ title: 'Demande prête à être envoyée', description: 'Nous vous recontacterons rapidement. (Message copié en cas de besoin.)' });
    setData(defaultState);
  };

  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="p-6 md:p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {isEtude ? "Formulaire d'étude technique" : 'Formulaire de demande de devis'}
        </h3>
        <p className="text-sm text-gray-600 mb-6">Remplissez les informations ci‑dessous, choisissez votre mode de contact (e‑mail, WhatsApp, SMS ou téléphone) et envoyez.</p>
        <form onSubmit={onSubmit} className="space-y-6">
          {/* Contexte */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="clientType">Vous êtes *</Label>
              <select id="clientType" name="clientType" value={data.clientType} onChange={handleChange} required className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg">
                <option value="particulier">Particulier</option>
                <option value="professionnel">Professionnel</option>
                <option value="collectivite">Collectivité</option>
              </select>
            </div>
            <div>
              <Label htmlFor="siteType">Type de site *</Label>
              <select id="siteType" name="siteType" value={data.siteType} onChange={handleChange} required className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg">
                <option value="">Sélectionner</option>
                <option value="maison">Maison</option>
                <option value="appartement">Appartement</option>
                <option value="bureau">Bureau</option>
                <option value="magasin">Magasin</option>
                <option value="entreprise">Entreprise</option>
                <option value="restaurant">Restaurant/Hôtel</option>
                <option value="camping">Camping</option>
                <option value="municipalite">Municipalité</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div>
              <Label htmlFor="surface">Surface (m²)</Label>
              <Input id="surface" name="surface" value={data.surface} onChange={handleChange} inputMode="numeric" className="mt-2" />
            </div>
          </div>

          {/* Services */}
          <div>
            <Label>Services concernés *</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
              {availableServices.map((s) => (
                <label key={s} className={`flex items-center gap-2 p-2 rounded-lg border ${data.services.includes(s) ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                  <input type="checkbox" name="services" value={s} checked={data.services.includes(s)} onChange={handleChange} />
                  <span className="text-sm">{s}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Pièces */}
          <div>
            <Label>Pièces concernées</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
              {PIECES.map((p) => (
                <label key={p} className={`flex items-center gap-2 p-2 rounded-lg border ${data.pieces.includes(p) ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                  <input type="checkbox" name="pieces" value={p} checked={data.pieces.includes(p)} onChange={handleChange} />
                  <span className="text-sm">{p}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Adresse */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <Label htmlFor="address">Adresse d'intervention</Label>
              <Input id="address" name="address" value={data.address} onChange={handleChange} className="mt-2" />
            </div>
            <div>
              <Label htmlFor="postalCode">Code postal</Label>
              <Input id="postalCode" name="postalCode" value={data.postalCode} onChange={handleChange} className="mt-2" />
            </div>
            <div className="md:col-span-3">
              <Label htmlFor="city">Ville</Label>
              <Input id="city" name="city" value={data.city} onChange={handleChange} className="mt-2" />
            </div>
          </div>

          {/* Budget & Délai */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="budget">Budget indicatif</Label>
              <select id="budget" name="budget" value={data.budget} onChange={handleChange} className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg">
                <option value="">Sélectionner</option>
                {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
            <div>
              <Label htmlFor="timeline">Délai souhaité</Label>
              <select id="timeline" name="timeline" value={data.timeline} onChange={handleChange} className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg">
                <option value="">Sélectionner</option>
                {TIMELINES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description">Décrivez votre besoin *</Label>
            <Textarea id="description" name="description" value={data.description} onChange={handleChange} required rows={5} placeholder="Ex: Éclairage connecté salon + cuisine, 8 points lumineux, 4 volets roulants, intégration alarme Ajax..." className="mt-2" />
          </div>

          {/* Coordonnées & Préférences */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">Prénom *</Label>
              <Input id="firstName" name="firstName" value={data.firstName} onChange={handleChange} required className="mt-2" />
            </div>
            <div>
              <Label htmlFor="lastName">Nom *</Label>
              <Input id="lastName" name="lastName" value={data.lastName} onChange={handleChange} required className="mt-2" />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" value={data.email} onChange={handleChange} required className="mt-2" />
            </div>
            <div>
              <Label htmlFor="phone">Téléphone *</nLabel>
              <Input id="phone" name="phone" type="tel" value={data.phone} onChange={handleChange} required className="mt-2" />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="contactPref">Préférence de contact *</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                {[
                  { key: 'email', label: 'E‑mail', icon: Mail },
                  { key: 'whatsapp', label: 'WhatsApp', icon: MessageSquare },
                  { key: 'sms', label: 'SMS', icon: MessageSquare },
                  { key: 'telephone', label: 'Téléphone', icon: Phone },
                ].map(({ key, label, icon: Icon }) => (
                  <label key={key} className={`cursor-pointer flex items-center gap-2 p-2 rounded-lg border ${data.contactPref === key ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                    <input type="radio" name="contactPref" value={key} checked={data.contactPref === key} onChange={handleChange} className="hidden" />
                    <Icon className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">{label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* RGPD */}
          <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
            <input type="checkbox" id="consent" name="consent" checked={data.consent} onChange={handleChange} className="mt-1" />
            <Label htmlFor="consent" className="text-sm text-gray-700">
              J\'accepte que mes données soient utilisées pour être recontacté(e) dans le cadre de ma demande. <a className="text-blue-600" href="/politique-confidentialite">Voir la politique de confidentialité</a>.
            </Label>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button type="submit" className="">Envoyer ma demande</Button>
            <Button type="button" variant="outline" onClick={() => copyToClipboard(buildMessage(variant, data))}>
              <Clipboard className="w-4 h-4 mr-2" /> Copier la demande
            </Button>
            <Button type="button" variant="secondary" asChild>
              <a href="/visite-gratuite">Ou planifier une visite Odoo</a>
            </Button>
          </div>

          <div className="text-xs text-gray-500 mt-3 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-600" />
            Pas de compte requis • Données non stockées côté serveur • Envoi via votre messagerie/WhatsApp
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default LeadForm;