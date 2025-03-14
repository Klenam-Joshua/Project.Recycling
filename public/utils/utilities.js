import Languages from "../../src/Layout/Header/Languages/Languages";

const _lan = localStorage.getItem("lan");

const translate = (word) => {
  Languages[word].find((lan) => lan.language == _lan);
};
