export type Language = 'fr' | 'en' | 'es' | 'de' | 'it' | 'pt';

export interface Translations {
  nav: {
    home: string;
    tracking: string;
    services: string;
    about: string;
    contact: string;
  };
  home: {
    title: string;
    subtitle: string;
    trackButton: string;
    trackingCode: string;
    trackingPlaceholder: string;
    services: {
      road: {
        title: string;
        description: string;
      };
      air: {
        title: string;
        description: string;
      };
      maritime: {
        title: string;
        description: string;
      };
    };
  };
  tracking: {
    title: string;
    placeholder: string;
    search: string;
    notFound: string;
    status: {
      preparing: string;
      transit: string;
      customs: string;
      delivering: string;
      delivered: string;
    };
    details: {
      trackingNumber: string;
      type: string;
      currentLocation: string;
      status: string;
      history: string;
    };
  };
  services: {
    title: string;
    road: {
      title: string;
      description: string;
    };
    air: {
      title: string;
      description: string;
    };
    maritime: {
      title: string;
      description: string;
    };
  };
  about: {
    title: string;
    founded: string;
    mission: string;
    commitment: string;
  };
  contact: {
    title: string;
    email: string;
    name: string;
    message: string;
    send: string;
    success: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      home: "Accueil",
      tracking: "Suivi",
      services: "Services",
      about: "À propos",
      contact: "Contact"
    },
    home: {
      title: "Solutions logistiques fiables depuis 2007",
      subtitle: "LOGICY TRANSPORT assure des solutions logistiques fiables, rapides et sécurisées à travers le monde.",
      trackButton: "Suivre un envoi",
      trackingCode: "Code de suivi",
      trackingPlaceholder: "Entrez votre code de suivi",
      services: {
        road: {
          title: "Transport Routier",
          description: "Livraison rapide et sécurisée en Europe et au-delà, adaptée aux colis et véhicules."
        },
        air: {
          title: "Transport Aérien",
          description: "Acheminement express de cargaisons à l'international avec délais courts."
        },
        maritime: {
          title: "Transport Maritime",
          description: "Solutions économiques pour cargaisons volumineuses, véhicules et conteneurs."
        }
      }
    },
    tracking: {
      title: "Suivi de votre envoi",
      placeholder: "Entrez votre code de suivi",
      search: "Rechercher",
      notFound: "Aucun envoi trouvé avec ce code de suivi",
      status: {
        preparing: "En préparation",
        transit: "En transit",
        customs: "Douane",
        delivering: "Livraison en cours",
        delivered: "Livré"
      },
      details: {
        trackingNumber: "Numéro de suivi",
        type: "Type",
        currentLocation: "Lieu actuel",
        status: "Statut",
        history: "Historique"
      }
    },
    services: {
      title: "Nos Services",
      road: {
        title: "Transport Routier",
        description: "Livraison rapide et sécurisée en Europe et au-delà, adaptée aux colis et véhicules."
      },
      air: {
        title: "Transport Aérien",
        description: "Acheminement express de cargaisons à l'international avec délais courts."
      },
      maritime: {
        title: "Transport Maritime",
        description: "Solutions économiques pour cargaisons volumineuses, véhicules et conteneurs."
      }
    },
    about: {
      title: "À propos de LOGICY TRANSPORT",
      founded: "Fondée en 2007, LOGICY TRANSPORT est spécialisée dans le transport routier, aérien et maritime.",
      mission: "Notre mission : garantir sécurité, transparence et fiabilité dans le transport.",
      commitment: "Nos engagements : suivi en temps réel, équipe professionnelle, réseau mondial."
    },
    contact: {
      title: "Contactez-nous",
      email: "Email",
      name: "Nom",
      message: "Message",
      send: "Envoyer",
      success: "Message envoyé avec succès"
    }
  },
  en: {
    nav: {
      home: "Home",
      tracking: "Tracking",
      services: "Services",
      about: "About",
      contact: "Contact"
    },
    home: {
      title: "Reliable logistics solutions since 2007",
      subtitle: "LOGICY TRANSPORT provides reliable, fast and secure logistics solutions worldwide.",
      trackButton: "Track shipment",
      trackingCode: "Tracking code",
      trackingPlaceholder: "Enter your tracking code",
      services: {
        road: {
          title: "Road Transport",
          description: "Fast and secure delivery across Europe and beyond, suitable for packages and vehicles."
        },
        air: {
          title: "Air Transport",
          description: "Express international cargo transport with short lead times."
        },
        maritime: {
          title: "Maritime Transport",
          description: "Cost-effective solutions for bulky cargo, vehicles and containers."
        }
      }
    },
    tracking: {
      title: "Track your shipment",
      placeholder: "Enter your tracking code",
      search: "Search",
      notFound: "No shipment found with this tracking code",
      status: {
        preparing: "Preparing",
        transit: "In transit",
        customs: "Customs",
        delivering: "Out for delivery",
        delivered: "Delivered"
      },
      details: {
        trackingNumber: "Tracking number",
        type: "Type",
        currentLocation: "Current location",
        status: "Status",
        history: "History"
      }
    },
    services: {
      title: "Our Services",
      road: {
        title: "Road Transport",
        description: "Fast and secure delivery across Europe and beyond, suitable for packages and vehicles."
      },
      air: {
        title: "Air Transport",
        description: "Express international cargo transport with short lead times."
      },
      maritime: {
        title: "Maritime Transport",
        description: "Cost-effective solutions for bulky cargo, vehicles and containers."
      }
    },
    about: {
      title: "About LOGICY TRANSPORT",
      founded: "Founded in 2007, LOGICY TRANSPORT specializes in road, air and maritime transport.",
      mission: "Our mission: guarantee safety, transparency and reliability in transport.",
      commitment: "Our commitments: real-time tracking, professional team, global network."
    },
    contact: {
      title: "Contact us",
      email: "Email",
      name: "Name",
      message: "Message",
      send: "Send",
      success: "Message sent successfully"
    }
  },
  es: {
    nav: {
      home: "Inicio",
      tracking: "Seguimiento",
      services: "Servicios",
      about: "Acerca de",
      contact: "Contacto"
    },
    home: {
      title: "Soluciones logísticas confiables desde 2007",
      subtitle: "LOGICY TRANSPORT ofrece soluciones logísticas confiables, rápidas y seguras en todo el mundo.",
      trackButton: "Rastrear envío",
      trackingCode: "Código de seguimiento",
      trackingPlaceholder: "Ingrese su código de seguimiento",
      services: {
        road: {
          title: "Transporte Terrestre",
          description: "Entrega rápida y segura en Europa y más allá, adaptada para paquetes y vehículos."
        },
        air: {
          title: "Transporte Aéreo",
          description: "Transporte expreso de carga internacional con plazos cortos."
        },
        maritime: {
          title: "Transporte Marítimo",
          description: "Soluciones económicas para carga voluminosa, vehículos y contenedores."
        }
      }
    },
    tracking: {
      title: "Rastrear su envío",
      placeholder: "Ingrese su código de seguimiento",
      search: "Buscar",
      notFound: "No se encontró ningún envío con este código",
      status: {
        preparing: "Preparando",
        transit: "En tránsito",
        customs: "Aduanas",
        delivering: "En reparto",
        delivered: "Entregado"
      },
      details: {
        trackingNumber: "Número de seguimiento",
        type: "Tipo",
        currentLocation: "Ubicación actual",
        status: "Estado",
        history: "Historial"
      }
    },
    services: {
      title: "Nuestros Servicios",
      road: {
        title: "Transporte Terrestre",
        description: "Entrega rápida y segura en Europa y más allá, adaptada para paquetes y vehículos."
      },
      air: {
        title: "Transporte Aéreo",
        description: "Transporte expreso de carga internacional con plazos cortos."
      },
      maritime: {
        title: "Transporte Marítimo",
        description: "Soluciones económicas para carga voluminosa, vehículos y contenedores."
      }
    },
    about: {
      title: "Acerca de LOGICY TRANSPORT",
      founded: "Fundada en 2007, LOGICY TRANSPORT se especializa en transporte terrestre, aéreo y marítimo.",
      mission: "Nuestra misión: garantizar seguridad, transparencia y confiabilidad en el transporte.",
      commitment: "Nuestros compromisos: seguimiento en tiempo real, equipo profesional, red global."
    },
    contact: {
      title: "Contáctanos",
      email: "Email",
      name: "Nombre",
      message: "Mensaje",
      send: "Enviar",
      success: "Mensaje enviado exitosamente"
    }
  },
  de: {
    nav: {
      home: "Startseite",
      tracking: "Sendungsverfolgung",
      services: "Dienstleistungen",
      about: "Über uns",
      contact: "Kontakt"
    },
    home: {
      title: "Zuverlässige Logistiklösungen seit 2007",
      subtitle: "LOGICY TRANSPORT bietet zuverlässige, schnelle und sichere Logistiklösungen weltweit.",
      trackButton: "Sendung verfolgen",
      trackingCode: "Verfolgungscode",
      trackingPlaceholder: "Geben Sie Ihren Verfolgungscode ein",
      services: {
        road: {
          title: "Straßentransport",
          description: "Schnelle und sichere Lieferung in Europa und darüber hinaus, geeignet für Pakete und Fahrzeuge."
        },
        air: {
          title: "Lufttransport",
          description: "Express-Frachttransport international mit kurzen Lieferzeiten."
        },
        maritime: {
          title: "Seetransport",
          description: "Kostengünstige Lösungen für Volumenfracht, Fahrzeuge und Container."
        }
      }
    },
    tracking: {
      title: "Ihre Sendung verfolgen",
      placeholder: "Geben Sie Ihren Verfolgungscode ein",
      search: "Suchen",
      notFound: "Keine Sendung mit diesem Verfolgungscode gefunden",
      status: {
        preparing: "Vorbereitung",
        transit: "Unterwegs",
        customs: "Zoll",
        delivering: "Zustellung",
        delivered: "Zugestellt"
      },
      details: {
        trackingNumber: "Verfolgungsnummer",
        type: "Typ",
        currentLocation: "Aktueller Standort",
        status: "Status",
        history: "Verlauf"
      }
    },
    services: {
      title: "Unsere Dienstleistungen",
      road: {
        title: "Straßentransport",
        description: "Schnelle und sichere Lieferung in Europa und darüber hinaus, geeignet für Pakete und Fahrzeuge."
      },
      air: {
        title: "Lufttransport",
        description: "Express-Frachttransport international mit kurzen Lieferzeiten."
      },
      maritime: {
        title: "Seetransport",
        description: "Kostengünstige Lösungen für Volumenfracht, Fahrzeuge und Container."
      }
    },
    about: {
      title: "Über LOGICY TRANSPORT",
      founded: "Gegründet 2007, spezialisiert sich LOGICY TRANSPORT auf Straßen-, Luft- und Seetransport.",
      mission: "Unsere Mission: Sicherheit, Transparenz und Zuverlässigkeit im Transport gewährleisten.",
      commitment: "Unsere Verpflichtungen: Echtzeitverfolgung, professionelles Team, globales Netzwerk."
    },
    contact: {
      title: "Kontaktieren Sie uns",
      email: "E-Mail",
      name: "Name",
      message: "Nachricht",
      send: "Senden",
      success: "Nachricht erfolgreich gesendet"
    }
  },
  pt: {
    nav: {
      home: "Início",
      tracking: "Rastreamento",
      services: "Serviços",
      about: "Sobre",
      contact: "Contato"
    },
    home: {
      title: "Soluções logísticas confiáveis desde 2007",
      subtitle: "LOGICY TRANSPORT oferece soluções logísticas confiáveis, rápidas e seguras em todo o mundo.",
      trackButton: "Rastrear envio",
      trackingCode: "Código de rastreamento",
      trackingPlaceholder: "Digite seu código de rastreamento",
      services: {
        road: {
          title: "Transporte Rodoviário",
          description: "Entrega rápida e segura na Europa e além, adequada para pacotes e veículos."
        },
        air: {
          title: "Transporte Aéreo",
          description: "Transporte expresso de carga internacional com prazos curtos."
        },
        maritime: {
          title: "Transporte Marítimo",
          description: "Soluções econômicas para carga volumosa, veículos e contêineres."
        }
      }
    },
    tracking: {
      title: "Rastrear sua remessa",
      placeholder: "Digite seu código de rastreamento",
      search: "Pesquisar",
      notFound: "Nenhuma remessa encontrada com este código",
      status: {
        preparing: "Preparando",
        transit: "Em trânsito",
        customs: "Alfândega",
        delivering: "Saindo para entrega",
        delivered: "Entregue"
      },
      details: {
        trackingNumber: "Número de rastreamento",
        type: "Tipo",
        currentLocation: "Localização atual",
        status: "Status",
        history: "Histórico"
      }
    },
    services: {
      title: "Nossos Serviços",
      road: {
        title: "Transporte Rodoviário",
        description: "Entrega rápida e segura na Europa e além, adequada para pacotes e veículos."
      },
      air: {
        title: "Transporte Aéreo",
        description: "Transporte expresso de carga internacional com prazos curtos."
      },
      maritime: {
        title: "Transporte Marítimo",
        description: "Soluções econômicas para carga volumosa, veículos e contêineres."
      }
    },
    about: {
      title: "Sobre LOGICY TRANSPORT",
      founded: "Fundada em 2007, LOGICY TRANSPORT é especializada em transporte rodoviário, aéreo e marítimo.",
      mission: "Nossa missão: garantir segurança, transparência e confiabilidade no transporte.",
      commitment: "Nossos compromissos: rastreamento em tempo real, equipe profissional, rede global."
    },
    contact: {
      title: "Entre em contato",
      email: "Email",
      name: "Nome",
      message: "Mensagem",
      send: "Enviar",
      success: "Mensagem enviada com sucesso"
    }
  },
  it: {
    nav: {
      home: "Home",
      tracking: "Tracking",
      services: "Servizi",
      about: "Chi siamo",
      contact: "Contatti"
    },
    home: {
      title: "Soluzioni logistiche affidabili dal 2007",
      subtitle: "LOGICY TRANSPORT fornisce soluzioni logistiche affidabili, veloci e sicure in tutto il mondo.",
      trackButton: "Traccia spedizione",
      trackingCode: "Codice di tracciamento",
      trackingPlaceholder: "Inserisci il tuo codice di tracciamento",
      services: {
        road: {
          title: "Trasporto Stradale",
          description: "Consegna rapida e sicura in Europa e oltre, adatta per pacchi e veicoli."
        },
        air: {
          title: "Trasporto Aereo",
          description: "Trasporto espresso di merci internazionali con tempi brevi."
        },
        maritime: {
          title: "Trasporto Marittimo",
          description: "Soluzioni economiche per carichi voluminosi, veicoli e container."
        }
      }
    },
    tracking: {
      title: "Traccia la tua spedizione",
      placeholder: "Inserisci il tuo codice di tracciamento",
      search: "Cerca",
      notFound: "Nessuna spedizione trovata con questo codice",
      status: {
        preparing: "In preparazione",
        transit: "In transito",
        customs: "Dogana",
        delivering: "In consegna",
        delivered: "Consegnato"
      },
      details: {
        trackingNumber: "Numero di tracciamento",
        type: "Tipo",
        currentLocation: "Posizione attuale",
        status: "Stato",
        history: "Cronologia"
      }
    },
    services: {
      title: "I Nostri Servizi",
      road: {
        title: "Trasporto Stradale",
        description: "Consegna rapida e sicura in Europa e oltre, adatta per pacchi e veicoli."
      },
      air: {
        title: "Trasporto Aereo",
        description: "Trasporto espresso di merci internazionali con tempi brevi."
      },
      maritime: {
        title: "Trasporto Marittimo",
        description: "Soluzioni economiche per carichi voluminosi, veicoli e container."
      }
    },
    about: {
      title: "Chi è LOGICY TRANSPORT",
      founded: "Fondata nel 2007, LOGICY TRANSPORT è specializzata nel trasporto stradale, aereo e marittimo.",
      mission: "La nostra missione: garantire sicurezza, trasparenza e affidabilità nel trasporto.",
      commitment: "I nostri impegni: tracciamento in tempo reale, team professionale, rete globale."
    },
    contact: {
      title: "Contattaci",
      email: "Email",
      name: "Nome",
      message: "Messaggio",
      send: "Invia",
      success: "Messaggio inviato con successo"
    }
  }
};