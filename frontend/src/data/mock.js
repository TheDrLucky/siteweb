// Mock data for Godeloup Domotique website
export const mockData = {
  // Company information
  company: {
    name: "Godeloup Domotique",
    tagline: "Des solutions connectées pour l'intérieur et l'extérieur",
    description: "Godeloup Domotique est votre expert régional en domotique, sécurité, informatique et intelligence artificielle. Basée à Vitré en Bretagne, notre entreprise accompagne depuis 2015 les particuliers, professionnels et collectivités du Grand Ouest dans leurs projets technologiques sur-mesure. Nous proposons une approche globale : non seulement votre bâtiment (maison, bureau, commerce…) devient intelligent et sécurisé, mais vos extérieurs peuvent aussi être automatisés pour plus de confort et d'efficacité. Lumières, chauffage, alarmes, vidéosurveillance, contrôle d'accès, réseau informatique, robots tondeuses, arrosage automatique, assistants virtuels – nous intégrons toutes ces solutions au service de votre quotidien. Chaque projet est unique, et nous mettons un point d'honneur à offrir un service personnalisé alliant expertise technique et qualité artisanale.",
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
      subtitle: "Maison connectée et automatisation",
      description: "La domotique vise à rendre votre habitat plus confortable, éco-énergétique et facile à piloter. Godeloup Domotique transforme votre maison ou bâtiment en espace intelligent grâce à des solutions sur-mesure.",
      icon: "home",
      color: "blue",
      features: [
        "Éclairage intelligent qui s'adapte à la luminosité et à votre présence",
        "Thermostats connectés et gestion du chauffage/climatisation pièce par pièce pour réaliser jusqu'à 30% d'économies d'énergie",
        "Volets roulants et stores automatiques synchronisés avec le lever/coucher du soleil ou contrôlables à distance",
        "Systèmes audio/vidéo multiroom pour diffuser votre musique et gérer le home-cinéma dans toute la maison",
        "Appareils électroménagers connectés et scénarios de vie (mode réveil, départ, coucher…) qui simplifient votre quotidien"
      ],
      benefits: [
        "Contrôlez l'ensemble de votre maison depuis votre smartphone ou via des assistants vocaux",
        "Gagnez en confort de vie et simplicité d'utilisation",
        "Valorisez votre bien immobilier grâce à une installation domotique moderne",
        "Jusqu'à 30% d'économies d'énergie"
      ]
    },
    {
      id: "securite",
      title: "Sécurité",
      subtitle: "Alarmes et vidéosurveillance",
      description: "Protégez votre domicile ou votre entreprise 24h/24 grâce à nos solutions de sécurité de pointe. Nous installons des systèmes complets pour assurer votre sérénité.",
      icon: "shield",
      color: "red",
      features: [
        "Alarmes anti-intrusion intelligentes capables de détecter les effractions et de vous alerter instantanément, avec option de télésurveillance professionnelle pour une intervention rapide",
        "Vidéosurveillance HD avec caméras haute définition (vision nocturne, détection de mouvement) afin de surveiller vos entrées, jardins, parkings ou locaux sensibles en temps réel depuis une application mobile",
        "Contrôle d'accès sécurisé (badges, digicodes, biométrie) pour filtrer les entrées dans vos bâtiments ou pièces confidentielles, idéal pour bureaux, entrepôts ou résidences collectives",
        "Détecteurs de fumée, de gaz et d'inondation connectés pour vous alerter au moindre danger domestique ou industriel, évitant les sinistres",
        "Interphones vidéo et portiers connectés pour identifier vos visiteurs à distance et ouvrir portes ou portails depuis votre smartphone"
      ],
      benefits: [
        "Renforcent la protection de vos proches, de vos employés et de vos biens",
        "Tranquillité d'esprit absolue 24h/24",
        "Réduction potentielle de vos primes d'assurance",
        "Environnement sécurisé en permanence"
      ]
    },
    {
      id: "informatique",
      title: "Informatique",
      subtitle: "Solutions IT professionnelles",
      description: "Nous mettons également à profit nos compétences en informatique pour optimiser vos infrastructures numériques. Que ce soit pour un usage domestique avancé ou pour une PME, nous proposons.",
      icon: "monitor",
      color: "green",
      features: [
        "Réseaux informatiques fiables et Wi-Fi professionnel : installation de routeurs, switchs et bornes Wi-Fi performants pour une couverture optimale sans coupures, y compris dans les grands bâtiments ou à l'extérieur",
        "Serveurs NAS et solutions de sauvegarde : centralisation de vos données, mises en place de serveurs de stockage en réseau et stratégies de sauvegarde automatique pour sécuriser vos fichiers importants",
        "Sécurité informatique : pare-feux (firewall), antivirus gérés, VPN d'entreprise, audit de vulnérabilité afin de protéger vos données et prévenir les cyberattaques",
        "Maintenance et support : maintenance préventive de votre parc informatique, dépannage rapide sur site ou à distance de vos PC/Mac, mise à jour de logiciels et accompagnement au quotidien",
        "Solutions Cloud et télétravail : mise en place d'outils collaboratifs en ligne, de connexions sécurisées pour le travail à distance et de services cloud adaptés à votre activité"
      ],
      benefits: [
        "Votre productivité augmente",
        "Les risques de panne sont réduits",
        "Support technique réactif en cas de besoin",
        "Système d'information robuste et évolutif"
      ]
    },
    {
      id: "ia",
      title: "Intelligence Artificielle",
      subtitle: "Assistants virtuels et automatisation IA",
      description: "L'intelligence artificielle est le nouvel atout pour booster votre activité et votre relation client. Grâce à notre partenariat avec Limova – une solution d'IA conversationnelle de nouvelle génération en marque blanche – nous intégrons l'IA au service de vos projets.",
      icon: "brain",
      color: "purple",
      features: [
        "Chatbots intelligents : des agents virtuels capables de dialoguer naturellement avec vos clients sur votre site web ou vos réseaux sociaux, pour répondre aux questions fréquentes, qualifier les demandes et même prendre des rendez-vous ou générer des devis automatiquement",
        "Assistants vocaux personnalisés : déploiement d'assistants vocaux sur vos équipements connectés ou bornes d'accueil, afin de guider les utilisateurs ou clients par la voix",
        "Automatisation des processus : utilisation de l'IA pour traiter plus rapidement certaines tâches répétitives (analyse de données, rapports, tri de demandes) et vous faire gagner un temps précieux",
        "Analyse prédictive : implémentez des outils d'IA capables d'anticiper les pannes (maintenance prédictive) ou de mieux comprendre le comportement de vos clients afin d'optimiser vos services",
        "Formation et accompagnement : nous vous formons à l'utilisation de ces nouveaux outils et assurons le suivi pour améliorer en continu les performances de vos agents virtuels (apprentissage automatique basé sur les interactions réelles)"
      ],
      benefits: [
        "Expérience innovante à vos clients tout en améliorant votre efficacité interne",
        "Agents conversationnels ultra-performants sous votre propre marque",
        "Avantage concurrentiel durable pour votre entreprise",
        "Solution personnalisable quel que soit votre secteur"
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
    title: "Godeloup Domotique IA powered by Limova",
    subtitle: "L'IA conversationnelle nouvelle génération",
    description: "Découvrez Limova, notre solution IA en marque blanche qui révolutionne l'interaction client avec des agents virtuels ultra-performants et personnalisables.",
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
    mission: "Notre mission est de transformer votre habitat et vos espaces de travail en environnements intelligents, sécurisés et efficaces. Nous croyons que la technologie doit servir l'humain et simplifier le quotidien, tout en respectant vos besoins spécifiques et votre budget.",
    values: "Nos valeurs s'articulent autour de l'excellence technique, du service personnalisé et de la proximité. Nous privilégions une approche artisanale où chaque installation est réalisée avec soin, dans le respect des normes et avec un souci constant de la qualité.",
    interventionZone: "Basés à Vitré en Ille-et-Vilaine, nous intervenons dans un rayon de 50 km autour de notre siège social. Notre zone d'intervention principale couvre les départements de l'Ille-et-Vilaine (35), de la Mayenne (53) et les zones limitrophes des Côtes-d'Armor (22) et de la Loire-Atlantique (44). Cette proximité géographique nous permet d'assurer un service réactif, que ce soit pour les interventions d'urgence, la maintenance ou le suivi de vos installations.",
    values_details: [
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
      "Partenaire Grundig Security",
      "Formation continue"
    ]
  }
};

export default mockData;