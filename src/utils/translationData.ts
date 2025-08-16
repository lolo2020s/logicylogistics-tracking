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
      description: 'Soluciones logísticas completas para todas sus necesidades de transporte, desde la entrega express hasta envíos internacionales',
      experience: 'Más de 17 años de experiencia',
      road: {
        title: 'Transporte Terrestre',
        description: 'Soluciones de transporte terrestre confiables para Europa y África del Norte',
        features: [
          'Entrega express 24-48h',
          'Vehículos ligeros a pesados',
          'Seguimiento en tiempo real',
          'Seguro a todo riesgo'
        ]
      },
      air: {
        title: 'Transporte Aéreo',
        description: 'Carga aérea express para sus envíos urgentes en todo el mundo',
        features: [
          'Entrega 24-72h',
          'Cobertura mundial',
          'Seguridad máxima',
          'Trazabilidad completa'
        ]
      },
      maritime: {
        title: 'Transporte Marítimo',
        description: 'Soluciones económicas para sus expediciones internacionales voluminosas',
        features: [
          'Contenedores FCL/LCL',
          'Todos los puertos mundiales',
          'Tarifas competitivas',
          'Grupaje optimizado'
        ]
      },
      express: {
        title: 'Logística Express',
        description: 'Servicio premium para sus envíos urgentes con garantía de plazos',
        features: [
          'Mismo día posible',
          'Servicio 24/7',
          'Mensajero dedicado',
          'Reembolso si hay retraso'
        ]
      },
      custom: {
        title: 'Soluciones a Medida',
        description: 'Soluciones logísticas personalizadas según sus necesidades específicas',
        features: [
          'Análisis de necesidades',
          'Solución dedicada',
          'Acompañamiento experto',
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
          title: 'Plazos Respetados',
          description: 'Nuestros equipos se comprometen a respetar los plazos acordados con garantías'
        },
        security: {
          title: 'Seguridad Máxima',
          description: 'Sus envíos están protegidos y asegurados durante todo el transporte'
        },
        pricing: {
          title: 'Tarifas Transparentes',
          description: 'Precios fijos sin sorpresas con cotización gratuita en 24h'
        }
      }
    },

    // Contact
    contact: {
      title: 'Contáctanos',
      description: 'Nuestro equipo está a su disposición para responder sus preguntas',
      form: {
        title: 'Envíanos un mensaje',
        name: 'Nombre completo',
        namePlaceholder: 'Su nombre completo',
        email: 'Dirección de correo',
        emailPlaceholder: 'su.email@ejemplo.com',
        message: 'Mensaje',
        messagePlaceholder: 'Describa su solicitud...',
        send: 'Enviar mensaje',
        success: {
          title: '¡Mensaje enviado!',
          description: 'Le responderemos a la brevedad.'
        }
      },
      info: {
        email: 'Correo',
        phone: 'Teléfono',
        address: 'Dirección',
        hours: 'Horarios de atención',
        schedule: 'Lun-Vie: 8h-18h\nSáb: 9h-12h'
      },
      map: {
        title: 'Encuéntranos',
        note: '* Un mapa interactivo estará pronto disponible para facilitar su visita'
      }
    },

    // About
    about: {
      title: 'Acerca de LOGICY TRANSPORT',
      description: 'Líder en el campo del transporte y la logística',
      story: {
        title: 'Nuestra Historia',
        content: 'Desde nuestra creación, LOGICY TRANSPORT se ha establecido como un actor importante del sector logístico gracias a nuestra experiencia y compromiso con la excelencia.'
      },
      mission: {
        title: 'Nuestra Misión',
        content: 'Proporcionar soluciones de transporte confiables, eficientes y personalizadas para acompañar el crecimiento de nuestros clientes.'
      },
      values: {
        title: '¿Por qué elegir LOGICY TRANSPORT?',
        reliability: 'Confiabilidad',
        innovation: 'Innovación',
        quality: 'Calidad',
        service: 'Servicio al cliente'
      },
      stats: {
        experience: 'Años de experiencia',
        clients: 'Clientes satisfechos',
        countries: 'Países atendidos',
        shipments: 'Envíos realizados'
      },
      timeline: {
        title: 'Nuestra Historia',
        items: [
          {
            year: '2007',
            title: 'Creación de LOGICY TRANSPORT',
            description: 'Fundación de la empresa con una visión clara: revolucionar el transporte logístico.'
          },
          {
            year: '2010',
            title: 'Expansión europea',
            description: 'Apertura de nuestros servicios en toda Europa con socios de confianza.'
          },
          {
            year: '2015',
            title: 'Transporte aéreo',
            description: 'Lanzamiento de nuestros servicios de transporte aéreo para envíos express.'
          },
          {
            year: '2018',
            title: 'Soluciones marítimas',
            description: 'Desarrollo de nuestra oferta marítima para cargas voluminosas.'
          },
          {
            year: '2020',
            title: 'Digitalización',
            description: 'Implementación del sistema de seguimiento en tiempo real y digitalización completa.'
          },
          {
            year: '2024',
            title: 'Innovación continua',
            description: 'Hoy, seguimos innovando para ofrecer las mejores soluciones.'
          }
        ]
      },
      missionExpanded: {
        content: 'Nos comprometemos a brindar soluciones de transporte innovadoras, poniendo la satisfacción del cliente en el centro de nuestras preocupaciones.'
      },
      commitments: {
        title: 'Nuestros Compromisos',
        tracking: 'Trazabilidad completa de sus envíos',
        support: 'Servicio al cliente receptivo 24/7',
        environment: 'Respeto por el medio ambiente'
      },
      cta: {
        title: 'Únase a nuestros clientes satisfechos',
        description: 'Descubra por qué cientos de empresas confían en nosotros',
        servicesButton: 'Descubrir nuestros servicios',
        contactButton: 'Contáctenos'
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

  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      tracking: 'التتبع',
      services: 'الخدمات',
      about: 'من نحن',
      contact: 'اتصل بنا',
      quote: 'عرض السعر',
      zones: 'مناطق التسليم'
    },
    
    // Common
    common: {
      learnMore: 'اعرف المزيد',
      contact: 'اتصل بنا',
      getQuote: 'احصل على عرض سعر',
      freeQuote: 'عرض سعر مجاني',
      readMore: 'قراءة المزيد',
      close: 'إغلاق',
      loading: 'جاري التحميل...',
      error: 'خطأ',
      success: 'نجح'
    },

    // Home page
    home: {
      title: 'منذ عام 2007، تقوم LOGICY TRANSPORT بتوصيل طرودكم وشحناتكم ومركباتكم في جميع أنحاء العالم بموثوقية وهيبة',
      subtitle: 'شريكك اللوجستي الموثوق',
      description: 'حلول نقل ولوجستيك مخصصة لاحتياجاتكم المهنية في جميع أنحاء العالم',
      cta: 'اكتشف خدماتنا',
      services: {
        title: 'خدماتنا',
        road: {
          title: 'النقل البري',
          description: 'حلول نقل بري موثوقة واقتصادية'
        },
        air: {
          title: 'النقل الجوي',
          description: 'توصيل سريع عبر الطيران'
        },
        maritime: {
          title: 'النقل البحري',
          description: 'نقل البضائع بحراً'
        }
      }
    },

    // Tracking
    tracking: {
      title: 'تتبع الطرود',
      description: 'أدخل رمز التتبع الخاص بك لمعرفة حالة شحنتك في الوقت الفعلي',
      placeholder: 'أدخل رمز التتبع الخاص بك',
      search: 'بحث',
      help: 'هل تحتاج إلى مساعدة؟',
      format: 'تنسيق رمز التتبع:',
      formatExample: 'LOG + 9 أرقام (مثال: LOG123456789)',
      testCodes: 'رموز الاختبار:',
      testCodesExample: 'LOG123456789, LOG987654321'
    },

    // Services
    services: {
      title: 'خدمات النقل الخاصة بنا',
      description: 'حلول لوجستية كاملة لجميع احتياجات النقل الخاصة بك، من التسليم السريع إلى الشحنات الدولية',
      experience: 'أكثر من 17 عامًا من الخبرة',
      road: {
        title: 'النقل البري',
        description: 'حلول نقل بري موثوقة لأوروبا وشمال أفريقيا',
        features: [
          'توصيل سريع 24-48 ساعة',
          'مركبات خفيفة إلى ثقيلة',
          'تتبع في الوقت الحقيقي',
          'تأمين شامل'
        ]
      },
      air: {
        title: 'النقل الجوي',
        description: 'شحن جوي سريع لشحناتك العاجلة في جميع أنحاء العالم',
        features: [
          'توصيل 24-72 ساعة',
          'تغطية عالمية',
          'أمان عالي',
          'تتبع كامل'
        ]
      },
      maritime: {
        title: 'النقل البحري',
        description: 'حلول اقتصادية لشحناتك الدولية الكبيرة',
        features: [
          'حاويات FCL/LCL',
          'جميع الموانئ العالمية',
          'أسعار تنافسية',
          'تجميع محسن'
        ]
      },
      express: {
        title: 'اللوجستيات السريعة',
        description: 'خدمة مميزة لشحناتك العاجلة مع ضمان التسليم',
        features: [
          'التسليم في نفس اليوم ممكن',
          'خدمة 24/7',
          'ساعي مخصص',
          'استرداد في حالة التأخير'
        ]
      },
      custom: {
        title: 'حلول مخصصة',
        description: 'حلول لوجستية مخصصة حسب احتياجاتك الخاصة',
        features: [
          'تحليل الاحتياجات',
          'حل مخصص',
          'دعم الخبراء',
          'قابلية التوسع مضمونة'
        ]
      },
      tracking: {
        title: 'تتبع الطرود',
        description: 'نظام تتبع متقدم لمتابعة شحناتك في الوقت الحقيقي',
        features: [
          'تحديد الموقع الجغرافي GPS',
          'إشعارات SMS',
          'واجهة ويب',
          'API متاحة'
        ]
      },
      advantages: {
        delivery: {
          title: 'التسليم في الوقت المحدد',
          description: 'تلتزم فرقنا باحترام المواعيد المتفق عليها مع ضمانات'
        },
        security: {
          title: 'أمان عالي',
          description: 'شحناتك محمية ومؤمنة طوال فترة النقل'
        },
        pricing: {
          title: 'أسعار شفافة',
          description: 'أسعار ثابتة بدون مفاجآت مع عروض مجانية خلال 24 ساعة'
        }
      }
    },

    // Contact
    contact: {
      title: 'اتصل بنا',
      description: 'فريقنا متاح للرد على استفساراتك',
      form: {
        title: 'أرسل لنا رسالة',
        name: 'الاسم الكامل',
        namePlaceholder: 'اسمك الكامل',
        email: 'البريد الإلكتروني',
        emailPlaceholder: 'your.email@example.com',
        message: 'الرسالة',
        messagePlaceholder: 'صف طلبك...',
        send: 'إرسال الرسالة',
        success: {
          title: 'تم إرسال الرسالة!',
          description: 'سوف نرد عليك في أقرب وقت ممكن.'
        }
      },
      info: {
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
        address: 'العنوان',
        hours: 'ساعات العمل',
        schedule: 'الإثنين-الجمعة: 8ص-6م\nالسبت: 9ص-12م'
      },
      map: {
        title: 'اعثر علينا',
        note: '* سيتم توفير خريطة تفاعلية قريبًا لتسهيل زيارتك'
      }
    },

    // About
    about: {
      title: 'حول LOGICY TRANSPORT',
      description: 'الرائد في مجال النقل واللوجستيات',
      story: {
        title: 'قصتنا',
        content: 'منذ تأسيسها، أصبحت LOGICY TRANSPORT لاعبًا رئيسيًا في قطاع اللوجستيات بفضل خبرتنا والتزامنا بالتميز.'
      },
      mission: {
        title: 'مهمتنا',
        content: 'توفير حلول نقل موثوقة وفعالة ومخصصة لدعم نمو عملائنا.'
      },
      values: {
        title: 'لماذا تختار LOGICY TRANSPORT؟',
        reliability: 'الموثوقية',
        innovation: 'الابتكار',
        quality: 'الجودة',
        service: 'خدمة العملاء'
      },
      stats: {
        experience: 'سنوات الخبرة',
        clients: 'عملاء راضون',
        countries: 'الدول المخدومة',
        shipments: 'الشحنات المنجزة'
      },
      timeline: {
        title: 'تاريخنا',
        items: [
          {
            year: '2007',
            title: 'تأسيس LOGICY TRANSPORT',
            description: 'تأسيس الشركة برؤية واضحة: ثورة في نقل اللوجستيات.'
          },
          {
            year: '2010',
            title: 'التوسع الأوروبي',
            description: 'فتح خدماتنا في جميع أنحاء أوروبا مع شركاء موثوقين.'
          },
          {
            year: '2015',
            title: 'النقل الجوي',
            description: 'إطلاق خدمات النقل الجوي للتسليم السريع.'
          },
          {
            year: '2018',
            title: 'الحلول البحرية',
            description: 'تطوير عرضنا البحري للشحنات الكبيرة.'
          },
          {
            year: '2020',
            title: 'الرقمنة',
            description: 'تنفيذ نظام التتبع في الوقت الحقيقي والرقمنة الكاملة.'
          },
          {
            year: '2024',
            title: 'الابتكار المستمر',
            description: 'نواصل الابتكار لتقديم أفضل الحلول.'
          }
        ]
      },
      missionExpanded: {
        content: 'نلتزم بتقديم حلول نقل مبتكرة، مع وضع رضا العملاء في قلب اهتماماتنا.'
      },
      commitments: {
        title: 'التزاماتنا',
        tracking: 'تتبع كامل لشحناتكم',
        support: 'خدمة عملاء سريعة الاستجابة 24/7',
        environment: 'المسؤولية البيئية'
      },
      cta: {
        title: 'انضم إلى عملائنا الراضين',
        description: 'اكتشف لماذا يثق بنا مئات الشركات',
        servicesButton: 'اكتشف خدماتنا',
        contactButton: 'اتصل بنا'
      }
    },

    // Transport pages
    transport: {
      aerial: {
        title: 'النقل الجوي',
        subtitle: 'حلول شحن جوي سريع لشحناتكم العاجلة والدولية مع تغطية عالمية',
        quote: 'طلب عرض سعر',
        whyChoose: 'لماذا تختار النقل الجوي لدينا؟',
        servicesTitle: 'خدمات الشحن الجوي',
        contact: 'اتصل بنا',
        freeQuote: 'عرض سعر مجاني',
        advantages: {
          speed: {
            title: 'سرعة استثنائية',
            description: 'توصيل سريع في جميع أنحاء العالم خلال 24-72 ساعة'
          },
          coverage: {
            title: 'تغطية عالمية',
            description: 'شبكة دولية مع جميع المطارات الرئيسية'
          },
          security: {
            title: 'أمان قصوى',
            description: 'أعلى معايير الأمان في الطيران'
          },
          tracking: {
            title: 'تتبع كامل',
            description: 'تتبع في الوقت الفعلي من مطار المغادرة إلى التسليم'
          }
        },
        services: [
          'شحن جوي سريع (24/48/72 ساعة)',
          'نقل البضائع القابلة للتلف',
          'الطرود العاجلة والوثائق',
          'البضائع الثمينة',
          'النقل الصيدلاني',
          'قطع الغيار الصناعية',
          'التجارة الإلكترونية الدولية',
          'التوحيد والتجميع الجوي'
        ],
        timelines: {
          title: 'المواعيد والوجهات',
          express24: 'سريع 24 ساعة',
          express48: 'سريع 48 ساعة',
          express72: 'سريع 72 ساعة',
          standard: 'قياسي',
          zones: {
            europe: 'أوروبا، أمريكا الشمالية',
            asia: 'آسيا، الشرق الأوسط',
            southAmerica: 'أمريكا الجنوبية، أوقيانوسيا',
            africa: 'أفريقيا، وجهات خاصة'
          },
          destinations: {
            title: 'الوجهات الرئيسية',
            list: [
              'أكثر من 200 وجهة عالمية',
              'شراكات مع شركات الطيران الكبرى',
              'الوصول إلى مطارات الشحن المتخصصة',
              'خدمة من الباب إلى الباب متاحة'
            ]
          }
        }
      },
      maritime: {
        title: 'النقل البحري',
        subtitle: 'حلول شحن بحري اقتصادية وموثوقة لشحناتكم الدولية من جميع الأحجام',
        whyChoose: 'لماذا تختار النقل البحري لدينا؟',
        servicesTitle: 'خدمات النقل البحري',
        routesTitle: 'الطرق الرئيسية',
        advantages: {
          economical: {
            title: 'اقتصادي',
            description: 'الحل الأكثر فعالية من حيث التكلفة للأحجام الكبيرة'
          },
          global: {
            title: 'عالمي',
            description: 'الوصول إلى جميع الموانئ الدولية'
          },
          capacity: {
            title: 'السعة',
            description: 'نقل الأحمال الثقيلة والضخمة'
          },
          reliability: {
            title: 'الموثوقية',
            description: 'احترام المواعيد وأمان البضائع'
          }
        },
        services: [
          'حاويات FCL (حمولة حاوية كاملة)',
          'تجميع LCL (أقل من حمولة حاوية)',
          'حاويات مبردة',
          'نقل المركبات (RoRo)',
          'البضائع السائبة',
          'المشاريع الصناعية',
          'حاويات خاصة (Open Top, Flat Rack)',
          'النقل متعدد الوسائط بحر/طريق/سكة حديد'
        ],
        containers: {
          title: 'أنواع الحاويات',
          list: [
            "20' قياسي (33 م³)",
            "40' قياسي (67 م³)",
            "40' عالي المكعب (76 م³)",
            "حاويات خاصة حسب الطلب"
          ]
        }
      },
      road: {
        title: 'النقل البري',
        subtitle: 'حلول نقل بري موثوقة ومرنة لأوروبا وشمال أفريقيا مع تتبع في الوقت الفعلي',
        whyChoose: 'لماذا تختار النقل البري لدينا؟',
        servicesTitle: 'خدمات النقل البري',
        vehiclesTitle: 'أسطولنا',
        advantages: {
          flexibility: {
            title: 'المرونة',
            description: 'من الباب إلى الباب مع جداول زمنية مكيفة'
          },
          coverage: {
            title: 'تغطية موسعة',
            description: 'أوروبا وشمال أفريقيا'
          },
          speed: {
            title: 'السرعة',
            description: 'توصيل سريع 24-48 ساعة'
          },
          tracking: {
            title: 'تتبع في الوقت الفعلي',
            description: 'تحديد الموقع الجغرافي GPS مستمر'
          }
        },
        services: [
          'توصيل سريع 24-48 ساعة',
          'نقل الرسائل',
          'الطرود والمنصات',
          'نقل مهني',
          'نقل المركبات',
          'البضائع الخطرة (ADR)',
          'النقل المبرد',
          'التجميع والتوزيع'
        ],
        vehicles: {
          title: 'أنواع المركبات',
          list: [
            'مركبات خفيفة (3.5 طن)',
            'شاحنات (7.5 - 19 طن)',
            'شاحنات مقطورة (40 طن)',
            'مركبات مبردة'
          ]
        }
      }
    }
  }
};
