// Données boutique pour Godeloup Domotique
export const boutiqueData = {
  // Packs principaux
  packs: [
    {
      id: "pack-essentiel",
      title: "Pack Essentiel Domotique",
      subtitle: "Démarrez votre maison connectée",
      price: 499.99,
      originalPrice: 599.99,
      currency: "€",
      category: "domotique",
      featured: true,
      description: "Solution complète pour débuter en domotique avec serveur Home Assistant et antenne Zigbee",
      image: "/boutique/pack-essentiel.jpg",
      includes: [
        "1 serveur Home Assistant configuré",
        "1 antenne Zigbee intégrée", 
        "Configuration initiale personnalisée",
        "Formation utilisateur incluse",
        "Support technique 3 mois",
        "Garantie matériel 2 ans"
      ],
      benefits: [
        "Installation clé en main",
        "Compatible avec 100+ marques",
        "Contrôle smartphone inclus",
        "Évolutif selon vos besoins"
      ],
      technical: {
        connectivity: "Zigbee 3.0, Wi-Fi, Ethernet",
        compatibility: "Philips Hue, Ikea, Aqara, Sonoff...",
        range: "Jusqu'à 50 appareils connectés",
        warranty: "2 ans matériel + 3 mois support"
      }
    }
  ],

  // Services individuels
  services: [
    {
      id: "volet-connecte",
      title: "Volet Roulant Connecté",
      subtitle: "Automatisation volet par volet",
      price: 79.99,
      currency: "€",
      category: "domotique",
      type: "service",
      description: "Installation et configuration d'un volet roulant connecté avec contrôle smartphone",
      image: "/boutique/volet-connecte.jpg",
      includes: [
        "Module de motorisation",
        "Configuration domotique",
        "Intégration smartphone",
        "Test de fonctionnement",
        "Formation utilisateur"
      ],
      technical: {
        compatibility: "Moteurs Somfy, Nice, Faac",
        control: "Smartphone, télécommande, vocal",
        installation: "1h par volet",
        warranty: "1 an garantie"
      }
    },
    {
      id: "lumiere-connectee",
      title: "Éclairage Connecté",
      subtitle: "Lumière intelligente par pièce",
      price: 79.99,
      currency: "€", 
      category: "domotique",
      type: "service",
      description: "Installation d'éclairage connecté avec variateur et contrôle automatique",
      image: "/boutique/lumiere-connectee.jpg",
      includes: [
        "Variateur connecté",
        "Configuration scenarios",
        "Détection automatique",
        "Programmation horaire",
        "Formation utilisateur"
      ],
      technical: {
        compatibility: "LED, halogène, fluo",
        features: "Variation, couleur (option)",
        control: "Smartphone, détecteurs",
        warranty: "2 ans matériel"
      }
    },
    {
      id: "scenario-volet-complexe",
      title: "Scénarios Volets Complexes",
      subtitle: "Automatisation avancée multi-volets",
      price: 349.99,
      currency: "€",
      category: "domotique", 
      type: "service",
      premium: true,
      description: "Programmation de scénarios automatiques complexes pour l'ensemble de vos volets",
      image: "/boutique/scenario-complexe.jpg",
      includes: [
        "Analyse de votre habitat",
        "Scénarios météo intelligents", 
        "Programmation lever/coucher",
        "Simulation de présence",
        "Intégration sécurité",
        "Formation avancée"
      ],
      technical: {
        scenarios: "Lever, coucher, météo, sécurité",
        automation: "Capteurs météo, détecteurs",
        integration: "Alarme, éclairage, chauffage",
        warranty: "1 an + maintenance"
      }
    }
  ],

  // Services par catégorie
  categories: {
    domotique: {
      title: "Domotique",
      description: "Solutions de maison connectée",
      icon: "Home",
      color: "blue"
    },
    securite: {
      title: "Sécurité", 
      description: "Protection et surveillance",
      icon: "Shield",
      color: "red"
    },
    informatique: {
      title: "Informatique",
      description: "Infrastructure IT",
      icon: "Monitor", 
      color: "green"
    },
    ia: {
      title: "Intelligence Artificielle",
      description: "Solutions IA sur mesure",
      icon: "Brain",
      color: "purple"
    }
  },

  // Services sécurité (exemples)
  securiteServices: [
    {
      id: "ajax-alarme-starter",
      title: "Pack Ajax Alarme Starter",
      subtitle: "Protection de base",
      price: 299.99,
      currency: "€",
      category: "securite",
      description: "Kit alarme Ajax Systems pour protection périmétrique de base",
      image: "/boutique/ajax-starter.jpg",
      includes: [
        "Hub Ajax noir ou blanc",
        "2 détecteurs volumétriques",
        "2 détecteurs d'ouverture", 
        "1 télécommande",
        "Configuration complète"
      ],
      technical: {
        range: "Portée radio 2km",
        connectivity: "WiFi, Ethernet, 4G",
        warranty: "5 ans fabricant",
        monitoring: "24h autonomie"
      }
    },
    {
      id: "videosurveillance-grundig",
      title: "Pack Vidéosurveillance Grundig",
      subtitle: "Surveillance HD professionnelle",
      price: 899.99,
      currency: "€",
      category: "securite",
      description: "Système vidéosurveillance Grundig 4 caméras avec enregistreur",
      image: "/boutique/grundig-pack.jpg",
      includes: [
        "4 caméras IP 4K Grundig",
        "Enregistreur NVR 8 voies",
        "Disque dur 2TB",
        "Câblage et installation",
        "Configuration accès distant"
      ],
      technical: {
        resolution: "4K Ultra HD",
        storage: "2TB extensible à 8TB",
        nightvision: "Vision nocturne 30m",
        warranty: "3 ans fabricant"
      }
    },
    {
      id: "controle-acces-badge",
      title: "Contrôle d'Accès par Badge",
      subtitle: "Sécurisation des accès",
      price: 449.99,
      currency: "€",
      category: "securite",
      description: "Système de contrôle d'accès professionnel avec lecteurs de badges",
      image: "/boutique/controle-acces.jpg",
      includes: [
        "2 lecteurs de badges",
        "Centrale de contrôle",
        "50 badges RFID",
        "Logiciel de gestion",
        "Installation et formation"
      ],
      technical: {
        users: "Jusqu'à 500 utilisateurs",
        connectivity: "TCP/IP, RS485",
        compatibility: "Badges RFID/NFC",
        warranty: "2 ans installation"
      }
    }
  ],

  // Options et services additionnels
  options: {
    installation: {
      title: "Installation sur site",
      description: "Déplacement et installation par nos techniciens",
      price: 120,
      currency: "€",
      unit: "intervention"
    },
    formation: {
      title: "Formation utilisateur avancée",
      description: "Session de 2h pour maîtriser votre installation",
      price: 80,
      currency: "€", 
      unit: "session"
    },
    maintenance: {
      title: "Contrat maintenance annuel",
      description: "Support prioritaire et maintenance préventive",
      price: 180,
      currency: "€",
      unit: "an"
    }
  },

  // Informations de livraison et garanties
  delivery: {
    zones: [
      { name: "Bretagne", price: 0, delay: "24-48h" },
      { name: "Pays de la Loire", price: 25, delay: "48-72h" },
      { name: "Normandie", price: 35, delay: "3-5 jours" },
      { name: "France métropolitaine", price: 50, delay: "5-7 jours" }
    ],
    freeDeliveryThreshold: 500
  },

  warranty: {
    standard: "2 ans matériel",
    premium: "3 ans matériel + support",
    installation: "1 an garantie installation"
  }
};

export default boutiqueData;