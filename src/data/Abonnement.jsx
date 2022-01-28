const AbonnementData = [
  /*
  1 - formules d'abonnement
  2 - formulaire rdv
  */

  // 1 - formules d'abonnement
  // bloc_order 1
  {
    component: "abonnement",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto flex items-center flex-col bg-gris_clair text-vert",
      titre: "Abonnements",
      description:
        "Chaque abonnement est nominatif et individuel. Paiement en espèces ou par CB.",
      details: [
        {
          id: 1,
          detail: "Abonnement 1 jour",
          description1: "Pour les plus curieux.ses : 10 €",
          description2: "Échange 5 pièces maximum en 1 seule fois",
        },
        {
          id: 2,
          detail: "Abonnement 1 mois",
          description1: "Pour les testeur.euses : 15 €",
          description2: "Échange de 10 pièces maximum sur 1 mois",
        },
        {
          id: 3,
          detail: "Abonnement 1 an",
          description1: "Pour les engagé.es : 120 €",
          description2:
            "Échange illimité pendant une année tout au long de l'année : ateliers, lecture, offre spécifique, ...",
        },
        {
          id: 4,
          detail: "Abonnement solidaire* Prix libre",
          description1:
            "Prix libre choix de la durée et de la somme *bénéficiaires du RSA, étudiant.es, chomeur.ses, ...",
        },
      ],
    },
  },
  // 2 - formulaire rdv
  // bloc_order 2

  {
    component: "formulaire",
    data: {
      titre: "Prendre rendez-vous",
      nom: "",
      prenom: "",
      email: "",
      message: "",
      bouton: true,
    },
  },
];

export default AbonnementData;
