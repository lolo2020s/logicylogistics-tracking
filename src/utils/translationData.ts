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
      title: 'LOGICY TRANSPORT',
      subtitle: 'Votre partenaire logistique de confiance',
      description: 'Solutions de transport et logistique sur mesure pour vos besoins professionnels',
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
      description: 'Découvrez notre gamme complète de solutions logistiques',
      road: {
        title: 'Transport Routier',
        description: 'Solutions de transport terrestre adaptées à vos besoins',
        features: [
          'Livraison express 24h/48h',
          'Transport de marchandises diverses',
          'Couverture nationale et européenne',
          'Suivi en temps réel'
        ]
      },
      air: {
        title: 'Transport Aérien',
        description: 'Expéditions rapides par voie aérienne',
        features: [
          'Livraison express internationale',
          'Transport de produits urgents',
          'Réseau mondial de partenaires',
          'Documentation douanière'
        ]
      },
      maritime: {
        title: 'Transport Maritime',
        description: 'Solutions économiques pour vos envois volumineux',
        features: [
          'Transport de conteneurs',
          'Fret maritime international',
          'Solutions groupage/complet',
          'Assurance marchandises'
        ]
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
        title: 'Nos Valeurs',
        reliability: 'Fiabilité',
        innovation: 'Innovation',
        quality: 'Qualité',
        service: 'Service client'
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
      title: 'LOGICY TRANSPORT',
      subtitle: 'Your trusted logistics partner',
      description: 'Customized transport and logistics solutions for your professional needs',
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
      description: 'Discover our complete range of logistics solutions',
      road: {
        title: 'Road Transport',
        description: 'Ground transport solutions adapted to your needs',
        features: [
          'Express delivery 24h/48h',
          'Various goods transport',
          'National and European coverage',
          'Real-time tracking'
        ]
      },
      air: {
        title: 'Air Transport',
        description: 'Fast shipments by air',
        features: [
          'International express delivery',
          'Urgent products transport',
          'Global network of partners',
          'Customs documentation'
        ]
      },
      maritime: {
        title: 'Maritime Transport',
        description: 'Economical solutions for your bulky shipments',
        features: [
          'Container transport',
          'International sea freight',
          'Groupage/full solutions',
          'Goods insurance'
        ]
      }
    },

    // Contact
    contact: {
      title: 'Contact us',
      description: 'Our team is available to answer your questions',
      form: {
        name: 'Full name',
        email: 'Email address',
        phone: 'Phone',
        subject: 'Subject',
        message: 'Message',
        send: 'Send message'
      },
      info: {
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        hours: 'Opening hours'
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
        title: 'Our Values',
        reliability: 'Reliability',
        innovation: 'Innovation',
        quality: 'Quality',
        service: 'Customer service'
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
      title: 'LOGICY TRANSPORT',
      subtitle: 'Su socio logístico de confianza',
      description: 'Soluciones de transporte y logística personalizadas para sus necesidades profesionales',
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
      description: 'Descubra nuestra gama completa de soluciones logísticas',
      road: {
        title: 'Transporte Terrestre',
        description: 'Soluciones de transporte terrestre adaptadas a sus necesidades',
        features: [
          'Entrega express 24h/48h',
          'Transporte de mercancías diversas',
          'Cobertura nacional y europea',
          'Seguimiento en tiempo real'
        ]
      },
      air: {
        title: 'Transporte Aéreo',
        description: 'Envíos rápidos por vía aérea',
        features: [
          'Entrega express internacional',
          'Transporte de productos urgentes',
          'Red mundial de socios',
          'Documentación aduanera'
        ]
      },
      maritime: {
        title: 'Transporte Marítimo',
        description: 'Soluciones económicas para sus envíos voluminosos',
        features: [
          'Transporte de contenedores',
          'Flete marítimo internacional',
          'Soluciones de grupaje/completo',
          'Seguro de mercancías'
        ]
      }
    },

    // Contact
    contact: {
      title: 'Contáctanos',
      description: 'Nuestro equipo está a su disposición para responder sus preguntas',
      form: {
        name: 'Nombre completo',
        email: 'Dirección de correo',
        phone: 'Teléfono',
        subject: 'Asunto',
        message: 'Mensaje',
        send: 'Enviar mensaje'
      },
      info: {
        address: 'Dirección',
        phone: 'Teléfono',
        email: 'Correo',
        hours: 'Horarios de atención'
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
        title: 'Nuestros Valores',
        reliability: 'Confiabilidad',
        innovation: 'Innovación',
        quality: 'Calidad',
        service: 'Servicio al cliente'
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
      title: 'LOGICY TRANSPORT',
      subtitle: 'Ihr vertrauensvoller Logistikpartner',
      description: 'Maßgeschneiderte Transport- und Logistiklösungen für Ihre geschäftlichen Anforderungen',
      cta: 'Unsere Dienstleistungen entdecken',
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
      description: 'Entdecken Sie unser komplettes Angebot an Logistiklösungen',
      road: {
        title: 'Straßentransport',
        description: 'An Ihre Bedürfnisse angepasste Landtransportlösungen',
        features: [
          'Express-Lieferung 24h/48h',
          'Transport verschiedener Waren',
          'Nationale und europäische Abdeckung',
          'Echtzeitverfolgung'
        ]
      },
      air: {
        title: 'Lufttransport',
        description: 'Schnelle Sendungen auf dem Luftweg',
        features: [
          'Internationale Express-Lieferung',
          'Transport dringender Produkte',
          'Weltweites Partnernetzwerk',
          'Zolldokumentation'
        ]
      },
      maritime: {
        title: 'Seetransport',
        description: 'Wirtschaftliche Lösungen für Ihre sperrigen Sendungen',
        features: [
          'Containertransport',
          'Internationale Seefracht',
          'Sammelgut/Vollladungslösungen',
          'Warenversicherung'
        ]
      }
    },

    // Contact
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
        title: 'Unsere Werte',
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
      title: 'LOGICY TRANSPORT',
      subtitle: 'Il vostro partner logistico di fiducia',
      description: 'Soluzioni di trasporto e logistica su misura per le vostre esigenze professionali',
      cta: 'Scopri i nostri servizi',
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
      description: 'Scopri la nostra gamma completa di soluzioni logistiche',
      road: {
        title: 'Trasporto Stradale',
        description: 'Soluzioni di trasporto terrestre adattate alle vostre esigenze',
        features: [
          'Consegna express 24h/48h',
          'Trasporto merci varie',
          'Copertura nazionale ed europea',
          'Tracciamento in tempo reale'
        ]
      },
      air: {
        title: 'Trasporto Aereo',
        description: 'Spedizioni rapide per via aerea',
        features: [
          'Consegna express internazionale',
          'Trasporto prodotti urgenti',
          'Rete mondiale di partner',
          'Documentazione doganale'
        ]
      },
      maritime: {
        title: 'Trasporto Marittimo',
        description: 'Soluzioni economiche per le vostre spedizioni voluminose',
        features: [
          'Trasporto container',
          'Trasporto marittimo internazionale',
          'Soluzioni groupage/completo',
          'Assicurazione merci'
        ]
      }
    },

    // Contact
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
        title: 'I Nostri Valori',
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
      title: 'LOGICY TRANSPORT',
      subtitle: 'Seu parceiro logístico de confiança',
      description: 'Soluções de transporte e logística personalizadas para suas necessidades profissionais',
      cta: 'Descubra nossos serviços',
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
      description: 'Descubra nossa gama completa de soluções logísticas',
      road: {
        title: 'Transporte Rodoviário',
        description: 'Soluções de transporte terrestre adaptadas às suas necessidades',
        features: [
          'Entrega expressa 24h/48h',
          'Transporte de mercadorias diversas',
          'Cobertura nacional e europeia',
          'Rastreamento em tempo real'
        ]
      },
      air: {
        title: 'Transporte Aéreo',
        description: 'Remessas rápidas por via aérea',
        features: [
          'Entrega expressa internacional',
          'Transporte de produtos urgentes',
          'Rede mundial de parceiros',
          'Documentação alfandegária'
        ]
      },
      maritime: {
        title: 'Transporte Marítimo',
        description: 'Soluções econômicas para suas remessas volumosas',
        features: [
          'Transporte de contêineres',
          'Frete marítimo internacional',
          'Soluções de groupage/completo',
          'Seguro de mercadorias'
        ]
      }
    },

    // Contact
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
        hours: 'Horário de funcionamento'
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
        title: 'Nossos Valores',
        reliability: 'Confiabilidade',
        innovation: 'Inovação',
        quality: 'Qualidade',
        service: 'Atendimento ao cliente'
      }
    }
  }
};