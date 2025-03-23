import { Languages } from "../components/reusables/Data/Language";

export const t = (word) => {
  const _lan = localStorage.getItem("lan") || "en";
  Languages[word].find((lan) => lan.language == _lan);
};
