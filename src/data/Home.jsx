const home = [
  // présentation concept, avec bouton
  // bloc_order 1

  {
    component: "article",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto flex items-center flex-col bg-gris_clair text-vert pb-8",
      clsBouton:
        "transition hover:bg-rose hover:text-vert active:-skew-y-6 active:translate-y-1 active:shadow-vert/40 shadow-[10px_10px_0px_0px] shadow-vert/50 bg-vert text-white px-6 py-2 ",
      titre: "Chaque objet a une histoire",
      description:
        "La Trocquerie est une boutique de seconde main sans affichage de prix, qui s’auto renouvelle par les échanges grâce à un système d’abonnement à la journée, au mois ou à l’année.",
      description2: "",
      description3: "",
      url: "/concept",
      bouton: true,
      boutonContenu: "En savoir plus",
    },
  },
  // présentation concept 2, avec bouton
  // bloc_order 2

  {
    component: "article",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto flex items-center flex-col bg-vert text-blanc pb-8",
      clsBouton:
        "transition hover:bg-rose hover:text-vert hover:border-rose active:-skew-y-6 active:translate-y-1 shadow-blanc/30 shadow-[10px_10px_0px_0px] active:shadow-blanc/20 bg-vert border-blanc border-2 text-blanc px-6 py-2 text-normal mt-5",
      titre: "Échangez vos objets dès maintenant",
      description: "",
      description2: "",
      description3: "",
      url: "/echanges",
      bouton: true,
      boutonContenu: "En savoir plus",
    },
  },
];

export default home;
