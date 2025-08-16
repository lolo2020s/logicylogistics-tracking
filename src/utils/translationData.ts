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
      readMore: 'Lire la suite',
      close: 'Fermer',
      loading: 'Chargement...',
      error: 'Erreur',
      success: 'Succès'
    },

    // Transport pages
    transport: {
      aerial: {
        title: 'Transport Aérien',
        subtitle: 'Solutions de fret aérien express pour vos expéditions urgentes et internationales avec couverture mondiale',
        quote: 'Demander un devis',
        contact: 'Nous contacter',
        freeQuote: 'Devis gratuit',
        whyChoose: 'Pourquoi choisir notre transport aérien ?',
        servicesTitle: 'Nos Services de Fret Aérien',
        advantages: {
          speed: {
            title: 'Rapidité Exceptionnelle',
            description: 'Livraison express dans le monde entier en 24-72h'
          },
          coverage: {
            title: 'Couverture Mondiale',
            description: 'Réseau international avec tous les grands aéroports'
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
              'Partenariats avec les principales compagnies aériennes',
              'Accès aux aéroports cargo spécialisés',
              'Service porte à porte disponible'
            ]
          }
        }
      },
      road: {
        title: 'Transport Routier',
        subtitle: 'Solutions de transport routier fiables et efficaces pour tous vos besoins logistiques en Europe et au-delà',
        quote: 'Demander un devis',
        contact: 'Nous contacter',
        freeQuote: 'Devis gratuit',
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
            title: 'Prix Compétitifs',
            description: 'Prix attractifs pour tous types de marchandises'
          },
          flexibility: {
            title: 'Flexibilité',
            description: 'Service porte à porte adapté à vos besoins spécifiques'
          }
        },
        services: [
          'Transport de marchandises générales',
          'Livraison express (24h/48h)',
          'Transport de véhicules',
          'Déménagements professionnels',
          'Transport frigorifique',
          'Marchandises dangereuses (ADR)',
          'Convois exceptionnels',
          'Distribution urbaine'
        ],
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
            list: [
              'France métropolitaine',
              'Union Européenne',
              'Afrique du Nord',
              'Europe de l\'Est'
            ]
          }
        }
      },
      maritime: {
        title: 'Transport Maritime',
        subtitle: 'Solutions de fret maritime économiques et fiables pour vos expéditions internationales de tous volumes',
        quote: 'Demander un devis',
        contact: 'Nous contacter',
        freeQuote: 'Devis gratuit',
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
        routes: [
          {
            from: "Le Havre",
            to: "New York", 
            duration: "7-10 jours"
          },
          {
            from: "Marseille",
            to: "Casablanca",
            duration: "2-3 jours"
          },
          {
            from: "Anvers", 
            to: "Shanghai",
            duration: "25-30 jours"
          },
          {
            from: "Rotterdam",
            to: "Dubaï", 
            duration: "12-15 jours"
          }
        ],
        containers: {
          title: 'Types de conteneurs',
          list: [
            '20\' Standard (33 m³)',
            '40\' Standard (67 m³)',
            '40\' High Cube (76 m³)',
            'Conteneurs spéciaux sur demande'
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
      getQuote: 'Request quote',
      freeQuote: 'Free quote',
      readMore: 'Read more',
      close: 'Close',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success'
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
            description: 'Highest aeronautical security standards'
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
            list: [
              'Over 200 global destinations',
              'Partnerships with major airlines',
              'Access to specialized cargo airports',
              'Door-to-door service available'
            ]
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
            title: 'Competitive Prices',
            description: 'Attractive prices for all types of goods'
          },
          flexibility: {
            title: 'Flexibility',
            description: 'Door-to-door service adapted to your specific needs'
          }
        },
        services: [
          'General goods transport',
          'Express delivery (24h/48h)',
          'Vehicle transport',
          'Professional moving',
          'Refrigerated transport',
          'Dangerous goods (ADR)',
          'Exceptional convoys',
          'Urban distribution'
        ],
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
            list: [
              'Metropolitan France',
              'European Union',
              'North Africa',
              'Eastern Europe'
            ]
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
            description: 'Respect of deadlines and cargo security'
          }
        },
        services: [
          'FCL containers (Full Container Load)',
          'LCL groupage (Less than Container Load)',
          'Refrigerated containers',
          'Vehicle transport (RoRo)',
          'Bulk cargo',
          'Industrial projects',
          'Special containers (Open Top, Flat Rack)',
          'Multi-modal transport sea/road/rail'
        ],
        routes: [
          {
            from: "Le Havre",
            to: "New York", 
            duration: "7-10 days"
          },
          {
            from: "Marseille",
            to: "Casablanca",
            duration: "2-3 days"
          },
          {
            from: "Antwerp", 
            to: "Shanghai",
            duration: "25-30 days"
          },
          {
            from: "Rotterdam",
            to: "Dubai", 
            duration: "12-15 days"
          }
        ],
        containers: {
          title: 'Container types',
          list: [
            '20\' Standard (33 m³)',
            '40\' Standard (67 m³)',
            '40\' High Cube (76 m³)',
            'Special containers on request'
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

    // Transport pages
    transport: {
      aerial: {
        title: 'Transporte Aéreo',
        subtitle: 'Soluciones de flete aéreo express para sus envíos urgentes e internacionales con cobertura global',
        quote: 'Solicitar Cotización',
        contact: 'Contáctanos',
        freeQuote: 'Cotización Gratuita',
        whyChoose: '¿Por qué elegir nuestro transporte aéreo?',
        servicesTitle: 'Nuestros Servicios de Flete Aéreo',
        advantages: {
          speed: {
            title: 'Velocidad Excepcional',
            description: 'Entrega express en todo el mundo en 24-72h'
          },
          coverage: {
            title: 'Cobertura Global',
            description: 'Red internacional con todos los principales aeropuertos'
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
            list: [
              'Más de 200 destinos globales',
              'Asociaciones con las principales aerolíneas',
              'Acceso a aeropuertos cargo especializados',
              'Servicio puerta a puerta disponible'
            ]
          }
        }
      },
      road: {
        title: 'Transporte Terrestre',
        subtitle: 'Soluciones de transporte terrestre confiables y eficientes para todas sus necesidades logísticas en Europa y más allá',
        quote: 'Solicitar Cotización',
        contact: 'Contáctanos',
        freeQuote: 'Cotización Gratuita',
        whyChoose: '¿Por qué elegir nuestro transporte terrestre?',
        servicesTitle: 'Nuestros Servicios de Transporte Terrestre',
        advantages: {
          speed: {
            title: 'Entrega Rápida',
            description: 'Tiempos de entrega cortos gracias a nuestra red terrestre optimizada'
          },
          security: {
            title: 'Seguridad Garantizada',
            description: 'Seguro completo y seguimiento en tiempo real de sus paquetes'
          },
          pricing: {
            title: 'Precios Competitivos',
            description: 'Precios atractivos para todos los tipos de mercancías'
          },
          flexibility: {
            title: 'Flexibilidad',
            description: 'Servicio puerta a puerta adaptado a sus necesidades específicas'
          }
        },
        services: [
          'Transporte de mercancías generales',
          'Entrega express (24h/48h)',
          'Transporte de vehículos',
          'Mudanzas profesionales',
          'Transporte refrigerado',
          'Mercancías peligrosas (ADR)',
          'Convoyes excepcionales',
          'Distribución urbana'
        ],
        fleet: {
          title: 'Flota y Capacidades',
          vehicles: {
            light: {
              title: 'Vehículos ligeros',
              capacity: 'Hasta 3,5 toneladas'
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
            list: [
              'Francia metropolitana',
              'Unión Europea',
              'África del Norte',
              'Europa del Este'
            ]
          }
        }
      },
      maritime: {
        title: 'Transporte Marítimo',
        subtitle: 'Soluciones de carga marítima económicas y confiables para sus expediciones internacionales de todos los volúmenes',
        quote: 'Solicitar Cotización',
        contact: 'Contáctanos',
        freeQuote: 'Cotización Gratuita',
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
        routes: [
          {
            from: "Le Havre",
            to: "Nueva York", 
            duration: "7-10 días"
          },
          {
            from: "Marsella",
            to: "Casablanca",
            duration: "2-3 días"
          },
          {
            from: "Amberes", 
            to: "Shanghái",
            duration: "25-30 días"
          },
          {
            from: "Rotterdam",
            to: "Dubái", 
            duration: "12-15 días"
          }
        ],
        containers: {
          title: 'Tipos de contenedores',
          list: [
            '20\' Estándar (33 m³)',
            '40\' Estándar (67 m³)',
            '40\' High Cube (76 m³)',
            'Contenedores especiales bajo pedido'
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

    // Transport pages
    transport: {
      aerial: {
        title: 'Lufttransport',
        subtitle: 'Express-Luftfracht-Lösungen für Ihre dringenden und internationalen Sendungen mit globaler Abdeckung',
        quote: 'Angebot Anfordern',
        contact: 'Kontaktieren Sie Uns',
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
            description: 'Höchste luftfahrttechnische Sicherheitsstandards'
          },
          tracking: {
            title: 'Vollständige Rückverfolgbarkeit',
            description: 'Echtzeit-Verfolgung vom Abflughafen bis zur Zustellung'
          }
        },
        services: [
          'Express-Luftfracht (24h/48h/72h)',
          'Transport von verderblichen Waren',
          'Eilpakete und Dokumente',
          'Wertvolle Güter',
          'Pharmazeutischer Transport',
          'Industrielle Ersatzteile',
          'Internationaler E-Commerce',
          'Luftkonsolidierung und Sammelladung'
        ],
        timelines: {
          title: 'Zeitpläne und Ziele',
          express24: 'Express 24h',
          express48: 'Express 48h',
          express72: 'Express 72h',
          standard: 'Standard',
          zones: {
            europe: 'Europa, Nordamerika',
            asia: 'Asien, Naher Osten',
            southAmerica: 'Südamerika, Ozeanien',
            africa: 'Afrika, spezielle Ziele'
          },
          destinations: {
            title: 'Hauptziele',
            list: [
              'Über 200 globale Ziele',
              'Partnerschaften mit großen Fluggesellschaften',
              'Zugang zu spezialisierten Frachtflughäfen',
              'Tür-zu-Tür-Service verfügbar'
            ]
          }
        }
      },
      road: {
        title: 'Straßentransport',
        subtitle: 'Zuverlässige und effiziente Straßentransport-Lösungen für alle Ihre logistischen Bedürfnisse in Europa und darüber hinaus',
        quote: 'Angebot Anfordern',
        contact: 'Kontaktieren Sie Uns',
        freeQuote: 'Kostenloses Angebot',
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
        services: [
          'Allgemeiner Gütertransport',
          'Express-Lieferung (24h/48h)',
          'Fahrzeugtransport',
          'Professioneller Umzug',
          'Kühlschranktransport',
          'Gefahrgut (ADR)',
          'Ausnahmegenehmigungen',
          'Stadtverteilung'
        ],
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
            list: [
              'Frankreich (Festland)',
              'Europäische Union',
              'Nordafrika',
              'Osteuropa'
            ]
          }
        }
      },
      maritime: {
        title: 'Seetransport',
        subtitle: 'Wirtschaftliche und zuverlässige Seefracht-Lösungen für Ihre internationalen Sendungen aller Volumina',
        quote: 'Angebot Anfordern',
        contact: 'Kontaktieren Sie Uns',
        freeQuote: 'Kostenloses Angebot',
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
        services: [
          'FCL-Container (Full Container Load)',
          'LCL-Sammelladung (Less than Container Load)',
          'Kühlcontainer',
          'Fahrzeugtransport (RoRo)',
          'Schüttgut',
          'Industrieprojekte',
          'Spezialcontainer (Open Top, Flat Rack)',
          'Multimodaler Transport See/Straße/Schiene'
        ],
        routes: [
          {
            from: "Le Havre",
            to: "New York", 
            duration: "7-10 Tage"
          },
          {
            from: "Marseille",
            to: "Casablanca",
            duration: "2-3 Tage"
          },
          {
            from: "Antwerpen", 
            to: "Shanghai",
            duration: "25-30 Tage"
          },
          {
            from: "Rotterdam",
            to: "Dubai", 
            duration: "12-15 Tage"
          }
        ],
        containers: {
          title: 'Container-Typen',
          list: [
            '20\' Standard (33 m³)',
            '40\' Standard (67 m³)',
            '40\' High Cube (76 m³)',
            'Spezialcontainer auf Anfrage'
          ]
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
      contact: 'Contatto',
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
        services: [
          'Trasporto aereo express (24h/48h/72h)',
          'Trasporto di merci deperibili',
          'Pacchi urgenti e documenti',
          'Merci di valore',
          'Trasporto farmaceutico',
          'Ricambi industriali',
          'E-commerce internazionale',
          'Consolidamento e raggruppamento aereo'
        ],
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
            list: [
              'Oltre 200 destinazioni globali',
              'Partnership con le principali compagnie aeree',
              'Accesso ad aeroporti cargo specializzati',
              'Servizio porta a porta disponibile'
            ]
          }
        }
      },
      road: {
        title: 'Trasporto Stradale',
        subtitle: 'Soluzioni di trasporto stradale affidabili ed efficienti per tutte le vostre esigenze logistiche in Europa e oltre',
        quote: 'Richiedi Preventivo',
        contact: 'Contattaci',
        freeQuote: 'Preventivo Gratuito',
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
        services: [
          'Trasporto di merci generali',
          'Consegna express (24h/48h)',
          'Trasporto di veicoli',
          'Traslochi professionali',
          'Trasporto refrigerato',
          'Merci pericolose (ADR)',
          'Convogli eccezionali',
          'Distribuzione urbana'
        ],
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
            list: [
              'Francia metropolitana',
              'Unione Europea',
              'Nord Africa',
              'Europa dell\'Est'
            ]
          }
        }
      },
      maritime: {
        title: 'Trasporto Marittimo',
        subtitle: 'Soluzioni di trasporto marittimo economiche e affidabili per le vostre spedizioni internazionali di tutti i volumi',
        quote: 'Richiedi Preventivo',
        contact: 'Contattaci',
        freeQuote: 'Preventivo Gratuito',
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
        services: [
          'Container FCL (Full Container Load)',
          'Raggruppamento LCL (Less than Container Load)',
          'Container refrigerati',
          'Trasporto di veicoli (RoRo)',
          'Merci alla rinfusa',
          'Progetti industriali',
          'Container speciali (Open Top, Flat Rack)',
          'Trasporto multimodale mare/strada/ferrovia'
        ],
        routes: [
          {
            from: "Le Havre",
            to: "New York", 
            duration: "7-10 giorni"
          },
          {
            from: "Marsiglia",
            to: "Casablanca",
            duration: "2-3 giorni"
          },
          {
            from: "Anversa", 
            to: "Shanghai",
            duration: "25-30 giorni"
          },
          {
            from: "Rotterdam",
            to: "Dubai", 
            duration: "12-15 giorni"
          }
        ],
        containers: {
          title: 'Tipi di container',
          list: [
            '20\' Standard (33 m³)',
            '40\' Standard (67 m³)',
            '40\' High Cube (76 m³)',
            'Container speciali su richiesta'
          ]
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
        services: [
          'Transporte aéreo expresso (24h/48h/72h)',
          'Transporte de mercadorias perecíveis',
          'Pacotes urgentes e documentos',
          'Mercadorias de valor',
          'Transporte farmacêutico',
          'Peças de reposição industriais',
          'E-commerce internacional',
          'Consolidação e grupagem aérea'
        ],
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
            list: [
              'Mais de 200 destinos globais',
              'Parcerias com as principais companhias aéreas',
              'Acesso a aeroportos cargo especializados',
              'Serviço porta a porta disponível'
            ]
          }
        }
      },
      road: {
        title: 'Transporte Rodoviário',
        subtitle: 'Soluções de transporte rodoviário confiáveis e eficientes para todas as suas necessidades logísticas na Europa e além',
        quote: 'Solicitar Orçamento',
        contact: 'Entre em Contato',
        freeQuote: 'Orçamento Gratuito',
        whyChoose: 'Por que escolher nosso transporte rodoviário?',
        servicesTitle: 'Nossos Serviços de Transporte Rodoviário',
        advantages: {
          speed: {
            title: 'Entrega Rápida',
            description: 'Tempos de entrega curtos graças à nossa rede rodoviária otimizada'
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
        services: [
          'Transporte de mercadorias gerais',
          'Entrega expressa (24h/48h)',
          'Transporte de veículos',
          'Mudanças profissionais',
          'Transporte refrigerado',
          'Mercadorias perigosas (ADR)',
          'Comboios excepcionais',
          'Distribuição urbana'
        ],
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
            list: [
              'França metropolitana',
              'União Europeia',
              'Norte da África',
              'Europa Oriental'
            ]
          }
        }
      },
      maritime: {
        title: 'Transporte Marítimo',
        subtitle: 'Soluções de transporte marítimo econômicas e confiáveis para suas remessas internacionais de todos os volumes',
        quote: 'Solicitar Orçamento',
        contact: 'Entre em Contato',
        freeQuote: 'Orçamento Gratuito',
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
        services: [
          'Contêineres FCL (Full Container Load)',
          'Grupagem LCL (Less than Container Load)',
          'Contêineres refrigerados',
          'Transporte de veículos (RoRo)',
          'Mercadorias a granel',
          'Projetos industriais',
          'Contêineres especiais (Open Top, Flat Rack)',
          'Transporte multimodal mar/rodovia/ferrovia'
        ],
        routes: [
          {
            from: "Le Havre",
            to: "Nova York", 
            duration: "7-10 dias"
          },
          {
            from: "Marselha",
            to: "Casablanca",
            duration: "2-3 dias"
          },
          {
            from: "Antuérpia", 
            to: "Xangai",
            duration: "25-30 dias"
          },
          {
            from: "Rotterdam",
            to: "Dubai", 
            duration: "12-15 dias"
          }
        ],
        containers: {
          title: 'Tipos de contêineres',
          list: [
            '20\' Padrão (33 m³)',
            '40\' Padrão (67 m³)',
            '40\' High Cube (76 m³)',
            'Contêineres especiais sob demanda'
          ]
        }
      }
    }
  }
};