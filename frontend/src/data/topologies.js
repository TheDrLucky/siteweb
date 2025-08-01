// Nouvelle structure par topologies - Godeloup Domotique Vitré
export const topologieData = {
  // Zone d'intervention géographique
  zones: {
    principal: {
      ville: "Vitré",
      codePostal: "35500",
      rayonKm: 30,
      slogan: "Votre expert en solutions connectées à Vitré et dans un rayon de 30 km"
    },
    codesPostaux: [
      {
        code: "35133",
        communes: ["Beaucé", "Billé", "Javené", "Lécousse", "Parigné", "Le Châtellier", "Saint‑Germain‑en‑Coglès"]
      },
      {
        code: "35140", 
        communes: ["La Chapelle‑St‑Aubert", "Saint‑Georges‑de‑Chesné", "Saint‑Jean‑sur‑Couesnon", "Saint‑Ouen‑des‑Alleux", "Vendel"]
      },
      {
        code: "35210",
        communes: ["Châtillon‑en‑Vendelais", "Combourtillé", "Parcé", "Princé"]
      },
      {
        code: "35220",
        communes: ["Châteaubourg", "Marpiré", "Saint‑Didier", "Saint‑Jean‑sur‑Vilaine"]
      },
      {
        code: "35340",
        communes: ["Liffré", "Ércé‑près‑Liffré", "La Bouëxière"]
      },
      {
        code: "35370",
        communes: ["Bréal‑sous‑Vitré", "Étrelles", "Brielles", "Argentré‑du‑Plessis", "Mondevert"]
      },
      {
        code: "35450",
        communes: ["Val‑d'Izé", "Livré‑sur‑Changeon", "Mecé", "Dourdain", "Landavran"]
      },
      {
        code: "35500",
        communes: ["Vitré", "Balazé", "Erbrée", "Champeaux", "Cornillé", "Pocé‑les‑Bois", "Saint‑Aubin‑des‑Landes", "Saint‑M'Hervé", "Taillis"]
      },
      {
        code: "35680",
        communes: ["Bais", "Louvigné‑de‑Bais", "Vergéal", "Domalain", "Moulins"]
      },
      {
        code: "53380",
        communes: ["Juvigné", "La Croixille", "Saint‑Hilaire‑du‑Maine"]
      },
      {
        code: "53410",
        communes: ["Le Bourgneuf‑la‑Forêt", "La Gravelle", "Saint‑Pierre‑la‑Cour", "Launay‑Villiers"]
      }
    ]
  },

  // Typologies de clients
  topologies: {
    residentiel: {
      id: "residentiel",
      title: "RÉSIDENTIEL",
      subtitle: "Solutions domotique pour particuliers",
      description: "Maison intelligente et sécurisée. Automatisation complète de votre domicile pour plus de confort et sécurité.",
      icon: "Home",
      color: "blue",
      image: "/topologies/residentiel.jpg",
      
      solutions: [
        {
          category: "Domotique Résidentielle",
          services: [
            "Éclairage intelligent et automatisation",
            "Gestion du chauffage connecté",
            "Volets roulants automatiques",
            "Arrosage automatique du jardin",
            "Scénarios personnalisés (réveil, départ, coucher)",
            "Contrôle d'accès (portail, garage, porte d'entrée)"
          ]
        },
        {
          category: "Sécurité Domestique", 
          services: [
            "Alarme anti-intrusion connectée",
            "Vidéosurveillance périphérique",
            "Détecteurs de fumée et monoxyde",
            "Simulation de présence",
            "Interphone vidéo",
            "Télésurveillance 24h/24"
          ]
        },
        {
          category: "Multimédia & Confort",
          services: [
            "Audio multiroom dans toute la maison", 
            "Installation home cinéma",
            "Wi-Fi professionnel optimisé",
            "Gestion énergétique intelligente",
            "Robots tondeuses connectés (Mammotion LUBA, Hooki M1)"
          ]
        },
        {
          category: "Entretien Automatisé",
          services: [
            "Robot tondeuse Mammotion LUBA (navigation RTK)",
            "Robot tondeuse Hooki M1 (intelligence artificielle)",
            "Installation sans câble périmètrique",
            "Application smartphone dédiée",
            "Maintenance et hivernage inclus"
          ]
        }
      ],
      
      avantages: [
        "Confort de vie amélioré",
        "Économies d'énergie jusqu'à 30%",
        "Sécurité renforcée 24h/24",
        "Valorisation de votre patrimoine",
        "Contrôle à distance via smartphone"
      ],
      
      exemples: [
        "Maison 4 pièces à Vitré - Installation domotique complète",
        "Villa Châteaubourg - Sécurité périmétrique et vidéosurveillance", 
        "Résidence Liffré - Chauffage connecté et volets automatiques"
      ]
    },

    bureau: {
      id: "bureau",
      title: "BUREAU",
      subtitle: "Espaces de travail connectés TPE/PME",
      description: "Environnement professionnel intelligent. Solutions IT, domotique et sécurité pour optimiser productivité et confort de vos équipes.",
      icon: "Briefcase",
      color: "green",
      image: "/topologies/bureau.jpg",
      
      solutions: [
        {
          category: "Infrastructure IT",
          services: [
            "Réseau informatique professionnel",
            "Wi-Fi entreprise sécurisé",
            "Serveur NAS et sauvegarde",
            "Sécurité informatique et firewall",
            "Solutions cloud et télétravail"
          ]
        },
        {
          category: "Domotique Bureau",
          services: [
            "Éclairage adaptatif automatique",
            "Gestion climatisation intelligente", 
            "Contrôle d'accès par badge",
            "Stores motorisés anti-éblouissement",
            "Salles de réunion connectées"
          ]
        },
        {
          category: "Sécurité Professionnelle",
          services: [
            "Alarme anti-intrusion professionnelle",
            "Vidéosurveillance HD des locaux",
            "Contrôle d'accès biométrique",
            "Détection incendie connectée",
            "Télésurveillance avec intervention"
          ]
        }
      ],
      
      avantages: [
        "Productivité des équipes optimisée",
        "Réduction des coûts énergétiques",
        "Sécurité des données et locaux",
        "Image professionnelle moderne",
        "Gestion centralisée à distance"
      ],
      
      exemples: [
        "Cabinet d'avocat Vitré - Infrastructure complète",
        "Agence immobilière Châteaubourg - Sécurité et domotique",
        "Bureau d'études Liffré - Réseau et télétravail"
      ]
    },

    entreprise: {
      id: "entreprise", 
      title: "ENTREPRISE",
      subtitle: "Solutions industrielles et PME",
      description: "Sécurité industrielle et automatisation. Systèmes robustes pour sites industriels, entrepôts et PME industrielles.",
      icon: "Building2",
      color: "purple",
      image: "/topologies/entreprise.jpg",
      
      solutions: [
        {
          category: "Sécurité Industrielle",
          services: [
            "Vidéosurveillance périmétrique haute sécurité",
            "Contrôle d'accès multi-niveaux",
            "Alarme anti-intrusion industrielle",
            "Détection technique (fumée, gaz, inondation)",
            "Télésurveillance avec intervention rapide",
            "Système de badges et pointeuses"
          ]
        },
        {
          category: "Automation Industrielle",
          services: [
            "Éclairage industriel intelligent",
            "Gestion CVC (Climatisation/Ventilation/Chauffage)",
            "Automatisation des accès véhicules",
            "Monitoring énergétique avancé",
            "Scénarios de production optimisés"
          ]
        },
        {
          category: "IT & Réseaux",
          services: [
            "Infrastructure réseau d'entreprise",
            "Serveurs et datacenter",
            "Sécurité informatique avancée",
            "Solutions cloud hybrides",
            "Supervision et maintenance"
          ]
        }
      ],
      
      avantages: [
        "Sécurité maximale des installations",
        "Optimisation des coûts opérationnels", 
        "Conformité réglementaire assurée",
        "Monitoring temps réel",
        "Intervention maintenance prédictive"
      ],
      
      exemples: [
        "Usine agroalimentaire Vitré - Sécurité complète",
        "Entrepôt logistique Châteaubourg - Automation",
        "Atelier mécanique Liffré - Vidéosurveillance et accès"
      ]
    },

    magasin: {
      id: "magasin",
      title: "MAGASIN", 
      subtitle: "Commerce de détail sécurisé",
      description: "Protection anti-vol et optimisation commerciale. Sécurité, confort client et gestion énergétique pour booster vos ventes.",
      icon: "ShoppingBag",
      color: "orange",
      image: "/topologies/magasin.jpg",
      
      solutions: [
        {
          category: "Sécurité Commerce",
          services: [
            "Vidéosurveillance anti-vol HD",
            "Alarme anti-intrusion silencieuse",
            "Portiques antivol électroniques",
            "Coffre-fort connecté",
            "Télésurveillance commerçant",
            "Système anti-hold-up"
          ]
        },
        {
          category: "Confort Client",
          services: [
            "Éclairage showcase automatique",
            "Climatisation intelligente zones",
            "Musique d'ambiance multiroom",
            "Accueil client automatisé",
            "Comptage de passage clients"
          ]
        },
        {
          category: "Gestion Énergétique",
          services: [
            "Éclairage LED basse consommation",
            "Gestion automatique chauffage/clim",
            "Monitoring consommation temps réel",
            "Programmation horaires d'ouverture",
            "Optimisation facture énergétique"
          ]
        }
      ],
      
      avantages: [
        "Réduction des vols et démarque",
        "Ambiance commerciale optimisée",
        "Économies d'énergie substantielles",
        "Tranquillité d'esprit totale",
        "Image moderne et professionnelle"
      ],
      
      exemples: [
        "Boulangerie Vitré - Sécurité et éclairage",
        "Pharmacie Châteaubourg - Vidéosurveillance complète",
        "Magasin de vêtements Liffré - Anti-vol et ambiance"
      ]
    },

    restaurant: {
      id: "restaurant",
      title: "RESTAURANT / HÔTEL",
      subtitle: "Solutions CHR professionnelles",
      description: "Sécurité, confort client et gestion hôtelière. Technologies sur-mesure pour restaurants, bars et hôtels.",
      icon: "UtensilsCrossed",
      color: "red",
      image: "/topologies/restaurant.jpg",
      
      solutions: [
        {
          category: "Sécurité CHR",
          services: [
            "Vidéosurveillance cuisine et salle",
            "Alarme anti-intrusion restaurant",
            "Contrôle d'accès personnel",
            "Coffre-fort recettes connecté", 
            "Détection gaz cuisine professionnelle",
            "Télésurveillance 24h/24"
          ]
        },
        {
          category: "Confort Client",
          services: [
            "Éclairage d'ambiance restaurant",
            "Climatisation zones individualisées",
            "Sonorisation restaurant/bar",
            "Écrans affichage menu dynamique",
            "Wi-Fi client haut débit"
          ]
        },
        {
          category: "Gestion Hôtelière",
          services: [
            "Contrôle d'accès chambres (badges)",
            "Domotique chambres (éclairage, température)",
            "Interphone et portier vidéo",
            "Gestion centralisée bâtiment",
            "Système de réservation connecté"
          ]
        }
      ],
      
      avantages: [
        "Sécurité clients et personnel assurée",
        "Ambiance et confort optimisés",
        "Gestion énergétique automatisée",
        "Surveillance cuisine (HACCP)",
        "Expérience client améliorée"
      ],
      
      exemples: [
        "Restaurant Vitré - Sécurité et ambiance complète",
        "Hôtel Châteaubourg - Domotique chambres",
        "Bar Liffré - Sonorisation et vidéosurveillance"
      ]
    },

    senior: {
      id: "senior", 
      title: "RÉSIDENCE SENIOR",
      subtitle: "EHPAD et établissements de santé",
      description: "Sécurité et bien-être des résidents. Technologies spécialisées pour EHPAD, maisons de retraite et cliniques.",
      icon: "Heart",
      color: "pink",
      image: "/topologies/senior.jpg",
      
      solutions: [
        {
          category: "Sécurité Résidents",
          services: [
            "Vidéosurveillance périmètre et couloirs",
            "Contrôle d'accès sécurisé visiteurs",
            "Détection chute et malaise",
            "Alarme anti-fugue résidents",
            "Système d'appel malade", 
            "Télésurveillance médicale"
          ]
        },
        {
          category: "Confort de Vie",
          services: [
            "Éclairage adapté seniors (gradation)",
            "Climatisation zones de vie",
            "Sonorisation espaces communs",
            "Domotique chambres individuelles",
            "Jardin thérapeutique connecté"
          ]
        },
        {
          category: "Gestion Établissement",
          services: [
            "Contrôle d'accès personnel soignant",
            "Surveillance cuisine collective",
            "Gestion technique centralisée",
            "Monitoring énergétique",
            "Système de communication interne"
          ]
        }
      ],
      
      avantages: [
        "Sécurité maximale des résidents",
        "Bien-être et confort adaptés",
        "Conformité réglementaire sanitaire",
        "Tranquillité des familles",
        "Efficacité équipes soignantes"
      ],
      
      exemples: [
        "EHPAD Vitré - Sécurité et confort complets",
        "Résidence autonomie Châteaubourg - Domotique adaptée",
        "Foyer logement Liffré - Contrôle d'accès et surveillance"
      ]
    },

    camping: {
      id: "camping",
      title: "CAMPING",
      subtitle: "Hôtellerie de plein air",
      description: "Sécurité et services modernes. Solutions complètes pour campings, parcs de vacances et sites de loisirs.",
      icon: "Tent",
      color: "teal",
      image: "/topologies/camping.jpg",
      
      solutions: [
        {
          category: "Sécurité Camping",
          services: [
            "Vidéosurveillance périmètre et accès",
            "Alarme anti-intrusion bâtiments",
            "Contrôle d'accès camping (barrières)",
            "Surveillance piscine et aires de jeux",
            "Détection intrusion nocturne",
            "Télésurveillance saisonnière"
          ]
        },
        {
          category: "Services Vacanciers",
          services: [
            "Éclairage automatique allées",
            "Sonorisation espaces animations",
            "Wi-Fi camping haut débit",
            "Affichage numérique informations",
            "Borne de recharge véhicules électriques"
          ]
        },
        {
          category: "Gestion Technique",
          services: [
            "Automatisation arrosage espaces verts",
            "Gestion éclairage public camping",
            "Monitoring consommations énergétiques",
            "Contrôle pompes et traitement piscine",
            "Robots tondeuses pour grandes surfaces (Mammotion)",
            "Gestion centralisée multi-bâtiments"
          ]
        }
      ],
      
      avantages: [
        "Sécurité vacanciers 24h/24",
        "Ambiance camping conviviale",
        "Économies énergétiques importantes",
        "Gestion simplifiée du site",
        "Attractivité services modernes"
      ],
      
      exemples: [
        "Camping 4* Vitré - Installation complète",
        "Village vacances Châteaubourg - Sécurité et services",
        "Camping municipal Liffré - Éclairage et surveillance"
      ]
    },

    municipalite: {
      id: "municipalite",
      title: "MUNICIPALITÉ", 
      subtitle: "Collectivités locales (Mairies et Communautés de communes)",
      description: "Les collectivités territoriales – qu'il s'agisse d'une mairie, d'une commune ou d'une communauté de communes – ont tout à gagner à moderniser leurs équipements publics et à adopter des solutions de 'smart city'. Godeloup Domotique accompagne les municipalités du Grand Ouest dans la gestion connectée de leurs infrastructures : Sécurité urbaine : installation de caméras de vidéoprotection sur la voie publique, aux abords des bâtiments communaux (mairie, médiathèque, écoles…) et dans les parcs, afin d'assurer la sécurité des administrés et la protection des installations. Nous intégrons des systèmes d'éclairage public intelligent : lampadaires LED à détection de présence ou pilotés par horloge astronomique, ce qui permet de réduire la consommation énergétique tout en maintenant la sûreté des rues la nuit. Pour les bâtiments municipaux, nous mettons en place des alarmes anti-intrusion et un contrôle d'accès centralisé pour les bureaux administratifs, écoles et équipements sportifs (gymnases, stades), évitant toute intrusion non autorisée. Les sites techniques sensibles (usines à eau, stations d'épuration, déchetteries) peuvent être équipés de capteurs et d'alertes anti-intrusion, avec télésurveillance 24/7. Bâtiments et équipements communaux connectés : nous apportons la domotique dans vos mairies, salles des fêtes, médiathèques ou gymnases pour en optimiser l'utilisation. Par exemple, l'automatisation des salles polyvalentes ou gymnases permet de contrôler à distance le chauffage et l'éclairage en fonction de la réservation de la salle (plus de chauffage inutile dans une salle vide !). L'arrosage des stades et espaces verts municipaux peut être automatisé et programmé pour un entretien efficace. Nous proposons également des robots tondeuses pour les parcs ou terrains de sport municipaux, afin de garder une herbe toujours bien coupée sans mobiliser les agents quotidiennement. La sonorisation des espaces publics pour des annonces ou événements peut être installée en fixe ou en mobile, connectée aux systèmes de la ville. Services aux citoyens modernisés : déploiement de bornes Wi-Fi publiques gratuites dans les zones touristiques ou centres-bourgs pour réduire la fracture numérique, installation de panneaux d'affichage numérique dans la commune (informations municipales, alertes météo, actualités), mise en place de bornes de recharge pour véhicules électriques sur les parkings communaux, et même des solutions d'alerte à la population connectées (par exemple, système d'alerte sonore et via application mobile en cas d'urgence locale). Toutes ces solutions s'inscrivent dans une démarche de Smart City où la technologie est au service du bien public. En mutualisant les investissements au niveau d'une communauté de communes, plusieurs villes peuvent bénéficier d'une infrastructure partagée : par exemple, un réseau fibre optique intercommunal pour relier les bâtiments publics et fournir Internet haut débit partout, une centrale de télésurveillance mutualisée qui surveille l'ensemble des sites des communes membres, ou encore une plateforme numérique commune pour faciliter le télétravail des agents et la visioconférence entre mairies. Cette approche collective permet de mutualiser les coûts tout en harmonisant la qualité des services sur tout le territoire. Pour les collectivités, nos solutions apportent à la fois sécurité renforcée, économies budgétaires (grâce à l'efficacité énergétique et la mutualisation) et une image moderne et dynamique auprès des administrés. Vos citoyens profiteront de villes plus sûres, plus connectées, avec des services innovants qui améliorent leur vie quotidienne.",
      icon: "Building",
      color: "slate",
      image: "/topologies/municipalite.jpg",
      
      solutions: [
        {
          category: "Sécurité Publique",
          services: [
            "Vidéosurveillance urbaine et espaces publics",
            "Éclairage public intelligent et sécurisé",
            "Alarme bâtiments municipaux (mairie, écoles)",
            "Contrôle d'accès équipements sensibles",
            "Détection intrusion sites techniques",
            "Télésurveillance patrimoine communal"
          ]
        },
        {
          category: "Équipements Municipaux",
          services: [
            "Domotique mairie et annexes",
            "Automatisation gymnases et salles",
            "Gestion éclairage public (LED)",
            "Arrosage automatique espaces verts",
            "Robots tondeuses pour parcs municipaux",
            "Sonorisation événements publics"
          ]
        },
        {
          category: "Services Citoyens",
          services: [
            "Wi-Fi public gratuit sécurisé",
            "Affichage numérique municipal",
            "Borne de recharge véhicules électriques",
            "Système d'alerte population",
            "Solutions smart city connectées"
          ]
        }
      ],
      
      avantages: [
        "Sécurité renforcée espaces publics",
        "Économies budgétaires substantielles", 
        "Services citoyens modernisés",
        "Image commune dynamique",
        "Gestion technique simplifiée"
      ],
      
      exemples: [
        "Mairie Vitré - Vidéosurveillance et domotique",
        "École Châteaubourg - Sécurité et éclairage",
        "Gymnase Liffré - Automatisation complète"
      ]
    },

    communaute: {
      id: "communaute",
      title: "COMMUNAUTÉ DE COMMUNES",
      subtitle: "Équipements intercommunaux",
      description: "Solutions mutualisées pour les équipements intercommunaux et services publics.",
      icon: "Users",
      color: "indigo",
      image: "/topologies/communaute.jpg",
      
      solutions: [
        {
          category: "Sécurité Intercommunale",
          services: [
            "Vidéosurveillance sites intercommunaux",
            "Centrale d'alarme mutualisée",
            "Contrôle d'accès équipements techniques",
            "Surveillance déchetteries",
            "Télésurveillance stations d'épuration",
            "Sécurité centres techniques"
          ]
        },
        {
          category: "Équipements Partagés",
          services: [
            "Domotique bâtiments intercommunaux",
            "Gestion centralisée multi-sites",
            "Éclairage public intelligent mutualisé",
            "Automatisation équipements sportifs",
            "Sonorisation événements intercommunaux"
          ]
        },
        {
          category: "Services Numériques",
          services: [
            "Réseau fibre optique intercommunal",
            "Wi-Fi public territorial",
            "Solutions de télétravail partagées",
            "Système de visioconférence multi-sites",
            "Plateforme numérique citoyenne"
          ]
        }
      ],
      
      avantages: [
        "Mutualisation des coûts techniques",
        "Sécurité harmonisée du territoire",
        "Services publics modernisés",
        "Gestion centralisée efficace",
        "Développement numérique territorial"
      ],
      
      exemples: [
        "CC Vitré Communauté - Infrastructure complète",
        "Déchetterie intercommunale - Surveillance automatisée",
        "Centre aquatique intercommunal - Domotique et sécurité"
      ]
    },

    agricole: {
      id: "agricole",
      title: "EXPLOITATION AGRICOLE",
      subtitle: "Exploitations agricoles & milieu rural",
      description: "En Bretagne et dans l'Ouest, le secteur agricole est très présent – et lui aussi peut tirer parti de la domotique et des nouvelles technologies. Godeloup Domotique propose aux agriculteurs et éleveurs des solutions pour des fermes connectées, alliant sécurité, automatisation des tâches et surveillance à distance : Sécurité des exploitations : nous installons des caméras robustes en extérieur pour surveiller la cour de ferme, les abords des hangars ou des serres, avec une vision nocturne pour repérer tout intrus la nuit. Couplées à des alarmes anti-intrusion adaptées (sirènes, projecteurs automatiques, alertes smartphone), ces mesures protègent votre matériel agricole onéreux et préviennent les vols de carburant, d'outils ou de bétail. Vous pouvez garder un œil sur vos installations à distance, ce qui est précieux pour les exploitations isolées. Automatisation des équipements agricoles : nous pouvons automatiser l'éclairage des étables et des hangars, afin qu'il s'allume aux heures de traite ou lors de vos passages, et s'éteigne quand ce n'est plus nécessaire, réduisant la consommation électrique. Des contrôles d'accès électroniques peuvent sécuriser l'entrée de dépôts de stock (engrais, pesticides) ou de salles de machines, avec des badges pour vos employés. Pour les cultures sous serre, nous proposons des capteurs de température, d'humidité et un système de pilotage du chauffage, de la ventilation ou de l'irrigation automatique en fonction des besoins de vos plantes, assurant un meilleur rendement et un suivi en temps réel depuis votre smartphone. Gestion facilitée du site : imaginez pouvoir ouvrir ou fermer à distance les portes de vos pâturages ou de votre poulailler depuis votre téléphone, ou être averti immédiatement si une pompe d'irrigation tombe en panne. Avec nos solutions connectées, c'est possible. Nous déployons également des robots tondeuses pour grandes superficies qui peuvent entretenir les pelouses autour de la ferme ou les abords d'un centre équestre, sans intervention manuelle, ce qui vous fait gagner du temps pendant les saisons chargées. Suivi et optimisation : tous ces systèmes peuvent être centralisés sur un tableau de bord agricole : vous y consultez par exemple les niveaux de vos silos mesurés par des capteurs, la consommation électrique de votre laiterie, ou encore la position de vos tracteurs équipés de trackers GPS. L'analyse des données collectées vous aide à optimiser votre activité (par exemple, ajuster l'éclairage de la serre pour économiser de l'énergie sans impacter la croissance des plants). En adoptant ces technologies, votre exploitation gagne en sécurité (sites sous surveillance constante, dissuasion des intrusions), en efficacité (tâches automatisées, moins de perte de temps sur des actions répétitives) et en sérénité (vous pouvez surveiller et agir sur votre ferme même en votre absence). Le milieu rural aussi a droit à sa transition numérique – nous sommes là pour la mettre en œuvre avec des solutions simples d'utilisation, robustes et éprouvées.",
      icon: "Tractor",
      color: "amber",
      image: "/topologies/agricole.jpg",
      
      solutions: [
        {
          category: "Sécurité Exploitations",
          services: [
            "Vidéosurveillance robuste extérieur",
            "Vision nocturne zones de stock",
            "Alarmes anti-intrusion adaptées (sirènes, projecteurs)",
            "Protection matériel agricole onéreux",
            "Prévention vols carburant/outils/bétail",
            "Surveillance à distance exploitations isolées"
          ]
        },
        {
          category: "Automatisation Agricole",
          services: [
            "Éclairage automatique étables et hangars",
            "Contrôles d'accès électroniques dépôts",
            "Capteurs température/humidité serres",
            "Pilotage chauffage/ventilation/irrigation automatique",
            "Suivi temps réel depuis smartphone",
            "Badges sécurisés pour employés"
          ]
        },
        {
          category: "Gestion Facilitée",
          services: [
            "Ouverture/fermeture à distance pâturages",
            "Contrôle poulailler télécommandé",
            "Alertes pannes pompes irrigation",
            "Robots tondeuses grandes superficies",
            "Entretien automatisé centres équestres",
            "Gestion sans intervention manuelle"
          ]
        },
        {
          category: "Suivi et Optimisation",
          services: [
            "Tableau de bord agricole centralisé",
            "Capteurs niveaux silos",
            "Monitoring consommation électrique laiterie",
            "Trackers GPS tracteurs",
            "Analyse données optimisation activité",
            "Ajustement éclairage serres intelligent"
          ]
        }
      ],
      
      avantages: [
        "Sécurité sites sous surveillance constante",
        "Efficacité par automatisation des tâches",
        "Sérénité surveillance à distance",
        "Réduction temps actions répétitives",
        "Solutions robustes et éprouvées"
      ],
      
      exemples: [
        "Exploitation laitière Vitré - Surveillance et automatisation",
        "Serres maraîchères Châteaubourg - Pilotage climatique",
        "Élevage bovin Liffré - Sécurité et contrôle d'accès"
      ]
    }
  }
};

export default topologieData;