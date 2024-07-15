import projectOne from "../assets/project-1.jpg";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Gcompet",
    image: projectOne,
    description: (
      <>
        <p>
          Une application de gestion d'évenement et de production de compétition pour les golfs
        </p>
      </>
    ),
    github: "https://github.com/teetom3/Gcompetmaquette",
    demo: "https://teetom.eu/login",
  },
  2: {
    title: "Garage PARROT",
    image: projectTwo,
    description: (
      <>
        <p>
          Un site internet vitrine pour la gestion d'un garage , avec dashboard , entierement responsive
        </p>
      </>
    ),
    github: "https://github.com/teetom3/Garage-VINCENT-PARROT",
    demo: "https://github.com/teetom3/Garage-VINCENT-PARROT",
  },
  3: {
    title: "DICE GAME",
    image: projectThree,
    description: (
      <>
        <p>
        Le jeu comprend 2 joueurs sur un seul et même écran. Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL). À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite.
        </p>
      </>
    ),
    github: "https://github.com/teetom3/dicegame",
    demo: "https://teetom3.github.io/dicegame/",
  },
};

export default projects;