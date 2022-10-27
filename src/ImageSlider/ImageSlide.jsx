import React from "react";
import "../ImageSlider/ImageSlide.css";
const ImageSlide = () => {
  var swiper = new swiper(".mySwiper", {
    navigation: {
      nextE1: ".swiper-next-button",
      prevE1: ".swiper-prew-button",
    },
    effect: "fade",
    loop: "infinite",
    pagination: {
      el: "swiper-pegination",
      type: "fraction",
    },
  });
  swiper.on("slideChange", function (sid) {
    document.body.setAttribute("data-sid", sid.realIndex);
  });
  return (
    <div className="center">
      <div className="rigth-side">
        <img className="bottle-bg" src="logo192.png" alt="" />
        <img className="bottle-img" src="logo512.png" alt="" />
      </div>
    </div>
  );
};

export default ImageSlide;
