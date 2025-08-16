import { Language } from '@/types/translations';

export const translationData: Record<Language, Record<string, any>> = {
  fr: {
    // Navigation
    nav: {
      home: 'Accueil',
      tracking: 'Suivi',
      services: 'Services',
      about: 'À propos',
      contact: 'Contact',
      quote: 'Devis',
      zones: 'Zones de livraison'
    },
    
    // Common
    common: {
      learnMore: 'En savoir plus',
      contact: 'Nous contacter',
      getQuote: 'Demander un devis',
      freeQuote: 'Devis gratuit',
      readMore: 'Lire plus',
      close: 'Fermer',
      loading: 'Chargement...',
      error: 'Erreur',
      success: 'Succès'
    },

    // Home page
    home: {
      title: 'Depuis 2007, LOGICY TRANSPORT livre vos colis, cargaisons et véhicules partout dans le monde avec fiabilité et prestige',
      subtitle: 'Votre partenaire logistique de confiance',
      description: 'Solutions de transport et logistique sur mesure pour vos besoins professionnels partout dans le monde',
      cta: 'Découvrir nos services',
      services: {
        title: 'Nos Services',
        road: {
          title: 'Transport Routier',
          description: 'Solutions de transport terrestre fiables et économiques'
        },
        air: {
          title: 'Transport Aérien', 
          description: 'Livraisons rapides par voie aérienne'
        },
        maritime: {
          title: 'Transport Maritime',
          description: 'Transport de marchandises par voie maritime'
        }
      }
    },

    // Tracking
    tracking: {
      title: 'Suivi de Colis',
      description: 'Entrez votre code de suivi pour connaître l\'état de votre envoi en temps réel',
      placeholder: 'Entrez votre code de suivi',
      search: 'Rechercher',
      help: 'Besoin d\'aide ?',
      format: 'Format du code de suivi :',
      formatExample: 'LOG + 9 chiffres (ex: LOG123456789)',
      testCodes: 'Codes de test :',
      testCodesExample: 'LOG123456789, LOG987654321'
    },

    // Services
    services: {
      title: 'Nos Services de Transport',
      description: 'Solutions logistiques complètes pour tous vos besoins de transport, de la livraison express aux expéditions internationales',
      experience: 'Plus de 17 ans d\'expérience',
      road: {
        title: 'Transport Routier',
        description: 'Solutions de transport routier fiables pour l\'Europe et l\'Afrique du Nord',
        features: [
          'Livraison express 24-48h',
          'Véhicules légers à poids lourds',
          'Suivi temps réel',
          'Assurance tous risques'
        ]
      },
      air: {
        title: 'Transport Aérien',
        description: 'Fret aérien express pour vos envois urgents dans le monde entier',
        features: [
          'Livraison 24-72h',
          'Couverture mondiale',
          'Sécurité maximale',
          'Traçabilité complète'
        ]
      },
      maritime: {
        title: 'Transport Maritime',
        description: 'Solutions économiques pour vos expéditions internationales volumineuses',
        features: [
          'Conteneurs FCL/LCL',
          'Tous ports mondiaux',
          'Tarifs compétitifs',
          'Groupage optimisé'
        ]
      },
      express: {
        title: 'Logistique Express',
        description: 'Service premium pour vos envois urgents avec garantie de délais',
        features: [
          'Même jour possible',
          'Service 24/7',
          'Coursier dédié',
          'Remboursement si retard'
        ]
      },
      custom: {
        title: 'Solutions Sur-Mesure',
        description: 'Solutions logistiques personnalisées selon vos besoins spécifiques',
        features: [
          'Analyse des besoins',
          'Solution dédiée',
          'Accompagnement expert',
          'Évolutivité garantie'
        ]
      },
      tracking: {
        title: 'Suivi de Colis',
        description: 'Système de tracking avancé pour suivre vos envois en temps réel',
        features: [
          'Géolocalisation GPS',
          'Notifications SMS',
          'Interface web',
          'API disponible'
        ]
      },
      advantages: {
        delivery: {
          title: 'Délais Respectés',
          description: 'Nos équipes s\'engagent à respecter les délais convenus avec des garanties'
        },
        security: {
          title: 'Sécurité Maximale',
          description: 'Vos envois sont protégés et assurés durant tout le transport'
        },
        pricing: {
          title: 'Tarifs Transparents',
          description: 'Prix fixes sans surprise avec devis gratuit sous 24h'
        }
      }
    },

    // Contact
    contact: {
      title: 'Contactez-nous',
      description: 'Notre équipe est à votre disposition pour répondre à vos questions',
      form: {
        name: 'Nom complet',
        email: 'Adresse email',
        phone: 'Téléphone',
        subject: 'Sujet',
        message: 'Message',
        send: 'Envoyer le message'
      },
      info: {
        address: 'Adresse',
        phone: 'Téléphone',
        email: 'Email',
        hours: 'Horaires d\'ouverture'
      }
    },

    // About
    about: {
      title: 'À propos de LOGICY TRANSPORT',
      description: 'Leader dans le domaine du transport et de la logistique',
      story: {
        title: 'Notre Histoire',
        content: 'Depuis notre création, LOGICY TRANSPORT s\'est imposé comme un acteur majeur du secteur logistique grâce à notre expertise et notre engagement envers l\'excellence.'
      },
      mission: {
        title: 'Notre Mission',
        content: 'Fournir des solutions de transport fiables, efficaces et personnalisées pour accompagner la croissance de nos clients.'
      },
      values: {
        title: 'Pourquoi Choisir LOGICY TRANSPORT ?',
        reliability: 'Fiabilité',
        innovation: 'Innovation',
        quality: 'Qualité',
        service: 'Service client'
      }
    },

    // Transport pages
    transport: {
      aerial: {
        title: 'Transport Aérien',
        subtitle: 'Solutions de fret aérien express pour vos expéditions urgentes et internationales avec une couverture mondiale',
        quote: 'Demander un Devis',
        whyChoose: 'Pourquoi choisir notre transport aérien ?',
        servicesTitle: 'Nos Services de Fret Aérien',
        contact: 'Nous Contacter',
        freeQuote: 'Devis Gratuit',
        advantages: {
          speed: {
            title: 'Rapidité Exceptionnelle',
            description: 'Livraison express partout dans le monde en 24-72h'
          },
          coverage: {
            title: 'Couverture Mondiale',
            description: 'Réseau international avec tous les aéroports majeurs'
          },
          security: {
            title: 'Sécurité Maximale',
            description: 'Standards de sécurité aéronautique les plus élevés'
          },
          tracking: {
            title: 'Traçabilité Complète',
            description: 'Suivi en temps réel de l\'aéroport de départ à la livraison'
          }
        },
        services: [
          'Fret aérien express (24h/48h/72h)',
          'Transport de marchandises périssables',
          'Colis urgents et documents',
          'Marchandises de valeur',
          'Transport pharmaceutique',
          'Pièces détachées industrielles',
          'E-commerce international',
          'Consolidation et groupage aérien'
        ],
        timelines: {
          title: 'Délais et Destinations',
          express24: 'Express 24h',
          express48: 'Express 48h',
          express72: 'Express 72h',
          standard: 'Standard',
          zones: {
            europe: 'Europe, Amérique du Nord',
            asia: 'Asie, Moyen-Orient',
            southAmerica: 'Amérique du Sud, Océanie',
            africa: 'Afrique, destinations spéciales'
          },
          destinations: {
            title: 'Destinations principales',
            list: [
              'Plus de 200 destinations mondiales',
              'Partenariats avec les grandes compagnies',
              'Accès aux aéroports cargo spécialisés',
              'Service porte-à-porte disponible'
            ]
          }
        }
      },
      maritime: {
        title: 'Transport Maritime',
        subtitle: 'Solutions de fret maritime économiques et fiables pour vos expéditions internationales de tous volumes',
        whyChoose: 'Pourquoi choisir notre transport maritime ?',
        servicesTitle: 'Nos Services Maritimes',
        routesTitle: 'Routes Principales',
        advantages: {
          economical: {
            title: 'Économique',
            description: 'Solution la plus rentable pour les gros volumes'
          },
          global: {
            title: 'Mondial',
            description: 'Accès à tous les ports internationaux'
          },
          capacity: {
            title: 'Capacité',
            description: 'Transport de charges lourdes et volumineuses'
          },
          reliability: {
            title: 'Fiabilité',
            description: 'Respect des délais et sécurité des marchandises'
          }
        },
        services: [
          'Conteneurs FCL (Full Container Load)',
          'Groupage LCL (Less than Container Load)',
          'Conteneurs frigorifiques',
          'Transport de véhicules (RoRo)',
          'Marchandises en vrac',
          'Projets industriels',
          'Conteneurs spéciaux (Open Top, Flat Rack)',
          'Transport multi-modal mer/route/rail'
        ],
        containers: {
          title: 'Types de conteneurs',
          list: [
            "20' Standard (33 m³)",
            "40' Standard (67 m³)",
            "40' High Cube (76 m³)",
            "Conteneurs spéciaux sur demande"
          ]
        }
      },
      road: {
        title: 'Transport Routier',
        subtitle: 'Solutions de transport routier fiables et flexibles pour l\'Europe et l\'Afrique du Nord avec suivi en temps réel',
        whyChoose: 'Pourquoi choisir notre transport routier ?',
        servicesTitle: 'Nos Services Routiers',
        vehiclesTitle: 'Notre Flotte',
        advantages: {
          flexibility: {
            title: 'Flexibilité',
            description: 'Porte-à-porte avec horaires adaptés'
          },
          coverage: {
            title: 'Couverture Étendue',
            description: 'Europe et Afrique du Nord'
          },
          speed: {
            title: 'Rapidité',
            description: 'Livraison express 24-48h'
          },
          tracking: {
            title: 'Suivi Temps Réel',
            description: 'Géolocalisation GPS en continu'
          }
        },
        services: [
          'Livraison express 24-48h',
          'Transport de messagerie',
          'Colis et palettes',
          'Déménagements professionnels',
          'Transport de véhicules',
          'Marchandises dangereuses (ADR)',
          'Transport frigorifique',
          'Groupage et distribution'
        ],
        vehicles: {
          title: 'Types de véhicules',
          list: [
            'Véhicules légers (3,5T)',
            'Porteurs (7,5T - 19T)',
            'Semi-remorques (40T)',
            'Véhicules frigorifiques'
          ]
        }
      }
    }
  },
  
  en: {
    // Navigation
    nav: {
      home: 'Home',
      tracking: 'Tracking',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      quote: 'Quote',
      zones: 'Delivery zones'
    },
    
    // Common
    common: {
      learnMore: 'Learn more',
      contact: 'Contact us',
      getQuote: 'Get a quote',
      freeQuote: 'Free quote',
      readMore: 'Read more',
      close: 'Close',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success'
    },

    // Home page
    home: {
      title: 'Since 2007, LOGICY TRANSPORT delivers your packages, cargo and vehicles worldwide with reliability and prestige',
      subtitle: 'Your trusted logistics partner',
      description: 'Customized transport and logistics solutions for your professional needs worldwide',
      cta: 'Discover our services',
      services: {
        title: 'Our Services',
        road: {
          title: 'Road Transport',
          description: 'Reliable and economical ground transport solutions'
        },
        air: {
          title: 'Air Transport',
          description: 'Fast deliveries by air'
        },
        maritime: {
          title: 'Maritime Transport',
          description: 'Goods transport by sea'
        }
      }
    },

    // Tracking
    tracking: {
      title: 'Package Tracking',
      description: 'Enter your tracking code to know the status of your shipment in real time',
      placeholder: 'Enter your tracking code',
      search: 'Search',
      help: 'Need help?',
      format: 'Tracking code format:',
      formatExample: 'LOG + 9 digits (ex: LOG123456789)',
      testCodes: 'Test codes:',
      testCodesExample: 'LOG123456789, LOG987654321'
    },

    // Services
    services: {
      title: 'Our Transport Services',
      description: 'Complete logistics solutions for all your transport needs, from express delivery to international shipments',
      experience: 'Over 17 years of experience',
      road: {
        title: 'Road Transport',
        description: 'Reliable road transport solutions for Europe and North Africa',
        features: [
          'Express delivery 24-48h',
          'Light to heavy vehicles',
          'Real-time tracking',
          'Full coverage insurance'
        ]
      },
      air: {
        title: 'Air Transport',
        description: 'Express air freight for your urgent shipments worldwide',
        features: [
          'Delivery 24-72h',
          'Global coverage',
          'Maximum security',
          'Complete traceability'
        ]
      },
      maritime: {
        title: 'Maritime Transport',
        description: 'Cost-effective solutions for your large international shipments',
        features: [
          'FCL/LCL containers',
          'All world ports',
          'Competitive rates',
          'Optimized groupage'
        ]
      },
      express: {
        title: 'Express Logistics',
        description: 'Premium service for urgent shipments with delivery guarantee',
        features: [
          'Same day possible',
          '24/7 service',
          'Dedicated courier',
          'Refund if delayed'
        ]
      },
      custom: {
        title: 'Custom Solutions',
        description: 'Personalized logistics solutions according to your specific needs',
        features: [
          'Needs analysis',
          'Dedicated solution',
          'Expert support',
          'Guaranteed scalability'
        ]
      },
      tracking: {
        title: 'Package Tracking',
        description: 'Advanced tracking system to follow your shipments in real time',
        features: [
          'GPS geolocation',
          'SMS notifications',
          'Web interface',
          'API available'
        ]
      },
      advantages: {
        delivery: {
          title: 'Timely Delivery',
          description: 'Our teams commit to respecting agreed deadlines with guarantees'
        },
        security: {
          title: 'Maximum Security',
          description: 'Your shipments are protected and insured throughout transport'
        },
        pricing: {
          title: 'Transparent Pricing',
          description: 'Fixed prices with no surprises and free quotes within 24h'
        }
      }
    },

    // Contact
    contact: {
      title: 'Contact us',
      description: 'Our team is available to answer your questions',
      form: {
        title: 'Send us a message',
        name: 'Full name',
        namePlaceholder: 'Your full name',
        email: 'Email address',
        emailPlaceholder: 'your.email@example.com',
        message: 'Message',
        messagePlaceholder: 'Describe your request...',
        send: 'Send message',
        success: {
          title: 'Message sent!',
          description: 'We will respond to you as soon as possible.'
        }
      },
      info: {
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
        hours: 'Opening hours',
        schedule: 'Mon-Fri: 8am-6pm\nSat: 9am-12pm'
      },
      map: {
        title: 'Find us',
        note: '* An interactive map will soon be available to facilitate your visit'
      }
    },

    // About
    about: {
      title: 'About LOGICY TRANSPORT',
      description: 'Leader in transport and logistics',
      story: {
        title: 'Our Story',
        content: 'Since our creation, LOGICY TRANSPORT has established itself as a major player in the logistics sector through our expertise and commitment to excellence.'
      },
      mission: {
        title: 'Our Mission',
        content: 'Provide reliable, efficient and personalized transport solutions to support our clients\' growth.'
      },
      values: {
        title: 'Why Choose LOGICY TRANSPORT?',
        reliability: 'Reliability',
        innovation: 'Innovation',
        quality: 'Quality',
        service: 'Customer service'
      },
      stats: {
        experience: 'Years of experience',
        clients: 'Satisfied clients',
        countries: 'Countries served',
        shipments: 'Shipments completed'
      },
      timeline: {
        title: 'Our History',
        items: [
          {
            year: '2007',
            title: 'LOGICY TRANSPORT Creation',
            description: 'Company foundation with a clear vision: revolutionizing logistics transport.'
          },
          {
            year: '2010',
            title: 'European expansion',
            description: 'Opening our services throughout Europe with trusted partners.'
          },
          {
            year: '2015',
            title: 'Air transport',
            description: 'Launch of our air transport services for express shipments.'
          },
          {
            year: '2018',
            title: 'Maritime solutions',
            description: 'Development of our maritime offer for bulky cargo.'
          },
          {
            year: '2020',
            title: 'Digitalization',
            description: 'Implementation of real-time tracking system and complete digitalization.'
          },
          {
            year: '2024',
            title: 'Continuous innovation',
            description: 'Today, we continue to innovate to offer the best solutions.'
          }
        ]
      },
      missionExpanded: {
        content: 'We are committed to providing innovative transport solutions, putting customer satisfaction at the heart of our concerns.'
      },
      commitments: {
        title: 'Our Commitments',
        tracking: 'Complete traceability of your shipments',
        support: 'Responsive customer service 24/7',
        environment: 'Environmental responsibility'
      },
      cta: {
        title: 'Join our satisfied customers',
        description: 'Discover why hundreds of companies trust us',
        servicesButton: 'Discover our services',
        contactButton: 'Contact us'
      }
    },

    // Transport pages
    transport: {
      aerial: {
        title: 'Air Transport',
        subtitle: 'Express air freight solutions for your urgent and international shipments with global coverage',
        quote: 'Request Quote',
        whyChoose: 'Why choose our air transport?',
        servicesTitle: 'Our Air Freight Services',
        contact: 'Contact Us',
        freeQuote: 'Free Quote',
        advantages: {
          speed: {
            title: 'Exceptional Speed',
            description: 'Express delivery worldwide in 24-72h'
          },
          coverage: {
            title: 'Global Coverage',
            description: 'International network with all major airports'
          },
          security: {
            title: 'Maximum Security',
            description: 'Highest aviation security standards'
          },
          tracking: {
            title: 'Complete Traceability',
            description: 'Real-time tracking from departure airport to delivery'
          }
        },
        services: [
          'Express air freight (24h/48h/72h)',
          'Perishable goods transport',
          'Urgent packages and documents',
          'Valuable goods',
          'Pharmaceutical transport',
          'Industrial spare parts',
          'International e-commerce',
          'Air consolidation and groupage'
        ],
        timelines: {
          title: 'Times and Destinations',
          express24: 'Express 24h',
          express48: 'Express 48h',
          express72: 'Express 72h',
          standard: 'Standard',
          zones: {
            europe: 'Europe, North America',
            asia: 'Asia, Middle East',
            southAmerica: 'South America, Oceania',
            africa: 'Africa, special destinations'
          },
          destinations: {
            title: 'Main destinations',
            list: [
              'Over 200 global destinations',
              'Partnerships with major airlines',
              'Access to specialized cargo airports',
              'Door-to-door service available'
            ]
          }
        }
      },
      maritime: {
        title: 'Maritime Transport',
        subtitle: 'Economical and reliable maritime freight solutions for your international shipments of all volumes',
        whyChoose: 'Why choose our maritime transport?',
        servicesTitle: 'Our Maritime Services',
        routesTitle: 'Main Routes',
        advantages: {
          economical: {
            title: 'Economical',
            description: 'Most cost-effective solution for large volumes'
          },
          global: {
            title: 'Global',
            description: 'Access to all international ports'
          },
          capacity: {
            title: 'Capacity',
            description: 'Transport of heavy and bulky loads'
          },
          reliability: {
            title: 'Reliability',
            description: 'Respect of deadlines and goods security'
          }
        },
        services: [
          'FCL containers (Full Container Load)',
          'LCL groupage (Less than Container Load)',
          'Refrigerated containers',
          'Vehicle transport (RoRo)',
          'Bulk goods',
          'Industrial projects',
          'Special containers (Open Top, Flat Rack)',
          'Multi-modal transport sea/road/rail'
        ],
        containers: {
          title: 'Container types',
          list: [
            "20' Standard (33 m³)",
            "40' Standard (67 m³)",
            "40' High Cube (76 m³)",
            "Special containers on request"
          ]
        }
      },
      road: {
        title: 'Road Transport',
        subtitle: 'Reliable and flexible road transport solutions for Europe and North Africa with real-time tracking',
        whyChoose: 'Why choose our road transport?',
        servicesTitle: 'Our Road Services',
        vehiclesTitle: 'Our Fleet',
        advantages: {
          flexibility: {
            title: 'Flexibility',
            description: 'Door-to-door with adapted schedules'
          },
          coverage: {
            title: 'Extended Coverage',
            description: 'Europe and North Africa'
          },
          speed: {
            title: 'Speed',
            description: 'Express delivery 24-48h'
          },
          tracking: {
            title: 'Real-time Tracking',
            description: 'Continuous GPS geolocation'
          }
        },
        services: [
          'Express delivery 24-48h',
          'Courier transport',
          'Packages and pallets',
          'Professional moving',
          'Vehicle transport',
          'Dangerous goods (ADR)',
          'Refrigerated transport',
          'Groupage and distribution'
        ],
        vehicles: {
          title: 'Vehicle types',
          list: [
            'Light vehicles (3.5T)',
            'Trucks (7.5T - 19T)',
            'Semi-trailers (40T)',
            'Refrigerated vehicles'
          ]
        }
      }
    }
  },

  es: {
    // Navigation
    nav: {
      home: 'Inicio',
      tracking: 'Seguimiento',
      services: 'Servicios',
      about: 'Acerca de',
      contact: 'Contacto',
      quote: 'Cotización',
      zones: 'Zonas de entrega'
    },
    
    // Common
    common: {
      learnMore: 'Saber más',
      contact: 'Contáctanos',
      getQuote: 'Solicitar cotización',
      freeQuote: 'Cotización gratuita',
      readMore: 'Leer más',
      close: 'Cerrar',
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito'
    },

    // Home page
    home: {
      title: 'Desde 2007, LOGICY TRANSPORT entrega sus paquetes, carga y vehículos en todo el mundo con confiabilidad y prestigio',
      subtitle: 'Su socio logístico de confianza',
      description: 'Soluciones de transporte y logística personalizadas para sus necesidades profesionales en todo el mundo',
      cta: 'Descubrir nuestros servicios',
      services: {
        title: 'Nuestros Servicios',
        road: {
          title: 'Transporte Terrestre',
          description: 'Soluciones de transporte terrestre confiables y económicas'
        },
        air: {
          title: 'Transporte Aéreo',
          description: 'Entregas rápidas por vía aérea'
        },
        maritime: {
          title: 'Transporte Marítimo',
          description: 'Transporte de mercancías por vía marítima'
        }
      }
    },

    // Tracking
    tracking: {
      title: 'Seguimiento de Paquetes',
      description: 'Ingrese su código de seguimiento para conocer el estado de su envío en tiempo real',
      placeholder: 'Ingrese su código de seguimiento',
      search: 'Buscar',
      help: '¿Necesita ayuda?',
      format: 'Formato del código de seguimiento:',
      formatExample: 'LOG + 9 dígitos (ej: LOG123456789)',
      testCodes: 'Códigos de prueba:',
      testCodesExample: 'LOG123456789, LOG987654321'
    },

    // Services
    services: {
      title: 'Nuestros Servicios de Transporte',
      description: 'Soluciones logísticas completas para todas sus necesidades de transporte, desde entrega express hasta envíos internacionales',
      experience: 'Más de 17 años de experiencia',
      road: {
        title: 'Transporte Terrestre',
        description: 'Soluciones de transporte terrestre confiables para Europa y África del Norte',
        features: [
          'Entrega express 24-48h',
          'Vehículos ligeros a pesados',
          'Seguimiento en tiempo real',
          'Seguro de cobertura total'
        ]
      },
      air: {
        title: 'Transporte Aéreo',
        description: 'Flete aéreo express para sus envíos urgentes en todo el mundo',
        features: [
          'Entrega 24-72h',
          'Cobertura mundial',
          'Seguridad máxima',
          'Trazabilidad completa'
        ]
      },
      maritime: {
        title: 'Transporte Marítimo',
        description: 'Soluciones económicas para sus grandes envíos internacionales',
        features: [
          'Contenedores FCL/LCL',
          'Todos los puertos mundiales',
          'Tarifas competitivas',
          'Grupaje optimizado'
        ]
      },
      express: {
        title: 'Logística Express',
        description: 'Servicio premium para envíos urgentes con garantía de entrega',
        features: [
          'Mismo día posible',
          'Servicio 24/7',
          'Mensajero dedicado',
          'Reembolso si hay retraso'
        ]
      },
      custom: {
        title: 'Soluciones Personalizadas',
        description: 'Soluciones logísticas personalizadas según sus necesidades específicas',
        features: [
          'Análisis de necesidades',
          'Solución dedicada',
          'Soporte experto',
          'Escalabilidad garantizada'
        ]
      },
      tracking: {
        title: 'Seguimiento de Paquetes',
        description: 'Sistema de seguimiento avanzado para rastrear sus envíos en tiempo real',
        features: [
          'Geolocalización GPS',
          'Notificaciones SMS',
          'Interfaz web',
          'API disponible'
        ]
      },
      advantages: {
        delivery: {
          title: 'Entrega Puntual',
          description: 'Nuestros equipos se comprometen a respetar los plazos acordados con garantías'
        },
        security: {
          title: 'Seguridad Máxima',
          description: 'Sus envíos están protegidos y asegurados durante todo el transporte'
        },
        pricing: {
          title: 'Precios Transparentes',
          description: 'Precios fijos sin sorpresas con cotización gratuita en 24h'
        }
      }
    },

    // Contact
    contact: {
      title: 'Contáctanos',
      description: 'Nuestro equipo está disponible para responder sus preguntas',
      form: {
        name: 'Nombre completo',
        email: 'Dirección de email',
        phone: 'Teléfono',
        subject: 'Asunto',
        message: 'Mensaje',
        send: 'Enviar mensaje'
      },
      info: {
        address: 'Dirección',
        phone: 'Teléfono',
        email: 'Email',
        hours: 'Horarios de atención'
      }
    },

    // About
    about: {
      title: 'Acerca de LOGICY TRANSPORT',
      description: 'Líder en el sector del transporte y la logística',
      story: {
        title: 'Nuestra Historia',
        content: 'Desde nuestra creación, LOGICY TRANSPORT se ha establecido como un actor principal del sector logístico gracias a nuestra experiencia y compromiso con la excelencia.'
      },
      mission: {
        title: 'Nuestra Misión',
        content: 'Proporcionar soluciones de transporte confiables, eficientes y personalizadas para apoyar el crecimiento de nuestros clientes.'
      },
      values: {
        title: '¿Por qué elegir LOGICY TRANSPORT?',
        reliability: 'Confiabilidad',
        innovation: 'Innovación',
        quality: 'Calidad',
        service: 'Servicio al cliente'
      }
    },

    // Transport pages
    transport: {
      aerial: {
        title: 'Transporte Aéreo',
        subtitle: 'Soluciones de flete aéreo express para sus envíos urgentes e internacionales con cobertura mundial',
        quote: 'Solicitar Cotización',
        whyChoose: '¿Por qué elegir nuestro transporte aéreo?',
        servicesTitle: 'Nuestros Servicios de Flete Aéreo',
        contact: 'Contáctanos',
        freeQuote: 'Cotización Gratuita',
        advantages: {
          speed: {
            title: 'Velocidad Excepcional',
            description: 'Entrega express en todo el mundo en 24-72h'
          },
          coverage: {
            title: 'Cobertura Mundial',
            description: 'Red internacional con todos los aeropuertos principales'
          },
          security: {
            title: 'Seguridad Máxima',
            description: 'Los más altos estándares de seguridad aeronáutica'
          },
          tracking: {
            title: 'Trazabilidad Completa',
            description: 'Seguimiento en tiempo real desde el aeropuerto de salida hasta la entrega'
          }
        },
        services: [
          'Flete aéreo express (24h/48h/72h)',
          'Transporte de mercancías perecederas',
          'Paquetes urgentes y documentos',
          'Mercancías de valor',
          'Transporte farmacéutico',
          'Repuestos industriales',
          'E-commerce internacional',
          'Consolidación y grupaje aéreo'
        ],
        timelines: {
          title: 'Tiempos y Destinos',
          express24: 'Express 24h',
          express48: 'Express 48h',
          express72: 'Express 72h',
          standard: 'Estándar',
          zones: {
            europe: 'Europa, América del Norte',
            asia: 'Asia, Medio Oriente',
            southAmerica: 'América del Sur, Oceanía',
            africa: 'África, destinos especiales'
          },
          destinations: {
            title: 'Destinos principales',
            list: [
              'Más de 200 destinos mundiales',
              'Asociaciones con las principales aerolíneas',
              'Acceso a aeropuertos de carga especializados',
              'Servicio puerta a puerta disponible'
            ]
          }
        }
      },
      maritime: {
        title: 'Transporte Marítimo',
        subtitle: 'Soluciones de flete marítimo económicas y confiables para sus envíos internacionales de todos los volúmenes',
        whyChoose: '¿Por qué elegir nuestro transporte marítimo?',
        servicesTitle: 'Nuestros Servicios Marítimos',
        routesTitle: 'Rutas Principales',
        advantages: {
          economical: {
            title: 'Económico',
            description: 'Solución más rentable para grandes volúmenes'
          },
          global: {
            title: 'Mundial',
            description: 'Acceso a todos los puertos internacionales'
          },
          capacity: {
            title: 'Capacidad',
            description: 'Transporte de cargas pesadas y voluminosas'
          },
          reliability: {
            title: 'Confiabilidad',
            description: 'Respeto de plazos y seguridad de las mercancías'
          }
        },
        services: [
          'Contenedores FCL (Full Container Load)',
          'Grupaje LCL (Less than Container Load)',
          'Contenedores refrigerados',
          'Transporte de vehículos (RoRo)',
          'Mercancías a granel',
          'Proyectos industriales',
          'Contenedores especiales (Open Top, Flat Rack)',
          'Transporte multimodal mar/carretera/ferrocarril'
        ],
        containers: {
          title: 'Tipos de contenedores',
          list: [
            "20' Estándar (33 m³)",
            "40' Estándar (67 m³)",
            "40' High Cube (76 m³)",
            "Contenedores especiales bajo pedido"
          ]
        }
      },
      road: {
        title: 'Transporte Terrestre',
        subtitle: 'Soluciones de transporte terrestre confiables y flexibles para Europa y África del Norte con seguimiento en tiempo real',
        whyChoose: '¿Por qué elegir nuestro transporte terrestre?',
        servicesTitle: 'Nuestros Servicios Terrestres',
        vehiclesTitle: 'Nuestra Flota',
        advantages: {
          flexibility: {
            title: 'Flexibilidad',
            description: 'Puerta a puerta con horarios adaptados'
          },
          coverage: {
            title: 'Cobertura Extendida',
            description: 'Europa y África del Norte'
          },
          speed: {
            title: 'Rapidez',
            description: 'Entrega express 24-48h'
          },
          tracking: {
            title: 'Seguimiento en Tiempo Real',
            description: 'Geolocalización GPS continua'
          }
        },
        services: [
          'Entrega express 24-48h',
          'Transporte de mensajería',
          'Paquetes y pallets',
          'Mudanzas profesionales',
          'Transporte de vehículos',
          'Mercancías peligrosas (ADR)',
          'Transporte refrigerado',
          'Grupaje y distribución'
        ],
        vehicles: {
          title: 'Tipos de vehículos',
          list: [
            'Vehículos ligeros (3,5T)',
            'Camiones (7,5T - 19T)',
            'Semirremolques (40T)',
            'Vehículos refrigerados'
          ]
        }
      }
    }
  },

  de: {
    // Navigation
    nav: {
      home: 'Startseite',
      tracking: 'Sendungsverfolgung',
      services: 'Dienstleistungen',
      about: 'Über uns',
      contact: 'Kontakt',
      quote: 'Angebot',
      zones: 'Lieferzonen'
    },
    
    // Common
    common: {
      learnMore: 'Mehr erfahren',
      contact: 'Kontaktieren Sie uns',
      getQuote: 'Angebot anfordern',
      freeQuote: 'Kostenloses Angebot',
      readMore: 'Weiterlesen',
      close: 'Schließen',
      loading: 'Laden...',
      error: 'Fehler',
      success: 'Erfolg'
    },

    // Basic German translations
    home: {
      title: 'Seit 2007 liefert LOGICY TRANSPORT Ihre Pakete, Fracht und Fahrzeuge weltweit mit Zuverlässigkeit und Prestige',
      subtitle: 'Ihr vertrauensvoller Logistikpartner',
      description: 'Maßgeschneiderte Transport- und Logistiklösungen für Ihre beruflichen Bedürfnisse weltweit',
      cta: 'Unsere Services entdecken',
      services: {
        title: 'Unsere Services',
        road: {
          title: 'Straßentransport',
          description: 'Zuverlässige und wirtschaftliche Landtransportlösungen'
        },
        air: {
          title: 'Lufttransport',
          description: 'Schnelle Lieferungen auf dem Luftweg'
        },
        maritime: {
          title: 'Seetransport',
          description: 'Warentransport auf dem Seeweg'
        }
      }
    },

    tracking: {
      title: 'Paketverfolgung',
      description: 'Geben Sie Ihren Tracking-Code ein, um den Status Ihrer Sendung in Echtzeit zu erfahren',
      placeholder: 'Geben Sie Ihren Tracking-Code ein',
      search: 'Suchen',
      help: 'Brauchen Sie Hilfe?',
      format: 'Tracking-Code-Format:',
      formatExample: 'LOG + 9 Ziffern (z.B.: LOG123456789)',
      testCodes: 'Test-Codes:',
      testCodesExample: 'LOG123456789, LOG987654321'
    },

    services: {
      title: 'Unsere Transportdienstleistungen',
      description: 'Vollständige Logistiklösungen für alle Ihre Transportbedürfnisse',
      experience: 'Über 17 Jahre Erfahrung'
    },

    contact: {
      title: 'Kontaktieren Sie uns',
      description: 'Unser Team steht Ihnen zur Verfügung, um Ihre Fragen zu beantworten',
      form: {
        name: 'Vollständiger Name',
        email: 'E-Mail-Adresse',
        phone: 'Telefon',
        subject: 'Betreff',
        message: 'Nachricht',
        send: 'Nachricht senden'
      },
      info: {
        address: 'Adresse',
        phone: 'Telefon',
        email: 'E-Mail',
        hours: 'Öffnungszeiten'
      }
    },

    about: {
      title: 'Über LOGICY TRANSPORT',
      description: 'Marktführer im Bereich Transport und Logistik',
      story: {
        title: 'Unsere Geschichte',
        content: 'Seit unserer Gründung hat sich LOGICY TRANSPORT als wichtiger Akteur im Logistiksektor etabliert.'
      },
      mission: {
        title: 'Unsere Mission',
        content: 'Zuverlässige, effiziente und personalisierte Transportlösungen anzubieten.'
      },
      values: {
        title: 'Warum LOGICY TRANSPORT wählen?',
        reliability: 'Zuverlässigkeit',
        innovation: 'Innovation',
        quality: 'Qualität',
        service: 'Kundenservice'
      }
    }
  },

  it: {
    // Navigation  
    nav: {
      home: 'Home',
      tracking: 'Tracking',
      services: 'Servizi',
      about: 'Chi siamo',
      contact: 'Contatti',
      quote: 'Preventivo',
      zones: 'Zone di consegna'
    },
    
    // Common
    common: {
      learnMore: 'Scopri di più',
      contact: 'Contattaci',
      getQuote: 'Richiedi preventivo',
      freeQuote: 'Preventivo gratuito',
      readMore: 'Leggi di più',
      close: 'Chiudi',
      loading: 'Caricamento...',
      error: 'Errore',
      success: 'Successo'
    },

    // Basic Italian translations
    home: {
      title: 'Dal 2007, LOGICY TRANSPORT consegna i vostri pacchi, merci e veicoli in tutto il mondo con affidabilità e prestigio',
      subtitle: 'Il vostro partner logistico di fiducia',
      description: 'Soluzioni di trasporto e logistica personalizzate per le vostre esigenze professionali in tutto il mondo',
      cta: 'Scopri i nostri servizi',
      services: {
        title: 'I Nostri Servizi',
        road: {
          title: 'Trasporto Stradale',
          description: 'Soluzioni di trasporto terrestre affidabili ed economiche'
        },
        air: {
          title: 'Trasporto Aereo',
          description: 'Consegne veloci via aerea'
        },
        maritime: {
          title: 'Trasporto Marittimo',
          description: 'Trasporto merci via mare'
        }
      }
    },

    tracking: {
      title: 'Tracciamento Pacchi',
      description: 'Inserisci il tuo codice di tracciamento per conoscere lo stato della tua spedizione in tempo reale',
      placeholder: 'Inserisci il tuo codice di tracciamento',
      search: 'Cerca',
      help: 'Hai bisogno di aiuto?',
      format: 'Formato codice di tracciamento:',
      formatExample: 'LOG + 9 cifre (es: LOG123456789)',
      testCodes: 'Codici di test:',
      testCodesExample: 'LOG123456789, LOG987654321'
    },

    services: {
      title: 'I Nostri Servizi di Trasporto',
      description: 'Soluzioni logistiche complete per tutte le vostre esigenze di trasporto',
      experience: 'Oltre 17 anni di esperienza'
    },

    contact: {
      title: 'Contattaci',
      description: 'Il nostro team è a vostra disposizione per rispondere alle vostre domande',
      form: {
        name: 'Nome completo',
        email: 'Indirizzo email',
        phone: 'Telefono',
        subject: 'Oggetto',
        message: 'Messaggio',
        send: 'Invia messaggio'
      },
      info: {
        address: 'Indirizzo',
        phone: 'Telefono',
        email: 'Email',
        hours: 'Orari di apertura'
      }
    },

    about: {
      title: 'Chi è LOGICY TRANSPORT',
      description: 'Leader nel settore del trasporto e della logistica',
      story: {
        title: 'La Nostra Storia',
        content: 'Dalla nostra creazione, LOGICY TRANSPORT si è affermata come attore principale del settore logistico.'
      },
      mission: {
        title: 'La Nostra Missione',
        content: 'Fornire soluzioni di trasporto affidabili, efficienti e personalizzate.'
      },
      values: {
        title: 'Perché scegliere LOGICY TRANSPORT?',
        reliability: 'Affidabilità',
        innovation: 'Innovazione',
        quality: 'Qualità',
        service: 'Servizio clienti'
      }
    }
  },

  pt: {
    // Navigation
    nav: {
      home: 'Início',
      tracking: 'Rastreamento',
      services: 'Serviços',
      about: 'Sobre',
      contact: 'Contato',
      quote: 'Orçamento',
      zones: 'Zonas de entrega'
    },
    
    // Common
    common: {
      learnMore: 'Saiba mais',
      contact: 'Entre em contato',
      getQuote: 'Solicitar orçamento',
      freeQuote: 'Orçamento gratuito',
      readMore: 'Leia mais',
      close: 'Fechar',
      loading: 'Carregando...',
      error: 'Erro',
      success: 'Sucesso'
    },

    // Basic Portuguese translations
    home: {
      title: 'Desde 2007, LOGICY TRANSPORT entrega suas encomendas, cargas e veículos em todo o mundo com confiabilidade e prestígio',
      subtitle: 'Seu parceiro logístico de confiança',
      description: 'Soluções de transporte e logística personalizadas para suas necessidades profissionais em todo o mundo',
      cta: 'Descobrir nossos serviços',
      services: {
        title: 'Nossos Serviços',
        road: {
          title: 'Transporte Rodoviário',
          description: 'Soluções de transporte terrestre confiáveis e econômicas'
        },
        air: {
          title: 'Transporte Aéreo',
          description: 'Entregas rápidas por via aérea'
        },
        maritime: {
          title: 'Transporte Marítimo',
          description: 'Transporte de mercadorias por via marítima'
        }
      }
    },

    tracking: {
      title: 'Rastreamento de Encomendas',
      description: 'Digite seu código de rastreamento para conhecer o status de seu envio em tempo real',
      placeholder: 'Digite seu código de rastreamento',
      search: 'Pesquisar',
      help: 'Precisa de ajuda?',
      format: 'Formato do código de rastreamento:',
      formatExample: 'LOG + 9 dígitos (ex: LOG123456789)',
      testCodes: 'Códigos de teste:',
      testCodesExample: 'LOG123456789, LOG987654321'
    },

    services: {
      title: 'Nossos Serviços de Transporte',
      description: 'Soluções logísticas completas para todas as suas necessidades de transporte',
      experience: 'Mais de 17 anos de experiência'
    },

    contact: {
      title: 'Entre em contato',
      description: 'Nossa equipe está à sua disposição para responder suas perguntas',
      form: {
        name: 'Nome completo',
        email: 'Endereço de email',
        phone: 'Telefone',
        subject: 'Assunto',
        message: 'Mensagem',
        send: 'Enviar mensagem'
      },
      info: {
        address: 'Endereço',
        phone: 'Telefone',
        email: 'Email',
        hours: 'Horários de atendimento'
      }
    },

    about: {
      title: 'Sobre LOGICY TRANSPORT',
      description: 'Líder no setor de transporte e logística',
      story: {
        title: 'Nossa História',
        content: 'Desde nossa criação, LOGICY TRANSPORT se estabeleceu como um ator principal do setor logístico.'
      },
      mission: {
        title: 'Nossa Missão',
        content: 'Fornecer soluções de transporte confiáveis, eficientes e personalizadas.'
      },
      values: {
        title: 'Por que escolher LOGICY TRANSPORT?',
        reliability: 'Confiabilidade',
        innovation: 'Inovação',
        quality: 'Qualidade',
        service: 'Atendimento ao cliente'
      }
    }
  }
};
