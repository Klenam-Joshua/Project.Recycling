import SortingImg from "../assets/images/recyclingGameBackground.jpeg";
import sortingGameAudio from "../assets/audios/sortingGameAudio.mp3";

export const games = [
  {
    name: "Rubbish Sorting",
    color: "#84BC42",
    bgImage: SortingImg,
    id: 1,
    items: {
      progress: 60,
      pointsEarned: 4,
    },
    levels: 3,
    bgAudio: sortingGameAudio,
  },
  {
    name: "E-waste Puzzle",
    color: "#fa0",
    items: {
      progress: 30,
      pointsEarned: 4,
    },
    levels: 4,

    id: 2,
  },
  {
    name: "Time Challenge",
    color: "blue",
    items: {
      progress: 49,
      pointsEarned: 8,
    },

    id: 3,
    levels: 2,
  },
];

// const games = [
//   {
//     name: "Rubbish Sorting",
//     image: DragAndDrop,
//     id: 1,
//   },
//   {
//     name: "E-waste Puzzle",
//     image: Epuzzle,
//     id: 2,
//   },
//   {
//     name: "Rubbish Sorting",
//     image: TimeTravel,
//     id: 3,
//   },
// ];
