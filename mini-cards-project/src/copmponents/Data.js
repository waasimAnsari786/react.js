function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNum = getRandomInt(200, 210);

let cardData = [
  {
    cTitile: "cards",
    cLink: "https://picsum.photos/",
  },

  {
    cTitile: "cards",
    cLink: "https://picsum.photos/",
  },

  {
    cTitile: "cards",
    cLink: "https://picsum.photos/",
  },

  {
    cTitile: "cards",
    cLink: "https://picsum.photos/",
  },

  {
    cTitile: "cards",
    cLink: "https://picsum.photos/",
  },

  {
    cTitile: "cards",
    cLink: "https://picsum.photos/",
  },

  {
    cTitile: "cards",
    cLink: "https://picsum.photos/",
  },

  {
    cTitile: "cards",
    cLink: "https://picsum.photos/",
  },

  {
    cTitile: "cards",
    cLink: "https://picsum.photos/",
  },

  {
    cTitile: "cards",
    cLink: "https://picsum.photos/",
  },

  {
    cTitile: "cards",
    cLink: "https://picsum.photos/",
  },

  {
    cTitile: "cards",
    cLink: "https://picsum.photos/",
  },
];

cardData = cardData.map((card, index) => {
  return {
    ...card,

    cImg: `https://picsum.photos/${
      randomNum + Math.floor(Math.random() * cardData.length)
    }/300`,

    cName: `card ${index + 1}`,
  };
});

export default cardData;
