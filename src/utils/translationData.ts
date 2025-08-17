import { Language } from '@/types/translations';

// Simplified, consistent and syntactically safe translations to fix build errors.
// This covers all keys currently used by the layout, header/footer and Contact page.
// You can extend freely later.
export const translationData: Record<Language, Record<string, any>> = {
  fr: {
    nav: {
      home: 'Accueil',
      tracking: 'Suivi',
      services: 'Services',
      about: 'À propos',
      contact: 'Contact',
      quote: 'Devis',
      zones: 'Zones de livraison'
    },
    about: {
      description: 'Leader dans le domaine du transport et de la logistique'
    },
    services: {
      title: 'Nos Services'
    },
    contact: {
      title: 'Contactez-nous',
      description: 'Notre équipe est à votre disposition pour répondre à vos questions',
      form: {
        title: 'Envoyez-nous un message',
        name: 'Nom complet',
        namePlaceholder: 'Votre nom complet',
        email: 'Adresse email',
        emailPlaceholder: 'votre.email@exemple.com',
        message: 'Message',
        messagePlaceholder: 'Décrivez votre demande...',
        send: 'Envoyer le message',
        success: {
          title: 'Message envoyé !',
          description: 'Nous vous répondrons dans les plus brefs délais.'
        },
        error: {
          title: "Erreur lors de l'envoi",
          description: 'Veuillez réessayer dans quelques instants.'
        }
      },
      info: {
        address: 'Adresse',
        phone: 'Téléphone',
        email: 'Email',
        hours: 'Horaires',
        schedule: 'Lun-Ven: 8h-18h\nSam: 9h-12h'
      },
      map: { title: 'Nous trouver' }
    },
    footer: {
      legal: {
        conditions: 'Conditions Générales',
        privacy: 'Politique de Confidentialité',
        mentions: 'Mentions Légales'
      }
    }
  },

  es: {
    nav: {
      home: 'Inicio',
      tracking: 'Seguimiento',
      services: 'Servicios',
      about: 'Acerca de',
      contact: 'Contacto',
      quote: 'Cotización',
      zones: 'Zonas de entrega'
    },
    about: {
      description: 'Líder en transporte y logística'
    },
    services: {
      title: 'Nuestros Servicios'
    },
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
        },
        error: {
          title: 'Error al enviar',
          description: 'Por favor, intente de nuevo en unos momentos.'
        }
      },
      info: {
        address: 'Dirección',
        phone: 'Teléfono',
        email: 'Email',
        hours: 'Horarios',
        schedule: 'Lun-Vie: 8h-18h\nSáb: 9h-12h'
      },
      map: { title: 'Encuéntranos' }
    },
    footer: {
      legal: {
        conditions: 'Condiciones Generales',
        privacy: 'Política de Privacidad',
        mentions: 'Aviso Legal'
      }
    }
  },

  de: {
    nav: {
      home: 'Startseite',
      tracking: 'Sendungsverfolgung',
      services: 'Dienstleistungen',
      about: 'Über uns',
      contact: 'Kontakt',
      quote: 'Angebot',
      zones: 'Lieferzonen'
    },
    about: {
      description: 'Marktführer für Transport und Logistik'
    },
    services: {
      title: 'Unsere Services'
    },
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
        },
        error: {
          title: 'Fehler beim Senden',
          description: 'Bitte versuchen Sie es in wenigen Augenblicken erneut.'
        }
      },
      info: {
        address: 'Adresse',
        phone: 'Telefon',
        email: 'E-Mail',
        hours: 'Öffnungszeiten',
        schedule: 'Mo-Fr: 8h-18h\nSa: 9h-12h'
      },
      map: { title: 'Finden Sie uns' }
    },
    footer: {
      legal: {
        conditions: 'Allgemeine Geschäftsbedingungen',
        privacy: 'Datenschutz',
        mentions: 'Impressum'
      }
    }
  },

  it: {
    nav: {
      home: 'Home',
      tracking: 'Tracciamento',
      services: 'Servizi',
      about: 'Chi siamo',
      contact: 'Contatti',
      quote: 'Preventivo',
      zones: 'Zone di consegna'
    },
    about: {
      description: 'Leader nel trasporto e logistica'
    },
    services: {
      title: 'I Nostri Servizi'
    },
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
        },
        error: {
          title: "Errore nell'invio",
          description: 'Per favore, riprovate tra qualche istante.'
        }
      },
      info: {
        address: 'Indirizzo',
        phone: 'Telefono',
        email: 'Email',
        hours: 'Orari',
        schedule: 'Lun-Ven: 8h-18h\nSab: 9h-12h'
      },
      map: { title: 'Trovateci' }
    },
    footer: {
      legal: {
        conditions: 'Condizioni Generali',
        privacy: 'Politica sulla Privacy',
        mentions: 'Note Legali'
      }
    }
  },

  pt: {
    nav: {
      home: 'Início',
      tracking: 'Rastreamento',
      services: 'Serviços',
      about: 'Sobre nós',
      contact: 'Contato',
      quote: 'Orçamento',
      zones: 'Zonas de entrega'
    },
    about: {
      description: 'Líder em transporte e logística'
    },
    services: {
      title: 'Nossos Serviços'
    },
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
        },
        error: {
          title: 'Erro ao enviar',
          description: 'Por favor, tente novamente em alguns instantes.'
        }
      },
      info: {
        address: 'Endereço',
        phone: 'Telefone',
        email: 'Email',
        hours: 'Horários',
        schedule: 'Seg-Sex: 8h-18h\nSáb: 9h-12h'
      },
      map: { title: 'Encontre-nos' }
    },
    footer: {
      legal: {
        conditions: 'Condições Gerais',
        privacy: 'Política de Privacidade',
        mentions: 'Menções Legais'
      }
    }
  }
};
