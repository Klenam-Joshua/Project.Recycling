import SortingImg from "../assets/images/recyclingGameBackground.jpeg";
import sortingGameAudio from "../assets/audios/sortingGameAudio.mp3";
import { EggShell, Box, CanDrink, PlasticBottle, Paper } from "./rubbishImages";

import CeramicPlate from "../assets/images/Ceramics.jpg";
import BananaPeel from "../assets/images/BananaPeel.png";
import AppleCore from "../assets/images/AppleCore.jpg";
import CoffeeGrounds from "../assets/images/CoffeeGround.png";
import GlassBottles from "../assets/images/GlassBottles.png";
import UsedTissue from "../assets/images/UsedTissue.png";

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

export const rubbishes = [
  {
    name: "Can Drink",
    type: "recycling",
    image: CanDrink,
  },
  {
    name: "Paper",
    image: Paper,
    type: "recycling",
  },
  {
    name: "Plastic Bottle",
    image: PlasticBottle,
    type: "recycling",
  },
  {
    name: "Egg Shell",
    type: "compost",
    image: EggShell,
  },
  {
    name: "Land Fill",
    type: "landfill",
    image: Box,
  },
];

export const level2Rubbishes = [
  // RECYCLING

  {
    name: "Plastic Bottle",
    image: PlasticBottle,
    type: "recycling",
  },

  // COMPOST
  {
    name: "Egg Shell",
    type: "compost",
    image: EggShell,
  },
  {
    name: "Banana Peel",
    type: "compost",
    image: BananaPeel,
  },
  {
    name: "Apple Core",
    type: "compost",
    image: AppleCore,
  },
  {
    name: "Coffee Grounds",
    type: "compost",
    image: CoffeeGrounds,
  },
  {
    name: "Can Drink",
    type: "recycling",
    image: CanDrink,
  },
  {
    name: "Paper",
    image: Paper,
    type: "recycling",
  },

  // LANDFILL
  {
    name: "Land Fill",
    type: "landfill",
    image: Box,
  },

  {
    name: "Ceramic Plate",
    type: "landfill",
    image: CeramicPlate,
  },
];

export const level3Rubbishes = [
  // RECYCLING
  {
    name: "Can Drink",
    type: "recycling",
    image: CanDrink,
  },
  {
    name: "Plastic Bottle",
    image: PlasticBottle,
    type: "recycling",
  },
  {
    name: "Paper",
    image: Paper,
    type: "recycling",
  },
  {
    name: "Glass Bottle",
    type: "recycling",
    image: UsedTissue,
  }, // NEW

  // COMPOST
  {
    name: "Banana Peel",
    type: "compost",
    image: BananaPeel,
  },
  {
    name: "Apple Core",
    type: "compost",
    image: AppleCore,
  },
  {
    name: "Coffee Grounds",
    type: "compost",
    image: CoffeeGrounds,
  },
  {
    name: "Egg Shell",
    type: "compost",
    image: EggShell,
  },

  // LANDFILL
  {
    name: "Land Fill",
    type: "landfill",
    image: Box,
  },
  {
    name: "Ceramic Plate",
    type: "landfill",
    image: CeramicPlate,
  },
  {
    name: "Used Tissue",
    type: "landfill",
    image: UsedTissue,
  }, // NEW
];
