const greet = () => {
  console.log("Я учу JavaScript!");
};

greet();

const image = document.getElementById("image");

const showNextImage = () => {
  return (image.src = "/assets/img/img_cat_next.jpg");
};

const showPrevImage = () => {
  return (image.src = "/assets/img/img_cat_prev.jpg");
};
