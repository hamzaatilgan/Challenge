const apiURL =
  "https://raw.githubusercontent.com/cuneydbolukoglu/challenge/main/challenge-carousel.json";
const slides = document.querySelector(".Carousel");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
const incircle = document.querySelector(".incircle");
let currentslide = 0;

console.log(slides);

axios.get(`${apiURL}`).then(
  (response) => {
    const respdata = response.data;

    console.log(respdata[2].imgUrl);
  },
  (error) => {
    console.log("Error : ", error);
  }
);
