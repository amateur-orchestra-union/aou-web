// TODO move api from local
const posters = [
  "images/posters/2022.01 The Muse 1.jpg",
  "images/posters/2021.01 with.jpg",
  "images/posters/2020.07 La Lumiere.jpg",
  "images/posters/2020.01 Shall we dance.jpg",
  "images/posters/2019.07 Masterpiece 1.jpg",
  "images/posters/2019.01 All For You.jpg",
  "images/posters/2018.07 HIDDEN TREASURE.jpg",
  "images/posters/2018.01 Triumph.jpg",
  "images/posters/2017.07 천일야화 1.jpg",
  "images/posters/2017.01 Romance.jpg",
  "images/posters/2016.07 Opera Gala Concert.jpg",
  "images/posters/2016.01 인간.jpg",
  "images/posters/2015.07 한재만.jpg",
  "images/posters/2015.01 Miracle.jpg",
];

const updatePosters = () => {
  const postersRow = document.querySelector(".row");
  posters.forEach((poster) => {
    const col = document.createElement("div");
    col.className = "column";
    const image = document.createElement("img");
    image.src = poster;
    col.appendChild(image);
    postersRow.appendChild(col);
  });
};

window.addEventListener("load", function () {
  updatePosters();
});
