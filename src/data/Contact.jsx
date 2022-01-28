const contact = [
  /*
à propos du lieu 1
à propos du lieu 2
google map interactive
  infos de contact
  */

  // à propos du lieu 1

  // bloc_order 1
  {
    component: "articleImage",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto flex flex items-center flex-col bg-gris_clair text-vert",
      titre: "Un lieu de vie, d'échange et de mixité",
      src: "./assets/images/placeholder.png",
      alt: "photo",
      description:
        "Quartier d’accueil et d’échanges depuis des décennies, la rue Biesse est riche de ses habitant.es et de ses commerçant.es. La trocquerie permettra d'amorcer une nouvelle dynamique et manière innovante de consommer pour ses habitant.es et tous.tes les nantais.es.",
    },
  },
  // à propos du lieu 2
  // bloc_order 2

  {
    component: "objets",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto  flex items-center flex-col bg-vert text-blanc",
      categorie: [
        {
          id: 1,
          appartenance: "INITIATION AU TROC",
          cible: "pour les enfants, les entreprises, les associations, ...",
        },
        {
          id: 2,
          appartenance: "ÉVÉNEMENT TROC SPÉCIFIQUE",
          cible:
            "plantes, vinyles, vêtements de saison, vêtements enfant et puériculture, ...",
        },
        {
          id: 3,
          appartenance: "ACTIVITÉ POUR LES ABONNEMENTS 1 AN",
          cible: "lecture, troc d’une sélection unique, ...",
        },
        {
          id: 4,
          appartenance: "LIEU DE SERVICE",
          cible:
            "service de location d’appareil mutualisé (perceuse, appareil à raclette, boule à facettes) panier bio, service de conciergerie, ...",
        },
      ],
    },
  },
  // google map interactive

  {
    component: "map",
  },
  // infos de contact
  // bloc_order 3

  {
    component: "contact",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto  flex items-center flex-col bg-vert text-blanc",
      titre: "Contact",
      nom: "Agathe Violain",
      srcPhoneIcon: "./assets/icones/icon_phone.svg",
      telephone: "06 79 21 42 19",
      srcMailIcon: "./assets/icones/icon_mail.svg",
      mail: "latrocquerie@gmail.com",
      adresse: "23 rue Petite-Biesse - quartier île de Nantes",
      reseaux: [
        {
          src: "./assets/icones/instagram.svg",
          alt: "Instagram de la Trocquerie",
          url: "https://www.instagram.com/latrocquerie/",
          insta: "La Trocquerie",
        },
        {
          src: "./assets/icones/iconFacebook.svg",
          alt: "Facebook de la Trocquerie",
          url: "https://www.facebook.com/latrocquerie.nantes",
          facebook: "La Trocquerie",
        },
        {
          src: "./assets/icones/iconLinkedin.svg",
          alt: "LinkedIn de la Trocquerie",
          url: "https://www.linkedin.com/company/latrocquerie/",
          linkedin: "La Trocquerie",
        },
      ],
      titreHoraires: "Horaires d'ouverture",
      horaires: [
        { id: 1, horaire: "Mercredi 10h30 - 19h00" },
        { id: 2, horaire: "Jeudi 10h30 - 19h00" },
        { id: 3, horaire: "Vendredi 10h30 - 19h00" },
        { id: 4, horaire: "Samedi 10h30 - 19h00" },
      ],
    },
  },
];

export default contact;
