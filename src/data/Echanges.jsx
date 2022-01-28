const echanges = [
  /*
  Dans la Trocquerie, il est possible de troquer:
  exemples d'objets
  types d'objets
  présentation troc
  Comment ça marche:
  */

  // Dans la Trocquerie, il est possible de troquer:
  // bloc_order 1

  {
    component: "article",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto flex items-center flex-col bg-gris_clair text-vert",
      clsBouton: "rounded-full bg-vert text-white px-6 py-2 text-sm",
      titre: "Dans la Trocquerie, il est possible de troquer:",
      description: "¡ Uniquement des objets en bon état !",
      description2: "",
      description3: "",
      url: "",
      bouton: false,
    },
  },

  // exemples d'objets
  // bloc_order 2

  {
    component: "product",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto  flex items-center flex-col bg-vert text-blanc",
      titre: "Les différents produits échangeables:",
      presentation: [
        {
          infos:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sapiente, fugiat ullam quam, dolore at animi excepturi eaque eligendi nostrum quod laboriosam, eius architecto repellat. Eos dicta iure assumenda eveniet?",
          src: "./assets/images/pexels-mathilde-langevin-10897821.jpg",
          alt: "Image représentant un produit que l'on peut trocquer",
        },
        {
          infos:
            "Excepturi eaque eligendi nostrum quod laboriosam, eius architecto repellat. fugiat ullam quam, dolore. Eos dicta iure assumenda eveniet?",
          src: "./assets/images/pexels-mark-vegera-1089425.jpg",
          alt: "Image représentant un produit que l'on peut trocquer",
        },
      ],
    },
  },

  // types d'objets
  // bloc_order 3

  {
    component: "objets",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto  flex items-center flex-col bg-gris_clair text-vert",
      categorie: [
        {
          id: 1,
          appartenance: "Vêtements",
          cible: "Femme ~ Homme ~ Enfant ~ Accessoire ~ Chaussures ...",
        },
        {
          id: 2,
          appartenance: "Maison",
          cible: "Petit mobilier ~ Vaisselle ~ Décoration ~ Puériculture ... ",
        },
        {
          id: 3,
          appartenance: "Culture & loisirs",
          cible:
            "Livre ~ Jeu ~ CD/K7 ~ vinyle ~ Jeu vidéo ~ Univers sport ... ",
        },
      ],
    },
  },
  // présentation troc
  // bloc_order 4

  {
    component: "categorie",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto  flex items-center flex-col bg-vert text-blanc",
      description:
        "La valeur des objets n'est pas la même pour tout le monde. La valeur du produit dans la Trocquerie est considérée différement de son prix d'achat. L'idée est de privilégier l'éthique et se détacher de la valeur monétaire et aussi sentimentale de ceux-ci.",
      titre: "Les échanges sont catégorisés par un système de gommettes:",
      gommettes: [
        {
          id: 1,
          color: "",
          src: "./assets/images/gommette-bleu.png",
          alt: "gommette bleu",
        },
        {
          id: 2,
          color: "",
          src: "./assets/images/gommette-rose.png",
          alt: "gommette rose",
        },
        {
          id: 3,
          color: "",
          src: "./assets/images/gommette-jaune.png",
          alt: "gommette jaune",
        },
        {
          id: 4,
          color: "",
          src: "./assets/images/gommette-vert.png",
          alt: "gommette vert",
        },
      ],
      infos: "Il est également possible de combiner des couleurs ",
      more: "(de nombreuses combinaisons possibles à retrouver en boutique)",
    },
  },
  // Comment ça marche:
  // bloc_order 5

  {
    component: "article",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto flex items-center flex-col bg-gris_clair text-vert",
      clsBouton: "rounded-full bg-vert text-white px-6 py-2 text-sm",
      titre: "Comment ça marche:",
      description:
        "Faire le tri chez soi. Venir à la boutique ou prendre rendez-vous. Amenez les pièces à échanger. Choisir les nouveaux articles. Repartir avec les produits choisis.",
      description2: "",
      description3: "",
      url: "",
      bouton: false,
    },
  },
];

export default echanges;
