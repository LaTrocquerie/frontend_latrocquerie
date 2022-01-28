const concept = [
  /*
  1 - présentation concept
  2 - citation 1
  3 - cible client
  4 - citation 2
  5 - présentation fondatrice
  */

  // présentation du concept
  // bloc_order 1

  {
    component: "article",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto flex items-center flex-col bg-gris_clair text-vert",
      clsPara: "md:w-1/2",
      titre: "Concept",
      description:
        "Une boutique de seconde main, sur l’île de Nantes, qui s'auto renouvelle par les échanges grâce à un système d’abonnement à la journée, au mois ou à l’année.",
      description2:
        "L'idée est de réduire la surconsommation, faire des économies, développer la solidarité et le partage en adaptant le troc au monde d'aujourd'hui.",
      description3:
        "Ce magasin sans affichage de prix est ouvert à toutes et tous et espère ainsi générer la création d’une véritable mixité sociale. Ce concept s’adresse à chacun.e de manière égale et annule toute possibilité de stigmatisation : le lieu servant d’intermédiaire entre celui qui donne (qui ne sait pas à qui) et celui qui récupère (il ne sait pas qui a donné) tout en se détachant du web.",
      bouton: false,
    },
  },
  // bloc_order 2

  // 2 - citation 1
  {
    component: "concept",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto flex flex items-center flex-col bg-vert text-blanc",
      titre: "",
      description:
        "“Perçu comme un acte militant, le troc véhicule des valeurs fortes comme l’entraide, le partage, la convivialité, mais il contribue aussi à la lutte contre le gaspillage et la surconsommation.”",
    },
  },
  // 3 - cible client
  // bloc_order 3

  {
    component: "client",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto flex items-center flex-col bg-gris_clair text-vert",
      titre: "Pour qui ?",
      description:
        "Les familles. Les curieux.se. Les connaisseur.eusses du système D. Les petits budgets. Les consommateur.trices qui souhaitent consommer autrement. Les écolos. Les amateur.trices de seconde main. Les minimalistes.",
    },
  },
  // 4 - citation 2
  // bloc_order 4

  {
    component: "concept",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto flex flex items-center flex-col bg-vert text-blanc",
      titre: "",
      description:
        "“Selon le quinzième baromètre greenflex-ademe : 86 % des français aimeraient vivre demain dans une société où la consommation prend moins de place dans l’idée de consommer responsable.”",
    },
  },
  // 5 - présentation fondatrice
  // bloc_order 5

  {
    component: "articleImage",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto flex items-center flex-col bg-gris_clair text-vert",
      titre: "Porteuse de projet",
      src: "./assets/images/placeholder.png",
      alt: "photo",
      caption: "",
      description:
        "Je m’appelle Agathe Violain, j'ai 30 ans et j’habite à Nantes (vertavienne d'origine). Après plusieurs années en tant que chargée de communication chez Pick Up Production, je suis nouvellement entrepreneuse dans l’ESS afin de monter ce projet de trocquerie. Je chine depuis toujours, j’achète (presque) 100% seconde main et j’ai envie de proposer une nouvelle manière de « consommer » dans cet univers.",
    },
  },
];

export default concept;
