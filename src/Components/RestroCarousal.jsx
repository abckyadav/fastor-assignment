import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const RestroCarousal = () => {
  const resturantData = useSelector((state) => state.restaurants.resturantData);

  return <div></div>;
};
export default RestroCarousal;
