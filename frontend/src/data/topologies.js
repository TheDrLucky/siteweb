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
      subtitle: "Particuliers & Résidentiel",
      description: "Que vous viviez en appartement ou dans une maison, nous équipons les résidences particulières avec des technologies adaptées à la vie de famille. Votre maison devient intelligente, confortable et sûre sans effort de votre part. Par exemple, nous pouvons automatiser l'éclairage et le chauffage de chaque pièce, installer des alarmes et caméras discrètes pour surveiller l'intérieur comme l'extérieur, intégrer un système audio multiroom pour la musique, ou encore motoriser votre portail et vos volets. De plus, nous prenons soin de vos espaces extérieurs : installation d'un arrosage automatique du jardin qui se déclenche aux meilleurs moments pour vos plantes, détection de mouvements pour éclairer l'allée à votre arrivée, etc. Nous proposons également des robots tondeuses de dernière génération (comme le Mammotion LUBA à navigation RTK ou le Hooki M1 à intelligence AI) pour entretenir votre pelouse de façon autonome. Fini la corvée de tonte et les frais d'entretien réguliers de jardin – votre gazon reste impeccable toute la saison, sans intervention humaine. En résumé, nos solutions domotiques résidentielles vous apportent confort, économies d'énergie et sécurité renforcée, tout en vous libérant du temps pour profiter de votre foyer.",
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
      subtitle: "Bureaux & Espaces de travail (TPE/PME, bureaux professionnels)",
      description: "Pour les professionnels en bureau, start-ups, cabinets libéraux ou PME, nous créons des espaces de travail connectés qui améliorent la productivité et le bien-être des employés. Nous mettons en place un réseau informatique professionnel sécurisé (câblage, Wi-Fi entreprise stable) pour garantir la continuité de votre activité numérique. Nous installons des solutions de domotique de bureau : éclairage adaptatif et stores motorisés qui limitent l'éblouissement, gestion intelligente de la climatisation/chauffage des open-spaces et salles de réunion, et contrôle d'accès par badge pour sécuriser vos locaux. Côté sécurité, nous déployons des alarmes anti-intrusion professionnelles et des caméras de vidéosurveillance HD pour protéger vos bureaux en dehors des heures d'ouverture. L'accès peut être contrôlé par des systèmes biométriques pour les zones sensibles (salles de serveurs, archives). Grâce à la gestion centralisée, vous pilotez tout l'équipement du bureau à distance et recevez des alertes instantanées en cas d'anomalie. Ces installations connectées permettent une optimisation du confort de travail, une meilleure image moderne de votre entreprise, et contribuent aussi à des économies d'énergie (extinction automatique des lumières la nuit, etc.).",
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
      subtitle: "Industries & Entreprises (sites industriels, entrepôts, PME industrielles)",
      description: "Les sites industriels et entrepôts ont des besoins spécifiques en matière d'automatisation et de sécurité. Nous accompagnons les entreprises industrielles et artisans dans leur transformation digitale en fournissant des solutions robustes adaptées à l'environnement de production. Sur le plan de la sécurité industrielle, nous déployons des systèmes de vidéosurveillance périmétrique haute sécurité (caméras spéciales pour l'extérieur, vision nocturne sur les zones de stock), des contrôles d'accès multi-niveaux pour restreindre l'entrée aux zones dangereuses ou aux horaires définis, ainsi que des alarmes anti-intrusion industrielles reliées à un service d'intervention rapide. Des détecteurs techniques (fumées, fuites de gaz, inondation) peuvent être installés pour prévenir tout incident sur vos installations, avec alertes instantanées au personnel de sécurité. En parallèle, nous mettons en place des solutions d'automation industrielle pour améliorer vos processus : éclairage intelligent des ateliers, gestion centralisée du CVC, automatisation des accès véhicules, suivi des consommations d'énergie des machines en temps réel et alertes en cas de dérive. Ces dispositifs permettent d'optimiser les coûts opérationnels et d'assurer la conformité de vos sites aux normes. Côté infrastructure IT pour l'entreprise, nous pouvons gérer votre réseau informatique interne, installer des serveurs locaux ou en cloud hybride pour vos applications de production, et sécuriser vos données sensibles grâce à des pare-feux et systèmes de backup. Tout est supervisé de manière centralisée, avec la possibilité de maintenance prédictive : vous savez à l'avance quand une machine a besoin d'entretien grâce aux capteurs IoT et à l'IA qui analyse les données. En résumé, nos solutions pour l'industrie vous offrent une sécurité maximale des installations, un pilotage en temps réel de votre production et une réduction des interruptions imprévues, contribuant directement à la performance de votre entreprise.",
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
      subtitle: "Commerces & Magasins de détail",
      description: "Nous aidons les commerçants et gérants de boutiques à sécuriser et optimiser leur point de vente. Pour un magasin de détail (boutique de vêtements, boulangerie, pharmacie, etc.), la sécurité anti-vol est primordiale : nous installons des caméras de surveillance anti-shoplifting haute définition et des alarmes silencieuses reliées à un centre de télésurveillance pour intervenir rapidement en cas d'effraction nocturne. Des portiques antivol électroniques peuvent être placés aux entrées pour dissuader la démarque inconnue, et même des coffres-forts connectés pour vos recettes journalières afin de prévenir les braquages (systèmes anti-hold-up). Au-delà de la sécurité, nos solutions améliorent le confort des clients et employés : éclairage d'ambiance automatique qui met en valeur vos produits en vitrine et s'adapte à la luminosité extérieure, sonorisation multiroom pour créer une ambiance musicale agréable en magasin, climatisation intelligente des espaces de vente pour un confort optimal des clients été comme hiver. Nous proposons également des outils de gestion énergétique pour les commerces : suivi en temps réel de la consommation d'électricité, pilotage des enseignes lumineuses et des équipements selon les horaires d'ouverture, afin de réduire la facture énergétique. En équipant votre commerce avec ces technologies, vous bénéficiez d'un lieu de vente plus sûr, plus accueillant et plus efficace, ce qui renforce la satisfaction client et la performance de votre activité.",
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
      subtitle: "Hôtels & Restaurants (CHR)",
      description: "Dans le secteur de l'hôtellerie et de la restauration (Cafés, Hôtels, Restaurants), il est crucial d'allier sécurité, confort client et efficacité opérationnelle. Godeloup Domotique propose des solutions sur-mesure pour les établissements CHR : Surveillance et alarmes : vidéosurveillance des zones sensibles (salles, cuisines, réserves) pour prévenir les vols ou surveiller le respect des normes HACCP en cuisine, alarmes anti-intrusion discrètes pour protéger le restaurant en dehors des heures d'ouverture, et détecteurs de fumée/gaz connectés pour une sécurité incendie maximale. Confort et expérience client : éclairage d'ambiance modulable dans la salle de restaurant ou le hall d'hôtel, sonorisation adaptée (musique d'ambiance douce aux heures de repas), et wifi haut débit gratuit pour les clients. Dans les hôtels, nous installons des systèmes domotiques dans les chambres : contrôle centralisé de l'éclairage, des volets et de la température par le client, accès aux chambres par carte/badge ou code, offrant une expérience moderne et haut de gamme à vos résidents. Gestion centralisée pour les gérants : depuis une interface unique, vous pouvez superviser tout votre établissement – vérifier l'état de chaque alarme, ajuster les thermostats des chambres inoccupées, contrôler l'ouverture/fermeture des accès ou encore consulter les consommations énergétiques en temps réel. Grâce à ces installations, un hôtel ou restaurant gagne en sécurité pour son personnel et sa clientèle, réalise des économies d'énergie, et offre une expérience client améliorée qui se traduira par de meilleurs avis et une fidélisation accrue.",
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
      subtitle: "Résidences seniors & Établissements de santé (EHPAD, cliniques)",
      description: "Les établissements médico-sociaux comme les EHPAD (résidences pour seniors dépendants), maisons de retraite ou cliniques nécessitent des aménagements technologiques pour garantir à la fois la sécurité des résidents/patients et leur bien-être. Godeloup Domotique propose des systèmes spécialisés pour ce secteur sensible : Sécurité des résidents : mise en place de vidéosurveillance dans les couloirs, parties communes et périmètres extérieurs afin de veiller sur les résidents tout en respectant leur intimité. Installation de dispositifs de détection de chutes ou de malaise (bracelets ou capteurs dans les chambres) qui alertent automatiquement le personnel soignant en cas de problème. Des alarmes anti-fugue peuvent sécuriser les issues des unités Alzheimer par exemple, pour éviter qu'un résident vulnérable ne sorte sans accompagnement. Contrôle des accès et systèmes d'appel : gestion des accès visiteurs et du personnel soignant par badges afin de protéger les zones sensibles (pharmacie interne, locaux techniques). Chaque résident peut disposer d'un bouton d'appel d'urgence ou médaillon connecté pour demander de l'aide à tout moment, relié au système domotique de l'établissement qui prévient immédiatement le personnel en indiquant la localisation. Confort de vie adapté : éclairages à intensité variable dans les chambres et couloirs (éclairage nocturne doux pour les déplacements la nuit), automatisation du climat pour maintenir une température idéale dans les chambres, sonorisation des espaces communs pour diffuser des annonces ou de la musique thérapeutique. Nous pouvons aussi créer un jardin connecté avec arrosage automatisé et parcours lumineux pour les activités de plein air des résidents. Pilotage technique centralisé : les gestionnaires de la résidence ont accès à une supervision centralisée pour contrôler l'ensemble des installations, recevoir des alertes en cas de dysfonctionnement et assurer la conformité réglementaire en temps réel. Grâce à ces solutions, un EHPAD ou une résidence senior bénéficie d'une sécurité renforcée pour protéger ses résidents fragiles, améliore leur confort et bien-être au quotidien, tout en facilitant le travail du personnel soignant. Les familles des résidents sont rassurées de savoir leurs proches bien surveillés et l'établissement valorise son image en étant à la pointe de la technologie au service de l'humain.",
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
      description: "Solutions pour campings, villages vacances et hébergements de loisirs.",
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
      subtitle: "Équipements publics communaux",
      description: "Accompagnement des collectivités dans la modernisation de leurs équipements publics.",
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
    }
  }
};

export default topologieData;