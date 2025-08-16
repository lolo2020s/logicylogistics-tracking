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
      carousel: {
        alt: {
          0: 'Transport et logistique LOGICY - Image 1',
          1: 'Solutions de transport professionnel - Image 2', 
          2: 'Services logistiques internationaux - Image 3'
        }
      },
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
        contact: 'Nous Contacter',
        freeQuote: 'Devis Gratuit',
        whyChoose: 'Pourquoi choisir notre transport aérien ?',
        servicesTitle: 'Nos Services de Fret Aérien',
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
        services: {
          0: 'Fret aérien express (24h/48h/72h)',
          1: 'Transport de marchandises périssables',
          2: 'Colis urgents et documents',
          3: 'Marchandises de valeur',
          4: 'Transport pharmaceutique',
          5: 'Pièces détachées industrielles',
          6: 'E-commerce international',
          7: 'Consolidation et groupage aérien'
        },
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
            list: {
              0: 'Plus de 200 destinations mondiales',
              1: 'Partenariats avec les grandes compagnies',
              2: 'Accès aux aéroports cargo spécialisés',
              3: 'Service porte-à-porte disponible'
            }
          }
        }
      },
      road: {
        title: 'Transport Routier',
        subtitle: 'Solutions de transport routier fiables et efficaces pour tous vos besoins logistiques en Europe et au-delà',
        whyChoose: 'Pourquoi choisir notre transport routier ?',
        servicesTitle: 'Nos Services de Transport Routier',
        advantages: {
          speed: {
            title: 'Livraison Rapide',
            description: 'Délais de livraison courts grâce à notre réseau routier optimisé'
          },
          security: {
            title: 'Sécurité Garantie',
            description: 'Assurance complète et suivi en temps réel de vos colis'
          },
          pricing: {
            title: 'Tarifs Compétitifs',
            description: 'Prix attractifs pour tous types de marchandises'
          },
          flexibility: {
            title: 'Flexibilité',
            description: 'Service porte-à-porte adapté à vos besoins spécifiques'
          }
        },
        services: {
          0: 'Transport de marchandises générales',
          1: 'Livraison express (24h/48h)',
          2: 'Transport de véhicules',
          3: 'Déménagement professionnel',
          4: 'Transport frigorifique',
          5: 'Marchandises dangereuses (ADR)',
          6: 'Convois exceptionnels',
          7: 'Distribution urbaine'
        },
        fleet: {
          title: 'Flotte et Capacités',
          vehicles: {
            light: {
              title: 'Véhicules légers',
              capacity: 'Jusqu\'à 3,5 tonnes'
            },
            medium: {
              title: 'Porteurs',
              capacity: 'Jusqu\'à 19 tonnes'
            },
            semiTrailer: {
              title: 'Semi-remorques',
              capacity: 'Jusqu\'à 40 tonnes'
            },
            special: {
              title: 'Convois spéciaux',
              capacity: 'Charges exceptionnelles'
            }
          },
          zones: {
            title: 'Zones de livraison',
            list: {
              0: 'France métropolitaine',
              1: 'Union Européenne',
              2: 'Afrique du Nord',
              3: 'Europe de l\'Est'
            }
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
        services: {
          0: 'Conteneurs FCL (Full Container Load)',
          1: 'Groupage LCL (Less than Container Load)',
          2: 'Conteneurs frigorifiques',
          3: 'Transport de véhicules (RoRo)',
          4: 'Marchandises en vrac',
          5: 'Projets industriels',
          6: 'Conteneurs spéciaux (Open Top, Flat Rack)',
          7: 'Transport multi-modal mer/route/rail'
        },
        containers: {
          title: 'Types de conteneurs',
          list: {
            0: "20' Standard (33 m³)",
            1: "40' Standard (67 m³)",
            2: "40' High Cube (76 m³)",
            3: 'Conteneurs spéciaux sur demande'
          }
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
      carousel: {
        alt: {
          0: 'LOGICY transport and logistics - Image 1',
          1: 'Professional transport solutions - Image 2',
          2: 'International logistics services - Image 3'
        }
      },
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
    },

    // Transport pages
    transport: {
      aerial: {
        title: 'Air Transport',
        subtitle: 'Express air freight solutions for your urgent and international shipments with global coverage',
        quote: 'Request a Quote',
        contact: 'Contact Us',
        freeQuote: 'Free Quote',
        whyChoose: 'Why choose our air transport?',
        servicesTitle: 'Our Air Freight Services',
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
        services: {
          0: 'Express air freight (24h/48h/72h)',
          1: 'Perishable goods transport',
          2: 'Urgent packages and documents',
          3: 'Valuable goods',
          4: 'Pharmaceutical transport',
          5: 'Industrial spare parts',
          6: 'International e-commerce',
          7: 'Air consolidation and groupage'
        },
        timelines: {
          title: 'Timelines and Destinations',
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
            list: {
              0: 'Over 200 global destinations',
              1: 'Partnerships with major airlines',
              2: 'Access to specialized cargo airports',
              3: 'Door-to-door service available'
            }
          }
        }
      },
      road: {
        title: 'Road Transport',
        subtitle: 'Reliable and efficient road transport solutions for all your logistics needs in Europe and beyond',
        quote: 'Request a Quote',
        contact: 'Contact Us',
        freeQuote: 'Free Quote',
        whyChoose: 'Why choose our road transport?',
        servicesTitle: 'Our Road Transport Services',
        advantages: {
          speed: {
            title: 'Fast Delivery',
            description: 'Short delivery times thanks to our optimized road network'
          },
          security: {
            title: 'Guaranteed Security',
            description: 'Complete insurance and real-time tracking of your packages'
          },
          pricing: {
            title: 'Competitive Pricing',
            description: 'Attractive prices for all types of goods'
          },
          flexibility: {
            title: 'Flexibility',
            description: 'Door-to-door service adapted to your specific needs'
          }
        },
        services: {
          0: 'General cargo transport',
          1: 'Express delivery (24h/48h)',
          2: 'Vehicle transport',
          3: 'Professional moving',
          4: 'Refrigerated transport',
          5: 'Dangerous goods (ADR)',
          6: 'Exceptional convoys',
          7: 'Urban distribution'
        },
        fleet: {
          title: 'Fleet and Capacities',
          vehicles: {
            light: {
              title: 'Light vehicles',
              capacity: 'Up to 3.5 tons'
            },
            medium: {
              title: 'Carriers',
              capacity: 'Up to 19 tons'
            },
            semiTrailer: {
              title: 'Semi-trailers',
              capacity: 'Up to 40 tons'
            },
            special: {
              title: 'Special convoys',
              capacity: 'Exceptional loads'
            }
          },
          zones: {
            title: 'Delivery zones',
            list: {
              0: 'Metropolitan France',
              1: 'European Union',
              2: 'North Africa',
              3: 'Eastern Europe'
            }
          }
        }
      },
      maritime: {
        title: 'Maritime Transport',
        subtitle: 'Economical and reliable maritime freight solutions for your international shipments of all volumes',
        quote: 'Request a Quote',
        contact: 'Contact Us',
        freeQuote: 'Free Quote',
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
        services: {
          0: 'FCL containers (Full Container Load)',
          1: 'LCL groupage (Less than Container Load)',
          2: 'Refrigerated containers',
          3: 'Vehicle transport (RoRo)',
          4: 'Bulk cargo',
          5: 'Industrial projects',
          6: 'Special containers (Open Top, Flat Rack)',
          7: 'Multi-modal transport sea/road/rail'
        },
        containers: {
          title: 'Container types',
          list: {
            0: "20' Standard (33 m³)",
            1: "40' Standard (67 m³)",
            2: "40' High Cube (76 m³)",
            3: 'Special containers on request'
          }
        }
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
      carousel: {
        alt: {
          0: 'Transporte y logística LOGICY - Imagen 1',
          1: 'Soluciones de transporte profesional - Imagen 2',
          2: 'Servicios logísticos internacionales - Imagen 3'
        }
      },
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
        subtitle: 'Soluciones de carga aérea express para sus envíos urgentes e internacionales con cobertura global',
        quote: 'Solicitar Cotización',
        contact: 'Contáctanos',
        freeQuote: 'Cotización Gratuita',
        whyChoose: '¿Por qué elegir nuestro transporte aéreo?',
        servicesTitle: 'Nuestros Servicios de Carga Aérea',
        advantages: {
          speed: {
            title: 'Velocidad Excepcional',
            description: 'Entrega express en todo el mundo en 24-72h'
          },
          coverage: {
            title: 'Cobertura Global',
            description: 'Red internacional con todos los aeropuertos principales'
          },
          security: {
            title: 'Seguridad Máxima',
            description: 'Estándares de seguridad aeronáutica más altos'
          },
          tracking: {
            title: 'Trazabilidad Completa',
            description: 'Seguimiento en tiempo real desde el aeropuerto de salida hasta la entrega'
          }
        },
        services: {
          0: 'Carga aérea express (24h/48h/72h)',
          1: 'Transporte de mercancías perecederas',
          2: 'Paquetes urgentes y documentos',
          3: 'Mercancías de valor',
          4: 'Transporte farmacéutico',
          5: 'Repuestos industriales',
          6: 'Comercio electrónico internacional',
          7: 'Consolidación y grupaje aéreo'
        },
        timelines: {
          title: 'Plazos y Destinos',
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
            list: {
              0: 'Más de 200 destinos globales',
              1: 'Alianzas con las principales aerolíneas',
              2: 'Acceso a aeropuertos cargo especializados',
              3: 'Servicio puerta a puerta disponible'
            }
          }
        }
      },
      road: {
        title: 'Transporte Terrestre',
        subtitle: 'Soluciones de transporte terrestre confiables y eficientes para todas sus necesidades logísticas en Europa y más allá',
        whyChoose: '¿Por qué elegir nuestro transporte terrestre?',
        servicesTitle: 'Nuestros Servicios de Transporte Terrestre',
        advantages: {
          speed: {
            title: 'Entrega Rápida',
            description: 'Plazos de entrega cortos gracias a nuestra red terrestre optimizada'
          },
          security: {
            title: 'Seguridad Garantizada',
            description: 'Seguro completo y seguimiento en tiempo real de sus paquetes'
          },
          pricing: {
            title: 'Precios Competitivos',
            description: 'Precios atractivos para todo tipo de mercancías'
          },
          flexibility: {
            title: 'Flexibilidad',
            description: 'Servicio puerta a puerta adaptado a sus necesidades específicas'
          }
        },
        services: {
          0: 'Transporte de mercancías generales',
          1: 'Entrega express (24h/48h)',
          2: 'Transporte de vehículos',
          3: 'Mudanza profesional',
          4: 'Transporte refrigerado',
          5: 'Mercancías peligrosas (ADR)',
          6: 'Convoyes excepcionales',
          7: 'Distribución urbana'
        },
        fleet: {
          title: 'Flota y Capacidades',
          vehicles: {
            light: {
              title: 'Vehículos ligeros',
              capacity: 'Hasta 3.5 toneladas'
            },
            medium: {
              title: 'Portadores',
              capacity: 'Hasta 19 toneladas'
            },
            semiTrailer: {
              title: 'Semirremolques',
              capacity: 'Hasta 40 toneladas'
            },
            special: {
              title: 'Convoyes especiales',
              capacity: 'Cargas excepcionales'
            }
          },
          zones: {
            title: 'Zonas de entrega',
            list: {
              0: 'Francia metropolitana',
              1: 'Unión Europea',
              2: 'África del Norte',
              3: 'Europa del Este'
            }
          }
        }
      },
      maritime: {
        title: 'Transporte Marítimo',
        subtitle: 'Soluciones de carga marítima económicas y confiables para sus expediciones internacionales de todos los volúmenes',
        whyChoose: '¿Por qué elegir nuestro transporte marítimo?',
        servicesTitle: 'Nuestros Servicios Marítimos',
        routesTitle: 'Rutas Principales',
        advantages: {
          economical: {
            title: 'Económico',
            description: 'Solución más rentable para grandes volúmenes'
          },
          global: {
            title: 'Global',
            description: 'Acceso a todos los puertos internacionales'
          },
          capacity: {
            title: 'Capacidad',
            description: 'Transporte de cargas pesadas y voluminosas'
          },
          reliability: {
            title: 'Confiabilidad',
            description: 'Respeto de plazos y seguridad de mercancías'
          }
        },
        services: {
          0: 'Contenedores FCL (Full Container Load)',
          1: 'Grupaje LCL (Less than Container Load)',
          2: 'Contenedores refrigerados',
          3: 'Transporte de vehículos (RoRo)',
          4: 'Mercancías a granel',
          5: 'Proyectos industriales',
          6: 'Contenedores especiales (Open Top, Flat Rack)',
          7: 'Transporte multimodal mar/carretera/ferrocarril'
        },
        containers: {
          title: 'Tipos de contenedores',
          list: {
            0: "20' Estándar (33 m³)",
            1: "40' Estándar (67 m³)",
            2: "40' High Cube (76 m³)",
            3: 'Contenedores especiales bajo pedido'
          }
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

    // Home page
    home: {
      title: 'Seit 2007 liefert LOGICY TRANSPORT Ihre Pakete, Fracht und Fahrzeuge weltweit mit Zuverlässigkeit und Prestige',
      subtitle: 'Ihr vertrauensvoller Logistikpartner',
      description: 'Maßgeschneiderte Transport- und Logistiklösungen für Ihre geschäftlichen Anforderungen weltweit',
      cta: 'Unsere Dienstleistungen entdecken',
      carousel: {
        alt: {
          0: 'LOGICY Transport und Logistik - Bild 1',
          1: 'Professionelle Transportlösungen - Bild 2',
          2: 'Internationale Logistikdienstleistungen - Bild 3'
        }
      },
      services: {
        title: 'Unsere Dienstleistungen',
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

    // Tracking
    tracking: {
      title: 'Paketverfolgung',
      description: 'Geben Sie Ihren Verfolgungscode ein, um den Status Ihrer Sendung in Echtzeit zu erfahren',
      placeholder: 'Geben Sie Ihren Verfolgungscode ein',
      search: 'Suchen',
      help: 'Benötigen Sie Hilfe?',
      format: 'Format des Verfolgungscodes:',
      formatExample: 'LOG + 9 Ziffern (z.B.: LOG123456789)',
      testCodes: 'Testcodes:',
      testCodesExample: 'LOG123456789, LOG987654321'
    },

    // Services
    services: {
      title: 'Unsere Transportdienstleistungen',
      description: 'Komplette Logistiklösungen für alle Ihre Transportbedürfnisse, von Express-Lieferung bis zu internationalen Sendungen',
      experience: 'Über 17 Jahre Erfahrung',
      road: {
        title: 'Straßentransport',
        description: 'Zuverlässige Straßentransportlösungen für Europa und Nordafrika',
        features: [
          'Express-Lieferung 24-48h',
          'Leichte bis schwere Fahrzeuge',
          'Echtzeit-Verfolgung',
          'Vollkaskoversicherung'
        ]
      },
      air: {
        title: 'Lufttransport',
        description: 'Express-Luftfracht für Ihre dringenden Sendungen weltweit',
        features: [
          'Lieferung 24-72h',
          'Weltweite Abdeckung',
          'Maximale Sicherheit',
          'Vollständige Rückverfolgbarkeit'
        ]
      },
      maritime: {
        title: 'Seetransport',
        description: 'Kostengünstige Lösungen für Ihre großen internationalen Sendungen',
        features: [
          'FCL/LCL Container',
          'Alle Welthäfen',
          'Wettbewerbsfähige Preise',
          'Optimierte Sammelgut'
        ]
      },
      express: {
        title: 'Express-Logistik',
        description: 'Premium-Service für dringende Sendungen mit Liefergarantie',
        features: [
          'Noch am selben Tag möglich',
          '24/7 Service',
          'Eigener Kurier',
          'Erstattung bei Verspätung'
        ]
      },
      custom: {
        title: 'Maßgeschneiderte Lösungen',
        description: 'Personalisierte Logistiklösungen nach Ihren spezifischen Bedürfnissen',
        features: [
          'Bedarfsanalyse',
          'Eigene Lösung',
          'Expertenbegleitung',
          'Garantierte Skalierbarkeit'
        ]
      },
      tracking: {
        title: 'Paketverfolgung',
        description: 'Erweiterte Tracking-System zur Verfolgung Ihrer Sendungen in Echtzeit',
        features: [
          'GPS-Geolokalisierung',
          'SMS-Benachrichtigungen',
          'Web-Interface',
          'API verfügbar'
        ]
      },
      advantages: {
        delivery: {
          title: 'Termine Eingehalten',
          description: 'Unsere Teams verpflichten sich, vereinbarte Termine mit Garantien einzuhalten'
        },
        security: {
          title: 'Maximale Sicherheit',
          description: 'Ihre Sendungen sind während des gesamten Transports geschützt und versichert'
        },
        pricing: {
          title: 'Transparente Preise',
          description: 'Festpreise ohne Überraschungen mit kostenlosem Angebot innerhalb von 24h'
        }
      }
    },

    // Contact
    contact: {
      title: 'Kontaktieren Sie uns',
      description: 'Unser Team steht Ihnen zur Verfügung, um Ihre Fragen zu beantworten',
      form: {
        title: 'Senden Sie uns eine Nachricht',
        name: 'Vollständiger Name',
        namePlaceholder: 'Ihr vollständiger Name',
        email: 'E-Mail-Adresse',
        emailPlaceholder: 'ihre.email@beispiel.de',
        message: 'Nachricht',
        messagePlaceholder: 'Beschreiben Sie Ihre Anfrage...',
        send: 'Nachricht senden',
        success: {
          title: 'Nachricht gesendet!',
          description: 'Wir werden Ihnen so schnell wie möglich antworten.'
        }
      },
      info: {
        email: 'E-Mail',
        phone: 'Telefon',
        address: 'Adresse',
        hours: 'Öffnungszeiten',
        schedule: 'Mo-Fr: 8-18 Uhr\nSa: 9-12 Uhr'
      },
      map: {
        title: 'Finden Sie uns',
        note: '* Eine interaktive Karte wird bald verfügbar sein, um Ihren Besuch zu erleichtern'
      }
    },

    // About
    about: {
      title: 'Über LOGICY TRANSPORT',
      description: 'Marktführer im Bereich Transport und Logistik',
      story: {
        title: 'Unsere Geschichte',
        content: 'Seit unserer Gründung hat sich LOGICY TRANSPORT dank unserer Expertise und unserem Engagement für Exzellenz als wichtiger Akteur im Logistiksektor etabliert.'
      },
      mission: {
        title: 'Unsere Mission',
        content: 'Zuverlässige, effiziente und personalisierte Transportlösungen bereitzustellen, um das Wachstum unserer Kunden zu unterstützen.'
      },
      values: {
        title: 'Warum LOGICY TRANSPORT wählen?',
        reliability: 'Zuverlässigkeit',
        innovation: 'Innovation',
        quality: 'Qualität',
        service: 'Kundenservice'
      },
      stats: {
        experience: 'Jahre Erfahrung',
        clients: 'Zufriedene Kunden',
        countries: 'Bediente Länder',
        shipments: 'Durchgeführte Sendungen'
      },
      timeline: {
        title: 'Unsere Geschichte',
        items: [
          {
            year: '2007',
            title: 'Gründung von LOGICY TRANSPORT',
            description: 'Unternehmensgründung mit einer klaren Vision: die Revolution des Logistiktransports.'
          },
          {
            year: '2010',
            title: 'Europäische Expansion',
            description: 'Eröffnung unserer Dienste in ganz Europa mit vertrauenswürdigen Partnern.'
          },
          {
            year: '2015',
            title: 'Lufttransport',
            description: 'Start unserer Lufttransportdienste für Express-Sendungen.'
          },
          {
            year: '2018',
            title: 'Maritime Lösungen',
            description: 'Entwicklung unseres maritimen Angebots für sperrige Fracht.'
          },
          {
            year: '2020',
            title: 'Digitalisierung',
            description: 'Einführung des Echtzeit-Tracking-Systems und vollständige Digitalisierung.'
          },
          {
            year: '2024',
            title: 'Kontinuierliche Innovation',
            description: 'Heute innovieren wir weiterhin, um die besten Lösungen anzubieten.'
          }
        ]
      },
      missionExpanded: {
        content: 'Wir verpflichten uns, innovative Transportlösungen anzubieten und die Kundenzufriedenheit in den Mittelpunkt unserer Anliegen zu stellen.'
      },
      commitments: {
        title: 'Unsere Verpflichtungen',
        tracking: 'Vollständige Nachverfolgbarkeit Ihrer Sendungen',
        support: 'Reaktiver Kundenservice 24/7',
        environment: 'Umweltschutz'
      },
      cta: {
        title: 'Werden Sie einer unserer zufriedenen Kunden',
        description: 'Entdecken Sie, warum Hunderte von Unternehmen uns vertrauen',
        servicesButton: 'Unsere Dienstleistungen entdecken',
        contactButton: 'Kontaktieren Sie uns'
      }
    },

    // Transport pages
    transport: {
      aerial: {
        title: 'Lufttransport',
        subtitle: 'Express-Luftfracht-Lösungen für Ihre dringenden und internationalen Sendungen mit globaler Abdeckung',
        quote: 'Angebot anfordern',
        contact: 'Kontaktieren Sie uns',
        freeQuote: 'Kostenloses Angebot',
        whyChoose: 'Warum unseren Lufttransport wählen?',
        servicesTitle: 'Unsere Luftfracht-Dienstleistungen',
        advantages: {
          speed: {
            title: 'Außergewöhnliche Geschwindigkeit',
            description: 'Express-Lieferung weltweit in 24-72h'
          },
          coverage: {
            title: 'Globale Abdeckung',
            description: 'Internationales Netzwerk mit allen großen Flughäfen'
          },
          security: {
            title: 'Maximale Sicherheit',
            description: 'Höchste Luftfahrt-Sicherheitsstandards'
          },
          tracking: {
            title: 'Vollständige Nachverfolgbarkeit',
            description: 'Echtzeit-Verfolgung vom Abflughafen bis zur Lieferung'
          }
        },
        services: {
          0: 'Express-Luftfracht (24h/48h/72h)',
          1: 'Transport verderblicher Güter',
          2: 'Eilpakete und Dokumente',
          3: 'Wertvolle Güter',
          4: 'Pharmazeutischer Transport',
          5: 'Industrielle Ersatzteile',
          6: 'Internationaler E-Commerce',
          7: 'Luftkonsolidierung und Sammelladung'
        },
        timelines: {
          title: 'Lieferzeiten und Ziele',
          express24: 'Express 24h',
          express48: 'Express 48h',
          express72: 'Express 72h',
          standard: 'Standard',
          zones: {
            europe: 'Europa, Nordamerika',
            asia: 'Asien, Naher Osten',
            southAmerica: 'Südamerika, Ozeanien',
            africa: 'Afrika, Sonderziele'
          },
          destinations: {
            title: 'Hauptziele',
            list: {
              0: 'Über 200 globale Ziele',
              1: 'Partnerschaften mit großen Fluggesellschaften',
              2: 'Zugang zu spezialisierten Cargo-Flughäfen',
              3: 'Tür-zu-Tür-Service verfügbar'
            }
          }
        }
      },
      road: {
        title: 'Straßentransport',
        subtitle: 'Zuverlässige und effiziente Straßentransport-Lösungen für alle Ihre Logistikbedürfnisse in Europa und darüber hinaus',
        whyChoose: 'Warum unseren Straßentransport wählen?',
        servicesTitle: 'Unsere Straßentransport-Dienstleistungen',
        advantages: {
          speed: {
            title: 'Schnelle Lieferung',
            description: 'Kurze Lieferzeiten dank unserem optimierten Straßennetzwerk'
          },
          security: {
            title: 'Garantierte Sicherheit',
            description: 'Vollversicherung und Echtzeit-Verfolgung Ihrer Pakete'
          },
          pricing: {
            title: 'Wettbewerbsfähige Preise',
            description: 'Attraktive Preise für alle Arten von Gütern'
          },
          flexibility: {
            title: 'Flexibilität',
            description: 'Tür-zu-Tür-Service angepasst an Ihre spezifischen Bedürfnisse'
          }
        },
        services: {
          0: 'Allgemeiner Gütertransport',
          1: 'Express-Lieferung (24h/48h)',
          2: 'Fahrzeugtransport',
          3: 'Professioneller Umzug',
          4: 'Kühlschranktransport',
          5: 'Gefahrgut (ADR)',
          6: 'Ausnahmegenehmigungen',
          7: 'Stadtverteilung'
        },
        fleet: {
          title: 'Flotte und Kapazitäten',
          vehicles: {
            light: {
              title: 'Leichte Fahrzeuge',
              capacity: 'Bis zu 3,5 Tonnen'
            },
            medium: {
              title: 'Träger',
              capacity: 'Bis zu 19 Tonnen'
            },
            semiTrailer: {
              title: 'Sattelzüge',
              capacity: 'Bis zu 40 Tonnen'
            },
            special: {
              title: 'Sonderkonvois',
              capacity: 'Ausnahmelasten'
            }
          },
          zones: {
            title: 'Lieferzonen',
            list: {
              0: 'Frankreich (Festland)',
              1: 'Europäische Union',
              2: 'Nordafrika',
              3: 'Osteuropa'
            }
          }
        }
      },
      maritime: {
        title: 'Seetransport',
        subtitle: 'Wirtschaftliche und zuverlässige Seefracht-Lösungen für Ihre internationalen Sendungen aller Volumina',
        whyChoose: 'Warum unseren Seetransport wählen?',
        servicesTitle: 'Unsere Seetransport-Dienstleistungen',
        routesTitle: 'Hauptrouten',
        advantages: {
          economical: {
            title: 'Wirtschaftlich',
            description: 'Kosteneffizienteste Lösung für große Volumina'
          },
          global: {
            title: 'Global',
            description: 'Zugang zu allen internationalen Häfen'
          },
          capacity: {
            title: 'Kapazität',
            description: 'Transport schwerer und sperriger Lasten'
          },
          reliability: {
            title: 'Zuverlässigkeit',
            description: 'Einhaltung von Terminen und Warensicherheit'
          }
        },
        services: {
          0: 'FCL-Container (Full Container Load)',
          1: 'LCL-Sammelladung (Less than Container Load)',
          2: 'Kühlcontainer',
          3: 'Fahrzeugtransport (RoRo)',
          4: 'Schüttgut',
          5: 'Industrieprojekte',
          6: 'Spezialcontainer (Open Top, Flat Rack)',
          7: 'Multimodaler Transport See/Straße/Schiene'
        },
        containers: {
          title: 'Container-Typen',
          list: {
            0: "20' Standard (33 m³)",
            1: "40' Standard (67 m³)",
            2: "40' High Cube (76 m³)",
            3: 'Spezialcontainer auf Anfrage'
          }
        }
      }
    }
  },

  it: {
    // Navigation
    nav: {
      home: 'Home',
      tracking: 'Tracciamento',
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

    // Home page
    home: {
      title: 'Dal 2007, LOGICY TRANSPORT consegna i vostri pacchi, merci e veicoli in tutto il mondo con affidabilità e prestigio',
      subtitle: 'Il vostro partner logistico di fiducia',
      description: 'Soluzioni di trasporto e logistica su misura per le vostre esigenze professionali in tutto il mondo',
      cta: 'Scopri i nostri servizi',
      carousel: {
        alt: {
          0: 'Trasporto e logistica LOGICY - Immagine 1',
          1: 'Soluzioni di trasporto professionale - Immagine 2',
          2: 'Servizi logistici internazionali - Immagine 3'
        }
      },
      services: {
        title: 'I Nostri Servizi',
        road: {
          title: 'Trasporto Stradale',
          description: 'Soluzioni di trasporto terrestre affidabili ed economiche'
        },
        air: {
          title: 'Trasporto Aereo',
          description: 'Consegne rapide per via aerea'
        },
        maritime: {
          title: 'Trasporto Marittimo',
          description: 'Trasporto merci per via marittima'
        }
      }
    },

    // Tracking
    tracking: {
      title: 'Tracciamento Pacchi',
      description: 'Inserisci il tuo codice di tracciamento per conoscere lo stato della tua spedizione in tempo reale',
      placeholder: 'Inserisci il tuo codice di tracciamento',
      search: 'Cerca',
      help: 'Hai bisogno di aiuto?',
      format: 'Formato del codice di tracciamento:',
      formatExample: 'LOG + 9 cifre (es: LOG123456789)',
      testCodes: 'Codici di test:',
      testCodesExample: 'LOG123456789, LOG987654321'
    },

    // Services
    services: {
      title: 'I Nostri Servizi di Trasporto',
      description: 'Soluzioni logistiche complete per tutte le vostre esigenze di trasporto, dalla consegna express alle spedizioni internazionali',
      experience: 'Oltre 17 anni di esperienza',
      road: {
        title: 'Trasporto Stradale',
        description: 'Soluzioni di trasporto stradale affidabili per Europa e Nord Africa',
        features: [
          'Consegna express 24-48h',
          'Veicoli leggeri e pesanti',
          'Tracciamento in tempo reale',
          'Assicurazione completa'
        ]
      },
      air: {
        title: 'Trasporto Aereo',
        description: 'Trasporto aereo express per le vostre spedizioni urgenti in tutto il mondo',
        features: [
          'Consegna 24-72h',
          'Copertura mondiale',
          'Sicurezza massima',
          'Tracciabilità completa'
        ]
      },
      maritime: {
        title: 'Trasporto Marittimo',
        description: 'Soluzioni economiche per le vostre spedizioni internazionali voluminose',
        features: [
          'Container FCL/LCL',
          'Tutti i porti mondiali',
          'Tariffe competitive',
          'Groupage ottimizzato'
        ]
      },
      express: {
        title: 'Logistica Express',
        description: 'Servizio premium per le vostre spedizioni urgenti con garanzia di consegna',
        features: [
          'Stesso giorno possibile',
          'Servizio 24/7',
          'Corriere dedicato',
          'Rimborso se in ritardo'
        ]
      },
      custom: {
        title: 'Soluzioni Su Misura',
        description: 'Soluzioni logistiche personalizzate secondo le vostre esigenze specifiche',
        features: [
          'Analisi delle esigenze',
          'Soluzione dedicata',
          'Accompagnamento esperto',
          'Scalabilità garantita'
        ]
      },
      tracking: {
        title: 'Tracciamento Pacchi',
        description: 'Sistema di tracking avanzato per seguire le vostre spedizioni in tempo reale',
        features: [
          'Geolocalizzazione GPS',
          'Notifiche SMS',
          'Interfaccia web',
          'API disponibile'
        ]
      },
      advantages: {
        delivery: {
          title: 'Tempi Rispettati',
          description: 'I nostri team si impegnano a rispettare i tempi concordati con garanzie'
        },
        security: {
          title: 'Sicurezza Massima',
          description: 'Le vostre spedizioni sono protette e assicurate durante tutto il trasporto'
        },
        pricing: {
          title: 'Prezzi Trasparenti',
          description: 'Prezzi fissi senza sorprese con preventivo gratuito entro 24h'
        }
      }
    },

    // Contact
    contact: {
      title: 'Contattaci',
      description: 'Il nostro team è a vostra disposizione per rispondere alle vostre domande',
      form: {
        title: 'Inviateci un messaggio',
        name: 'Nome completo',
        namePlaceholder: 'Il vostro nome completo',
        email: 'Indirizzo email',
        emailPlaceholder: 'la.vostra.email@esempio.it',
        message: 'Messaggio',
        messagePlaceholder: 'Descrivete la vostra richiesta...',
        send: 'Invia messaggio',
        success: {
          title: 'Messaggio inviato!',
          description: 'Vi risponderemo il prima possibile.'
        }
      },
      info: {
        email: 'Email',
        phone: 'Telefono',
        address: 'Indirizzo',
        hours: 'Orari di apertura',
        schedule: 'Lun-Ven: 8-18\nSab: 9-12'
      },
      map: {
        title: 'Trovateci',
        note: '* Una mappa interattiva sarà presto disponibile per facilitare la vostra visita'
      }
    },

    // About
    about: {
      title: 'Chi è LOGICY TRANSPORT',
      description: 'Leader nel campo del trasporto e della logistica',
      story: {
        title: 'La Nostra Storia',
        content: 'Dalla nostra creazione, LOGICY TRANSPORT si è affermata come un attore importante del settore logistico grazie alla nostra esperienza e al nostro impegno per l\'eccellenza.'
      },
      mission: {
        title: 'La Nostra Missione',
        content: 'Fornire soluzioni di trasporto affidabili, efficienti e personalizzate per accompagnare la crescita dei nostri clienti.'
      },
      values: {
        title: 'Perché Scegliere LOGICY TRANSPORT?',
        reliability: 'Affidabilità',
        innovation: 'Innovazione',
        quality: 'Qualità',
        service: 'Servizio clienti'
      },
      stats: {
        experience: 'Anni di esperienza',
        clients: 'Clienti soddisfatti',
        countries: 'Paesi serviti',
        shipments: 'Spedizioni realizzate'
      },
      timeline: {
        title: 'La Nostra Storia',
        items: [
          {
            year: '2007',
            title: 'Creazione di LOGICY TRANSPORT',
            description: 'Fondazione dell\'azienda con una visione chiara: rivoluzionare il trasporto logistico.'
          },
          {
            year: '2010',
            title: 'Espansione europea',
            description: 'Apertura dei nostri servizi in tutta Europa con partner di fiducia.'
          },
          {
            year: '2015',
            title: 'Trasporto aereo',
            description: 'Lancio dei nostri servizi di trasporto aereo per spedizioni express.'
          },
          {
            year: '2018',
            title: 'Soluzioni marittime',
            description: 'Sviluppo della nostra offerta marittima per carichi voluminosi.'
          },
          {
            year: '2020',
            title: 'Digitalizzazione',
            description: 'Implementazione del sistema di tracciamento in tempo reale e digitalizzazione completa.'
          },
          {
            year: '2024',
            title: 'Innovazione continua',
            description: 'Oggi, continuiamo a innovare per offrire le migliori soluzioni.'
          }
        ]
      },
      missionExpanded: {
        content: 'Ci impegniamo a fornire soluzioni di trasporto innovative, mettendo la soddisfazione del cliente al centro delle nostre preoccupazioni.'
      },
      commitments: {
        title: 'I Nostri Impegni',
        tracking: 'Tracciabilità completa delle vostre spedizioni',
        support: 'Servizio clienti reattivo 24/7',
        environment: 'Rispetto dell\'ambiente'
      },
      cta: {
        title: 'Unisciti ai nostri clienti soddisfatti',
        description: 'Scopri perché centinaia di aziende si fidano di noi',
        servicesButton: 'Scopri i nostri servizi',
        contactButton: 'Contattaci'
      }
    },

    // Transport pages
    transport: {
      aerial: {
        title: 'Trasporto Aereo',
        subtitle: 'Soluzioni di trasporto aereo express per le vostre spedizioni urgenti e internazionali con copertura globale',
        quote: 'Richiedi Preventivo',
        contact: 'Contattaci',
        freeQuote: 'Preventivo Gratuito',
        whyChoose: 'Perché scegliere il nostro trasporto aereo?',
        servicesTitle: 'I Nostri Servizi di Trasporto Aereo',
        advantages: {
          speed: {
            title: 'Velocità Eccezionale',
            description: 'Consegna express in tutto il mondo in 24-72h'
          },
          coverage: {
            title: 'Copertura Globale',
            description: 'Rete internazionale con tutti i principali aeroporti'
          },
          security: {
            title: 'Sicurezza Massima',
            description: 'Standard di sicurezza aeronautica più elevati'
          },
          tracking: {
            title: 'Tracciabilità Completa',
            description: 'Tracciamento in tempo reale dall\'aeroporto di partenza alla consegna'
          }
        },
        services: {
          0: 'Trasporto aereo express (24h/48h/72h)',
          1: 'Trasporto di merci deperibili',
          2: 'Pacchi urgenti e documenti',
          3: 'Merci di valore',
          4: 'Trasporto farmaceutico',
          5: 'Ricambi industriali',
          6: 'E-commerce internazionale',
          7: 'Consolidamento e raggruppamento aereo'
        },
        timelines: {
          title: 'Tempi e Destinazioni',
          express24: 'Express 24h',
          express48: 'Express 48h',
          express72: 'Express 72h',
          standard: 'Standard',
          zones: {
            europe: 'Europa, Nord America',
            asia: 'Asia, Medio Oriente',
            southAmerica: 'Sud America, Oceania',
            africa: 'Africa, destinazioni speciali'
          },
          destinations: {
            title: 'Destinazioni principali',
            list: {
              0: 'Oltre 200 destinazioni globali',
              1: 'Partnership con le principali compagnie aeree',
              2: 'Accesso ad aeroporti cargo specializzati',
              3: 'Servizio porta a porta disponibile'
            }
          }
        }
      },
      road: {
        title: 'Trasporto Stradale',
        subtitle: 'Soluzioni di trasporto stradale affidabili ed efficienti per tutte le vostre esigenze logistiche in Europa e oltre',
        whyChoose: 'Perché scegliere il nostro trasporto stradale?',
        servicesTitle: 'I Nostri Servizi di Trasporto Stradale',
        advantages: {
          speed: {
            title: 'Consegna Rapida',
            description: 'Tempi di consegna brevi grazie alla nostra rete stradale ottimizzata'
          },
          security: {
            title: 'Sicurezza Garantita',
            description: 'Assicurazione completa e tracciamento in tempo reale dei vostri pacchi'
          },
          pricing: {
            title: 'Prezzi Competitivi',
            description: 'Prezzi attraenti per tutti i tipi di merci'
          },
          flexibility: {
            title: 'Flessibilità',
            description: 'Servizio porta a porta adattato alle vostre esigenze specifiche'
          }
        },
        services: {
          0: 'Trasporto di merci generali',
          1: 'Consegna express (24h/48h)',
          2: 'Trasporto di veicoli',
          3: 'Traslochi professionali',
          4: 'Trasporto refrigerato',
          5: 'Merci pericolose (ADR)',
          6: 'Convogli eccezionali',
          7: 'Distribuzione urbana'
        },
        fleet: {
          title: 'Flotta e Capacità',
          vehicles: {
            light: {
              title: 'Veicoli leggeri',
              capacity: 'Fino a 3,5 tonnellate'
            },
            medium: {
              title: 'Portatori',
              capacity: 'Fino a 19 tonnellate'
            },
            semiTrailer: {
              title: 'Semirimorchi',
              capacity: 'Fino a 40 tonnellate'
            },
            special: {
              title: 'Convogli speciali',
              capacity: 'Carichi eccezionali'
            }
          },
          zones: {
            title: 'Zone di consegna',
            list: {
              0: 'Francia metropolitana',
              1: 'Unione Europea',
              2: 'Nord Africa',
              3: 'Europa dell\'Est'
            }
          }
        }
      },
      maritime: {
        title: 'Trasporto Marittimo',
        subtitle: 'Soluzioni di trasporto marittimo economiche e affidabili per le vostre spedizioni internazionali di tutti i volumi',
        whyChoose: 'Perché scegliere il nostro trasporto marittimo?',
        servicesTitle: 'I Nostri Servizi Marittimi',
        routesTitle: 'Rotte Principali',
        advantages: {
          economical: {
            title: 'Economico',
            description: 'Soluzione più conveniente per grandi volumi'
          },
          global: {
            title: 'Globale',
            description: 'Accesso a tutti i porti internazionali'
          },
          capacity: {
            title: 'Capacità',
            description: 'Trasporto di carichi pesanti e voluminosi'
          },
          reliability: {
            title: 'Affidabilità',
            description: 'Rispetto dei tempi e sicurezza delle merci'
          }
        },
        services: {
          0: 'Container FCL (Full Container Load)',
          1: 'Raggruppamento LCL (Less than Container Load)',
          2: 'Container refrigerati',
          3: 'Trasporto di veicoli (RoRo)',
          4: 'Merci alla rinfusa',
          5: 'Progetti industriali',
          6: 'Container speciali (Open Top, Flat Rack)',
          7: 'Trasporto multimodale mare/strada/ferrovia'
        },
        containers: {
          title: 'Tipi di container',
          list: {
            0: "20' Standard (33 m³)",
            1: "40' Standard (67 m³)",
            2: "40' High Cube (76 m³)",
            3: 'Container speciali su richiesta'
          }
        }
      }
    }
  },

  pt: {
    // Navigation
    nav: {
      home: 'Início',
      tracking: 'Rastreamento',
      services: 'Serviços',
      about: 'Sobre nós',
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

    // Home page
    home: {
      title: 'Desde 2007, a LOGICY TRANSPORT entrega seus pacotes, cargas e veículos em todo o mundo com confiabilidade e prestígio',
      subtitle: 'Seu parceiro logístico de confiança',
      description: 'Soluções de transporte e logística personalizadas para suas necessidades profissionais em todo o mundo',
      cta: 'Descubra nossos serviços',
      carousel: {
        alt: {
          0: 'Transporte e logística LOGICY - Imagem 1',
          1: 'Soluções de transporte profissional - Imagem 2',
          2: 'Serviços logísticos internacionais - Imagem 3'
        }
      },
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

    // Tracking
    tracking: {
      title: 'Rastreamento de Pacotes',
      description: 'Digite seu código de rastreamento para conhecer o status de sua remessa em tempo real',
      placeholder: 'Digite seu código de rastreamento',
      search: 'Pesquisar',
      help: 'Precisa de ajuda?',
      format: 'Formato do código de rastreamento:',
      formatExample: 'LOG + 9 dígitos (ex: LOG123456789)',
      testCodes: 'Códigos de teste:',
      testCodesExample: 'LOG123456789, LOG987654321'
    },

    // Services
    services: {
      title: 'Nossos Serviços de Transporte',
      description: 'Soluções logísticas completas para todas as suas necessidades de transporte, desde entrega expressa até remessas internacionais',
      experience: 'Mais de 17 anos de experiência',
      road: {
        title: 'Transporte Rodoviário',
        description: 'Soluções de transporte rodoviário confiáveis para Europa e Norte da África',
        features: [
          'Entrega expressa 24-48h',
          'Veículos leves a pesados',
          'Rastreamento em tempo real',
          'Seguro completo'
        ]
      },
      air: {
        title: 'Transporte Aéreo',
        description: 'Transporte aéreo expresso para suas remessas urgentes em todo o mundo',
        features: [
          'Entrega 24-72h',
          'Cobertura mundial',
          'Segurança máxima',
          'Rastreabilidade completa'
        ]
      },
      maritime: {
        title: 'Transporte Marítimo',
        description: 'Soluções econômicas para suas remessas internacionais volumosas',
        features: [
          'Contêineres FCL/LCL',
          'Todos os portos mundiais',
          'Tarifas competitivas',
          'Groupage otimizado'
        ]
      },
      express: {
        title: 'Logística Expressa',
        description: 'Serviço premium para suas remessas urgentes com garantia de entrega',
        features: [
          'Mesmo dia possível',
          'Serviço 24/7',
          'Courier dedicado',
          'Reembolso se atrasado'
        ]
      },
      custom: {
        title: 'Soluções Personalizadas',
        description: 'Soluções logísticas personalizadas de acordo com suas necessidades específicas',
        features: [
          'Análise de necessidades',
          'Solução dedicada',
          'Acompanhamento especializado',
          'Escalabilidade garantida'
        ]
      },
      tracking: {
        title: 'Rastreamento de Pacotes',
        description: 'Sistema de rastreamento avançado para acompanhar suas remessas em tempo real',
        features: [
          'Geolocalização GPS',
          'Notificações SMS',
          'Interface web',
          'API disponível'
        ]
      },
      advantages: {
        delivery: {
          title: 'Prazos Respeitados',
          description: 'Nossas equipes se comprometem a respeitar os prazos acordados com garantias'
        },
        security: {
          title: 'Segurança Máxima',
          description: 'Suas remessas são protegidas e seguradas durante todo o transporte'
        },
        pricing: {
          title: 'Preços Transparentes',
          description: 'Preços fixos sem surpresas com orçamento gratuito em 24h'
        }
      }
    },

    // Contact
    contact: {
      title: 'Entre em contato',
      description: 'Nossa equipe está à sua disposição para responder suas perguntas',
      form: {
        title: 'Envie-nos uma mensagem',
        name: 'Nome completo',
        namePlaceholder: 'Seu nome completo',
        email: 'Endereço de email',
        emailPlaceholder: 'seu.email@exemplo.com',
        message: 'Mensagem',
        messagePlaceholder: 'Descreva sua solicitação...',
        send: 'Enviar mensagem',
        success: {
          title: 'Mensagem enviada!',
          description: 'Responderemos o mais breve possível.'
        }
      },
      info: {
        email: 'Email',
        phone: 'Telefone',
        address: 'Endereço',
        hours: 'Horário de funcionamento',
        schedule: 'Seg-Sex: 8h-18h\nSáb: 9h-12h'
      },
      map: {
        title: 'Encontre-nos',
        note: '* Um mapa interativo estará disponível em breve para facilitar sua visita'
      }
    },

    // About
    about: {
      title: 'Sobre a LOGICY TRANSPORT',
      description: 'Líder no campo do transporte e logística',
      story: {
        title: 'Nossa História',
        content: 'Desde nossa criação, a LOGICY TRANSPORT se estabeleceu como um ator importante do setor logístico graças à nossa experiência e compromisso com a excelência.'
      },
      mission: {
        title: 'Nossa Missão',
        content: 'Fornecer soluções de transporte confiáveis, eficientes e personalizadas para acompanhar o crescimento de nossos clientes.'
      },
      values: {
        title: 'Por Que Escolher LOGICY TRANSPORT?',
        reliability: 'Confiabilidade',
        innovation: 'Inovação',
        quality: 'Qualidade',
        service: 'Atendimento ao cliente'
      },
      stats: {
        experience: 'Anos de experiência',
        clients: 'Clientes satisfeitos',
        countries: 'Países atendidos',
        shipments: 'Envios realizados'
      },
      timeline: {
        title: 'Nossa História',
        items: [
          {
            year: '2007',
            title: 'Criação da LOGICY TRANSPORT',
            description: 'Fundação da empresa com uma visão clara: revolucionar o transporte logístico.'
          },
          {
            year: '2010',
            title: 'Expansão europeia',
            description: 'Abertura de nossos serviços em toda a Europa com parceiros de confiança.'
          },
          {
            year: '2015',
            title: 'Transporte aéreo',
            description: 'Lançamento de nossos serviços de transporte aéreo para envios expressos.'
          },
          {
            year: '2018',
            title: 'Soluções marítimas',
            description: 'Desenvolvimento de nossa oferta marítima para cargas volumosas.'
          },
          {
            year: '2020',
            title: 'Digitalização',
            description: 'Implementação do sistema de rastreamento em tempo real e digitalização completa.'
          },
          {
            year: '2024',
            title: 'Inovação contínua',
            description: 'Hoje, continuamos a inovar para oferecer as melhores soluções.'
          }
        ]
      },
      missionExpanded: {
        content: 'Comprometemo-nos a fornecer soluções de transporte inovadoras, colocando a satisfação do cliente no centro de nossas preocupações.'
      },
      commitments: {
        title: 'Nossos Compromissos',
        tracking: 'Rastreabilidade completa de seus envios',
        support: 'Atendimento ao cliente responsivo 24/7',
        environment: 'Respeito ao meio ambiente'
      },
      cta: {
        title: 'Junte-se aos nossos clientes satisfeitos',
        description: 'Descubra por que centenas de empresas confiam em nós',
        servicesButton: 'Descobrir nossos serviços',
        contactButton: 'Entre em contato'
      }
    },

    // Transport pages
    transport: {
      aerial: {
        title: 'Transporte Aéreo',
        subtitle: 'Soluções de transporte aéreo expresso para suas remessas urgentes e internacionais com cobertura global',
        quote: 'Solicitar Orçamento',
        contact: 'Entre em Contato',
        freeQuote: 'Orçamento Gratuito',
        whyChoose: 'Por que escolher nosso transporte aéreo?',
        servicesTitle: 'Nossos Serviços de Transporte Aéreo',
        advantages: {
          speed: {
            title: 'Velocidade Excepcional',
            description: 'Entrega expressa em todo o mundo em 24-72h'
          },
          coverage: {
            title: 'Cobertura Global',
            description: 'Rede internacional com todos os principais aeroportos'
          },
          security: {
            title: 'Segurança Máxima',
            description: 'Padrões de segurança aeronáutica mais elevados'
          },
          tracking: {
            title: 'Rastreabilidade Completa',
            description: 'Rastreamento em tempo real do aeroporto de partida à entrega'
          }
        },
        services: {
          0: 'Transporte aéreo expresso (24h/48h/72h)',
          1: 'Transporte de mercadorias perecíveis',
          2: 'Pacotes urgentes e documentos',
          3: 'Mercadorias de valor',
          4: 'Transporte farmacêutico',
          5: 'Peças de reposição industriais',
          6: 'E-commerce internacional',
          7: 'Consolidação e grupagem aérea'
        },
        timelines: {
          title: 'Prazos e Destinos',
          express24: 'Expresso 24h',
          express48: 'Expresso 48h',
          express72: 'Expresso 72h',
          standard: 'Padrão',
          zones: {
            europe: 'Europa, América do Norte',
            asia: 'Ásia, Oriente Médio',
            southAmerica: 'América do Sul, Oceania',
            africa: 'África, destinos especiais'
          },
          destinations: {
            title: 'Destinos principais',
            list: {
              0: 'Mais de 200 destinos globais',
              1: 'Parcerias com as principais companhias aéreas',
              2: 'Acesso a aeroportos cargo especializados',
              3: 'Serviço porta a porta disponível'
            }
          }
        }
      },
      road: {
        title: 'Transporte Rodoviário',
        subtitle: 'Soluções de transporte rodoviário confiáveis e eficientes para todas as suas necessidades logísticas na Europa e além',
        whyChoose: 'Por que escolher nosso transporte rodoviário?',
        servicesTitle: 'Nossos Serviços de Transporte Rodoviário',
        advantages: {
          speed: {
            title: 'Entrega Rápida',
            description: 'Prazos de entrega curtos graças à nossa rede rodoviária otimizada'
          },
          security: {
            title: 'Segurança Garantida',
            description: 'Seguro completo e rastreamento em tempo real de seus pacotes'
          },
          pricing: {
            title: 'Preços Competitivos',
            description: 'Preços atrativos para todos os tipos de mercadorias'
          },
          flexibility: {
            title: 'Flexibilidade',
            description: 'Serviço porta a porta adaptado às suas necessidades específicas'
          }
        },
        services: {
          0: 'Transporte de mercadorias gerais',
          1: 'Entrega expressa (24h/48h)',
          2: 'Transporte de veículos',
          3: 'Mudança profissional',
          4: 'Transporte refrigerado',
          5: 'Mercadorias perigosas (ADR)',
          6: 'Comboios excepcionais',
          7: 'Distribuição urbana'
        },
        fleet: {
          title: 'Frota e Capacidades',
          vehicles: {
            light: {
              title: 'Veículos leves',
              capacity: 'Até 3,5 toneladas'
            },
            medium: {
              title: 'Portadores',
              capacity: 'Até 19 toneladas'
            },
            semiTrailer: {
              title: 'Semirreboques',
              capacity: 'Até 40 toneladas'
            },
            special: {
              title: 'Comboios especiais',
              capacity: 'Cargas excepcionais'
            }
          },
          zones: {
            title: 'Zonas de entrega',
            list: {
              0: 'França metropolitana',
              1: 'União Europeia',
              2: 'Norte da África',
              3: 'Europa Oriental'
            }
          }
        }
      },
      maritime: {
        title: 'Transporte Marítimo',
        subtitle: 'Soluções de transporte marítimo econômicas e confiáveis para suas remessas internacionais de todos os volumes',
        whyChoose: 'Por que escolher nosso transporte marítimo?',
        servicesTitle: 'Nossos Serviços Marítimos',
        routesTitle: 'Rotas Principais',
        advantages: {
          economical: {
            title: 'Econômico',
            description: 'Solução mais econômica para grandes volumes'
          },
          global: {
            title: 'Global',
            description: 'Acesso a todos os portos internacionais'
          },
          capacity: {
            title: 'Capacidade',
            description: 'Transporte de cargas pesadas e volumosas'
          },
          reliability: {
            title: 'Confiabilidade',
            description: 'Cumprimento de prazos e segurança das mercadorias'
          }
        },
        services: {
          0: 'Contêineres FCL (Full Container Load)',
          1: 'Grupagem LCL (Less than Container Load)',
          2: 'Contêineres refrigerados',
          3: 'Transporte de veículos (RoRo)',
          4: 'Mercadorias a granel',
          5: 'Projetos industriais',
          6: 'Contêineres especiais (Open Top, Flat Rack)',
          7: 'Transporte multimodal mar/rodovia/ferrovia'
        },
        containers: {
          title: 'Tipos de contêineres',
          list: {
            0: "20' Padrão (33 m³)",
            1: "40' Padrão (67 m³)",
            2: "40' High Cube (76 m³)",
            3: 'Contêineres especiais sob demanda'
          }
        }
      }
    }
  }
};