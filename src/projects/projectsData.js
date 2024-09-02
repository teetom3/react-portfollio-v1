import projectOne from "../assets/project-1.jpg";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";
import projectFour from "../assets/project-4.png";
import projectFive from "../assets/project-5.png";
import projectSix from "../assets/project-6.png";
import projectSeven from "../assets/project-7.png";
import projectEight from "../assets/project-8.png";
import projectNine from "../assets/project-9.png";
import projectDefault from "../assets/cool-background.png"

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
  4: {
    title: "Gestion Centre equestre",
    image: projectDefault,
    description: (
      <>
        <p>
        En colaboration avec un centre equestre je developpe actuellement en laravel une application pour permettre de faciliter la gestion des centre equestre , gestion des prestations , de la facturation , mais aussi les taches à effectuer .
        </p>
      </>
    ),
    github: "https://github.com/teetom3/centre-equestre",
    demo: "https://youtu.be/NmoiuKnnLaU",
  },
  5: {
    title: "App flutter to do list ",
    image: projectDefault,
    description: (
      <>
        <p>
        Une to do list app plutot simple afin de commencer à apprivoiser la technologie Flutter 
        </p>
      </>
    ),
    github: "https://github.com/teetom3/toDoApp",
    demo: "https://youtu.be/A_-UV0SC_lA",
  },
  6: {
    title: "Carte de score App Flutter",
    image: projectDefault,
    description: (
      <>
        <p>
        Une carte de score entierement modulable ce qui permet de laisser le crayon et le papier dans son sac et de remplir c'est score directement sur son Smartphone , app en cours de développement pour faciliter la vie du golfeur ! .
        </p>
      </>
    ),
    github: "https://github.com/teetom3/scorecardapp",
    demo: "https://youtu.be/AuNTiE6Qhcw",
  },
  7: {
    title: "E-commerce test",
    image: projectSeven,
    description: (
      <>
        <p>
        Un test de la technologie Symfony , demarrage d'un e commerce avec panel administrateur 
        </p>
      </>
    ),
    github: "https://github.com/teetom3/ecommerce",
    demo: "https://youtu.be/ZtOLa48sncM",
  },
  8: {
    title: "Resto app React node express",
    image: projectEight,
    description: (
      <>
        <p>
        Une app pour un restaurant permettant la gestion des reservations dans son restaurant avec un panel admin
        </p>
      </>
    ),
    github: "https://github.com/teetom3/Restoapp",
    demo: "https://youtu.be/ODkTV-TqR6s",
  },
  9: {
    title: "App professeur de golf booking app  React node express",
    image: projectNine,
    description: (
      <>
        <p>
       Une app de prise de rendez vous de cours de golf !
        </p>
      </>
    ),
    github: "https://github.com/teetom3/golf-app",
    demo: "https://youtu.be/4Sg2Dz_KTmI",
  }
};

export default projects;