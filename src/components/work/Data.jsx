import work1 from "../../assets/gym.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/meta2.png";
import work4 from "../../assets/search.png";
import work5 from "../../assets/todo.png";
import work6 from "../../assets/jobit.png";
import work7 from "../../assets/carrent.png";
import work8 from "../../assets/tripguide.png";
import work9 from "../../assets/portfolio.png";
import work10 from "../../assets/work10.png";
import work11 from "../../assets/work11.png";

export const projectData = [

  {
    id: 1,
    image: work11,
    title: "Movie App",
    category: "web",
    description:
   " I built a Movie App using Next.js and Tailwind CSS. Features include a search bar for movies, data from TMDb API, responsive UI, loading indicators, sorting and filtering options, and state management with Redux Toolkit",
    tech: ["NextJS","ReduxToolkit",'Tailwand'],
    link:'https://search-movie-app-pi.vercel.app'
  },
  {
    id: 2,
    image: work10,
    title: "Ecommerce Web",
    category: "web",
    description:
      "I built an e-commerce website using React and Firebase. It offers easy usability and uses Redux Toolkit for state management. Tailwind CSS is utilized for design implementation. ",
      tech: ["ReactJs","ReduxToolkit","ContextApi",'Tailwand','FireBase'],
      link:'https://ecommerce-website-ikramah.vercel.app'
  },
  {
    id: 3,
    image: work1,
    title: "Gym Exercise App",
    category: "web",
    description:
      "Create a user-friendly gym exercise app in React, powered by the Rapid API for exercise data and personalized routines, helping users achieve effective fitness goals",
    tech: ['Tailwand',"ReactJs",'Rest APIs'],
    link:'https://gym-exercise-app-with-api.netlify.app/'
  },
  {
    id: 4,
    image: work2,
    title: "Youtube Clone",
    category: "web",
    description:
      "YouTube clone using React, creating a user-friendly interface for a seamless viewing experience",
      tech:['Html','CSS','ReactJs','Rest APIs'],
      link:'https://youtube-clone-12.netlify.app/'
    },
  {
    id: 5,
    image: work3,
    title: "Meta Website ",
    category: "web",
    description:
      "Build a modern meta website design using React and Tailwind CSS, showcasing the power of these technologies for creating attractive and responsive user interfaces",
      tech:['Tailwand','React'],
      link:'https://meta-website-12.netlify.app/'

    
    },
    {
      id: 6,
      image: work9,
      title: "Portfolio Website",
      category: "design",
      description:
        " Develop a visually captivating portfolio website using React.js and Three.js to showcase projects with immersive 3D graphics and interactive elements.",
        tech:['Tailwand','ReactJs','ThreeJs'],
        link:'https://ikramah-portfolio.netlify.app'
      },
  {
    id: 7,
    image: work4,
    title: "Movie Search Website",
    category: "web",
    description:
      "Develop a movie search app with React, integrating the Rapid API for extensive movie data, enabling users to search and explore movie ratings, actors, and directors effortlessly.",
      tech:['Bootstrap','React'],
      link:'https://movie-website-11.netlify.app'

    },
  {
    id: 8,
    image: work5,
    title: "Todo App",
    category: "design",
    description:
      "Build a simple Todo app with React, featuring add, delete, and delete all functionality for managing tasks efficiently.",
      tech:['Html','CSS','ReactJs'],
      link:'https://todo-ikramah.netlify.app'
    },
    {
      id: 9,
      image: work6,
      title: "App Landing Page",
      category: "design",
      description:
        "Design a responsive mobile website using HTML, CSS, Bootstrap, and JavaScript, ensuring optimal user experience across various devices.",
        tech:['Html','CSS','Bootstrap','Javascript'],
        link:'https://mobile-website-ikramah.netlify.app'
      },
      {
        id: 10,
        image: work7,
        title: "Resturant Landing Page",
        category: "design",
        description:
          "Build a responsive resturant website using HTML, CSS, Bootstrap, and JavaScript, ensuring optimal user experience across various devices",
          tech:['Html','CSS','Bootstrap','Javascript'],
          link:'https://resturant-website-ikramah.netlify.app/'
        },
        {
          id: 11,
          image: work8,
          title: "Marketing Landing Page",
          category: "design",
          description:
            "Create a responsive Marketing website using HTML, CSS, Bootstrap, and JavaScript, ensuring optimal user experience across various devices.",
            tech:['Html','CSS','Bootstrap','Javascript'],
            link:'https://marketing-website-ikramah.netlify.app/'
          },
];

export const projectsNav = [
  { name: "all" },
  // { name: "web" },
  // // { name: "app" },
  // { name: "design" },
];
