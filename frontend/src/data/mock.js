// Mock data for Godeloup Domotique website
export const mockData = {
  // Company information
  company: {
    name: "Godeloup Domotique",
    tagline: "Des solutions connectées pour l'intérieur et l'extérieur",
    description: "Godeloup Domotique est votre expert régional en domotique, sécurité, informatique et intelligence artificielle. Basée à Vitré en Bretagne, notre entreprise accompagne depuis 2015 les particuliers, professionnels et collectivités du Grand Ouest dans leurs projets technologiques sur-mesure.",
    mission: "Nous proposons une approche globale : non seulement votre bâtiment (maison, bureau, commerce…) devient intelligent et sécurisé, mais vos extérieurs peuvent aussi être automatisés pour plus de confort et d'efficacité.",
    specialties: "Lumières, chauffage, alarmes, vidéosurveillance, contrôle d'accès, réseau informatique, robots tondeuses, arrosage automatique, assistants virtuels – nous intégrons toutes ces solutions au service de votre quotidien.",
    approach: "Chaque projet est unique, et nous mettons un point d'honneur à offrir un service personnalisé alliant expertise technique et qualité artisanale.",
    founded: "2015",
    location: "Vitré, Bretagne",
    phone: "02 99 XX XX XX",
    email: "contact@godeloupdomotique.fr",
    address: "Vitré, Bretagne - Intervention Grand Ouest",
    logo: "/logo-godeloup.png"
  },

  // Navigation menu
  navigation: [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "À propos", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Limova IA", path: "/limova" },
    { name: "Contact", path: "/contact" }
  ],

  // Main services
  services: [
    {
      id: "domotique",
      title: "Domotique",
      subtitle: "Maison connectée et intelligente",
      description: "Transformez votre habitat en maison intelligente avec nos solutions domotiques sur-mesure. Contrôle centralisé, économies d'énergie et confort optimal.",
      icon: "Home",
      color: "blue",
      features: [
        "Éclairage intelligent et automatisation",
        "Contrôle de la température et climatisation",
        "Gestion des volets et stores automatiques",
        "Système audio et vidéo multiroom",
        "Sécurité intégrée et alarmes connectées"
      ],
      benefits: [
        "Réduction jusqu'à 30% de votre consommation énergétique",
        "Confort et simplicité d'utilisation",
        "Valorisation de votre bien immobilier",
        "Contrôle à distance via smartphone"
      ]
    },
    {
      id: "securite",
      title: "Sécurité",
      subtitle: "Protection avancée 24h/24",
      description: "Protégez votre domicile ou entreprise avec nos systèmes de sécurité de pointe : alarmes, vidéosurveillance et contrôle d'accès pour une sérénité totale.",
      icon: "Shield",
      color: "red",
      features: [
        "Alarmes anti-intrusion intelligentes",
        "Vidéosurveillance HD avec vision nocturne",
        "Contrôle d'accès biométrique",
        "Détecteurs de fumée et gaz connectés",
        "Télésurveillance professionnelle"
      ],
      benefits: [
        "Protection 24h/24, 7j/7",
        "Réduction des primes d'assurance",
        "Intervention rapide en cas d'alerte",
        "Tranquillité d'esprit absolue"
      ]
    },
    {
      id: "informatique",
      title: "Informatique",
      subtitle: "Solutions IT professionnelles",
      description: "Optimisez votre infrastructure informatique avec nos services experts : réseaux, serveurs NAS, sécurité des données et maintenance préventive.",
      icon: "Monitor",
      color: "green",
      features: [
        "Installation et configuration de réseaux",
        "Serveurs NAS et sauvegarde de données",
        "Sécurisation informatique et antivirus",
        "Maintenance et dépannage PC/Mac",
        "Solutions Cloud et télétravail"
      ],
      benefits: [
        "Amélioration de la productivité",
        "Sécurité renforcée des données",
        "Réduction des pannes et temps d'arrêt",
        "Support technique réactif"
      ]
    },
    {
      id: "intelligence-artificielle",
      title: "Intelligence Artificielle",
      subtitle: "L'IA au service de votre activité",
      description: "Intégrez l'intelligence artificielle dans votre quotidien professionnel avec nos solutions Limova : chatbots, assistants virtuels et automatisation intelligente.",
      icon: "Brain",
      color: "purple",
      features: [
        "Chatbots intelligents personnalisés",
        "Assistants virtuels métier",
        "Automatisation des processus",
        "Analyse prédictive de données",
        "Formation et accompagnement IA"
      ],
      benefits: [
        "Automatisation des tâches répétitives",
        "Amélioration de l'expérience client",
        "Optimisation des processus métier",
        "Avantage concurrentiel durable"
      ]
    }
  ],

  // Hero section content
  hero: {
    title: "Expert en solutions connectées dans le Grand Ouest",
    subtitle: "Domotique • Sécurité • Informatique • Intelligence Artificielle",
    description: "Depuis Vitré, nous accompagnons particuliers et professionnels dans leurs projets technologiques sur-mesure. Une approche artisanale pour des solutions innovantes.",
    ctaPrimary: "Demander un devis gratuit",
    ctaSecondary: "Découvrir nos services"
  },

  // Trusted clients
  clients: [
    { name: "FDJ", logo: "/clients/fdj.png" },
    { name: "Bimedia", logo: "/clients/bimedia.png" },
    { name: "Paritel", logo: "/clients/paritel.png" },
    { name: "EpackPro", logo: "/clients/epack.png" },
    { name: "Interway", logo: "/clients/interway.png" }
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "Marie Dubois",
      role: "Particulier, Rennes",
      content: "Installation domotique parfaite ! Ma maison est maintenant intelligente et j'économise 25% sur ma facture énergétique. Service professionnel et suivi impeccable.",
      rating: 5
    },
    {
      id: 2,
      name: "Jean-Pierre Martin",
      role: "Dirigeant PME, Laval",
      content: "Système de sécurité installé par Godeloup très efficace. Vidéosurveillance et alarmes parfaitement intégrées. Équipe compétente et réactive.",
      rating: 5
    },
    {
      id: 3,
      name: "Sophie Laurent",
      role: "Architecte, Nantes",
      content: "Solutions informatiques sur-mesure pour notre cabinet. Réseau optimisé et sauvegardes automatiques. Très satisfaite du professionnalisme.",
      rating: 5
    }
  ],

  // Blog articles
  blogArticles: [
    {
      id: 1,
      title: "Les tendances domotique 2024 : vers la maison ultra-connectée",
      slug: "tendances-domotique-2024",
      excerpt: "Découvrez les dernières innovations en domotique qui révolutionnent notre quotidien : IA intégrée, économies d'énergie et nouveaux protocoles...",
      content: "La domotique évolue rapidement en 2024 avec l'intégration massive de l'intelligence artificielle...",
      author: "Équipe Godeloup",
      date: "2024-03-15",
      category: "Domotique",
      image: "/blog/domotique-2024.jpg",
      tags: ["domotique", "tendances", "maison connectée", "IA"]
    },
    {
      id: 2,
      title: "Sécurité informatique : protéger son entreprise des cyberattaques",
      slug: "securite-informatique-entreprise",
      excerpt: "Les cyberattaques augmentent chaque année. Comment protéger efficacement votre entreprise avec les bonnes pratiques et outils...",
      content: "La cybersécurité est devenue un enjeu majeur pour toutes les entreprises...",
      author: "Équipe Godeloup",
      date: "2024-03-10",
      category: "Informatique",
      image: "/blog/cyber-securite.jpg",
      tags: ["sécurité", "informatique", "cyberattaques", "protection"]
    },
    {
      id: 3,
      title: "Intelligence artificielle : comment l'IA transforme les entreprises",
      slug: "ia-transformation-entreprises",
      excerpt: "L'IA révolutionne les processus métier. Découvrez comment intégrer intelligemment ces technologies dans votre activité...",
      content: "L'intelligence artificielle n'est plus science-fiction mais réalité business...",
      author: "Équipe Godeloup",
      date: "2024-03-05",
      category: "IA",
      image: "/blog/ia-entreprise.jpg",
      tags: ["IA", "intelligence artificielle", "transformation", "business"]
    }
  ],

  // Limova AI section
  limova: {
    title: "Limova Intelligence Artificielle",
    subtitle: "L'IA conversationnelle nouvelle génération",
    description: "Découvrez Limova, notre partenaire IA qui révolutionne l'interaction client avec des agents virtuels ultra-performants et personnalisables.",
    website: "https://www.limova.ai",
    
    presentation: {
      title: "Pourquoi choisir Limova ?",
      features: [
        {
          title: "IA Conversationnelle Avancée",
          description: "Agents virtuels capables de comprendre et répondre naturellement à vos clients en français."
        },
        {
          title: "Marque Blanche",
          description: "Solution entièrement personnalisable aux couleurs et à l'image de votre entreprise."
        },
        {
          title: "Intégration Simplifiée", 
          description: "Déploiement rapide sur votre site web, applications ou plateformes existantes."
        },
        {
          title: "Apprentissage Continu",
          description: "L'IA s'améliore automatiquement grâce aux interactions avec vos clients."
        }
      ]
    },

    agents: [
      {
        id: "lena",
        name: "Léna",
        role: "Assistante Commerciale IA",
        description: "Spécialisée dans l'accueil client, la qualification des besoins et la génération de devis automatiques pour nos services domotique, sécurité et informatique.",
        capabilities: [
          "Accueil et orientation clients",
          "Qualification des besoins techniques",
          "Génération de devis automatiques",
          "Prise de rendez-vous",
          "Support technique niveau 1"
        ],
        avatar: "/agents/lena-avatar.png",
        status: "En ligne"
      },
      {
        id: "tech-expert",
        name: "TechExpert",
        role: "Conseiller Technique IA",
        description: "Assistant technique spécialisé dans le conseil en solutions domotiques et informatiques. Aide au dimensionnement et configuration des systèmes.",
        capabilities: [
          "Conseil technique approfondi",
          "Dimensionnement de solutions",
          "Comparatif de produits",
          "Assistance configuration",
          "Diagnostic de pannes"
        ],
        avatar: "/agents/tech-avatar.png",
        status: "En ligne"
      },
      {
        id: "security-advisor",
        name: "SecuriBot",
        role: "Expert Sécurité IA",
        description: "Spécialiste en conseils sécurité, audit de vulnérabilités et recommandations de protection pour particuliers et entreprises.",
        capabilities: [
          "Audit sécurité personnalisé",
          "Conseils protection adaptés",
          "Analyse des vulnérabilités",
          "Recommandations équipements",
          "Formation sécurité"
        ],
        avatar: "/agents/security-avatar.png",
        status: "En ligne"
      }
    ]
  },

  // Contact information
  contact: {
    phone: "02 99 XX XX XX",
    email: "contact@godeloupdomotique.fr",
    address: "Zone d'activité, Vitré 35500",
    hours: "Lun-Ven: 8h-18h, Sam: 9h-12h",
    interventionZone: "Bretagne, Pays de la Loire, Normandie",
    
    socialMedia: {
      facebook: "https://facebook.com/godeloupdomotique",
      linkedin: "https://linkedin.com/company/godeloup-domotique",
      youtube: "https://youtube.com/@godeloupdomotique"
    }
  },

  // About section
  about: {
    title: "Godeloup Domotique, votre partenaire technologique de confiance",
    story: "Depuis 2015, Godeloup Domotique accompagne particuliers et professionnels du Grand Ouest dans leurs projets technologiques. Notre approche artisanale allie expertise technique et service personnalisé pour des solutions sur-mesure parfaitement adaptées à vos besoins.",
    values: [
      {
        title: "Expertise Technique",
        description: "Une équipe de spécialistes certifiés dans tous nos domaines d'intervention."
      },
      {
        title: "Service Personnalisé", 
        description: "Chaque projet est unique, nous adaptons nos solutions à vos besoins spécifiques."
      },
      {
        title: "Qualité Artisanale",
        description: "Installations soignées et finitions impeccables, dans le respect des normes."
      },
      {
        title: "Proximité Régionale",
        description: "Basés en Bretagne, nous intervenons rapidement dans tout le Grand Ouest."
      }
    ],
    certifications: [
      "Certifié Ajax Baseline/Fibra/Superior",
      "Certifié Control4 domotique",
      "Partenaire Schneider Electric",
      "Agréé Assurance Qualibat", 
      "Formation continue"
    ]
  }
};

export default mockData;