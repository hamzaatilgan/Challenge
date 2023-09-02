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
    respdata.map((item) => {
      const img = document.createElement("img");
      img.src = item.imgUrl;
      slides.appendChild(img);
      const slidesimg = document.querySelector("img");
      /*slidesimg.setAttribute("class","closedslider");*/
      /*slidesimg.forEach(slide => slide.style.display = 'none');*/
    });
    // console.log(respdata[2].imgUrl);
  },
  (error) => {
    console.log("Error : ", error);
  }
);
